import React from 'react'

import { directDeposit } from '../data'

export default function DirectDeposit (props) {
    return (
        <div className='direct-deposit'>
            <h5>Recent pays</h5>
            {directDeposit.map((data, key) => {
                return (
                    <div className='sidebar__row' key={key}>
                        <span>{data.account}</span>
                        <span>{data.allocation}</span>
                    </div>
                )
            })}
            <a>Make changes</a>
        </div>
    )
}