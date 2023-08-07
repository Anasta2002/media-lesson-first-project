import React, { useEffect, useState } from 'react'
import { getCategories } from '../../request'
import s from './index.module.css'

export default function CategoriesList() {
  const [categories, setCategories] = useState([])
  useEffect(() => getCategories(setCategories), [])

  const [categoryJoke, setCategoryJoke] = useState({})

  const handleClick = (category) => {
      fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`API request failed with status ${response.status}`);
              }
              return response.json();
          })
          .then(data => setCategoryJoke(data))
          .catch(error => console.error('Error:', error));
  };

  return (
    <div className={s.wrapper}>
        <div className={s.container}>
          <h3>Task 1. List of categories</h3>
            {categories.map((category, index) => 
                <button key={index} className={s.category_joke} onClick={() => handleClick(category)}>
                    {category}
                </button>
            )}
        </div>
        {categoryJoke.value && <p className={s.text}>{categoryJoke.value}</p>}
    </div>
  )
}
