import { useState } from "react";

const Task2 = () => {
    const [data, setData] = useState({ sport: "", day: "" });

    const option = ["cricket", "footeball", "hockey"];
    const days = ["weekday", "weekend"];

    const clickHandle = (e) => {
        // console.log(e.target.value);
        setData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }
    console.log(data);
    return (
        <div className="container">
            <form className="mt-4">
                <h3>Select Your Sport : </h3>
                {
                    option.map((game, ind) => (
                        <div key={ind}>
                            <label htmlFor="sport">{game} :  </label>
                            <input type="radio" name="game" id="sport" value={game} onClick={clickHandle} />
                        </div>
                    ))
                }
                <h3>Select Your Day : </h3>
                {
                    days.map((day, ind) => (
                        <div key={ind}>
                            <label htmlFor="day">{day} : </label>
                            <input type="radio" name="day" id="day" value={day} onClick={clickHandle} />
                        </div>
                    ))
                }
            </form>
            <h3>You play {data.sport} on {data.day}</h3>
        </div>
    )
}

export default Task2;