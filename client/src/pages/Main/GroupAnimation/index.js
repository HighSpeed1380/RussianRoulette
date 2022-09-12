import { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";
import "./style.css";

const GroupAnimation = () => {
  const [date, setDate] = useState(Date.now());
  const clockRefGroup = useRef();

  const renderer = (props) => {
    return (
      <div className="timeCounter timeCounter-animation-group" id="timeCounter">
        {(props.total / 1000).toFixed(2)}
      </div>
    );
  };

  const handleStartGroup = () => clockRefGroup.current.start();

  useEffect(() => {
    handleStartGroup();
    setInterval(() => {
      setDate(Date.now());
      handleStartGroup();
    }, 6000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Countdown
          date={date + 3000}
          intervalDelay={0}
          precision={2}
          renderer={renderer}
          autoStart={false}
          ref={clockRefGroup}
        />
        <div
          className="main_content main_content-animation-group"
          id="main_content"
        >
          <img
            src="assets/frame.png"
            alt="gun"
            className="gun"
            id="gun"
            draggable={false}
          />
          <img
            src="assets/hammer.png"
            alt="hammer"
            className="hammer hammer-animation-group"
            id="hammer"
            draggable={false}
          />
          <img
            src="assets/trigger.png"
            alt="trigger"
            className="trigger trigger-animation-group"
            id="trigger"
            draggable={false}
          />
          <div className="clip-content">
            <div className="clip clip-animation-group" id="clip" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default GroupAnimation;
