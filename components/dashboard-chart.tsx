"use client"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

export function DashboardChart() {
  const labels = ["월", "화", "수", "목", "금", "토", "일"]

  const data = {
    labels,
    datasets: [
      {
        label: "불안",
        data: [10, 12, 10, 13, 15, 8, 20],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.1)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "분노",
        data: [35, 30, 28, 35, 38, 55, 52],
        borderColor: "#10B981",
        backgroundColor: "transparent",
        tension: 0.4,
      },
      {
        label: "불안",
        data: [48, 45, 48, 50, 52, 60, 65],
        borderColor: "#F59E0B",
        backgroundColor: "transparent",
        tension: 0.4,
      },
      {
        label: "우울",
        data: [58, 55, 65, 65, 65, 72, 70],
        borderColor: "#EF4444",
        backgroundColor: "transparent",
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 6,
        },
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 80,
        ticks: {
          stepSize: 10,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 2,
        hoverRadius: 4,
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
  }

  return (
    <div className="h-[300px]">
      <Line data={data} options={options} />
    </div>
  )
}

