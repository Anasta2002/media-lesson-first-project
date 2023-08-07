import React from 'react'
import RandomFact from '../components/RandomFact/RandomFact'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import Text from '../components/Text/Text'

export default function Info() {

    return (
        <div style={{display: 'flex', flexDirection: 'column', fontSize: '20px'}}>
            <CategoriesList />
            <RandomFact />
            <Text />
        </div>
    )
}