import { useEffect, useState } from 'react';
import './App.css';
import whatsappIcon from './assets/whatsapp.png';
import githubIcon from './assets/github.png';
import emailIcon from './assets/gmail.png';
import dayIcon from './assets/dia.png';
import nightIcon from './assets/noche.png';
import { copy, type Language } from './content';

type Theme = 'light' | 'dark';

function App() {
	const [language, setLanguage] = useState<Language>('es');
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window === 'undefined') {
			return 'light';
		}

		return window.localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light';
	});
	const text = copy[language];
	const whatsappNumber = '584126053226';
	const emailAddress = 'ivan2herrerra@gmail.com';
	const githubUrl = 'https://github.com/Ssmonks';

	useEffect(() => {
		document.body.dataset.theme = theme;
		window.localStorage.setItem('portfolio-theme', theme);
	}, [theme]);

	const whatsappMessage = encodeURIComponent(
		language === 'es'
			? 'Hola Ivan, vi tu portafolio y me gustaría contactarte por un proyecto.'
			: 'Hi Ivan, I saw your portfolio and I would like to contact you about a project.',
	);
	const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
	const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
		language === 'es' ? 'Contacto desde tu portafolio' : 'Contact from your portfolio',
	)}&body=${encodeURIComponent(
		language === 'es'
			? 'Hola Ivan, te contacto desde tu portafolio para conversar sobre un proyecto.'
			: 'Hi Ivan, I am reaching out from your portfolio to talk about a project.',
	)}`;

	return (
		<div className="portfolio-page">
			<div className="ambient-shape ambient-shape-a" aria-hidden="true" />
			<div className="ambient-shape ambient-shape-b" aria-hidden="true" />

			<header className="hero">
				<div className="hero-topbar">
					<p className="eyebrow">{text.pageLabel}</p>
					<div className="header-controls">
						<div className="language-switch" aria-label={text.languageLabel}>
							<button
								type="button"
								className={
									language === 'es'
										? 'language-button is-active'
										: 'language-button'
								}
								onClick={() => setLanguage('es')}
								aria-pressed={language === 'es'}
							>
								{text.esLanguage}
							</button>
							<button
								type="button"
								className={
									language === 'en'
										? 'language-button is-active'
										: 'language-button'
								}
								onClick={() => setLanguage('en')}
								aria-pressed={language === 'en'}
							>
								{text.enLanguage}
							</button>
						</div>
						<button
							type="button"
							className={theme === 'dark' ? 'theme-button is-dark' : 'theme-button'}
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							aria-pressed={theme === 'dark'}
							aria-label={
								theme === 'dark'
									? language === 'es'
										? 'Activar modo claro'
										: 'Enable light mode'
									: language === 'es'
										? 'Activar modo nocturno'
										: 'Enable dark mode'
							}
						>
							<img
								src={theme === 'dark' ? nightIcon : dayIcon}
								alt=""
								aria-hidden="true"
								className={theme === 'dark' ? 'theme-button-icon is-night' : 'theme-button-icon is-day'}
							/>
						</button>
					</div>
				</div>
				<h1>
					{text.title}
					<span>{text.subtitle}</span>
				</h1>
				<p className="hero-copy">{text.heroCopy}</p>
				<div className="hero-cta">
					<a href="#contacto" className="btn btn-primary">
						{text.primaryCta}
					</a>
					<a href="#proyectos" className="btn btn-ghost">
						{text.secondaryCta}
					</a>
				</div>
				<ul className="hero-meta">
					<li>{text.location}</li>
				</ul>
			</header>

			<main>
				<section className="panel">
					<h2>{text.profileTitle}</h2>
					<p>{text.profileCopy}</p>
				</section>

				<section className="panel stack-grid">
					<div>
						<h2>{text.skills.frontend}</h2>
						<div className="chip-group">
							{text.skills.frontendItems.map((item) => (
								<span key={item} className="chip">
									{item}
								</span>
							))}
						</div>
					</div>
					<div>
						<h2>{text.skills.backend}</h2>
						<div className="chip-group">
							{text.skills.backendItems.map((item) => (
								<span key={item} className="chip">
									{item}
								</span>
							))}
						</div>
					</div>
					<div>
						<h2>{text.skills.databases}</h2>
						<div className="chip-group">
							{text.skills.databaseItems.map((item) => (
								<span key={item} className="chip">
									{item}
								</span>
							))}
						</div>
					</div>
					<div>
						<h2>{text.skills.tools}</h2>
						<div className="chip-group">
							{text.skills.toolItems.map((item) => (
								<span key={item} className="chip">
									{item}
								</span>
							))}
						</div>
					</div>
				</section>

				<section className="panel">
					<h2>{text.experienceTitle}</h2>
					<div className="timeline">
						{text.experience.map((job) => (
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
					<h2>{text.projectsTitle}</h2>
					<div className="project-grid">
						{text.projects.map((project) => (
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
									{language === 'es' ? 'Ver proyecto' : 'View project'}
								</a>
							</article>
						))}
					</div>
				</section>
			</main>

			<footer className="panel contact">
				<div id="contacto" />
				<h2>{text.contactTitle}</h2>
				<p>{text.contactCopy}</p>
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
						{text.whatsappLabel}
					</a>
					<a href={emailUrl} className="btn btn-ghost">
						<img src={emailIcon} alt="" aria-hidden="true" className="btn-icon" />
						{text.emailLabel}
					</a>
					<a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
						<img src={githubIcon} alt="" aria-hidden="true" className="btn-icon" />
						{text.githubLabel}
					</a>
				</div>
			</footer>

			<section className="panel credits">
				<h2>{text.creditsTitle}</h2>
				<p>{text.creditsCopy}</p>
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
					<li>
						<a
							href="https://www.flaticon.es/iconos-gratis/modo-oscuro"
							target="_blank"
							rel="noreferrer"
						>
							Modo-oscuro iconos creados por Muhammad_Usman - Flaticon
						</a>
					</li>
				</ul>
			</section>
		</div>
	);
}

export default App;
