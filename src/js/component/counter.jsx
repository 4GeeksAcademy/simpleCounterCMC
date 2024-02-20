import React, { useState, useEffect } from "react";
import PropType from "prop-types";

const counterStyles = {
    bootstrap: "p-5 border border-secondary rounded-2 me-2 bg-black text-white"
}


const Counter = (props) => {
    
const [count, setCount] = useState(0);
const [count2, setCount2] = useState(0);
const [count3, setCount3] = useState(0);
const [count4, setCount4] = useState(0);
const [count5, setCount5] = useState(0);
const [count6, setCount6] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 1000);
        
        return () => clearInterval(interval);
      }, []);

      if (count === 10) {
        setCount(0);
        setCount2(count2 + 1);
      }

      if (count2 === 10) {
        setCount2(0);
        setCount3(count3 + 1);
      }

      if (count3 === 10) {
        setCount3(0);
        setCount4(count4 + 1);
      }

      if (count4 === 10) {
        setCount4(0);
        setCount5(count5 + 1);
      }

      if (count5 === 10) {
        setCount5(0);
        setCount6(count6 + 1);
      }
    return (
        <div className='bigCounter d-flex justify-content-center pt-5 pb-5 bg-black'>
            <div className= {`icon ${counterStyles.bootstrap}`}><i className="far fa-clock"></i></div>
            <div className= {`hunThousands ${counterStyles.bootstrap}`} >{count6}</div>
            <div className= {`tenThousands ${counterStyles.bootstrap}`} >{count5}</div>
            <div className= {`thousands ${counterStyles.bootstrap}`}>{count4}</div>
            <div className= {`hundreds ${counterStyles.bootstrap}`}>{count3}</div>
            <div className= {`tens ${counterStyles.bootstrap}`}>{count2}</div>
            <div className= {`seconds ${counterStyles.bootstrap}`}>{count}</div>
        </div>

    )
};
        

export default Counter;