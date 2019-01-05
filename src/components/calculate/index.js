import React from 'react'
import Keyboard from '../keyboard'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 400,
   	margin: '20px auto',
  },
});

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

		const { classes } = this.props

		return (
			<div>
				<Paper className={classes.root} elevation={1}>
					<Typography variant="h4" component="h3">{this.props.title}</Typography>
					<Typography variant="h5" component="h3" className="res">{this.state.result}</Typography>
					<Keyboard onPress={this.handlepress} />
				</Paper>
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
		} else if (key === '%') { 
			res = res / 100
		} else if (/\d/.test(key)) {
			res += key;
		} else {
			console.log('wrong key', key);
		}

		this.setState({ result: res })
	}
}

export default withStyles(styles)(Calculate)
