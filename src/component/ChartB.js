import React, { useEffect } from "react"
import * as d3 from 'd3';

const ChartB = (props) => {

    const {
        data,
        outerRadius, //if outerRadius == 0 means pie chart, > 0 become donut chart
        innerRadius, //calculate width and height
      } = props;

    const margin = {
    top: 400, right: 500, bottom: 100, left: 500,
    };

    const width = 2 * outerRadius + margin.left + margin.right;
    const height = 2 * outerRadius + margin.top + margin.bottom;

    const colorScale = d3     
        .scaleSequential()      
        .interpolator(d3.interpolateWarm)      
        .domain([0, data.length]);

    useEffect(() => {
        drawChart();
      }, [data]);
    
    function drawChart() {
    // draw the chart here
        

        //remove old
        d3.select('#pie-container')
            .select('svg')
            .remove()

        //create new
        const svg = d3
            .select('#pie-container')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`)

        const arcGenerator = d3
            .arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);
        const pieGenerator = d3
            .pie()
            .padAngle(0)
            .value((d) => d.value);
        const arc = svg
            .selectAll()
            .data(pieGenerator(data))
            .enter();

        //add sector
        arc
            .append('path')
            .attr('d', arcGenerator)
            .style('fill', (_, i) => colorScale(i))
            .style('stroke', '#ffffff')
            .style('stroke-width', 0)
        arc
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .text((d) => d.data.label)
            .style('fill', '#ffffff')
            .attr('transform', (d) => {
              const [x, y] = arcGenerator.centroid(d);
              return `translate(${x}, ${y})`;
            })


    }  


    return (
         <div>
            <h1 className='mt-5 font-mono text-2xl'>Pie chart</h1>
            <div id="pie-container" />
        </div>
    ) 
 }
 
 export default ChartB