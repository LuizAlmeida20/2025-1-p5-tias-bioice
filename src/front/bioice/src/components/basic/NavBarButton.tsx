"use client";

import { ReactElement } from "react";
import { useRouter } from "next/navigation";

interface NavBarButtonProps {
  icon: ReactElement;
  label?: string;
  onClick: () => void;
  active: boolean;
  href?: string; 
}

function NavBarButton({ icon, label, onClick, active, href }: NavBarButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    onClick(); 
    if (href) {
      router.push(href); 
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-3 py-2 rounded w-full justify-start ${
        active ? "bg-green-100 text-green-700 font-medium" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label && <span>{label}</span>}
    </button>
  );
}

export default NavBarButton;
