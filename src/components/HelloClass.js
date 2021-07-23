import React, { Component } from 'react'

class HelloClass extends Component{

	state = {
		fruits : [
		    {name: 'Mango', color: 'Yellow'},
		    {name: 'Orange', color: 'Green'},
		    {name: 'Apple', color: 'Red'}
		]
	}

	clickHandler = () => {
		// console.log("Hello from clickHandler");
		// alert("Hello from Clickme");
		this.setState({
			fruits : [
				{name: 'Lamborghini', color: 'Black'},
				{name: 'Mclaren', color: 'Ash'},
				{name: 'Nissan', color: 'Blue'}
			]
		})
	}
    render(){
    	return(
    		<div>
				<button onClick={this.clickHandler}> Click Me! </button>
	    		<h1>I Love { this.state.fruits[0].name } with { this.state.fruits[0].color } Color</h1>
				<h1>I Love { this.state.fruits[1].name } with { this.state.fruits[1].color } Color</h1>
				<h1>I Love { this.state.fruits[2].name } with { this.state.fruits[2].color } Color</h1>
    		</div>
    		)
    }
}

export default HelloClass