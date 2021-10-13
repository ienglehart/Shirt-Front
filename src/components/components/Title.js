import React from 'react';
import '../../App.css';

export default function Title({name,title}) {

    return(
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalized font-weight-bold normal-text text-orange"> {name} <strong className="text-yellow normal-text">{title}</strong> </h1>
            </div>
        </div>
    )
}