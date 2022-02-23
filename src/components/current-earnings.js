import React from 'react'
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
        text: `Take home<br>$ ${currentEarnings.takeHome}`,
        floating: true,
        verticalAlign: 'middle',
        y: 30
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
            { name: 'Taxes', y: currentEarnings.taxes, color: '#DBD4B7'},
            { name: 'Benefits', y: currentEarnings.benefits, color: '#FFE7B9'},
            { name: 'Retirement', y: currentEarnings.retirement, color: '#AAD6DE'}
        ]
      }
    ]
  };

export default function CurrentEarnings  () {
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
                        <div>
                            <span className='legend retirement'>Retirement</span>
                            <span>{numberFormat(currentEarnings.retirement)}</span>
                        </div>
                        <div>
                            <span className='legend benefits'>Benefits</span>
                            <span>{numberFormat(currentEarnings.benefits)}</span>
                        </div>
                        <div>
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
                    <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                </div>
            </div>
            
        </div>
    )
}