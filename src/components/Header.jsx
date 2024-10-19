import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] py-[12px] flex justify-between  mx-auto items-center">
        <div className="text-3xl font-bold text-black">Tutort Academy</div>
        {toggle ? (
          <MdClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden "
          />
        ) : (
          <IoIosMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}
        <ul className=" hidden md:flex text-white gap-10 ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        {/* Responsive Menu */}
        <ul className={ `md:hidden text-white w-full h-screen duration-300 fixed bg-black top-[92px] ${toggle ? 'right-[0]' : 'right-[-100%]'}`}>
          <li className="p-5">
            <a href="#">Home</a>
          </li>
          <li className="p-5">
            <a href="#">Company</a>
          </li>
          <li className="p-5">
            <a href="#">Resources</a>
          </li>
          <li className="p-5">
            <a href="#">About</a>
          </li>
          <li className="p-5">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
