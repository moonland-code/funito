import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Alert } from "@heroui/alert";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost/backend-funito/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success && data.user) {
        login(data.user);
        navigate("/dashboard");
      } else {
        setError(data.error || "خطایی رخ داد");
      }
    } catch (err) {
      setError("خطا در ارتباط با سرور");
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-blue-100 dark:from-gray-800 dark:to-black transition-colors duration-500">
  <form
    onSubmit={handleLogin}
    className="flex flex-col gap-6 w-full max-w-sm bg-white/80 dark:bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-blue-200 dark:border-white/20"
  >
    <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
      ورود
    </h2>

    {error && <Alert color="danger" title={error} />}

    <Input
      label="نام کاربری"
      placeholder="نام کاربری"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
    />
    <Input
      label="رمز عبور"
      type="password"
      placeholder="رمز عبور"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <Button color="success" type="submit">
      ورود
    </Button>
  </form>
</div>


  );
}
