import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Alert } from "@heroui/alert";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost/backend/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        navigate("/login");
      } else {
        setError(data.message || "خطا در ثبت‌نام");
      }
    } catch (err) {
      setError("خطا در ارتباط با سرور");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col gap-6 max-w-sm mx-auto mt-20 p-6 rounded shadow-md border"
    >
      <h2 className="text-xl font-bold text-center">ثبت‌نام</h2>

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
      <Button color="primary" type="submit">
        ثبت‌نام
      </Button>
    </form>
  );
}
