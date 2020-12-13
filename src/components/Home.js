import React from 'react'
import Quote from './Quote'
import '../styles/home.scss'

export default function Home(props) {
    return (
        <div className="home-root">
            <h2>Daily Affirmations</h2>
            <Quote/>
        </div>
    )
}