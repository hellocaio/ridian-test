import getCryptoIcon from "@/utils/getCryptoIcon";
import { RxArrowUp, RxArrowDown } from "react-icons/rx";

export default function TickerValue({ symbol, value, changePercentage }) {
  return (
    <div className="flex flex-row p-3 bg-gray-darkest-100 mb-2">
      <div className="mr-2">{getCryptoIcon(symbol)}</div>
      <div>{symbol}</div>
      <div className="ml-2 text-gray-600">USD</div>
      <div className="flex flex-1 justify-end">
        {value > 0 ? (
          <>
            <RxArrowUp className="mr-1 relative top-[4px] text-green-400" />
            <span className="text-green-400 mr-2">{value}</span>
            <span className="text-green-400">
              {(Math.random() * 10).toFixed(2)}%
            </span>
          </>
        ) : (
          <>
            <RxArrowDown className="mr-1 relative top-[4px] text-red-400" />
            <span className="text-red-400 mr-2">{value}</span>
            <span className="text-red-400">
              {(Math.random() * 10).toFixed(2)}%
            </span>
          </>
        )}
      </div>
    </div>
  );
}
