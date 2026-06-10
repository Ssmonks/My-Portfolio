import './App.css';
import whatsappIcon from './assets/whatsapp.png';
import githubIcon from './assets/github.png';
import emailIcon from './assets/gmail.png';

function App() {
	const whatsappNumber = '584126053226';
	const emailAddress = 'ivan2herrerra@gmail.com';
	const githubUrl = 'https://github.com/Ssmonks';
	const whatsappMessage = encodeURIComponent(
		'Hola Ivan, vi tu portafolio y me gustaría contactarte por un proyecto.'
	);
	const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
	const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
		'Contacto desde tu portafolio'
	)}&body=${encodeURIComponent(
		'Hola Ivan, te contacto desde tu portafolio para conversar sobre un proyecto.'
	)}`;

	const skills = {
		frontend: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Expo'],
		backend: ['NestJS', 'PHP', 'Node.js', 'REST APIs', 'Arquitectura Cliente-Servidor'],
		databases: ['PostgreSQL', 'MySQL', 'SQL Server'],
		tools: ['GitHub', 'Solidity', 'Metamask integration', 'MS Office Suite'],
	};

	const experience = [
		{
			role: 'Desarrollador Principal de Aplicaciones',
			company: 'Freelancer',
			period: 'Feb 2022 - Actualidad',
			highlights: [
				'Construccion fullstack de aplicaciones: logica de negocio, backend, bases de datos y despliegue por ambientes.',
				'Desarrollo de contratos inteligentes en BNB y Ethereum, con portales web para interaccion via Metamask.',
				'Construccion de aplicaciones moviles con React Native y colaboracion en proyectos en curso.',
			],
		},
		{
			role: 'Soporte de Aplicaciones',
			company: 'Soluciones HGI - Citibank',
			period: 'May 2021 - Ene 2022',
			highlights: [
				'Monitoreo y soporte de aplicaciones en produccion con enfoque en continuidad operativa.',
				'Gestion de requerimientos entre equipos nacionales e internacionales.',
				'Generacion de datos para reportes de auditoria y atencion de solicitudes sobre BD/servidor.',
			],
		},
		{
			role: 'Desarrollador Junior',
			company: 'Soluciones HGI - Citibank',
			period: 'Feb 2019 - May 2021',
			highlights: [
				'Construccion y mantenimiento de aplicaciones cliente-servidor en C#.',
				'Automatizacion y mejoras con macros en Visual Basic para procesos internos.',
			],
		},
	];

	const projects = [
		{
			title: 'Data Extractor - Levva',
			url: 'https://levva.es/es/data-extractor',
			type: 'Web Platform',
			description:
				'Participacion como programador fullstack: construccion de frontend y backend para una solucion enfocada en extraccion y procesamiento de datos.',
		},
		{
			title: 'Ekipio - Levva',
			url: 'https://ekipio.es/es',
			type: 'Web Platform',
			description:
				'Participacion fullstack en el desarrollo del producto, cubriendo implementacion del frontend y la logica de servidor.',
		},
		{
			title: 'FillerRescue (Android)',
			url: 'https://play.google.com/store/apps/details?id=com.fillerrescue&pcampaignid=web_share',
			type: 'Mobile App',
			description:
				'Responsable de la logica interna y del frontend de la aplicacion movil, asegurando una experiencia funcional y estable.',
		},
		{
			title: 'FillerRescue (iOS)',
			url: 'https://apps.apple.com/es/app/fillerrescue/id6751650399',
			type: 'Mobile App',
			description:
				'Implementacion de logica y frontend de la app en iOS para mantener consistencia funcional entre plataformas.',
		},
	];

	return (
		<div className="portfolio-page">
			<div className="ambient-shape ambient-shape-a" aria-hidden="true" />
			<div className="ambient-shape ambient-shape-b" aria-hidden="true" />

			<header className="hero">
				<p className="eyebrow">PORTAFOLIO PERSONAL</p>
				<h1>
					Ivan Herrera
					<span>Fullstack Developer</span>
				</h1>
				<p className="hero-copy">
					Desarrollo soluciones completas de software con enfoque en rendimiento,
					escalabilidad y calidad tecnica. Mi fortaleza principal es resolver
					problemas complejos de negocio con implementaciones claras y mantenibles.
				</p>
				<div className="hero-cta">
					<a href="#contacto" className="btn btn-primary">
						Solicitar contacto
					</a>
					<a href="#proyectos" className="btn btn-ghost">
						Ver proyectos
					</a>
				</div>
				<ul className="hero-meta">
					<li>Caracas, Venezuela</li>
				</ul>
			</header>

			<main>
				<section className="panel">
					<h2>Perfil Profesional</h2>
					<p>
						Programador fullstack con experiencia en aplicaciones web y moviles,
						participando en todas las capas del producto: arquitectura, backend,
						frontend, base de datos, despliegue y soporte. He trabajado en contextos
						de banca, productos digitales y proyectos freelance para clientes
						internacionales.
					</p>
				</section>

				<section className="panel stack-grid">
					<div>
						<h2>Frontend</h2>
						<div className="chip-group">
							{skills.frontend.map((item) => (
								<span key={item} className="chip">
									{item}
								</span>
							))}
						</div>
					</div>
					<div>
						<h2>Backend</h2>
						<div className="chip-group">
							{skills.backend.map((item) => (
								<span key={item} className="chip">
									{item}
								</span>
							))}
						</div>
					</div>
					<div>
						<h2>Bases de Datos</h2>
						<div className="chip-group">
							{skills.databases.map((item) => (
								<span key={item} className="chip">
									{item}
								</span>
							))}
						</div>
					</div>
					<div>
						<h2>Herramientas</h2>
						<div className="chip-group">
							{skills.tools.map((item) => (
								<span key={item} className="chip">
									{item}
								</span>
							))}
						</div>
					</div>
				</section>

				<section className="panel">
					<h2>Experiencia</h2>
					<div className="timeline">
						{experience.map((job) => (
							<article key={job.role + job.period} className="timeline-item">
								<div className="timeline-head">
									<h3>{job.role}</h3>
									<p>
										{job.company} | {job.period}
									</p>
								</div>
								<ul>
									{job.highlights.map((point) => (
										<li key={point}>{point}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</section>

				<section id="proyectos" className="panel">
					<h2>Proyectos Destacados</h2>
					<div className="project-grid">
						{projects.map((project) => (
							<article key={project.title} className="project-card">
								<p className="project-type">{project.type}</p>
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<a
									href={project.url}
									target="_blank"
									rel="noreferrer"
									className="btn btn-ghost project-link"
								>
									Ver proyecto
								</a>
							</article>
						))}
					</div>
				</section>
			</main>

			<footer className="panel contact">
				<div id="contacto" />
				<h2>Contacto</h2>
				<p>
					Si buscas un desarrollador fullstack con enfoque en resultados, resolucion
					de problemas y ownership de punta a punta, conversemos.
				</p>
				<div className="contact-actions">
					<a
						href={whatsappUrl}
						target="_blank"
						rel="noreferrer"
						className="btn btn-primary"
					>
						<img
							src={whatsappIcon}
							alt=""
							aria-hidden="true"
							className="btn-icon btn-icon-whatsapp"
						/>
						Contactar por WhatsApp
					</a>
					<a href={emailUrl} className="btn btn-ghost">
						<img src={emailIcon} alt="" aria-hidden="true" className="btn-icon" />
						Enviar correo
					</a>
					<a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
						<img src={githubIcon} alt="" aria-hidden="true" className="btn-icon" />
						Ver GitHub
					</a>
				</div>
			</footer>

			<section className="panel credits">
				<h2>Créditos</h2>
				<p>
					Los íconos usados en los botones de contacto fueron tomados de Flaticon y
					pertenecen a sus respectivos autores.
				</p>
				<ul className="credits-list">
					<li>
						<a
							href="https://www.flaticon.es/iconos-gratis/whatsapp"
							target="_blank"
							rel="noreferrer"
						>
							Whatsapp iconos creados por Freepik - Flaticon
						</a>
					</li>
					<li>
						<a
							href="https://www.flaticon.es/iconos-gratis/github"
							target="_blank"
							rel="noreferrer"
						>
							Github iconos creados por Pixel perfect - Flaticon
						</a>
					</li>
					<li>
						<a
							href="https://www.flaticon.es/iconos-gratis/correo-electronico"
							target="_blank"
							rel="noreferrer"
						>
							Correo electrónico iconos creados por pictogramer - Flaticon
						</a>
					</li>
				</ul>
			</section>
		</div>
	);
}

export default App;
