import React, { useState, useEffect } from "react";

import TiltButton from "../navigation/TiltButton/TiltButton";
import utilService from "../../services/utilService";
import defaultImg from "../../assets/img/default-item.png";

const TableStatRow = (props) => {
  const { isLast } = props;
  const {
    name,
    amount,
    price,
    vendor,
    inventory,
    img,
    description,
  } = props.data;

  const lastRowClass = isLast ? "last-row" : "";
  return (
    <tr className={`table-stat-row-info flex align-center ${lastRowClass}`}>
      <td className="cell-s">
        <img className="row-info-img" src={img ? img : defaultImg} alt="" />
      </td>
      <td className="cell-l">
        <div className="flex column align-start space-start">
          <div className="row-info-name">{name}</div>
          {description && <div className="row-info-description">{description}</div>}
        </div>
      </td>
      <td className="cell-s">{amount}</td>
      <td className="row-price cell-s">
        {utilService.priceFormatter(price, true)}
      </td>
      <td className="cell-m">{vendor}</td>
      <td className="cell-s">{`${inventory}`}</td>
      <TiltButton
        buttonType="link"
        label="View Details"
        linkTo={"#"}
        activeLinkClass="activeTab"
        isLinkToExact={true}
        isTilt={true}
        tiltOptions={{ scale: 1.025 }}
        animation="general"
        buttonClass="tilt-button"
      />
    </tr>
  );
};

export default TableStatRow;
