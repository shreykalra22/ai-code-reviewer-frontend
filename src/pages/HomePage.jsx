import Navbar from "../components/layout/Navbar";
import Hero from "../components/common/Hero/Hero";
import ReviewForm from "../components/review/ReviewForm";
import ReviewResult from "../components/review/ReviewResult";
import Footer from "../components/layout/Footer";

function HomePage() {
  return (
    <div className="page">
      <Navbar />

      <main>
        <ReviewForm />
        <ReviewResult />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;