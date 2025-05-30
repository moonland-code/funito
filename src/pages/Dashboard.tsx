// src/pages/Dashboard.tsx
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-4">داشبورد</h1>
      {user ? (
        <p>خوش آمدی، {user.username}!</p>
      ) : (
        <p>برای دسترسی، لطفاً وارد شوید.</p>
      )}
    </div>
  );
};

export default Dashboard;
