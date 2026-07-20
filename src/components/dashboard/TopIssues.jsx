const TopIssues = ({ issues }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-2xl font-bold mb-6">
        🔥 Top Issues
      </h2>

      <div className="space-y-4">

        {issues.map((issue, index) => (
          <div
            key={index}
            className="rounded-lg bg-slate-800 p-4"
          >
            {issue}
          </div>
        ))}

      </div>

    </div>
  );
};

export default TopIssues;