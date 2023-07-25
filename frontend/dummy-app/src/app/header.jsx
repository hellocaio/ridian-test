import { HiUser } from "react-icons/hi";
import { RiMailFill } from "react-icons/ri";
import { PiBellFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <div className="px-8 py-4 md:px-6 pr-0 lg:pr-14 lg:py-2 bg-gray-darkest-100">
      <div className="flex flex-row items-center">
        <div className="p-0 md:p-4 lg:p-8">
          <img src="ridian.svg" />
        </div>
        <div className="flex flex-1 flex-row items-center justify-end">
          <div className="hidden md:flex flex-row  items-center mr-8 bg-primary-600 text-primary-100 rounded-xl px-4 py-1">
            <div className="flex flex-row items-center text-primary-100 mr-2">
              USD
            </div>
            <div className="flex flex-row items-center text-pink-200">
              $ 720,338.48
            </div>
          </div>
          <div className="hidden md:flex flex-row justify-center  text-primary-600 items-center mr-4">
            <RiMailFill size={25} />
          </div>
          <div className="hidden md:flex flex-row justify-center  text-primary-600 items-center mr-8">
            <PiBellFill size={25} />
          </div>
          <div className="hidden md:flex flex-row items-center">
            <div className="p-2 bg-primary-600 rounded-2xl mr-2">
              <HiUser />
            </div>
            <div className="text-white">Carlos Kouri</div>
          </div>
          <div className="block lg:hidden items-center">
            <div className="ml-8">
              <GiHamburgerMenu size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
