import { useEffect, useRef, useState } from 'react'
import Countdown from 'react-countdown'
import './style.css'

const GunAnimation = (props) => {
    // const [nowDate, setNowDate] = useState(Date.now())
    // const clockRef = useRef()

    const idList = [
        // 'timeCounter',
        'gun',
        'hammer',
        'trigger',
        'clip',
        'main_content',
    ]

    const oldIdList = [
        // 'timeCounter-animation',
        'gun-animation',
        'hammer-animation',
        'trigger-animation',
        'clip-animation',
        'main_content-animation',
    ]

    // const renderer = (props) => {
    //     return (
    //         <div className={props.isStart === 'group' ? "timeCounter timeCounter-animation" : "timeCounter"} id="timeCounter">
    //             {(props.total / 1000).toFixed(2)}
    //         </div>
    //     )
    // }

    const removeClassName = (removeIdList) => {
        for (let i = 0; i < removeIdList.length; i++) {
            const el = document.getElementById(idList[i])
            if (el !== null) {
                el.classList.remove(removeIdList[i])
                void el.offsetWidth
                void el.offsetHeight
            }
        }
    }

    const addClassName = (idList, oldIdList) => {
        for (let i = 0; i < idList.length; i++) {
            const el = document.getElementById(idList[i])
            el.classList.add(oldIdList[i])
        }
    }

    // const handleStart = () => clockRef.current.start()

    const resetAnimation = () => {
        removeClassName(oldIdList)
        addClassName(idList, oldIdList)
        // setNowDate(Date.now())
        // handleStart()
        props.setGunStart(false)
    }

    useEffect(() => {
        if (props.isStart === 'solo' && props.gunStart) {
            resetAnimation()
        }
    }, [props.isStart, props.gunStart])

    return (
        <div className="App">
            <header className="App-header">
                {/* <Countdown
                    date={nowDate + 3000}
                    intervalDelay={0}
                    precision={2}
                    renderer={renderer}
                    autoStart={false}
                    ref={clockRef}
                /> */}
                <div className="main_content" id="main_content">
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
                        className="hammer"
                        id="hammer"
                        draggable={false}
                    />
                    <img
                        src="assets/trigger.png"
                        alt="trigger"
                        className="trigger"
                        id="trigger"
                        draggable={false}
                    />
                    <div className="clip-content">
                        <div className="clip" id="clip" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default GunAnimation
