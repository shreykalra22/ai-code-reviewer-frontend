import {
  FiHome,
  FiClock,
  FiLogOut,
  FiSettings,
} from "react-icons/fi";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const menu = [
  {
    icon: <FiHome />,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <FiClock />,
    label: "History",
    path: "/history",
  },
];

const Sidebar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950">

      <div className="border-b border-slate-800 p-8">

        <h1 className="text-2xl font-bold text-cyan-400">
          🤖 AI Reviewer
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Analytics Dashboard
        </p>

      </div>

      <nav className="mt-8 flex-1 px-4">

        {menu.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `mb-2 flex items-center gap-4 rounded-xl px-5 py-4 transition ${
                isActive
                  ? "bg-cyan-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>

            <span className="font-medium">
              {item.label}
            </span>
          </NavLink>
        ))}

      </nav>

      <div className="border-t border-slate-800 p-6">

        <div className="mb-4 rounded-xl bg-slate-900 p-4">

          <p className="text-xs text-slate-500">
            Logged in as
          </p>

          <h3 className="mt-2 font-semibold text-white">
            {user?.username}
          </h3>

          <p className="text-sm text-slate-400">
            {user?.email}
          </p>

        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          <FiLogOut />

          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;