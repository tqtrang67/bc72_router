import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<div>
			<NavLink to="/" className="btn btn-primary mx-3">
				Home
			</NavLink>
			<NavLink to="/use-effect" className="btn btn-primary">
				UseEffect
			</NavLink>
		</div>
	);
}
