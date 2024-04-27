import React, { useRef } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const Counter = ({ end, decimals, extraClass }) => {
  const countUpRef = useRef(null);

  const startCountUp = (isVisible) => {
    if (isVisible && countUpRef.current) { // Add null check here
      countUpRef.current.start();
    }
  };
  

  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
      ref={countUpRef}
    >
      {({ countUpRef }) => (
        <ReactVisibilitySensor onChange={startCountUp} delayedCall>
          {({ isVisible }) => (
            <span
              className={`count-text ${extraClass}`}
              data-from="0"
              data-to={end}
              ref={countUpRef}
            >
              {isVisible ? end : 0}
            </span>
          )}
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
