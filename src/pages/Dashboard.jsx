import { useEffect, useState } from "react";
import {
  FiCode,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCard from "../components/dashboard/StatsCard";

import WeeklyChart from "../components/dashboard/WeeklyChart";
import LanguageChart from "../components/dashboard/LanguageChart";
import RecentReviews from "../components/dashboard/RecentReviews";
import TopIssues from "../components/dashboard/TopIssues";

import { getDashboardStats } from "../services/dashboardApi";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <h1 className="text-3xl font-bold text-cyan-400">
          Loading Dashboard...
        </h1>
      </div>
    );
  }

  return (
    <DashboardLayout>

      <DashboardHeader />

      {/* Stats */}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

        <StatsCard
          title="Total Reviews"
          value={stats.total_reviews}
          subtitle="Reviews analyzed"
          icon={<FiCode />}
        />

        <StatsCard
          title="Average Score"
          value={stats.average_score}
          subtitle="AI Quality Score"
          icon={<FiTrendingUp />}
        />

        <StatsCard
          title="Production Ready"
          value={`${stats.production_ready}%`}
          subtitle="Production Grade"
          icon={<FiAward />}
        />

      </div>

      {/* Charts */}

      <div className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-2">

        <WeeklyChart data={stats.weekly_reviews} />

        <LanguageChart data={stats.languages} />

      </div>

      {/* Bottom */}

      <div className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-2">

        <RecentReviews reviews={stats.recent_reviews} />

        <TopIssues issues={stats.top_issues} />

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;