import React from "react";
import Counter from "./cc"
import Counter1 from "./cc1"
import Counter2 from "./cc2"
import "./style.css"


function App(){
    return(
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            backgroundColor:"DodgerBlue",
        }}>
            <div className="divs">
                <Counter/>
            </div>
            <div className="divs">
                <Counter1/>
                </div>
            <div className="divs">
                <Counter2/>
                </div>
        </div>
    )
}

export default App;