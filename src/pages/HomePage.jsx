import Navbar from "../components/layout/Navbar";
import ReviewForm from "../components/review/ReviewForm";
import ReviewResult from "../components/review/ReviewResult";
import Footer from "../components/layout/Footer";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <ReviewForm />
        <ReviewResult />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;