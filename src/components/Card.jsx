import starIcon from "../assets/icon-star.svg"
import illustration from "../assets/illustration-thank-you.svg"
import {useState} from "react";
export default function Card() {
    const [selected, setSelected] = useState("")
    const [isSent, setIsSent] = useState(false)

    function click() {
        if(selected) {
            setIsSent(true);
        }
    }

    if(isSent) {
        return (
            <div className="card result">
                <div className="illustration">
                    <img src={illustration} alt="Illustration"/>
                </div>
                <div className="feedback">
                    You selected {selected} out of 5
                </div>
                <div className="title result">
                    Thank you!
                </div>
                <div className="description result">
                    We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
                </div>
            </div>
        )
    } else {
        return (
            <div className="card">
                <div className="image">
                    <img src={starIcon} className="star" alt="Star image"/>
                </div>
                <div className="title">
                    How did we do?
                </div>
                <div className="description">
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                </div>
                <div className="points">
                    <Point point="1" selected={selected} setter={setSelected}/>
                    <Point point="2" selected={selected} setter={setSelected}/>
                    <Point point="3" selected={selected} setter={setSelected}/>
                    <Point point="4" selected={selected} setter={setSelected}/>
                    <Point point="5" selected={selected} setter={setSelected}/>
                </div>

                <button onClick={click} className="submit">SUBMIT</button>

            </div>
        )
    }
}

function Point({point, selected, setter}) {
    function click() {
        setter(point)
    }
    let state =  point === selected ? "selected" : ""

    return (
        <button onClick={click} className={`point ${state}`}>{point}</button>
    )
}