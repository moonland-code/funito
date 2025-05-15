"use client";

import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";
import clsx from "clsx";
import { link as linkStyles } from "@heroui/theme";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-default-200 bg-background px-6 py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left section: Logo & Name */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2" color="foreground">
            <Logo />
            <span className="font-bold text-inherit">Funito</span>
          </Link>
        </div>

        {/* Center section: Navigation links */}
        <div className="flex flex-wrap justify-center gap-4">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                linkStyles({ color: "foreground" }),
                "text-sm hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right section: Social icons */}
        <div className="flex items-center gap-4">
          <Link isExternal href={siteConfig.links.twitter} title="Twitter">
            <TwitterIcon className="text-default-500 hover:text-primary" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <DiscordIcon className="text-default-500 hover:text-primary" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500 hover:text-primary" />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-default-500">
        © {new Date().getFullYear()} Funito. All rights reserved.
      </div>
    </footer>
  );
};
