const RecentReviews = ({ reviews }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-2xl font-bold mb-6">
        📋 Recent Reviews
      </h2>

      <div className="space-y-4">

        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex justify-between rounded-lg bg-slate-800 p-4"
          >
            <span>{review.language}</span>

            <span className="font-bold text-cyan-400">
              {review.score}/10
            </span>
          </div>
        ))}

      </div>

    </div>
  );
};

export default RecentReviews;