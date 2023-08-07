import React from 'react'
import s from './index.module.css'

export default function NotFound() {
  return (
    <div>
      <img className={s.image_not_found} src='https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg' alt='not found page' />
    </div>
  )
}
