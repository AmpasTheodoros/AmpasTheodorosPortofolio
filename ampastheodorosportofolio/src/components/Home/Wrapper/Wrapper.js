import React, { useEffect } from 'react';
import './Wrapper.css';
import { Link } from 'react-router-dom';

const Wrapper = () => {
    useEffect(() => {
        const wrapper = document.getElementById("wrapper");

        const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

        const uniqueRand = (min, max, prev) => {
            let next = prev;

            while(prev === next) next = rand(min, max);

            return next;
        }

        const combinations = [
            { configuration: 1, roundness: 1 },
            { configuration: 1, roundness: 2 },
            { configuration: 1, roundness: 4 },
            { configuration: 2, roundness: 2 },
            { configuration: 2, roundness: 3 },
            { configuration: 3, roundness: 3 }
        ];

        let prev = 0;

        setInterval(() => {
            const index = uniqueRand(0, combinations.length - 1, prev),combination = combinations[index];

            wrapper.dataset.configuration = combination.configuration;
            wrapper.dataset.roundness = combination.roundness;

            prev = index;
        }, 3000);
    }, []);

    return (
        <div id="wrapper">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <Link to="https://github.com/AmpasTheodoros">Ampas Theodoros</Link>
        </div>
    );
};

export default Wrapper;