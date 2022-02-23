import React from 'react'
import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'

import { numberFormat } from '../helpers'

import { thisYear } from '../data'


HighchartsMore(Highcharts)

const chartOptions = {
    chart: {
      type: 'packedbubble',
      width: 400,
      height: 300,
    },
    credits: {
        enabled: false
    },
    title: {
        text: null
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '100%',
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [
        {
            showInLegend: false, 
            data: [
                { name: 'Take home', value: thisYear.takeHome, color: '#8AC5A8'},
                { name: 'Taxes', value: thisYear.taxes, color: '#DBD4B7'},
                { name: 'Benefits', value: thisYear.benefits, color: '#FFE7B9'},
                { name: 'Retirement', value: thisYear.retirement, color: '#AAD6DE'}
            ]
        }
    ]
};


export default function ThisYear  () {
    return (
        <div className='this-year'>
            <h2>So far this year</h2>
            <div className='this-year__content'>
                <div>
                    <div className='this-year__data-row'>
                        <span>Gross Pay</span>
                        <span>{numberFormat(thisYear.grossPay)}</span>
                    </div>
                    <div className='this-year__data-row'>
                        <span>Taxes</span>
                        <span>{numberFormat(thisYear.taxes)}</span>
                    </div>
                    <div className='this-year__data-row'>
                        <span>Benefits</span>
                        <span>{numberFormat(thisYear.benefits)}</span>
                    </div>
                    <div className='this-year__data-row'>
                        <span>Take Home</span>
                        <span>{numberFormat(thisYear.takeHome)}</span>
                    </div>
                </div>
                <div className='chart-ct'>
                    <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                </div>
            </div>
        </div>
    )
}