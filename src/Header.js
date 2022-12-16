import * as React from "react"
import './Header.css'

// importing material UI components
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"

function Header() {
	return (
		<AppBar position="static" style={{backgroundColor:'rgb(0,0,0)'}}>
			<Toolbar className="toolbar">
				<p className="title">Website Design Portfolio</p>
			</Toolbar>
		</AppBar>
	);
}
export default Header;
