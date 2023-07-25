import getCryptoIcon from "@/utils/getCryptoIcon";

export default function Table({
  tableHeader = [],
  data = [],
  filterData = null,
}) {
  function row(rowData) {
    const row = [];

    const keys = Object.keys(rowData);
    keys.forEach((key, index) => {
      const align = getCellAlignment(index, keys.length);
      row.push(
        <td className={`bg-gray-darkest-100 p-4 ${align} text-white text-base`}>
          {filterData ? filterData(key, rowData[key]) : rowData[key]}
        </td>
      );
    });

    return <tr>{row}</tr>;
  }

  function getCellAlignment(index, length) {
    if (index === 0) return "text-left";
    else if (index === length - 1) return "text-right";
    return "text-center";
  }

  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-light-300 uppercase bg-gray-darkest-200">
          <tr>
            {tableHeader.map((title, index) => (
              <th
                className={`text-gray-normal-300 p-4 ${getCellAlignment(
                  index,
                  tableHeader.length
                )}`}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((rowData) => row(rowData))}</tbody>
      </table>
    </div>
  );
}
