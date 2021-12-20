import React, { useRef, useEffect } from "react";
import * as d3 from 'd3';

const data = [
    {category: 'A', value: 70},
    {category: 'B', value: 25},
    {category: 'C', value: 40},
    {category: 'D', value: 88}
]

const ChartC = () => {
    const barChart = useRef()

    useEffect(() => {
        const margin = {top:50, right:30, left:60, bottom:30}

        const chartWidth = parseInt(d3.select('#barChart').style('width')) - margin.left - margin.right
        const chartHeight = parseInt(d3.select('#barChart').style('height')) - margin.top - margin.bottom

        const svg = d3.select(barChart.current)
            .attr('width', chartWidth + margin.left + margin.right)
            .attr('height', chartHeight + margin.top + margin.bottom)
        const x = d3.scaleBand().domain(d3.range(data.length)).range([margin.left, chartWidth - margin.right]).padding(0.1)

        svg.append('g')
            .attr('transform', 'translate(0,'+ chartHeight + ')')
            .call(d3.axisBottom(x).tickFormat(i => data[i].category).tickSizeOuter(0))

        const max = d3.max(data, function(d){return d.value})

        const y = d3.scaleLinear().domain([0, max]).range([chartHeight, margin.top])

        svg.append('g')
            .attr('transform', 'translate('+ margin.left + ',0)')
            .call(d3.axisLeft(y))
        
        svg.append('g')
            .attr('fill', '#65f0eb')
            .selectAll('rect')
            .data(data)
            .join('rect')
            .attr('x', (d,i) => x(i))
            .attr('y', d => y(d.value))
            .attr('height', d => y(0) - y(d.value))
            .attr('width', x.bandwidth())
    })

    return (
        <div id="barChart" className="bg-pink-300 h-screen w-screen">
            <h1 className="font-mono">Bar Chart</h1>
            <svg ref={barChart} />
        </div>
    )
}

export default ChartC