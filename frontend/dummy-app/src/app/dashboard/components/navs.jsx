"use client";

import React, { useEffect, useState } from "react";
import getNavs from "@/api/getNavs";
import moment from "moment";
import Chart from "@/components/chart";
import FilterButton from "@/components/filterButton";
import Tittle from "@/components/title";
import getCryptoIcon from "@/utils/getCryptoIcon";

export default function UserNavs() {
  const [navs, setNavs] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("1Y");

  useEffect(() => {
    loadNavs();
  }, []);

  useEffect(() => {
    filterChartData(filter);
  }, [filter]);

  async function loadNavs() {
    try {
      // Fetch Navs from API
      const data = await getNavs();
      setNavs(data);
      setChartData(data.dailyNavs);
      setIsLoading(false);
    } catch (e) {
      console.log("failed to load navs: ", e);
    }
  }

  function filterChartData(filter) {
    if (filter === "1Y") {
      setChartData(navs.dailyNavs);
    } else if (filter === "1M") {
      const startDate = moment(
        navs.dailyNavs[navs.dailyNavs.length - 1].datetime
      )
        .startOf("M")
        .startOf("D");
      const data = navs.dailyNavs.filter((nav) =>
        moment(nav.datetime).isAfter(startDate)
      );
      setChartData(data);
    } else if (filter === "7D") {
      const startDate = moment(
        navs.dailyNavs[navs.dailyNavs.length - 1].datetime
      )
        .subtract(7, "day")
        .startOf("hour");
      const data = navs.dailyNavs.filter((nav) =>
        moment(nav.datetime).isAfter(startDate)
      );
      setChartData(data);
    } else if (filter === "24H") {
      const startDate = moment(
        navs.hourlyNavs[navs.hourlyNavs.length - 1].datetime
      )
        .subtract(24, "hour")
        .startOf("hour");
      const data = navs.hourlyNavs.filter((nav) =>
        moment(nav.datetime).isAfter(startDate)
      );
      setChartData(data);
    }
  }

  return (
    <div className="p-8">
      <div className="flex flex-row">
        {getCryptoIcon("BTC")}
        <Tittle className="ml-4">Bitcoin</Tittle>
      </div>
      {!isLoading ? (
        <div className="relative">
          <div className="flex flex-row justify-end mb-4 absolute bottom-[-38px] md:relative">
            <FilterButton
              isActive={filter === "24H"}
              onClick={() => setFilter("24H")}
            >
              24H
            </FilterButton>
            <FilterButton
              isActive={filter === "7D"}
              onClick={() => setFilter("7D")}
            >
              7D
            </FilterButton>
            <FilterButton
              isActive={filter === "1M"}
              onClick={() => setFilter("1M")}
            >
              1M
            </FilterButton>
            <FilterButton
              isActive={filter === "1Y"}
              onClick={() => setFilter("1Y")}
            >
              1Y
            </FilterButton>
          </div>

          <Chart data={chartData} filter={filter} />
        </div>
      ) : (
        <div className="min-h-[400px]"></div>
      )}
    </div>
  );
}
