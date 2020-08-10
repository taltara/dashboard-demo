import React, { useState, useEffect } from "react";

import utilService from "../../services/utilService";

import { linearGradientDef } from "@nivo/core";
import { ResponsiveLine } from "@nivo/line";

const LineStat = (props) => {
  const { data } = props;

  const [currData, setCurrData] = useState({
    id: "Sales",
    data: [{ x: 0, y: 0 }],
    init: true,
  });

  const priceTooltip = (stat) => {
    const theme = "light";
    return (
      <div
        style={{
          background:
            theme === "dark"
              ? "rgba(255, 255, 255, 0.9)"
              : "rgba(32,33,36, 0.95)",
          color: theme === "dark" ? "black" : "rgba(255, 255, 255, 1)",
          padding: "4.5px 12px",
          border: "1px solid #ccc",
          borderRadius: 3,
          fontFamily: "Consolas",
          fontSize: 16,
        }}
      >
        <div
          className="tooltip-time"
          style={{
            textAlign: "center",
            fontSize: 18,
            padding: "3px 0",
          }}
        >{`${stat.point.data.x}`}</div>

        <div
          className="tooltip-amount"
          style={{
            color: stat.point.serieColor,
            textAlign: "center",
            fontSize: 20,
            padding: "3px 0",
            fontWeight: "bolder",
          }}
        >
          {utilService.priceFormatter(stat.point.data.yFormatted)}
        </div>
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setCurrData(data);
    }, 500);
  }, []);

  console.log(data);
  return (
    <div className="line-stat">
      {data && (
        <>
          <header>
            <p className="stat-type">{data.id}</p>
            <p className="stat-amount">
              {utilService.priceFormatter(data.total, true)}
            </p>
          </header>
          <div className="line-container">
            <ResponsiveLine
              enableGridX={false}
              enableGridY={false}
              curve="cardinal"
              theme={{
                axis: {
                  ticks: {
                    text: {
                      textColor: "#eee",
                      fontFamily: "",
                      fontSize: "14px",
                      tickColor: "transparent",
                    },
                  },
                },
              }}
              pointSize={0}
              enableCrosshair={false}
              data={[currData]}
              margin={{ top: 25, right: 0, bottom: 0, left: 0 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: false,
                reverse: false,
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={null}
              axisLeft={null}
              colors={["#0B72B9"]}
              enableArea={true}
              pointColor="#0B72B9"
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabel="y"
              pointLabelYOffset={0}
              useMesh={true}
              areaOpacity={1}
              tooltip={(stat) => {
                return priceTooltip(stat);
              }}
              defs={[
                // using helpers
                // will inherit colors from current element
                linearGradientDef("gradient", [
                  { offset: 0, color: "#0B72B9", opacity: 1 },
                  { offset: 50, color: "#0B72B9", opacity: 0.5 },
                  { offset: 100, color: "#0B72B9", opacity: 0 },
                ]),
              ]}
              fill={[
                
                { match: '*', id: 'gradient' },
            ]}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default LineStat;
