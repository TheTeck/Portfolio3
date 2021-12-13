import React, { useRef, useState, useEffect } from 'react';
import * as d3 from 'd3';

import './TechList.scss';

const width = 1200;
const height = 700;

const colors = {
    language: 'rgb(178, 31, 68)',
    style: 'rgb(36, 133, 104)',
    framework: 'rgb(255, 145, 0)',
    database: 'rgb(13, 103, 221)',
    library: 'rgb(182, 189, 55)',
    other: 'rgb(116, 67, 150)'
}

export default function BubbleChart ({ tech }) {

    const svgRef = useRef();
    const [data, setData] = useState(tech);

    useEffect(() => {
        let svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
        
        svg.selectAll('g').remove();

        let simulation = d3
            .forceSimulation(data.nodes)
            .force("charge", d3.forceManyBody().strength(300))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force('collide', d3.forceCollide(d => d.level * 7 + 40).strength(0.7))
            .on("tick", ticked);
                
        let drag = d3
            .drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended)

        let textAndNodes = svg
            .selectAll('g')
            .data(data.nodes)
            .enter()
            .append('g')
            .call(drag)
        
        let circles = textAndNodes
            .append('circle')
            .attr('r', d => d.level * 7 + 40)
            .attr('fill', d => colors[d.category])

        textAndNodes
            .on('mouseover', handleMouseOver)
            .on('mouseout', handleMouseOut)

        function handleMouseOver (d) {

            this.parentNode.appendChild(this);

            d3.select(this)
                .select('circle')
                        .attr('transform', 'scale(1.3)')
                        .attr('opacity', 0.6)
                        .attr('stroke', 'white')
                        .attr('stroke-width', 2)
            
            d3.select(this)
                .select('text')
                    .classed('selected-bubble', true)
            
            d3.select(this)
                .select('.skill-bubble-level')
                    .style('opacity', 1)
        }

        function handleMouseOut (d) {
            d3.select(this)
                .select('circle')
                .attr('transform', 'scale(1)')
                .attr('opacity', 1)
                .attr('stroke-width', 0)
            
            d3.select(this)
                .select('text')
                    .classed('selected-bubble', false)
            
            d3.select(this)
                .select('.skill-bubble-level')
                    .style('opacity', 0)
        }

        let texts = textAndNodes
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'central')
            .text(d => d.name)
        
        let levels = textAndNodes
            .append('text')
            .attr('class', 'skill-bubble-level')
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'central')
            .style('opacity', 0)
            .text(d => {
                let output = '';
                for (let i = 0; i < d.level; i++) {
                    output += '*'
                }
                return output;
            })
        
        function ticked () {
            textAndNodes
                .attr('transform', d => 'translate(' + d.x + ', ' + d.y + ')')
        }

        function dragstarted (e, d) {
            simulation.alphaTarget(0.3).restart();
            d.fx = e.x;
            d.fy = e.y;
        }

        function dragged (e, d) {
            d.fx = e.x;
            d.fy = e.y;
        }

        function dragended (e, d) {
            simulation.alphaTarget(0.1);
            d.fx = null;
            d.fy = null;

            return () => svg.remove();
        }
     }, [])
    
    return (
        <div id="tech-container">
            <svg ref={svgRef}></svg>
        </div>
    )
}