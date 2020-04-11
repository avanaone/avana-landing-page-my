export const formatCurrency = (number, currency) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  })
    .format(number)
    .replace(/.0{2}$/, "");

export default null;
