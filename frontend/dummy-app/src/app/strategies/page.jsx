import Box from "@/components/Box";
import ActiveStrategy from "./components/activeStrategy";
import { Strategies } from "../../utils/getStrategies";
import Tittle from "@/components/title";
import YourWallet from "../dashboard/components/yourWallet";
import Top10Returns from "../dashboard/components/top10returns";

export default function Page() {
  const data = Strategies;

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-3/4 pr-0 lg:pr-8">
        <div className="p-8 bg-gray-darkest-300 mb-8 rounded-xl">
          <Tittle>Active strategies</Tittle>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
            {/* Strategy Box */}
            {data.map((strategy) => (
              <ActiveStrategy
                name={strategy.name}
                amount={strategy.amount}
                percentage={strategy.percentage}
                goingUp={Math.random() > 0.5 ? true : false}
              />
            ))}

            {/* Add New Strategy Box */}
            <Box>
              <div className="flex flex-1 flex-col justify-center items-center h-full py-4">
                <div className="w-[28px] h-[28px] border-primary-400 border-solid border-2 rounded-2xl mb-2 flex justify-center items-center text-2xl bold">
                  <span className="relative bottom-[2px]">+</span>
                </div>
                <div className="text-center">Start a new strategy</div>
              </div>
            </Box>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/4 mt-8 lg:mt-0 p-8 bg-gray-darkest-300 rounded-xl">
        <YourWallet />
        <Top10Returns />
      </div>
    </div>
  );
}
