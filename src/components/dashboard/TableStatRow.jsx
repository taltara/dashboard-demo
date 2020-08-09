import React, { useState, useEffect } from "react";

import TiltButton from "../navigation/TiltButton/TiltButton";
import utilService from "../../services/utilService";
import defaultImg from "../../assets/img/default-item.png";

const TableStatRow = (props) => {
  const { isLast } = props;
  const { name, amount, price, vendor, inventory, img } = props.data;

  const lastRowClass = isLast ? "last-row" : "";
  return (
    <div
      className={`table-stat-row-info flex align-center space-between ${lastRowClass}`}
    >
      <img src={img ? img : defaultImg} alt="" />
      <p>{name}</p>
      <p>{amount}</p>
      <p className="row-price">{utilService.priceFormatter(price, true)}</p>
      <p>{vendor}</p>
      <p>{`${inventory}`}</p>
      <TiltButton
        buttonType="link"
        label="View Details"
        linkTo={"#"}
        activeLinkClass="activeTab"
        isLinkToExact={true}
        isTilt={true}
        tiltOptions={{ scale: 1.05 }}
        animation="general"
        buttonClass="tilt-button"
      />
    </div>
  );
};

export default TableStatRow;
