import React from "react";

const Drawer = (props: any) => {
  return <DrawerV1 {...props} />;
};

const DrawerV1 = ({ children, isOpen, onOverlayClose, overlay }) => {
  return (
    <div className="overflow-hidden">
      <div
        onClick={onOverlayClose}
        className={
          ` fixed   z-[2]  inset-0  transform ease-in-out transition-opacity  ${
            overlay ? "bg-gray-900 bg-opacity-25 " : ""
          }` +
          (isOpen
            ? "  opacity-100 duration-500 translate-x-0  "
            : "delay-500 opacity-0 pointer-events-none  ")
        }
      />
      <section
        className={
          " w-screen z-[3] max-w-sm left-0 absolute bg-white top-0 bottom-0 shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        <div className="border-b-2 border-green-300">
          <h3 className="py-4 px-8">Sasaran</h3>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Drawer;

const DrawerV2 = ({ children, isOpen, setIsOpen }: any) => {
  return (
    <main className={` fixed ${isOpen ? " inset-0" : "bg-sky-600"} `}>
      <div
        onClick={() => setIsOpen(false)}
        className={
          " fixed inset-0 z-[2] bg-purple-900   transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-300 opacity-0 pointer-events-none ")
        }
      />
      <section
        className={
          " w-screen max-w-[300px] z-[3] left-0 absolute bg-orange-300 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen
            ? " translate-x-0  opacity-100"
            : "-translate-x-full opacity-0 [&>*]:delay-200 ")
        }
      >
        <article className="relative w-screen ">{children}</article>
      </section>
    </main>
  );
};
