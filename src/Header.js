import * as React from "react"
import './Header.css'

// importing material UI components
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"

const Spacer = require('react-spacer')

function Header() {
	return (
		<AppBar position="static" style={{backgroundColor:'rgb(0,0,0)'}}>
			<Toolbar className="toolbar">
				<p className="title">SDC Design Portfolio</p>

				<Spacer width='50rem' />

				<p className="text-header">Home</p>
				<p className="text-header">About Me</p>
				<p className="text-header">Projects</p>

			</Toolbar>
		</AppBar>
	);
}
export default Header;
