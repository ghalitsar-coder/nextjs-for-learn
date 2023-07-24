import React from "react";

const Home = () => {
  return (
    <div className="bg-green-300">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eos
        doloremque minus rerum! Pariatur aperiam error voluptates veritatis,
        odio explicabo recusandae officiis animi et sapiente ipsa! Neque ab
        asperiores maiores! z
      </p>
      {/* <ul className="grid gap-10 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] ">
        {[...Array(40).keys()].map((item) => (
          <li key={item} className="bg-green-300 grid ">
            <button className="bg-teal-300 rounded-md  p-3 hover:bg-teal-400">
              {" "}
              hello {++item}{" "}
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
