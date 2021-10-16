import React from 'react';
import '../../App.css';
import Background from '../img/hero-img.jpg'

export default function Title({name,title}) {
    var style = {
        backgroundImage: "url(" + Background + ")",
        height: "200px",
        marginTop: "-30px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        borderRadius: "3px"
    }
    var titleStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px'
    }
    return(
        <div className="row" style={style}>
            <div className="col-10 mx-auto my-2 text-center text-title" style={titleStyle}>
                <h1 className="text-capitalized font-weight-bold text-stroke big-text text-orange"> {name} <strong className="text-yellow text-stroke big-text">{title}</strong> </h1>
            </div>
        </div>
    )
}