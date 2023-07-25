import axios from "@/utils/axios";
import moment from "moment";

export default async () => {
  return await axios.get("/navs").then((response) => {
    try {
      const { data } = response;

      if (response.status !== 200) {
        throw Error("Server returned unexpected response: ", response.status);
      }

      // Clean up Daily Navs data
      let dailyNavs = [];
      for (const datatime in data.daily_navs[1]) {
        dailyNavs.push({
          datatime: moment(datatime),
          value: data.daily_navs[1][datatime],
        });
      }

      // Sort Daily Navs by ASC order (in date format)
      dailyNavs.sort((a, b) => a.datatime - b.datatime);

      // Convert Moment Dates to string
      dailyNavs = dailyNavs.map((el) => ({
        datetime: el.datatime.toString(),
        value: el.value,
      }));

      let hourlyNavs = [];

      for (const datatime in data.hourly_navs[1]) {
        hourlyNavs.push({
          datatime: moment(datatime, "YYYY-MM-dd HH"),
          value: data.hourly_navs[1][datatime],
        });
      }

      hourlyNavs.sort((a, b) => a.datatime - b.datatime);

      hourlyNavs = hourlyNavs.map((el) => ({
        datetime: el.datatime.toString(),
        value: el.value,
      }));

      return { dailyNavs, hourlyNavs };
    } catch (error) {
      console.log("Failed to fetch navs.", error);
    }
  });
};
