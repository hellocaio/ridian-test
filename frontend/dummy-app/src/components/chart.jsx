import {
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  Label,
} from "recharts";
import moment from "moment";
import colors from "colors";
import { RxArrowUp, RxArrowDown } from "react-icons/rx";

export default function Chart({ data, filter, color = colors.primary }) {
  const customizedAxisTick = ({ x, y, payload }) => {
    let formatDate = "";
    let sliceDate = 0;

    switch (filter) {
      case "YD":
        formatDate = "LLL";
        sliceDate = 6;
        break;
      case "1M":
        formatDate = "ll";
        sliceDate = 6;
        break;
      case "7D":
        formatDate = "L";
        sliceDate = 5;
        break;
      case "24H":
        formatDate = "LT";
        sliceDate = 8;
        break;
      default:
        formatDate = "ll";
        sliceDate = 6;
        break;
    }

    const dateTip = moment(payload.value)
      .format(formatDate)
      .slice(0, sliceDate)
      .replace(/[^a-zA-Z0-9 ]/g, "");

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          className="text-sm"
          x={23}
          y={0}
          dy={14}
          textAnchor="end"
          fill={colors.gray.normal[200]}
        >
          {dateTip}
        </text>
      </g>
    );
  };

  const customizedTooltip = (props) => {
    let payload = 0;
    let changePercentage = 0;

    if (props.payload?.length) {
      payload = props.payload[0]?.payload;
      changePercentage = (payload?.value / data[0].value - 1) * 100;
    } else {
      payload = data[data.length - 1];
      changePercentage =
        (data[data.length - 1]?.value / data[0].value - 1) * 100;
    }

    return (
      <div className="bg-transparent absolute right-[-160px] md:relative md:right-0">
        <div className="text-xl md:text-2xl lg:text-3xl">
          $ {payload?.value.toFixed(2)}
        </div>
        {changePercentage > 0 ? (
          <div className="flex fle-row items-center text-green-400 mt-1">
            <span className="mr-1">
              <RxArrowUp size={18} />
            </span>
            {changePercentage.toFixed(2)} %
          </div>
        ) : (
          <div className="flex fle-row items-center text-red-400 mt-1">
            <span className="mr-1">
              <RxArrowDown size={18} />
            </span>
            {changePercentage.toFixed(2)} %
          </div>
        )}
      </div>
    );
  };

  return (
    <ResponsiveContainer className="relative" width="100%" height={400}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color[100]} stopOpacity={0.5} />
            <stop offset="40%" stopColor={colors.black} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip
          position={{ x: 100, y: -60 }}
          wrapperStyle={{ visibility: "visible" }}
          content={customizedTooltip}
        />
        <XAxis dataKey="datetime" tick={customizedAxisTick} />
        <YAxis className="hidden md:block">
          <Label value="USD" offset={6} position="insideLeft" angle={-90} />
        </YAxis>
        <Area
          type="monotone"
          dataKey="value"
          stroke={color[400]}
          strokeWidth={4}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
