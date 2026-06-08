import React, { useEffectEvent } from 'react'
import { useState, useEffect } from 'react'

function Timer() {
    const [seconds, setSeconds] = useState(0)
    const Tick = useEffectEvent(() =>{
         console.log('tick', seconds)
        setSeconds(prevSeconds => prevSeconds +1)
    })

    useEffect (() =>{
        const interval = setInterval(() =>{
            Tick()
        }, 1000)
        return () => clearInterval(interval) //cleanup function to clear the interval when the component unmounts
    }, [])


    return (
        <div>
            <p>Seconds: {seconds}</p>

        </div>
    )
}

export default Timer
