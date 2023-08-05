import React, { useState }  from 'react'
import { getRandomData } from '../../request.js'
import s from './index.module.css'

export default function RandomFact() {
    const [ data, setData] = useState([])

    const newRandomData = () => {
        getRandomData(setData)
    }

    return (
        <div className={s.container}>
            <h3>Task 2. Random fact</h3>
            <div className={s.text}>{data.value}</div>
            <button onClick={newRandomData}>
                <p>Get random fact </p>
            </button>
        </div>
    )
}
