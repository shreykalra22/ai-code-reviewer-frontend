import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/common/Hero/Hero";
import ReviewForm from "../components/review/ReviewForm";
import ReviewResult from "../components/review/ReviewResult";
import Footer from "../components/layout/Footer";

import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { loading, isAuthenticated } = useAuth();

  const [review, setReview] = useState(null);

  const reviewRef = useRef(null);

  useEffect(() => {
    if (review && reviewRef.current) {
      reviewRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [review]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="text-xl font-semibold text-white animate-pulse">
          Loading AI Code Reviewer...
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6">

        <Hero />

        <section className="py-16">
          <ReviewForm setReview={setReview} />
        </section>

        {review && (
          <section
            ref={reviewRef}
            className="pb-20 animate-in fade-in duration-500"
          >
            <ReviewResult review={review} />
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}

export default HomePage;