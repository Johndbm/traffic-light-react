import React from "react";

//include images into your bundle


//create your first component
const TrafficLight = () => {
	return (
		<><div id="trafficTop"></div>
		<div id="container">
			<div className="red light" onClick={() => this.setState({clickedLight: 'red'})}></div>
			<div className="yellow light" onClick={() => this.setState({clickedLight: 'yellow'})}></div>
			<div className="green light" onClick={() => this.setState({clickedLight: 'green'})}></div>
		</div></>
	);
};

export default TrafficLight;
