import React from "react";

const happy = "😊";
const sad = "😢";

export const MoodContext = React.createContext();

export const MoodProvider = ({children}) => {
    const [mood, setMood] = React.useState(happy);
    return (
        <MoodContext.Provider value={{happy, sad, mood, setMood}}>
            {children}
        </MoodContext.Provider>
    );
}