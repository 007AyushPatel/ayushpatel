import React, { useState } from "react";
import './Card.css';
const data = [
    { company:"BNP Paribas", duration: "5 Months", profile :"Trainee Software Engineer" ,projects :"Sonata" },
    { company:"GlobalLogic", duration: "2.5 Years", profile :"Software Engineer" ,projects :"microsoft" },
  ];
const CardDetails=()=>{
    const cardFront = data[0].company +"\n("+data[0].duration+")";
    const cardBack = "Projects";
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!isFlipped);
    };

    return (
        <div className="App">
            <div className="container">
                <div
                    className={`flip-card ${
                        isFlipped ? "flipped" : ""
                    }`}
                    onClick={handleFlip}
                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="card-content">
                                {cardFront}
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <div className="card-content">
                                {cardBack}
                            </div>
                            Name: Sonata 2.0
                            <br/>
                            Description: Use of Actimize
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CardDetails;