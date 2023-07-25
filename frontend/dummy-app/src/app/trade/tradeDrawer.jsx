"use client";

import React, { useState } from "react";
import Button from "@/components/button";
import Input from "@/components/input";
import Label from "@/components/label";
import placeTrade from "@/api/placeTrade";
import useTradeStore from "@/store/useTradeStore";
import { toast } from "react-toastify";
import moment from "moment";

export default function TradeDrawer({ show, onDismiss }) {
  const addTrade = useTradeStore((state) => state.addTrade);
  const [isTrading, setIsTrading] = useState(false);
  const [crypto, setCrypto] = useState("");
  const [cryptoError, setCryptoError] = useState(0);
  const [cryptoQuantity, setCryptoQuantity] = useState("");
  const [cryptoQuantityError, setCryptoQuantityError] = useState(0);

  async function onTradeSubmit() {
    try {
      if (isTrading) return;

      setIsTrading(true);
      const response = await placeTrade(crypto);
      console.log(response);
      if (response.status == 200) {
        if (response.data?.return === "Symbol not found") {
          setIsTrading(false);
          toast("This crypto doesn't exist", {
            className: "bg-red-700 text-white",
            hideProgressBar: true,
            autoClose: 2000,
            type: "error",
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        } else {
          addTrade({
            symbol: crypto,
            quantity: cryptoQuantity,
            price: parseFloat(response.data.price).toFixed(2),
            timestamp: moment(response.data.date, "DD/MM/YYYY HH:mm:ss")
              .format("LLL")
              .toString(),
          });
          setIsTrading(false);
          setTimeout(() => {
            onDismiss();
            setCrypto("");
            setCryptoQuantity("");
          }, 800);

          toast("Trade placed", {
            className: "bg-green-700 text-white",
            hideProgressBar: true,
            autoClose: 2000,
            type: "success",
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      } else {
        throw Error("Failed to place trade:", response.status);
      }
    } catch (error) {
      setIsTrading(false);
      toast("Trade failed, try again", {
        className: "bg-red-400 text-white",
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      console.log(error);
    }
  }

  const drawerClass =
    "fixed top-0 right-0 z-40 h-screen p-8 overflow-y-auto transition-transform bg-gray-darkest-200 w-screen md:w-[400px]";

  return (
    <div
      id="drawer-navigation"
      className={show ? drawerClass : `${drawerClass} translate-x-full`}
      tabindex="0"
      aria-labelledby="drawer-navigation-label"
    >
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-gray-normal-100 uppercase dark:text-gray-400"
      >
        Trade crypto
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        className="text-gray-400 bg-transparent hover:bg-gray-dark-300 hover:text-gray-normal-100 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={() => {
          if (!isTrading) onDismiss();
        }}
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 my-8 overflow-y-auto">
        <h2 className="text-center mb-8">
          Are you ready to trade your crypto?
        </h2>

        <div className="flex flex-col items-center my-12">
          <h1 className="text-6xl font-bold text-primary-400">
            {cryptoQuantity != "" ? parseFloat(cryptoQuantity).toFixed(2) : "0"}
          </h1>
          <div>
            <h3>
              <span className="text-gray-normal-300 mr-2">USD</span>{" "}
              {cryptoQuantity != ""
                ? (cryptoQuantity * 349.37).toFixed(2) // random exchange rate
                : "0"}
            </h3>
          </div>
        </div>

        <div className="mb-8">
          <Label for="crypto_symbol">Crypto</Label>
          <Input
            id="crypto_symbol"
            type="text"
            value={crypto}
            onChange={(value) => {
              setCrypto(value.toUpperCase().trim());
              if (cryptoError) setCryptoError(false);
            }}
            placeholder="i.e. BTC"
            maxLength={4}
            required
          />
          {cryptoError ? (
            <span className="text-red-400 text-sm">
              Please enter the crypto symbol
            </span>
          ) : null}
        </div>

        <div className="mb-8">
          <Label for="crypto_quantity">Quantity</Label>
          <Input
            type="number"
            id="crypto_quantity"
            placeholder="Quantity"
            value={cryptoQuantity}
            min="0"
            max="1000"
            step=".01"
            onChange={(value) => {
              if (value <= 10000 && `${value}`.length < 8)
                setCryptoQuantity(value);
              if (cryptoQuantityError) setCryptoQuantityError(false);
            }}
            disabled={isTrading}
            required
          />
          {cryptoQuantityError ? (
            <span className="text-red-400 text-sm">
              Please enter the crypto quantity
            </span>
          ) : null}
        </div>

        <Button
          className="w-full bg-brand-gradient"
          onClick={() => onTradeSubmit()}
          isLoading={isTrading}
          loadingText="Trading"
        >
          Confirm trade
        </Button>
      </div>
    </div>
  );
}
