"use client"

import { useEffect, useRef } from "react"
// import { useTheme } from "next-themes"


export function LineChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
//   const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    // Chart configuration
    // const isDark = theme === "dark"
    const textColor =  "#71717A"
    const lineColor = "#3B82F6"
    const areaColor = "rgba(59, 130, 246, 0.1)"
    const highlightColor = "rgba(59, 130, 246, 0.7)"
    const gridColor =  "rgba(0, 0, 0, 0.1)"


    // Sample data
    const months = [
      "Aug '27",
      "Sep '27",
      "Oct '27",
      "Nov '27",
      "Dec '27",
      "Jan '28",
      "Feb '28",
      "Mar '28",
      "Apr '28",
      "May '28",
      "Jun '28",
      "Jul '28",
    ]

    const data = [500, 1100, 1200, 1100, 1300, 1400, 1600, 1300, 1400, 1500, 1300, 1300]

    // Chart dimensions
    const width = rect.width
    const height = rect.height
    const padding = { top: 20, right: 20, bottom: 40, left: 50 }
    const chartWidth = width - padding.left - padding.right
    const chartHeight = height - padding.top - padding.bottom

    // Scales
    const xScale = chartWidth / (data.length - 1)
    const yMin = 0
    const yMax = 2000
    const yScale = chartHeight / (yMax - yMin)

    // Draw grid lines
    ctx.strokeStyle = gridColor
    ctx.lineWidth = 0.5

    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding.top + chartHeight - (i * chartHeight) / 5
      ctx.beginPath()
      ctx.moveTo(padding.left, y)
      ctx.lineTo(padding.left + chartWidth, y)
      ctx.stroke()

      // Y-axis labels
      ctx.fillStyle = textColor
      ctx.font = "10px sans-serif"
      ctx.textAlign = "right"
      ctx.textBaseline = "middle"
      ctx.fillText((i * 500).toString(), padding.left - 10, y)
    }

    // Draw area
    ctx.beginPath()
    ctx.moveTo(padding.left, padding.top + chartHeight)

    data.forEach((value, index) => {
      const x = padding.left + index * xScale
      const y = padding.top + chartHeight - (value - yMin) * yScale
      ctx.lineTo(x, y)
    })

    ctx.lineTo(padding.left + chartWidth, padding.top + chartHeight)
    ctx.closePath()
    ctx.fillStyle = areaColor
    ctx.fill()

    // Draw line
    ctx.beginPath()
    data.forEach((value, index) => {
      const x = padding.left + index * xScale
      const y = padding.top + chartHeight - (value - yMin) * yScale
      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.strokeStyle = lineColor
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw highlight point (July 2021 - 1,780)
    const highlightIndex = 6 // February '28
    const highlightX = padding.left + highlightIndex * xScale
    const highlightY = padding.top + chartHeight - (1780 - yMin) * yScale

    // Draw vertical dashed line
    ctx.beginPath()
    ctx.setLineDash([5, 5])
    ctx.moveTo(highlightX, highlightY)
    ctx.lineTo(highlightX, padding.top + chartHeight)
    ctx.strokeStyle = highlightColor
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.setLineDash([])

    // Draw highlight point
    ctx.beginPath()
    ctx.arc(highlightX, highlightY, 5, 0, Math.PI * 2)
    ctx.fillStyle = "#fff"
    ctx.fill()
    ctx.strokeStyle = lineColor
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw highlight label
    ctx.fillStyle = textColor
    ctx.font = "bold 12px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("1,780", highlightX, highlightY - 15)
    ctx.font = "10px sans-serif"
    ctx.fillText("July 2027", highlightX, highlightY - 30)

    // X-axis labels
    ctx.fillStyle = textColor
    ctx.font = "10px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "top"

    months.forEach((month, index) => {
      if (index % 2 === 0 || width > 500) {
        // Show every label on larger screens, every other on small
        const x = padding.left + index * xScale
        ctx.fillText(month, x, padding.top + chartHeight + 10)
      }
    })
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
