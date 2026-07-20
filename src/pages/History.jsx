import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Trash2, Eye, Search } from "lucide-react";

import Sidebar from "../components/dashboard/Sidebar";
import ReviewModal from "../components/history/ReviewModal";

import {
  getReviews,
  deleteReview,
  getReview,
} from "../services/historyService";

function History() {
  const [reviews, setReviews] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedReview, setSelectedReview] = useState(null);

  const loadReviews = async () => {
    try {
      const data = await getReviews();
      setReviews(data);
      setFiltered(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load reviews.");
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  useEffect(() => {
    const value = search.toLowerCase();

    setFiltered(
      reviews.filter((review) =>
        review.language.toLowerCase().includes(value)
      )
    );
  }, [search, reviews]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Delete this review permanently?"
    );

    if (!confirmed) return;

    try {
      await deleteReview(id);

      toast.success("Review deleted successfully.");

      loadReviews();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete review.");
    }
  };

  const handleView = async (id) => {
    try {
      const data = await getReview(id);
      setSelectedReview(data);
    } catch (error) {
      console.error(error);
      toast.error("Unable to load review.");
    }
  };

  const scoreColor = (score) => {
    if (score >= 9) return "bg-green-600";
    if (score >= 7) return "bg-yellow-500";
    return "bg-red-600";
  };

  return (
    <>
      <Sidebar />

      <main className="ml-72 min-h-screen bg-slate-950 p-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10">

            <h1 className="text-5xl font-bold text-white">
              Review History
            </h1>

            <p className="mt-2 text-slate-400">
              Browse and manage all AI generated code reviews.
            </p>

          </div>

          <div className="relative mb-8">

            <Search
              size={20}
              className="absolute left-4 top-3.5 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search by programming language..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-500"
            />

          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">

            <table className="w-full">

              <thead className="border-b border-slate-800 bg-slate-950">

                <tr>

                  <th className="p-5 text-left text-slate-300">
                    Language
                  </th>

                  <th className="p-5 text-left text-slate-300">
                    Score
                  </th>

                  <th className="p-5 text-left text-slate-300">
                    Created
                  </th>

                  <th className="p-5 text-center text-slate-300">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {filtered.length === 0 ? (

                  <tr>

                    <td
                      colSpan={4}
                      className="py-16 text-center"
                    >

                      <div className="flex flex-col items-center">

                        <div className="text-6xl">
                          📂
                        </div>

                        <h2 className="mt-5 text-2xl font-semibold text-white">
                          No Reviews Found
                        </h2>

                        <p className="mt-2 text-slate-400">
                          Analyze your first program to see it here.
                        </p>

                      </div>

                    </td>

                  </tr>

                ) : (

                  filtered.map((review) => (

                    <tr
                      key={review.id}
                      className="border-t border-slate-800 transition hover:bg-slate-800/50"
                    >

                      <td className="p-5 font-medium text-white">
                        {review.language}
                      </td>

                      <td className="p-5">

                        <span
                          className={`rounded-full px-3 py-1 text-sm font-semibold text-white ${scoreColor(
                            review.score
                          )}`}
                        >
                          {review.score}/10
                        </span>

                      </td>

                      <td className="p-5 text-slate-300">

                        {new Date(review.created_at).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}

                      </td>

                      <td className="p-5">

                        <div className="flex justify-center gap-3">

                          <button
                            onClick={() => handleView(review.id)}
                            className="rounded-lg bg-blue-600 p-2 text-white transition hover:bg-blue-700"
                          >
                            <Eye size={18} />
                          </button>

                          <button
                            onClick={() => handleDelete(review.id)}
                            className="rounded-lg bg-red-600 p-2 text-white transition hover:bg-red-700"
                          >
                            <Trash2 size={18} />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </main>

      <ReviewModal
        review={selectedReview}
        onClose={() => setSelectedReview(null)}
      />
    </>
  );
}

export default History;