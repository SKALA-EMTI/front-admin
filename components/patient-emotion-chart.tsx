'use client'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export function PatientEmotionChart() {
  const labels = ['2/9', '2/10', '2/11', '2/12', '2/13', '2/14', '2/15']

  const data = {
    labels,
    datasets: [
      {
        label: '불안',
        data: [30, 32, 35, 40, 45, 48, 50],
        borderColor: '#F87171',
        backgroundColor: 'rgba(248, 113, 113, 0.1)',
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#F87171',
      },
      {
        label: '슬픔',
        data: [20, 22, 25, 30, 35, 38, 40],
        borderColor: '#60A5FA',
        backgroundColor: 'rgba(96, 165, 250, 0.1)',
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#60A5FA',
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          padding: 20,
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
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
        radius: 3,
        hoverRadius: 5,
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
  }

  return (
    <div className="h-[300px]">
      <Line data={data} options={options} />
    </div>
  )
}
