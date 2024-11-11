import React, { useEffect, useState } from 'react';
import styled from "styled-components";
const Countdown = styled.div`
    font-size: 50px;
    font-weight: 500;
`;
const CountdownTimer: React.FC = () => {
    const [countdownDate, setCountdownDate] = useState(new Date("Apr 12, 2025 00:00:00").getTime());
    const [secondDate] = useState(new Date("Apr 13, 2025 15:37:25").getTime());
    const [now, setNow] = useState(new Date().getTime());
    const [distance, setDistance] = useState(countdownDate - now);
    const [phase, setPhase] = useState('beforeFirstDate');

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date().getTime());
            setDistance(countdownDate - now);

            if (distance < 0 && phase === 'beforeFirstDate') {
                setCountdownDate(secondDate);
                setDistance(secondDate - now);
                setPhase('beforeSecondDate');
            }

            if (distance < 0 && phase === 'beforeSecondDate') {
                clearInterval(interval);
                setPhase('afterSecondDate');
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [now, countdownDate, distance, secondDate, phase]);
    
    function formatTime(number) {
        return String(number).padStart(2, '0');
      }

    const days = formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
    const hours = formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

    return (
        <div>
            {phase === 'beforeFirstDate' && <>Do wydarzenia pozostało: <br /><Countdown>{days}:{hours}:{minutes}:{seconds}</Countdown></>}
            {phase === 'beforeSecondDate' && <>Walka zaczęta, do boju! <br /><Countdown>{days}:{hours}:{minutes}:{seconds}</Countdown></>}
            {phase === 'afterSecondDate' && <>Dziękujemy za udział!</>}
        </div>
    );
};

export default CountdownTimer;