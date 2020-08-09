import React, { useState, useEffect } from "react";

import Loader from "../components/layout/Loader";
import dashboardService from "../services/dashboardService";
import LineStat from "../components/dashboard/LineStat";
import TableStat from "../components/TableStat";

const Dashboard = () => {
  const { getOrdersData, getOrdersDashboardInfo } = dashboardService;

  const [currency, setCurrency] = useState("usd");
  const [statsInfo, setStatsInfo] = useState({ loading: true });

  useEffect(() => {
    dashboardService.getOrdersData().then((res) => {
      console.log(res);
      setStatsInfo(getOrdersDashboardInfo(res, currency));
    });
  }, []);

  console.log(statsInfo);
  return (
    <div className="dashboard flex column align-start space-start">
      <p className="dashboard-header">Dashboard</p>
      {statsInfo.loading ? (
        <Loader />
      ) : (
        <section className="dashboard-stats-container flex align-start space-around wrap">
          {statsInfo.totalSales && <LineStat data={statsInfo.totalSales} />}
          {statsInfo.topSoldItems && (
            <TableStat data={statsInfo.topSoldItems} />
          )}
        </section>
      )}
    </div>
  );
};

export default Dashboard;
