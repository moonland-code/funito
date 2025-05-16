import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await fetch('http://localhost/backend/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.success) {
      navigate('/dashboard');
    } else {
      alert(data.error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 max-w-sm mx-auto mt-20">
      <input className="border p-2" placeholder="نام کاربری" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="border p-2" type="password" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-green-600 text-white p-2 rounded">ورود</button>
    </form>
  );
}
