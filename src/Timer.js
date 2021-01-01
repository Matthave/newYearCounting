import React, {useState, useEffect} from 'react'

const Timer = () => {
    let [endOfYear, setEndOfYear ] = useState(false);

    useEffect(() => {
        initFunc();
    }, []);

    const initFunc = () => {
       let interval = setInterval(() => {
            const spanD = document.querySelector('.spanD')
            const spanH = document.querySelector('.spanH')
            const spanM = document.querySelector('.spanM')
            const spanS = document.querySelector('.spanS')
      
            const currentTime = new Date().getTime();
            const startTime = new Date("2021-01-01 00:00:00");
            const endTime = new Date("2022-01-01 00:00:00");
      
            const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (currentTime / (1000 * 60 * 60 * 24)));
            const hours = Math.floor((endTime / (1000 * 60 * 60) - currentTime / (1000 * 60 * 60)) % 24)
            const minutes = Math.floor((endTime / (1000 * 60) - currentTime / (1000 * 60)) % 60)
            const seconds = Math.floor((endTime / 1000 - currentTime / 1000) % 60)
      
            spanD.textContent = days <= 9 ? `0${days}` : days
            spanH.textContent = hours <= 9 ? `0${hours}` : hours
            spanM.textContent = minutes <= 9 ? `0${minutes}` : minutes
            spanS.textContent = seconds <= 9 ? `0${seconds}` : seconds
      
            const oneYear = 31536000;
            // const restTimeInSecond = (endTime - currentTime) / 1000;
            const goneTimeInSecond = (currentTime - startTime) / 1000;

            const restTimeInPercet = (goneTimeInSecond / oneYear) * 100;
        

            const barInBar = document.querySelector(".loading__barInBar");
            barInBar.style.width = `${restTimeInPercet}%`;

            const textInBar = document.querySelector(".loading__text");
            textInBar.textContent = `${restTimeInPercet.toFixed(5)}%`;

            if(hours === 0 && minutes === 0 && seconds === 0){
                endOfYear = true;
            }

            if(endOfYear){
                const timer = document.querySelector(".timer");
                timer.style.display = "none";

                const loading = document.querySelector(".loading");
                loading.style.display = "none";


                setTimeout(() => {
                    const end = document.querySelector(".end");
                    end.style.display = "flex";
                }, 1);

                
                setTimeout(() => {
                    const first = document.querySelector(".end__first");
                    first.classList.add("end__first--onPosition");
                }, 1000);


                setTimeout(() => {
                    const second = document.querySelector(".end__second");
                    second.classList.add("end__second--onPosition");
                }, 1500);


                setTimeout(() => {
                    const third = document.querySelector(".end__third");
                    third.classList.add("end__third--onPosition");
                }, 2000);


                setTimeout(() => {
                    const fourth = document.querySelector(".end__fourth");
                    fourth.classList.add("end__fourth--onPosition");
                }, 2500);


                setTimeout(() => {
                    const end = document.querySelector(".end");
                    end.style.background = "#000";
                }, 7000);
            }

          }, 1000);
    }

    return (
        <div className="wrapper">
        <div className="timer">
            <div className="partContainer">
                <span className="spanD"></span>
                <span className="which">D</span>
            </div>

            <div className="partContainer">
                <span className="spanH"></span>
                <span className="which">H</span>
            </div>

            <div className="partContainer">
                <span className="spanM"></span>
                <span className="which">M</span>
            </div>

            <div className="partContainer">
                <span className="spanS"></span>
                <span className="which">S</span>
            </div>
        </div>
        
        <div className="loading">
            <h1 className="loading__title">2022</h1>
            <div className="loading__bar">
                <div className="loading__barInBar"></div>
                <h2 className="loading__text"></h2>
            </div>
            <h2 className="loading__progress">In Progress</h2>
        </div>

        {/* END OF YEAR */}
        <div className="end">
        <h1 className="end__first">THE END</h1>
        <h1 className="end__second">NOTHING GONNA CHANGE</h1>
        <h1 className="end__third">GO SLEEP</h1>
        <h1 className="end__fourth">FUCK YOU AND I'LL SEE YOU TOMORROW</h1>
        </div>
      </div>
    )
}

export default Timer
