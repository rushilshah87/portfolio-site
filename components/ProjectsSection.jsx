import React from "react";
import thn_aux from "../assets/thn-aux.png"
import thn_feedbak from "../assets/thn-feedbak.png"
import thn_headlesscms from "../assets/thn-headlesscms.png"
import thn_webdev from "../assets/thn-webdev.png"
import thn_meantime from "../assets/thn-meantime.png"
import thn_zealand from "../assets/thn-zealand.png"

function ProjectsSection() {
	const projects = {
		webdev: thn_webdev,
		zealand: thn_zealand,
		aux: thn_aux,
		feedbak: thn_feedbak,
		headlesscms: thn_headlesscms,
		meantime: thn_meantime
	}

	let projectStyles = {}

	for (const key in projects) {
		projectStyles[key] = {
			backgroundImage: `url(${projects[key]})`,
			backgroundSize: 'contain',
			backgroundRepeat: 'no-repeat',
			height: '25vh'
		}
	}

	return (
		<div>
			<h1 className="section-title">
				Projects
			</h1>
			<div id="projects-wrapper">
				<div className="project-card" style={projectStyles['webdev']}>
					<div className="overlay">
						<h3> Web Dev Carolina </h3>
						<p>homepage for UNC club</p>
						<div className="project-links">
							<inline>
								<a href="https://github.com/web-dev-carolina/club-site" target="blank">github</a>
								<a href="https://home-c6ab1.web.app" target="blank">link</a>
							</inline>
						</div>
					</div>
				</div>
				<div className="project-card" style={projectStyles['zealand']}>
					<div className="overlay">
						<h3> Zealand Pinnacle 2021 </h3>
						<p>event site for pharma company</p>
						<div className="project-links">
							<inline>
								<a href="https://github.com/shah-carlton-dev/zealand-app" target="blank">github</a>
								<a href="https://zealand-site.web.app/" target="blank">link</a>
							</inline>
						</div>
					</div>
				</div>
				<div className="project-card" style={projectStyles['aux']}>
					<div className="overlay">
						<h3> Aux Tunes </h3>
						<p>homepage for startup launching soon</p>
						<div className="project-links">
							<inline>
								<a href="https://github.com/shah-carlton-dev/aux-collab" target="blank">github</a>
								<a href="https://www.auxtunes.com/" target="blank">link</a>
							</inline>
						</div>
					</div>
				</div>
				<div className="project-card" style={projectStyles['feedbak']}>
					<div className="overlay">
						<h3> Feedbak </h3>
						<p>homepage for Chapel Hill-area startup</p>
						<div className="project-links">
							<inline>
								<a href="https://github.com/shah-carlton-dev/feedbak" target="blank">github</a>
								<a href="https://feedbak.web.app/" target="blank">link</a>
							</inline>
						</div>
					</div>
				</div>
				<div className="project-card" style={projectStyles['headlesscms']}>
					<div className="overlay">
						<h3> Headless CMS </h3>
						<p>content management user portal </p>
						<div className="project-links">
							<inline>
								<a href="https://github.com/web-dev-carolina/headless-cms" target="blank">github</a>
								{/* <a href="" target="blank">link</a> */}
							</inline>
						</div>
					</div>
				</div>
				<div className="project-card" style={projectStyles['meantime']}>
					<div className="overlay">
						<h3> Meantime Coffee Co </h3>
						<p>Chapel Hill student-run coffee shop</p>
						<div className="project-links">
							<inline>
								<a href="https://github.com/web-dev-carolina/meantime-coffee" target="blank">github</a>
								<a href="http://www.themeantimecoffeeco.com/" target="blank">link</a>
							</inline>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectsSection;

// projects
// web dev carolina - https://home-c6ab1.web.app/
// zealand app - https://zealand-site.web.app/
// west derma app - https://west-dermatology-reg.web.app/
// aux - https://www.auxtunes.com/
// feedbak - https://feedbak.web.app/
// headless cms - https://github.com/web-dev-carolina/headless-cms
// meantime coffee - http://www.themeantimecoffeeco.com/
// focus on franklin - https://focusonfranklin.org/