import React from 'react'

import { dateFormat, numberFormat } from '../helpers'

import { recentPays } from '../data'

export default function RecentPays (props) {
    return (
        <div className='recent-pays'>
            <h5>Recent pays</h5>
            {recentPays.map((data, key) => {
                return (
                    <div className='sidebar__row' key={key}>
                        <span>{dateFormat(data.date)}</span>
                        <span>{data.hours} hrs</span>
                        <span>{numberFormat(data.takeHome)}</span>
                    </div>
                )
            })}
            <a>View more</a>
        </div>
    )
}