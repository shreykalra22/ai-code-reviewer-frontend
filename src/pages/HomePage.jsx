import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/common/Hero/Hero";
import ReviewForm from "../components/review/ReviewForm";
import ReviewResult from "../components/review/ReviewResult";
import Footer from "../components/layout/Footer";

function HomePage() {
  const [review, setReview] = useState(null);

  return (
    <>
      <Navbar />

      <main className="container">

        <Hero />

        <ReviewForm
          setReview={setReview}
        />

        <ReviewResult
          review={review}
        />

      </main>

      <Footer />
    </>
  );
}

export default HomePage;