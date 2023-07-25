"use client";

import React, { useEffect, useState } from "react";
import getReturn from "@/api/getReturn";
import getTopReturns from "../../../api/getTopReturns";
import TickerValue from "@/components/tickerValue";
import LoadingIndicator from "@/components/loadingIndicator";
import Tittle from "@/components/title";

export default function Top10Returns() {
  const [returnValues, setReturnValues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadReturns();
  }, []);

  async function loadReturns() {
    const top10Returns = await getTopReturns();
    const returnsData = [];
    const promises = [];

    if (top10Returns) {
      top10Returns.forEach((symbol) => {
        const promise = getReturn(symbol).then((value) => {
          returnsData.push({
            symbol,
            value,
          });
        });

        promises.push(promise);
      });
    }

    Promise.all(promises).then(() => {
      setReturnValues(returnsData);
      setIsLoading(false);
    });
  }

  return (
    <div>
      <Tittle>Trending</Tittle>

      {!isLoading ? (
        <div>
          {returnValues.map((el) => (
            <TickerValue
              symbol={el.symbol}
              value={el.value?.toFixed(2)}
              changePercentage={el.changePercentage}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <LoadingIndicator />
        </div>
      )}
    </div>
  );
}
