"use client";

import Link from "next/link";
import { AiFillPieChart } from "react-icons/ai";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const nav = usePathname();
  const parentPath = nav.split("/")[1];

  function getButtonClass(btn) {
    if (btn === parentPath) {
      return "flex flex-row items-center mb-8 py-2 px-4 bg-brand-gradient";
    }

    return "flex flex-row items-center py-2 px-4 mb-8";
  }

  function getIconClass(btn) {
    if (btn === parentPath) {
      return "text-white-400  mr-2";
    }

    return "text-primary-400 mr-2";
  }

  return (
    <div className="w-[240px] bg-gray-darkest-300 hidden lg:block">
      <div className="flex flex-col py-8">
        <Link className={getButtonClass("")} href="/">
          <AiFillPieChart className={getIconClass("")} size={25} />
          Dashboard
        </Link>
        <Link className={getButtonClass("strategies")} href="/strategies">
          <BsFillClipboard2DataFill
            className={getIconClass("strategies")}
            size={25}
          />
          Strategies
        </Link>
      </div>
    </div>
  );
}
