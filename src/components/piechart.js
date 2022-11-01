import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);


const BarChart = ({ income, expense }) => {
  const labels = ["Expenses", "Total", "Incomes"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [expense, income - expense, income],
        backgroundColor: [
          "#5e1558",
          "rgb(243, 140, 226);",
          " #ff00dd",
        ],
        borderColor: [
            "#5e1558",
            "rgb(243, 140, 226);",
            " #ff00dd",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default BarChart;
