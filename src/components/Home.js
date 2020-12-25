import React from 'react'
import Quote from './Quote'
import '../styles/home.scss'
import DateToday from './Date'

export default function Home(props) {
    return (
        <div className="home-root">
            <h2>Daily Affirmations</h2>
            <div>
                <div className="date"><DateToday/></div>
                <Quote/>
            </div>
            <p>© Arafat Arman {new Date().getFullYear()}</p>
        </div>
    )
}