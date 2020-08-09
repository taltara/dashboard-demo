import React, { useState, useEffect } from "react";

import TableStatRow from "./dashboard/TableStatRow";

const TableStat = (props) => {
  const { data } = props;

  console.log(data);
  return (
    <div className="table-stat">
      <p className="stat-type">{data.id}</p>
      <div className="table-stat-row-titles flex align-center space-between ">
        <p>Photo</p>
        <p>Name</p>
        <p>Amount</p>
        <p>Price</p>
        <p>Vendor</p>
        <p>Stack</p>
      </div>
      {data && data.data.map((item, index) => {
          return <TableStatRow data={item} key={index} isLast={index === data.data.length - 1} />
      })}
    </div>
  );
};

export default TableStat;
