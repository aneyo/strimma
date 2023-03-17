function formatNumber(number, sep, fixed = 0, fallback = "0") {
  if (isNaN(+number)) return fallback;

  let separator = sep;
  switch (separator) {
    case "dot":
      separator = ".";
      break;

    case "comma":
      separator = ",";
      break;

    case "space":
      separator = " ";
      break;

    case "none":
    default:
      separator = "";
      break;
  }

  const numberStr = (+number).toFixed(fixed);
  if (numberStr.length < 1) return fallback;

  const numberStrings = numberStr.split(".");

  let formattedNumber = numberStrings.length > 1 ? `.${numberStrings[1]}` : "";
  const numberLength = numberStrings[0].length;

  for (let i = 0; i < numberLength; i++) {
    if (i > 0 && i % 3 == 0) formattedNumber = separator + formattedNumber;
    formattedNumber = numberStrings[0][numberLength - i - 1] + formattedNumber;
  }

  return formattedNumber;
}
