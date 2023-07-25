import Navs from "./components/navs";
import RecentActivity from "./components/recentActivity";
import Top10Returns from "./components/top10returns";
import YourWallet from "./components/yourWallet";
import Box from "@/components/box";
import { BiBitcoin } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-3/4 pr-0 lg:pr-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-8 mb-8">
          <Box className="border-none">
            <h4 className="text-base text-gray-normal-300 mb-2">Total gain</h4>
            <h1 className="text-2xl lg:text-4xl">$ 530.8k</h1>
            <h4 className="text-base text-green-400">+14.72%</h4>
          </Box>
          <Box className="border-none">
            <h4 className="text-base text-gray-normal-300 mb-2">Investment</h4>
            <h1 className="text-2xl lg:text-4xl">$ 442k</h1>
            <div className="flex flex-row">
              <div className="text-gray-normal-300 mr-2">Today</div>
              <h4 className="text-base text-green-400">+7.38%</h4>
            </div>
          </Box>
          <Box className="border-none">
            <h4 className="text-base text-gray-normal-300 mb-2">Bitcoin</h4>

            <div>
              <div className="flex flex-row items-center">
                <BiBitcoin size={36} />
                <h1 className="text-2xl lg:text-4xl">42.704</h1>
              </div>

              <div className="flex flex-row">
                <div className="text-gray-normal-300 mr-2">USD</div>
                <h4 className="text-base text-green-400">$ 202K</h4>
              </div>
            </div>
          </Box>
          <Box className="border-none">
            <h4 className="text-base text-gray-normal-300 mb-2">Ethereum</h4>
            <div>
              <div className="flex flex-row items-center">
                <FaEthereum size={32} />
                <h1 className="text-2xl lg:text-4xl">78.216</h1>
              </div>
              <div className="flex flex-row">
                <div className="text-gray-normal-300 mr-2">USD</div>
                <h4 className="text-base text-green-400">$ 64K</h4>
              </div>
            </div>
          </Box>
        </div>
        <div className="bg-gray-darkest-300 mb-8 rounded-xl">
          <Navs />
        </div>
        <div className="bg-gray-darkest-300 rounded-xl">
          <RecentActivity />
        </div>
      </div>
      <div className="w-full lg:w-1/4 mt-8 lg:mt-0 p-8 bg-gray-darkest-300 rounded-xl">
        <YourWallet />
        <Top10Returns />
      </div>
    </div>
  );
}
