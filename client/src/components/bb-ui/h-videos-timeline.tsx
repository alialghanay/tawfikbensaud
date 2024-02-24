"use client";
// Import necessary libraries
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

// Define the BarChart component
const BarChart = () => {
  // Ref to the SVG element
  const svgRef = useRef(null);

  // Effect to run D3 code on mount
  useEffect(() => {
    // Data for the bar chart
    const data = [2020, 2021, 2022, 2023, 2024];

    // Dimensions of the SVG
    const width = window.innerWidth;
    const height = 200;

    // Create SVG element
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Create bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => (i / (data.length + 1)) * width)
      .attr("y", height / 2) // Place bars in the middle of the SVG
      .attr("width", width / (data.length + 1)) // Calculate width based on the number of bars
      .attr("height", 30) // Fixed height for the bars
      .attr("fill", "hsl(176, 96%, 26%)");

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr(
        "x",
        (d, i) =>
          (i / (data.length + 1)) * width + width / (2 * (data.length + 1))
      ) // Place text in the middle of each bar
      .attr("y", height / 2 - 10) // Shift text above the bars
      .attr("text-anchor", "middle") // Center the text horizontally
      .attr("alignment-baseline", "middle") // Center the text vertically
      .text((d) => d)
      .attr("fill", "white"); // Text color
  }, []); // Run the effect only on mount

  // Return the SVG element
  return <svg ref={svgRef}></svg>;
};

// Export the component
export default BarChart;
