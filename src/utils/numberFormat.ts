export const formatNumber = (value: number) => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  }).format(value);

  return formattedNumber;
};
