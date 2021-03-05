import dynamic from 'next/dynamic'
import React, { Component } from "react";
const NavLeft = dynamic(() => import("./navLeft"), {
	ssr: false,
  });
const NavRight = dynamic(() => import("./navRight"), {
	ssr: false,
  });
export default class Navbar extends Component {
	render() {
		return (
			<div className="navbar navbar-blue navbar-fixed">
				<NavLeft />
				<div>hims</div>
				<NavRight />
			</div>
		);
	}
}
