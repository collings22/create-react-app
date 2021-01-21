import React from 'react'

export const BarChart = (props) => {
  const data = props.data

  const title = props.title
  const margin = { top: 10, right: 10, bottom: 0, left: 30 }
  const width = 400 - margin.top - margin.right
  const height = 150 - margin.top - margin.bottom

  const ref = useRef()

  useEffect(() => {
    d3.select(ref.current).selectAll('svg').remove()

    const svg = d3.select(ref.current)
      .append('svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 -10 420 225')
      .append('g')
      .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')')

    svg
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'none')
      .attr('stroke', 'transparent')
      .attr('stroke-width', 4)

    let subgroups = Object.keys(data[0])
    subgroups = subgroups.filter(e => !['label'].includes(e))

    const groups = d3.map(data, function (d) {
      return (d.label)
    }).keys()

    const x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.4])

    const xAxis = d3.axisBottom(x)
      .tickFormat(d => d)

    const maxBarSum = Math.max.apply(Math, data.map(o => parseInt(o[subgroups[0]]))) * 1.02

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .style('color', 'darkgray')
      .style('font-size', '30%')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', function (d) {
        return 'rotate(-30)'
      })

    const y = d3.scaleLinear()
      .domain([0, maxBarSum])
      .range([height, 0])

    svg.append('g')
      .attr('class', 'grid')
      .style('color', 'darkgray')
      .call(drawYAxisGridlines(y)
        .tickSize(-width)
        .tickFormat(''))

    svg.append('g')
      .style('font-size', '30%')
      .style('color', 'darkgray')
      .call(d3.axisLeft(y).tickFormat((d) => Number.isInteger(d) ? d : null))

    svg.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .style('fill', 'darkgreen')
      .attr('x', function (d) { return x(d.label) })
      .attr('width', x.bandwidth())
      .attr('y', function (d) { return y(d[subgroups[0]]) })
      .attr('height', function (d) { return height - y(d[subgroups[0]]) })

    svg.append('text')
      .attr('x', (width / 2))
      .attr('y', 0 - (margin.top / 2))
      .attr('text-anchor', 'middle')
      .style('font-size', '10px')
      .style('fill', 'darkgray')
      .text(title)
  }, [data, title, margin, height, width])

  return <div ref={ref} />
}
