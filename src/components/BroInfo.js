import React, { Component } from "react";

const BroInfo = (props) => {
    const {bros, broID} = props;
    // const bro = bros.filter(bro => bro.id === broID);
    // console.log(bro.name);
    const broList = bros.length ? (bros.map(bro => bro).find(bro => bro.id == broID)) : {};

    return(
        <div className="container">
            <h1 className="center pink-text">{broList.name}</h1>
        </div>
    )
}

export default BroInfo;