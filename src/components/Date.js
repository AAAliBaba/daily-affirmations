import React from 'react'

function getFormattedDate(month, day, date, year) {
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobor', 'November', 'December']

    return `${weekdays[day]} - ${months[month]} ${date}, ${year}`
}

export default function DateToday() {
    let date = new Date()
    
    return (
        <div>
            {getFormattedDate(date.getMonth(), date.getDay(), date.getDate(), date.getFullYear())}
        </div>
    )
}