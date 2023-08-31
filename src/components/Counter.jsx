import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='row vh-100 justify-content-center align-items-center'>
            <div className='col-4'>
                <div className='card'>
                    <div className='card-header'>
                        <h2 className='text-center'>Counter</h2>
                    </div>
                    <div className='card-body'>
                        <h1 className='text-center'>{count}</h1>
                    </div>
                    <div className='card-footer d-flex justify-content-between'>
                        <button
                            className='btn btn-primary'
                            onClick={() => setCount(count + 1)}>
                            +
                        </button>
                        <button
                            className='btn btn-secondary'
                            onClick={() => setCount(0)}>
                            Reset
                        </button>
                        <button
                            className='btn btn-danger'
                            onClick={() => setCount(count - 1)}>
                            -
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
