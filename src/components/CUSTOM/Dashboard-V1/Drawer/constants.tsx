import { AiFillAlipaySquare } from "react-icons/ai";
function addActiveElementProperty(arr, parentPath = "") {
  return arr.map((item) => {
    const newPath = parentPath + item.path;
    const newItem = { ...item, activeElement: newPath };
    if (item.children) {
      newItem.children = addActiveElementProperty(item.children, newPath);
    }
    return newItem;
  });
}

const arr = [
  {
    label: "Management A",
    path: "/dashboard/management-transaction",
    icon: <AiFillAlipaySquare />,
  },
  {
    label: "Management B",
    path: "/dashboard/management-user",
    icon: <AiFillAlipaySquare />,
    children: [
      {
        label: "Pembeli",
        path: "/customers",
        icon: <AiFillAlipaySquare />,
      },
      {
        label: "Pengawas",
        path: "/supervisor",
        icon: <AiFillAlipaySquare />,
      },
      {
        label: "Mitra",
        path: "/partner",
        icon: <AiFillAlipaySquare />,
        children: [
          {
            label: "Pengajuan Mitra",
            path: "/partner-submission",
            icon: <AiFillAlipaySquare />,
          },
          {
            label: "Daftar Mitra",
            path: "/partner-register",
            icon: <AiFillAlipaySquare />,
          },
        ],
      },
    ],
  },

  {
    label: "Management C",
    path: "/dashboard/management-category",
    icon: <AiFillAlipaySquare />,
    activeElement: "/dashboard/management-category",
  },
];

export const sidebarNavigations = addActiveElementProperty(arr);

// export const sidebarNavigations = arr.map((item) => {
//   if (item.children) {
//     let menus;
//     const subMenu = item.children.map(child =>{

//     })
//     // return { ...subMenu, activeElement: `${item.path}/${subMenu.path}` };
//   }
//   return { ...item, activeElement: item.path };
// });
