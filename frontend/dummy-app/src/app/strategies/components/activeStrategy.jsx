import BoxGradient from "@/components/boxGradient";
import { RxArrowUp, RxArrowDown } from "react-icons/rx";
import { FaEllipsisH, FaChevronRight } from "react-icons/fa";

export default function ActiveStrategy({ name, amount, percentage, goingUp }) {
  return (
    <BoxGradient key={name}>
      <div>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-row items-center text-sm uppercase">
            {name} <FaChevronRight className="ml-2" />
          </div>
          <div className="text-xl font-bold mb-8">${amount}</div>
        </div>
        <div>
          <div className={"flex flex-row"}>
            <div className="flex flex-row flex-1">
              <span className="relative top-[2px] mr-1">
                {goingUp ? (
                  <RxArrowUp className="text-green-400" />
                ) : (
                  <RxArrowDown className="text-red-400" />
                )}
              </span>
              <span
                className={
                  goingUp ? "text-sm text-green-400" : "text-sm text-red-400"
                }
              >
                {percentage}% 24h
              </span>
            </div>
            <div>
              <FaEllipsisH />
            </div>
          </div>
        </div>
      </div>
    </BoxGradient>
  );
}
