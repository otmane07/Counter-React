import React, {useState} from "react";
// toute fois tu vois que jsx ne fonctionne pas import Reat
import CounterClass from "./Components/CounterClass"
import CounterHooks from "./Components/CounterHooks";

export const themeContext = React.createContext();
function App() {
    const [defaultTheme,setDefaultTheme] = useState("green")
  return (
      <>
      <themeContext.Provider value={defaultTheme}>
        <CounterClass counterInit={1} />
        <CounterHooks counterInit={0} />
      </themeContext.Provider>
      <button onClick={()=>{
          setDefaultTheme(
              (prevState)=> {
                  return prevState === "green" ? "red":"green";
              }
          )
      }
      }>
          Toggle default Theme
      </button>
      </>
  )
}

export default App;
