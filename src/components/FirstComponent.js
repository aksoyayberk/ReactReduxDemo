import React from "react";
import {Link} from "react-router-dom";

const FirstComponent = (props) => {
    const{bros, deleteBro} = props;
    const broList = bros.length ? (
        bros.map(bro => {
            return(
                <div className="bro card" key={bro.id}>
                    <div className="card-content">
                        <Link to={"/" + bro.id}>
                            <span className="card-title black-text">
                                <h4>Hey my name is {bro.name} but you can call me {bro.username}!</h4>
                            </span>
                        </Link>
                        <button onClick={() => {deleteBro(bro.id)}}>Delete Bro</button>
                    </div>
                </div>
            )
        })
    ) : (
        <p className="center">You are lonely brother...</p>
    )

    return(
        <div className="firstComponent">
            {broList}
        </div>
    );  
}

export default FirstComponent;