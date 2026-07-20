import { X } from "lucide-react";

function ReviewModal({ review, onClose }) {
  if (!review) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">

      <div className="h-[85vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-slate-900 p-8 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-3xl font-bold text-white">
              {review.language} Review
            </h2>

            <p className="mt-1 text-slate-400">
              Score: {review.score}/10
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg bg-slate-800 p-2 hover:bg-slate-700"
          >
            <X className="text-white" />
          </button>

        </div>

        <section className="mb-8">

          <h3 className="mb-3 text-xl font-semibold text-cyan-400">
            AI Review
          </h3>

          <div className="rounded-xl bg-slate-800 p-5 whitespace-pre-wrap text-slate-200">
            {review.review}
          </div>

        </section>

        <section>

          <h3 className="mb-3 text-xl font-semibold text-cyan-400">
            Improved Code
          </h3>

          <pre className="max-h-[320px] overflow-auto rounded-xl bg-black p-5 text-green-400">
            <code>
              {review.improved_code}
            </code>
          </pre>

        </section>

      </div>

    </div>
  );
}

export default ReviewModal;