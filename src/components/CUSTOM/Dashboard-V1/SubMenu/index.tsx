import React from "react";
import MenuItem from "../MenuItem";
import { cn } from "@/lib/utils";

const SubMenu = ({ menu, showChild, forPadLeft }) => {
  if (!menu.children) return null;
  return (
    <div
      role="presentation"
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={cn(
        `transition wrapper delay-100 pl `,
        showChild ? `open opacity-1 ` : "opacity-0"
      )}
    >
      {/*  max-h-[200px] overflow-y-auto ghost_scrollbar for scrollable sidebar */}
      <ul className={cn(`expandable first:border-t grid  divide-y   `)}>
        {menu.children.map((subMenu, idx) => (
          <MenuItem
            key={subMenu.label}
            menu={subMenu}
            forPadLeft={forPadLeft}
          />
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
