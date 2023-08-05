import React, { useEffect, useState } from 'react'

import RandomFact from '../components/RandomFact/RandomFact'
import s from './index.module.css'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import Text from '../components/Text/Text'

export default function Info() {




    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <CategoriesList />
            <RandomFact />
            <Text />
        </div>
    )
}