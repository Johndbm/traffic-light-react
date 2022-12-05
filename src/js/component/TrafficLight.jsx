import React, {useState} from "react";

//include images into your bundle


//create your first component
const TrafficLight = () => {
	const [lightRed, setLightRed] = useState("")
	const [lightYellow, setLightYellow] = useState("")
	const [lightGreen, setLightGreen] = useState("")
	const [lightNone, setLightNone] = useState("")

	const onActive = (color) => {
		if (color == "red") {
			setLightRed("activeL");
			setLightYellow("");
			setLightGreen("");
		} else if (color == "yellow"){
			setLightRed("");
			setLightYellow("activeL");
			setLightGreen("");
		} else if (color == "green"){
			setLightRed("");
			setLightYellow("");
			setLightGreen("activeL");
		} // Reset button logic
		else if (color == "none"){
			setLightRed("");
			setLightYellow("");
			setLightGreen("");
		}
	};

		return (
			<>
			{/* className = activeL (switch's between active light color) */}
				<div className="traffic-container">
					<div className="traffic-pole"></div>
					<div className="light-container">
						<div 
							className={`light red ${lightRed}`} 
							onClick={ () => onActive("red")} 
							></div>
						<div className={`light yellow ${lightYellow}`} 
							onClick={ () => onActive("yellow")}
							></div>
						<div className={`light green ${lightGreen}`} 
							onClick={ () => onActive("green")}
							></div>
					</div>
					{/* reset button */}
					<button className={`button none ${lightNone}`}
						onClick={ () => onActive("none")}
					>reset</button>
				</div>
			</>
		);
};

export default TrafficLight;