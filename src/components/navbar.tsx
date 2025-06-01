import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "./ThemeIcons"; // آیکون‌ها را جدا کن یا از کد قبلی استفاده کن

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      isIconOnly
      variant="light"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-xl"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

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
    <Navbar maxWidth="full" isBordered>
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
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        {user ? (
          <>
        <NavbarItem className="text-black dark:text-white">
          سلام، {user.username}
        </NavbarItem>
            <NavbarItem>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    classNames={{
                      base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                      icon: "text-black/80",
                    }}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">ورود با</p>
                    <p className="font-semibold">{user.username}</p>
                  </DropdownItem>
                  <DropdownItem key="dashboard" color="success" as={Link} to="/dashboard">
                    داشبورد
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                    خروج
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
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
