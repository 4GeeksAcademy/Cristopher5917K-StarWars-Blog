import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					src="https://www.goodvinilos.com/61003/vinilo-logo-star-wars.jpg"
					className="img-style"
					alt="Star Wars Logo"
				/>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuClickable"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<i className="fa-regular fa-heart p-2"></i> {store.favorites.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuClickable">
						{store.favorites.map((item) => (
							<li key={item.uid} className="p-2 d-flex justify-content-between align-self-center">
								{item.name}
								<i
									onClick={() => actions.deleteFavorite(item.uid)}
									className="fa-solid fa-trash me-2 align-self-center"
								></i>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;