import React from 'react'
import styles from './Input.module.css';

type InputProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    status: boolean
}


export const Input = (props: InputProps) => {
  return (
    <input className={props.status ? styles.input : styles.error} type='text' onChange={props.handleChange} />
  )
}
