"use client";

import { create } from "zustand";

const useTradeStore = create((set, get) => ({
  trades: [],
  addTrade: (trade) => set((state) => ({ trades: [...state.trades, trade] })),
}));

export default useTradeStore;
