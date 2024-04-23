import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";

const Analytics = () => {
  const [incomeData, setIncomeData] = useState(null);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const response = await axios.get(
          "https://mock-evl-2.onrender.com/transactions"
        );
        const data = response.data;

        // Extract income data from the received data
        const incomeTransactions = data.filter(
          (transaction) => transaction.type === "Income"
        );

        // Calculate total income amount
        const totalIncome = incomeTransactions.reduce(
          
            (acc, curr) => acc + parseFloat(curr.amount), // Ensure amount is parsed as a float
          0
        );

        // Create data object for Pie chart
        const incomeChartData = {
          labels: ["Income", "Expense"],
          datasets: [
            {
              label: "Income vs Expense",
              data: [totalIncome, 0], // Assuming total expense is 0 for now
              backgroundColor: ["green", "red"],
            },
          ],
        };

        setIncomeData(incomeChartData);
      } catch (error) {
        console.error("Error fetching analytics data:", error);
      }
    };

    fetchAnalyticsData();
  }, []);

  return (
    <div>
      <h3>Analytics Component</h3>
      <div>
        <h4>Income & Expense Chart</h4>
        {incomeData && <Pie data={incomeData} />} {/* Conditionally render Pie component */}
      </div>
    </div>
  );
};

export default Analytics;
