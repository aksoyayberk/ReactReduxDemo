import React from "react";

const Colourify = (WrappedComponent) => {
    return (props) => {
        return (
            <div className="center orange-text">
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Colourify;