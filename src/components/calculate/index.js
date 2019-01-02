import React from 'react'
import Keyboard from '../keyboard'

class Calculate extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			result: 0
		}

		document.body.addEventListener('keydown', (event) => {
			this.handlepress(event.key)
		})	
	}

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<div className="res">{this.state.result}</div>
				<Keyboard onPress={this.handlepress} />
			</div>		
		)
	}

	handlepress = (key) => {
		let res = this.state.result.toString()

		if (key === 'Enter') {
			res = eval(res);
		} else if (key === '+' || key === '-' || key === '*' || key === '/') {
			res += key;
		} else if (key === 'Backspace' && res.length > 1) {
			res = res.slice(0, -1);
		} else if (key === 'Backspace') {
			res = '0';
		} else if (key === 'c') {
			res = '0';
		} else if (res === '0' && /\d/.test(key)) {
			res = key;
		} else if (key === '.') {
			res += key;
		} else if (/\d/.test(key)) {
			res += key;
		} else {
			console.log('wrong key', key);
		}

		this.setState({ result: res })
	}
}

export default Calculate
