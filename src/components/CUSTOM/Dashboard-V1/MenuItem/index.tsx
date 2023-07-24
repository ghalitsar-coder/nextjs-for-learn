import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import SubMenu from "../SubMenu";

const MenuItem = ({ menu, forPadLeft }) => {
  const [showChild, setShowChild] = useState(false);
  const router = useRouter();

  const pathname = usePathname();
  const multipleBySixData = useMemo(() => {
    return {
      1: "pl-6",
      2: "pl-12",
      3: "pl-18",
      4: "pl-24",
      5: "pl-30",
      6: "pl-36",
      7: "pl-42",
      8: "pl-48",
      9: "pl-54",
      10: "pl-60",
    };
  }, []);
  const handleToggleSubMenu = (e) => {
    e.stopPropagation();
    if (!menu.children) {
      // If the menu item doesn't have children, navigate to its path
      router.push(menu.activeElement);
    } else {
      setShowChild((prev) => !prev);
    }
  };

  return (
    <li>
      <div
        onClick={handleToggleSubMenu}
        className={cn(
          "flex items-center  px-6 py-4 cursor-pointer sticky top-0 canda  bg-opacity-50 hover:bg-slate-100  ",
          pathname === menu.activeElement ? "bg-green-300" : ""
        )}
      >
        <div
          className={cn(
            `flex  items-center gap-x-2`,
            forPadLeft ? multipleBySixData[forPadLeft] : "pl-0"
          )}
        >
          <span>{menu.icon}</span>
          <h3>{menu.label}</h3>
        </div>
      </div>
      {menu.children && (
        <SubMenu
          menu={menu}
          showChild={showChild}
          forPadLeft={forPadLeft ? ++forPadLeft : 1}
        />
      )}
    </li>
  );
};

export default MenuItem;
