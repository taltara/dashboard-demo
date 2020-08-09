import moment from "moment";

const getOrdersData = () => {
  var headers = new Headers();

  const clientId = "9b390ddee43f258b0503e063002b7f79";
  const clientPassword = "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";
  const storeName = "chf-avraham";
  const shopifyApi = "admin/api/2020-04/orders.json";

  headers.append(
    "Authorization",
    "Basic " + btoa(clientId + ":" + clientPassword)
  );
  //   fetch(`https://${clientId}:${clientPassword}@${storeName}.myshopify.com/${shopifyApi}`, { headers: headers });

  return fetch(
    `https://cors-anywhere.herokuapp.com/https://${storeName}.myshopify.com/${shopifyApi}`,
    { headers: headers }
  )
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result);
        return Promise.resolve(result);
      },
      (error) => {
        console.error(error);
      }
    );
};

const getOrdersDashboardInfo = ({ orders }, currency) => {
  console.log(orders);
  let totalSales = {};
  let totalSalesNum = 0;
  let topSoldItems = {};
  const priceField = currency === "usd" ? "total_price_usd" : "total_price";
  orders.forEach((order, index) => {
    const date = moment(order.processed_at).format("DD/MM");

    if (totalSales[date]) {
      totalSales[date] += +order[priceField];
    } else totalSales[date] = +order[priceField];

    order.line_items.forEach((item) => {
      if (topSoldItems[item.name]) {
        topSoldItems[item.name].amount += 1;
      } else {
        topSoldItems[item.name] = {
          amount: 1,
          price: +item.price,
          vendor: item.vendor,
          inventory: item.fulfillable_quantity,
        };
      }
    });
  });

  const salesArr = Object.keys(totalSales);
  const topItemArr = Object.keys(topSoldItems);
  let salesFormatted = [];
  let topItemFormatted = [];

  salesArr.forEach((sale) => {
    salesFormatted.push({ x: sale, y: totalSales[sale] });
    totalSalesNum += totalSales[sale];
  });

  topItemArr.forEach((item) => {
    topItemFormatted.push({ name: item, ...topSoldItems[item] });
  });
  return {
    totalSales: { id: "Sales", data: salesFormatted, total: totalSalesNum },
    topSoldItems: { id: "Top Sold", data: topItemFormatted },
  };
};

export default {
  getOrdersData,
  getOrdersDashboardInfo,
};
