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
      width: 300,
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
            minSize: '40',
            maxSize: '140%',
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
                { name: 'Taxes', value: thisYear.taxes.total, color: '#DBD4B7'},
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
                        <span>Gross pay</span>
                        <span>{numberFormat(thisYear.grossPay.total)}</span>
                    </div>
                    <div className='this-year__data-row'>
                        <span className="small">Regular</span>
                        <span className="small">{numberFormat(thisYear.grossPay.regular)}</span>
                    </div>
                    <div className='this-year__data-row'>
                        <span className="small">Holiday</span>
                        <span className="small">{numberFormat(thisYear.grossPay.holiday)}</span>
                    </div>
                    <div className='this-year__data-row'>
                        <span className="small">Sign on bonus</span>
                        <span className="small">{numberFormat(thisYear.grossPay.signOnBonus)}</span>
                    </div>
                    <hr />
                    <div className='this-year__data-row'>
                        <span>Pre-tax deductions</span>
                        <span>{numberFormat(thisYear.retirement + thisYear.benefits)}</span>
                    </div>
                    <div className='this-year__data-row'>
                        <span className="small">Retirement</span>
                        <span className="small">{numberFormat(thisYear.retirement)}</span>
                    </div>
                    <div className='this-year__data-row'>
                        <span className="small">Benefits</span>
                        <span className="small">{numberFormat(thisYear.benefits)}</span>
                    </div>
                    <hr />
                    <div className='this-year__data-row'>
                        <span>Taxes</span>
                        <span>{numberFormat(thisYear.taxes.total)}</span>
                    </div>
                    <div className='this-year__data-row'>
                        <span className="small">Federal</span>
                        <span className="small">{numberFormat(thisYear.taxes.federal)}</span>
                    </div>
                    <div className='this-year__data-row'>
                        <span className="small">Medicare</span>
                        <span className="small">{numberFormat(thisYear.taxes.medicare)}</span>
                    </div>
                    <div className='this-year__data-row'>
                        <span className="small">State</span>
                        <span className="small">{numberFormat(thisYear.taxes.state)}</span>
                    </div>
                    <div className='this-year__data-row'>
                        <span className="small">City</span>
                        <span className="small">{numberFormat(thisYear.taxes.city)}</span>
                    </div>
                    <hr />
                    <hr />
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