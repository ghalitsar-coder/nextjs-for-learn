"use client";

import React, { useCallback, useMemo, useState } from "react";
import Drawer from "./Drawer";
import { sidebarNavigations } from "./Drawer/constants";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import MenuItem from "./MenuItem";
const DashboardV1 = ({ isOpen, onClickOverlayClose }) => {
  return (
    <Drawer
      // noOverlayClose
      overlay
      isOpen={isOpen}
      onOverlayClose={onClickOverlayClose}
    >
      <ul className="grid divide-y ">
        {sidebarNavigations.map((menu) => (
          <MenuItem key={menu.label} menu={menu} />
        ))}
      </ul>
    </Drawer>
  );
};

export default DashboardV1;

// const SubMenuChild = (props) => {
//   const { menu, showChild } = props;
//   return (
//     <div
//       role="presentation"
//       onClick={(e) => {
//         e.stopPropagation();
//       }}
//       className={`transition wrapper delay-100 ${
//         showChild ? `open opacity-1 ` : "opacity-0"
//       }  `}
//     >
//       <ul className={`expandable grid gap-y-2 divide-y `}>
//         {menu?.children?.map((subMenu) => (
//           <li key={subMenu.label}>
//             <div
//               onClick={(e) => setShowChild((prev) => !prev)}
//               className="flex items-center py-3 px-4 gap-x-2"
//             >
//               <span>{subMenu?.icon}</span>
//               <h3>{subMenu?.label}</h3>
//             </div>
//             <SubMenuChild menu={subMenu} showChild={showChild} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
