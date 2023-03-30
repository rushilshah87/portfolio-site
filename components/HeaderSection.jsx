import React from "react";
import AnimeRushil from "../assets/anime_rushil2.png"

function HeaderSection() {
	return (
		<div id="sub-header">
			<div className="floatleft">
				<h1 id="header-welcome">
					Welcome.
				</h1>
				<div>
					<p id="header-intro">
						Hi. 
						I'm a recent college grad currently working in the finance field.
						<br/>
						I graduated from UNC Chapel Hill in May 2022 with a BS in Business Admin and a second major in Computer Science.
						<br/>
						{/* I love solving problems in code and creating top-notch, visually appealing solutions. */}
					</p>
				</div>
			</div>
			<div className="floatleft" id="header-img-container">
				<img id="header-img" src={AnimeRushil}></img>
			</div>
		</div>
	)
}

export default HeaderSection;