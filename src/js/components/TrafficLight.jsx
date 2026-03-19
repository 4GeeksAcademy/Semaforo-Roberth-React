import React, { useState } from 'react';

const TrafficLight = () => {
    const [selected, setSelected] = useState(false);

    return (
        <main>
            <div className="traffic-box">
                <div 
                    onClick={() => setSelected("red")}
                    className={`light red ${selected === "red" ? "active" : ""}`}
                ></div>
                <div 
                    onClick={() => setSelected("yellow")}
                    className={`light yellow ${selected === "yellow" ? "active" : ""}`}
                ></div>
                <div 
                    onClick={() => setSelected("green")}
                    className={`light green ${selected === "green" ? "active" : ""}`}
                ></div>
            </div>
            <div className="post"></div>
        </main>
    );
};

export default TrafficLight;