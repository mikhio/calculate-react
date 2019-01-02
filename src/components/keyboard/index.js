import React from 'react'

function Keyboard({ onPress = () => {} }) {
	return (
		<div>
			<div>
				<button className="clear" onClick={() => onPress('c')}>AC</button>
				<button className="delet" onClick={() => onPress('Backspace')}>C</button>
				<button className="del" onClick={() => onPress('/')}>/</button>
			</div>
			<div>
				<button className="one" onClick={() => onPress(1)}>1</button>
				<button className="two" onClick={() => onPress(2)}>2</button>
				<button className="three" onClick={() => onPress(3)}>3</button>
				<button className="um" onClick={() => onPress('*')}>*</button> 
			</div>
			<div>
				<button className="four" onClick={() => onPress(4)}>4</button>
				<button className="five" onClick={() => onPress(5)}>5</button>
				<button className="six" onClick={() => onPress(6)}>6</button>
				<button className="minus" onClick={() => onPress('-')}>-</button>
			</div>
			<div>
				<button className="seven" onClick={() => onPress(7)}>7</button>
				<button className="eight" onClick={() => onPress(8)}>8</button>
				<button className="nine" onClick={() => onPress(9)}>9</button>
				<button className="plus" onClick={() => onPress('+')}>+</button>
			</div>
			<div>
				<button className="null" onClick={() => onPress(0)}>0</button>
				<button className="equally" onClick={() => onPress('Enter')}>=</button>
				<button className="dot" onClick={() => onPress('.')}>.</button>
			</div>
		</div>
	)
}

export default Keyboard
