"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButtomProps } from '../types'

const CustomButtom = ({title, containerStyles, handleClick, btnType}: CustomButtomProps) => {
  return (
    <button 
    disabled={false}
    type={btnType || 'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
        
    </button>
  )
}

export default CustomButtom