"use client";

import Table from "@/components/table";
import Tittle from "@/components/title";
import useTradeStore from "@/store/useTradeStore";
import getCryptoIcon from "@/utils/getCryptoIcon";

export default function RecentActivity() {
  const trades = useTradeStore((state) => state.trades);

  return (
    <div className="p-8">
      <Tittle>Recent trades</Tittle>
      {trades.length > 0 ? (
        <Table
          tableHeader={["Crypto", "Quantity", "Value", "Date"]}
          data={trades}
          filterData={(key, value) => {
            console.log(key, value);
            if (key === "symbol") {
              return (
                <div className="flex flex-row items-center">
                  <div className="mr-2">{getCryptoIcon(value)}</div>
                  {value}
                </div>
              );
            }
            if (key === "price") {
              return (
                <div>
                  <span className="mr-2 text-gray-normal-300">USD</span>${" "}
                  {value}
                </div>
              );
            }
            return value;
          }}
        />
      ) : (
        <div className="flex flex-col items-center p-12 bg-gray-darkest-200 rounded-lg">
          <h3 className="text-gray-dark-100">You don't have any trades yet.</h3>
        </div>
      )}
    </div>
  );
}
