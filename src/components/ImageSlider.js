import React from "react";

/* 
	1. shallow merge
	2. async
*/

export default class ImageSlider extends React.Component {

	// Functions before render
	state = {
		images: [
			"http://www.pinimage.com/Patagon/Slide/images/12.jpg",
			"http://www.pinimage.com/Patagon/Slide/images/20.jpg",
			"http://www.pinimage.com/Patagon/Slide/images/32.jpg",
			"http://www.pinimage.com/Patagon/Slide/images/A02.jpg"
		],
		idx: 0
	};

	handelPrevious = () => { // Asynchronous (doesn't update immediately)
		console.log(this.state);
		this.setState(
			{
				idx: this.state.idx - 1 //shallow merge
			},
			// () => {
			// 	console.log(this.state) // This is so it can show the update immediately
			// }
		);
	};
	
	handleNext = () => { // Asynchronous (doesn't update immediately)
		console.log(this.state);
		this.setState(
			{
				idx: this.state.idx + 1 //shallow merge
			},
			// () => {
			// 	console.log(this.state) // This is so it can show the update immediately
			// }
		);
	};

	render () {
		return (
			<div> 

				<button onClick={this.handelPrevious}>previous</button>

				{/* Set a state  inside the onclick Rather than call a function 
				<button 
					onClick={ () => {
						this.setState({
							idx: this.state.idx - 1
						})
					}
					}>previous</button>
				*/}

				<img 
					style={{
						width:100,
						height:100
					}}	
					src={this.state.images[this.state.idx]} 
				/> 

				<button onClick={this.handleNext}>next</button>

			</div>
		);
	}
}
