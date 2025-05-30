import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

// لوگوی ساده
const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const NavbarComponent = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit mr-2">فانیتو</p>
      </NavbarBrand>

      <NavbarContent justify="center" className="gap-6">
        <NavbarItem>
          <Link to="/">خانه</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/topics">موضوعات</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/about">درباره ما</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-4">
        {user ? (
          <>
              <NavbarItem className="text-gray-700">
                سلام، {user.username}
              </NavbarItem>
              <NavbarItem>
                <Button onClick={handleLogout} color="danger" variant="flat" style={{ marginRight: '10px' }}>
                  خروج
                </Button>

                <Button as={Link} to="/dashboard" color="success" variant="flat">
                  داشبورد
                </Button>   
              </NavbarItem>

          </>
        ) : (
          <>
            <NavbarItem>
              <Link to="/login">ورود</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} to="/register" color="primary" variant="flat">
                ثبت‌نام
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
