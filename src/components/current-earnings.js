import React, { useState, useRef, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { numberFormat } from '../helpers'

import { currentEarnings } from '../data'

const chartOptions = {
    chart: {
      type: 'pie',
      width: 200,
      height: 200,
      className: 'current-earnings-chart',
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    title: {
        text: `<span style="font-weight: 500;font-size: 11px;color: #808080;">TAKE HOME</span><br><span style="font-size: 24px;color: #6AAD8C;">${numberFormat(currentEarnings.takeHome)}</span>`,
        style: { "font-family": "Jost" },
        floating: true,
        verticalAlign: 'middle',
        y: 10
    },
    tooltip: {
        formatter: function() {
            return `<div style="font-weight: 500;font-size: 11px;color: #808080;">${this.point.name}</div><br/>${numberFormat(this.point.y)}`
        }
    },
    plotOptions: {
        pie: {
            innerSize: '90%',
            borderWidth: 4,
            borderColor: '#FFF',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [
      {
        data: [
            { name: 'Take home', y: currentEarnings.takeHome, color: '#8AC5A8'},
            { name: 'Retirement', y: currentEarnings.retirement, color: '#AAD6DE'},
            { name: 'Benefits', y: currentEarnings.benefits, color: '#FFE7B9'},
            { name: 'Taxes', y: currentEarnings.taxes, color: '#DBD4B7'}
        ]
      }
    ]
  };

export default function CurrentEarnings  () {

    const currentEarningsChart = useRef(null)

    const [hoverPoint, setHoverPoint] = useState(0)

    useEffect(() => {
        const chart = currentEarningsChart.current.chart
        if (hoverPoint) {
            chart.series[0].points[hoverPoint].setState('hover')
            chart.tooltip.refresh([chart.series[0].points[hoverPoint]])
        } else {
            chart.series[0].points[1].setState('normal')
            chart.series[0].points[2].setState('normal')
            chart.series[0].points[3].setState('normal')
            chart.tooltip.hide()

        }
    })

    return (
        <div className='current-earnings'>
            <h2>Since your last pay, you’ve worked 64 hours</h2>
            <div className='current-earnings__content'>
                <div>
                    <div className='current-earnings__legend'>
                        <div>
                            <span>Gross Pay</span>
                            <span>{numberFormat(currentEarnings.grossPay)}</span>
                        </div>
                        <div
                            onMouseEnter={() => setHoverPoint(1)}
                            onMouseLeave={() => setHoverPoint(null)}
                            >
                            <span className='legend retirement'>Retirement</span>
                            <span>{numberFormat(currentEarnings.retirement)}</span>
                        </div>
                        <div
                            onMouseEnter={() => setHoverPoint(2)}
                            onMouseLeave={() => setHoverPoint(null)}
                            >
                            <span className='legend benefits'>Benefits</span>
                            <span>{numberFormat(currentEarnings.benefits)}</span>
                        </div>
                        <div
                            onMouseEnter={() => setHoverPoint(3)}
                            onMouseLeave={() => setHoverPoint(null)}
                            >
                            <span className='legend taxes'>Taxes</span>
                            <span>{numberFormat(currentEarnings.taxes)}</span>
                        </div>
                    </div>
                    <div className='current-earnings__pay-cta'>
                        <button>Get paid now</button>
                        <span>
                            You qualify for early pay. $3 fee applies.<br/>
                            Next free auto-pay is in 5 days.
                        </span>
                    </div>
                </div>
                <div className='chart-ct'>
                    <HighchartsReact 
                    highcharts={Highcharts} 
                    options={chartOptions}
                    ref={currentEarningsChart}
                     />
                </div>
            </div>
            
        </div>
    )
}