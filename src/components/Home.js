import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { MoodContext } from "../context/moodContext";
import Clockstart from "./Clockstart";


const Home = () => {
  const { mood, setMood, happy, sad }= React.useContext(MoodContext);

  return (
    <>
      <h1>Home</h1>
      {/* just to demo how changing the value in context updates in multiple components */}
      <div>Mood: {mood} <input type="button" onClick={() => {setMood(mood === happy? sad : happy)}} value="Change Mood"/></div>
      <Clockstart/>
    </>
    );
};

export default Home;