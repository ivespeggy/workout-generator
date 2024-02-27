import React from "react"
import "./Plan.css"
const daysOfWeek = {
    "Monday": "星期一",
    "Tuesday": "星期二",
    "Wednesday": "星期三",
    "Thursday": "星期四",
    "Friday": "星期五",
    "Saturday": "星期六",
    "Sunday": "星期日"
  };



const weeksButtons = () => {
    return (
        Object.values(daysOfWeek).map((day,index) =>(
            <div key={index}>
                <button className="weeks-button">{day}</button>
                <br/>
            </div>
            
        ))
        
    )
}
function Plan(){
    return(
        <div>
            {weeksButtons()}
        </div>
    )
}
export default Plan