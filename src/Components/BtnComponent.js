import React from 'react';

function BtnComponent(props) {
  return (
    <div>

    {(props.status === 0)?
    
        <button className="stopwatch-btn stopwatch-btn-gre"
        onClick={props.start}>Start</button> : ""
        
    }

    {(props.status === 1)?
        <div>
            <button className="stopwatch-btn stopwatch-btn-gre"
                    onDoubleClick={props.stop}>Wait</button>
            <button className="stopwatch-btn stopwatch-btn-red"
                    onClick={props.reset}>Stop</button>
            <button className="stopwatch-btn stopwatch-btn-yel"
                    onClick={props.reset}>Reset</button>
        </div> : ""
    }

    {(props.status === 2)?
        <div>
            <button className="stopwatch-btn stopwatch-btn-gre"
                    onClick={props.resume}>Start</button>
            <button className="stopwatch-btn stopwatch-btn-yel"
                    onClick={props.reset}>Reset</button>
        </div> : ""
    }
      
    </div>
  );
}

export default BtnComponent;
