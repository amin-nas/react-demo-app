import React from 'react'

import { documents } from '../data'

export default function DirectDeposit (props) {
    return (
        <div className='direct-deposit'>
            <h5>Documents</h5>
            {documents.map((data, key) => {
                return (
                    <div className='sidebar__row' key={key}>
                        {data.name}
                    </div>
                )
            })}
        </div>
    )
}