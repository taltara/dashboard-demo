import React, { useState, useEffect } from "react";

import TableStatRow from "./dashboard/TableStatRow";

const TableStat = (props) => {
  const { data } = props;

  console.log(data);
  return (
    <div className="table-stat-container">
      <p className="stat-type">{data.id}</p>

      <table className="table-stat">
        <tbody>
          <tr className="table-stat-row-titles flex align-center ">
            <th className="cell-s">Photo</th>
            <th className="cell-l">Description</th>
            <th className="cell-s">Amount</th>
            <th className="cell-s">Price</th>
            <th className="cell-m">Vendor</th>
            <th className="cell-s">Stack</th>
          </tr>
          {data &&
            data.data.map((item, index) => {
              return (
                <TableStatRow
                  data={item}
                  key={index}
                  isLast={index === data.data.length - 1}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableStat;
