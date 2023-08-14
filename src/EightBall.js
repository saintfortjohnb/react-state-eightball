import React, { useState } from 'react';
import './EightBall.css';  // We'll create this CSS file next.

function EightBall(props) {
    const [color, setColor] = useState("black");
    const [message, setMessage] = useState("Think of a Question");

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * props.answers.length);
        const randomAnswer = props.answers[randomIndex];
        setColor(randomAnswer.color);
        setMessage(randomAnswer.msg);
    };

    return (
        <div className="EightBall" onClick={handleClick} style={{backgroundColor: color}}>
            <p>{message}</p>
        </div>
    );
}

export default EightBall;
