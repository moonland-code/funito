import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Input} from "@heroui/input";
import { Button } from "@heroui/button";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("لطفاً نام کاربری و رمز عبور را وارد کنید.");
      return;
    }

    try {
      const res = await fetch("http://localhost/backend/signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        alert("خطا در ارتباط با سرور");
        return;
      }

      const data = await res.json();

      if (data.success) {
        alert(data.message);
        navigate("/login");
      } else {
        alert(data.message || "خطایی رخ داده است.");
      }
    } catch (error) {
      console.error("خطا در ثبت‌نام:", error);
      alert("خطا در ثبت‌نام، لطفاً دوباره تلاش کنید.");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col gap-4 max-w-sm mx-auto mt-20 p-6  rounded shadow"
    >
          
      <Input  
        className=" p-2 rounded"
        placeholder="نام کاربری"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="username"
        required />
    
      <Input  
        className="p-2 rounded"
        type="password"
        placeholder="رمز عبور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="new-password"
        required
      />
      
      <Button color="success" type="submit">
      ثبت نام
      </Button>
     


    </form>
  );
}
