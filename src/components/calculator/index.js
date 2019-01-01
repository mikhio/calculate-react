import React from 'react'
import Title from '../title'
import Keyboard from '../keyboard'

class Calculator extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			result: 0
		}
	}

	render() {
		const { result } = this.state

		return (
			<div>
				<Title text={this.props.title} />
				<div className="res">{result}</div>
				<Keyboard onPress={this.handlePress} />
			</div>
		)
	}

	handlePress = (key) => {
		let res = this.state.result.toString()

		if (key === 'Enter') {
			res = eval(res)
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

export default Calculator