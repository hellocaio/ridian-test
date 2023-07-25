"use client";

import React, { useState } from "react";
import TradeDrawer from "@/app/trade/tradeDrawer";
import Button from "@/components/button";
import { RxArrowUp } from "react-icons/rx";
import { ToastContainer } from "react-toastify";
import Tittle from "@/components/title";

export default function YourWallet() {
  const [showTrade, setShowTrade] = useState(false);

  return (
    <>
      <div className="mb-8">
        <Tittle>Your wallet</Tittle>
        <div className="bg-gray-darkest-200 rounded-lg p-4 pb-8">
          <div className="flex flex-col justify-center items-center py-10">
            <div className="text-3xl font-bold mr-2 mb-1">$ 720,338.48</div>
            <div className="flex flex-row mb-4">
              <RxArrowUp
                className="text-green-400 relative top-[4px] mr-1"
                size={18}
              />
              <div className="text-base text-green-400">12.46%</div>
            </div>
            <div className="text-lg text-gray-normal-300">Total Balance</div>
          </div>

          <Button className="w-full bg-brand-gradient" onClick={() => setShowTrade(true)}>
            Trade
          </Button>
        </div>

        <TradeDrawer show={showTrade} onDismiss={() => setShowTrade(false)} />
      </div>
      <ToastContainer />
    </>
  );
}
