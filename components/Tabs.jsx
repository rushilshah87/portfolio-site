import React, { useState } from "react";

import exp from "../assets/experiences.json"

function Tabs() {

	const [activeIndex, setActiveIndex] = useState(0);
	const handleClick = (index) => setActiveIndex(index);
	const checkActive = (index, className) => activeIndex === index ? className : "";

	return (
		<div id="sub-experience">
			<ol id="experience-tabs">
				{
					exp.experiences.map((e, ix) =>
						<li className={activeIndex == ix ? 'selected tabs-selector internal-link' : 'tabs-selector internal-link'} key={ix} onClick={() => handleClick(ix)}>
							<span>
								{e.company}
							</span>
						</li>
					)
				}
			</ol>
			<div id="experience-content">
				<h2 id="experience-content-title">
					<span id="experience-content-position">
						{exp.experiences[activeIndex].position}
					</span>
					&nbsp;@&nbsp;
					<span id="experience-content-company">
						{exp.experiences[activeIndex].company}
					</span>
				</h2>
				<p id="experience-content-span">
					{exp.experiences[activeIndex].span}
				</p>
				<div>
					<ul>
						{exp.experiences[activeIndex].experiences.map((e, ix) => {
							return (
								<li key={ix}>
									{e}
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Tabs;