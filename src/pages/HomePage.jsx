import { useEffect, useRef, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/common/Hero/Hero";
import ReviewForm from "../components/review/ReviewForm";
import ReviewResult from "../components/review/ReviewResult";
import Footer from "../components/layout/Footer";

function HomePage() {
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

  return (
    <>
      <Navbar />

      <main className="container">
        <Hero />

        <ReviewForm setReview={setReview} />

        <div ref={reviewRef}>
          <ReviewResult review={review} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;