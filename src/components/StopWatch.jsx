import { useState } from "react";

const StopWatch = () => {
    const [time, setTime] = useState({
        hour: 0,
        minut: 0,
        second: 0,
        millisec: 0,
    });
    let timerID;
    function startWatch() {
        timerID = setInterval(() => {
            if (timerID.millisec !== 100) {
                setTime({ ...time, millisec: time.millisec++ });
            }
        }, 100);
    }

    return (
        <div className='row vh-100 justify-content-center align-items-center'>
            <div className='col-4'>
                <div className='card'>
                    <div className='card-header'>
                        <h2 className='text-center'>Stop Watch</h2>
                    </div>
                    <div className='card-body'>
                        <h1 className='text-center'>
                            {String(time.hour).padStart(2, 0)}:
                            {String(time.minut).padStart(2, 0)}:
                            {String(time.second).padStart(2, 0)},
                            <span style={{ fontSize: "25px" }}>
                                {String(time.millisec).padStart(2, 0)}
                            </span>
                        </h1>
                    </div>
                    <div className='card-footer d-flex justify-content-between'>
                        <button className='btn btn-outline-danger rounded-0'>
                            Reset
                        </button>
                        <button
                            className='btn btn-outline-primary rounded-0'
                            onClick={startWatch}>
                            Start
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StopWatch;
