import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  buttonNull: {
    margin: theme.spacing.unit,
    width:144
  },
});

function Keyboard({ 
		onPress = () => {},
		classes, 
}) {
	return (
		<div>
			<div>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress('c')}>AC</Button>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress('Backspace')}>C</Button>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress('%')}>%</Button>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress('/')}>/</Button>
			</div>
			<div>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress(1)}>1</Button>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress(2)}>2</Button>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress(3)}>3</Button>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress('*')}>*</Button> 
			</div>
			<div>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress(4)}>4</Button>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress(5)}>5</Button>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress(6)}>6</Button>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress('-')}>-</Button>
			</div>
			<div>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress(7)}>7</Button>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress(8)}>8</Button>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress(9)}>9</Button>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress('+')}>+</Button>
			</div>
			<div>
				<Button variant="outlined" color="primary" className={classes.buttonNull} onClick={() => onPress(0)}>0</Button>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress('.')}>.</Button>
				<Button variant="outlined" color="primary" className={classes.button} onClick={() => onPress('Enter')}>=</Button>
				
			</div>
		</div>
	)
}

export default withStyles(styles)(Keyboard)
