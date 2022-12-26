import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Landing() {

	const navigate = useNavigate();
	const [fade, setFade] = useState({ fade: null })

	useEffect(() => {
		setTimeout(() => {
			setFade({ fade: 'fade-out' })
		}, 1.1 * 1000);
		setTimeout(() => {
			navigate('/home')
		}, 1.6 * 1000);
	})

	return (
		<div id="center-on-screen" className={`landing-name ` + fade.fade}>
			<span class="lighter">Hi, I'm</span> Rushil Shah
		</div>
	)

}

export default Landing