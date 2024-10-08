"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themes } from "@/constants";
import { useTheme } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Theme() {
  const { mode, setMode } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative border-none bg-transparent shadow-none outline-none focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
        {mode === "light" ? (
          <Image
            src="/assets/icons/sun.svg"
            alt="sun"
            width={20}
            height={20}
            className="active-theme"
          />
        ) : (
          <Image
            src="/assets/icons/moon.svg"
            alt="moon"
            width={20}
            height={20}
            className="active-theme"
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute -right-12 mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
        {themes.map((item) => (
          <DropdownMenuItem
            key={item.value}
            className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
            onClick={() => {
              setMode(item.value);
              if (item.value !== "system") {
                localStorage.theme = item.value;
              } else {
                localStorage.removeItem("theme");
              }
            }}
          >
            <Image
              src={item.icon}
              alt={item.value}
              width={16}
              height={16}
              className={cn({ "active-theme": mode === item.value })}
            />
            <p
              className={cn("body-semibold text-light-500", {
                "text-primary-500": mode === item.value,
                "text-dark100_light900": mode !== item.value,
              })}
            >
              {item.label}
            </p>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
