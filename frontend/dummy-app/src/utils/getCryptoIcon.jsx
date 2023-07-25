import colors from "colors";

export default function getCryptoIcon(crypto) {
  try {
    if (!crypto) return null;

    let backgroundColor = colors.gray.normal[300];
    let borderColor = colors.gray.normal[100];

    switch (crypto) {
      case "BTC":
        backgroundColor = colors.tertiary.gold[700];
        borderColor = colors.tertiary.gold[200];
        break;
      case "ETH":
        backgroundColor = colors.secondary.blue[400];
        borderColor = colors.secondary.blue[200];
        break;
      case "XRP":
        backgroundColor = colors.tertiary.orange[400];
        borderColor = colors.tertiary.orange[200];
        break;
      case "BCH":
        backgroundColor = colors.secondary.green[600];
        borderColor = colors.secondary.green[400];
        break;
      case "ADA":
        backgroundColor = colors.secondary.blue[600];
        borderColor = colors.secondary.blue[400];
        break;
      case "LTC":
        backgroundColor = colors.secondary.blue[300];
        borderColor = colors.secondary.blue[100];
        break;
      case "AVAX":
        backgroundColor = colors.secondary.red[400];
        borderColor = colors.secondary.red[200];
        break;
      case "BNB":
        backgroundColor = colors.tertiary.gold[400];
        borderColor = colors.tertiary.gold[200];
        break;
      case "TRX":
        backgroundColor = colors.secondary.red[400];
        borderColor = colors.secondary.red[200];
        break;
      case "DOT":
        backgroundColor = colors.secondary.pink[400];
        borderColor = colors.secondary.pink[200];

        break;
      default:
        return null;
    }

    return (
      <div
        className="flex items-center justify-center w-[25px] h-[25px] rounded-xl border"
        style={{
          backgroundColor,
          borderColor,
        }}
      >
        <img
          src={require(`../assets/icons/${crypto}.svg`).default.src}
          width={16}
          height={16}
        />
      </div>
    );
  } catch (error) {
    console.log("Failed to load icon:", error);
    return null;
  }
}
