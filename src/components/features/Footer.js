import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        var style = {
            backgroundColor: "var(--mainBlue)", //Mainblue from variables. idk if i can import that here
            color: "var(--lightBlue)",
            textAlign: "center",
            padding: "20px",
            position: "fixed",
            left: "0",
            bottom: "0",
            height: "60px",
            width: "100%",
        }
        
        var phantom = {
          display: 'block',
          padding: '20px',
          height: '60px',
          width: '100%',
        }
        return (
            <div>
            <div style={phantom}></div>
            <div style={style}>Plan B 2021</div>
            </div>
        )
    }
}

