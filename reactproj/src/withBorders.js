import React from "react";

function WithBorders(WrappedComponent){
    return () => {
        return(
            <div style={{
                border: "1px solid #e6e6e6",
                padding: "40px 100px",
                maxWidth:"150px",
              }}>
                <WrappedComponent/>
            </div>
        )
    }
}

export default WithBorders;