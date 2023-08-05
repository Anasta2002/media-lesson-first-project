import React, { useState} from 'react'
import s from './index.module.css'

export default function Text() {
    const [query, setQuery] = useState('')
    const [textRequest, setTextRequest] = useState([])

    const textFact = () => {
        fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                return response.json();
            })
            .then(data => setTextRequest(data))
    };

    return (
        <div className={s.container}>
            <h3 style={{marginBottom: '10px'}}>Task 3. Request by user's text</h3>
            <input type='text' name='text' placeholder='Type something' value={query} onChange={(e) => setQuery(e.target.value)}/>
            { textRequest.result && textRequest.result.length > 0 && <p className={s.text}>{textRequest.result[0].value}</p>}
            <button onClick={textFact}>Click here</button>
        </div>
    )
}
