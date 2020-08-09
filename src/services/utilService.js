

const priceFormatter = (price, noDecimal = false) => {
  const itemPrice = +price.toFixed(2);
  const priceDecimalCheck = price * 100;
  return (noDecimal) ? "$" + (price.toFixed()) : (priceDecimalCheck === itemPrice.toFixed() * 100)
    ? "$" + (price.toFixed() + ".00")
    : "$" + itemPrice;
};


export default { priceFormatter };