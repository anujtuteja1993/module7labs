import {useState, useEffect} from "react";
import React from "react";
import { MoodContext } from "../context/moodContext";

const Clockstart = () =>{

    const { mood, setMood, sad, happy }= React.useContext(MoodContext);
    const [date, setDate] = useState(new Date());
    //using Useffect to update the timer and clean up function to clear it every second. 
    useEffect(() => {
        let timer = setTimeout(setDate(new Date(), 1000));
        return function cleanup(){
            clearInterval(timer);
        }
        
    }, [date]);


    return (
        <div>
            <h2>The time is: {date.toLocaleTimeString()} . Mood is: {mood}</h2>
        </div>
    );
};

export default Clockstart;