export type Language = 'es' | 'en';

export const copy = {
	es: {
		pageLabel: 'PORTAFOLIO PERSONAL',
		title: 'Ivan Herrera',
		subtitle: 'Fullstack Developer',
		heroCopy:
			'Desarrollo soluciones completas de software con enfoque en rendimiento, escalabilidad y calidad tecnica. Mi fortaleza principal es resolver problemas complejos de negocio con implementaciones claras, mantenibles y bien guiadas por prompting de IA cuando acelera el trabajo sin perder criterio técnico.',
		primaryCta: 'Solicitar contacto',
		secondaryCta: 'Ver proyectos',
		location: 'Caracas, Venezuela',
		profileTitle: 'Perfil Profesional',
		profileCopy:
			'Programador fullstack con experiencia en aplicaciones web y moviles, participando en todas las capas del producto: arquitectura, backend, frontend, base de datos, despliegue y soporte. He trabajado en contextos de banca, productos digitales y proyectos freelance para clientes internacionales. Tambien integro prompting de IA de forma practica para acelerar discovery, prototipado, documentacion y soporte al desarrollo sin comprometer la calidad del resultado.',
		skills: {
			frontend: 'Frontend',
			backend: 'Backend',
			databases: 'Bases de Datos',
			tools: 'Herramientas',
			frontendItems: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Expo'],
			backendItems: ['NestJS', 'PHP', 'Node.js', 'REST APIs', 'Arquitectura Cliente-Servidor'],
			databaseItems: ['PostgreSQL', 'MySQL', 'SQL Server'],
			toolItems: ['GitHub', 'Solidity', 'Metamask integration', 'Prompting de IA', 'MS Office Suite'],
		},
		experienceTitle: 'Experiencia',
		experience: [
			{
				role: 'Desarrollador Principal de Aplicaciones',
				company: 'Freelancer',
				period: 'Feb 2022 - Actualidad',
				highlights: [
					'Construccion fullstack de aplicaciones: logica de negocio, backend, bases de datos y despliegue por ambientes.',
					'Desarrollo de contratos inteligentes en BNB y Ethereum, con portales web para interaccion via Metamask.',
					'Construccion de aplicaciones moviles con React Native y colaboracion en proyectos en curso.',
					'Aplicacion de prompting de IA para acelerar analisis, generacion de borradores tecnicos y soporte en tareas repetitivas.',
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
		],
		projectsTitle: 'Proyectos Destacados',
		projects: [
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
		],
		contactTitle: 'Contacto',
		contactCopy:
			'Si buscas un desarrollador fullstack con enfoque en resultados, resolucion de problemas y ownership de punta a punta, conversemos.',
		whatsappLabel: 'Contactar por WhatsApp',
		emailLabel: 'Enviar correo',
		githubLabel: 'Ver GitHub',
		creditsTitle: 'Créditos',
		creditsCopy:
			'Los íconos usados en los botones de contacto fueron tomados de Flaticon y pertenecen a sus respectivos autores.',
		esLanguage: 'Español',
		enLanguage: 'English',
		languageLabel: 'Idioma',
	},
	en: {
		pageLabel: 'PERSONAL PORTFOLIO',
		title: 'Ivan Herrera',
		subtitle: 'Fullstack Developer',
		heroCopy:
			'I build end-to-end software solutions with a focus on performance, scalability, and technical quality. My main strength is solving complex business problems with clear, maintainable implementations and practical AI prompting when it speeds up work without sacrificing technical judgment.',
		primaryCta: 'Request contact',
		secondaryCta: 'View projects',
		location: 'Caracas, Venezuela',
		profileTitle: 'Professional Profile',
		profileCopy:
			'Fullstack developer with experience in web and mobile applications, working across every layer of the product: architecture, backend, frontend, databases, deployment, and support. I have worked in banking, digital products, and freelance projects for international clients. I also apply AI prompting in a practical way to accelerate discovery, prototyping, documentation, and development support without compromising the quality of the outcome.',
		skills: {
			frontend: 'Frontend',
			backend: 'Backend',
			databases: 'Databases',
			tools: 'Tools',
			frontendItems: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Expo'],
			backendItems: ['NestJS', 'PHP', 'Node.js', 'REST APIs', 'Client-Server Architecture'],
			databaseItems: ['PostgreSQL', 'MySQL', 'SQL Server'],
			toolItems: ['GitHub', 'Solidity', 'Metamask integration', 'AI prompting', 'MS Office Suite'],
		},
		experienceTitle: 'Experience',
		experience: [
			{
				role: 'Lead Application Developer',
				company: 'Freelancer',
				period: 'Feb 2022 - Present',
				highlights: [
					'Fullstack application development: business logic, backend, databases, and environment-based deployment.',
					'Smart contract development on BNB and Ethereum, with web portals for Metamask-based interaction.',
					'Mobile app development with React Native and collaboration on ongoing projects.',
					'AI prompting used to speed up analysis, technical drafting, and support for repetitive development tasks.',
				],
			},
			{
				role: 'Application Support Analyst',
				company: 'Soluciones HGI - Citibank',
				period: 'May 2021 - Jan 2022',
				highlights: [
					'Monitoring and support of production applications with a focus on operational continuity.',
					'Requirements coordination between local and international teams.',
					'Data generation for audit reports and support requests related to databases and servers.',
				],
			},
			{
				role: 'Junior Developer',
				company: 'Soluciones HGI - Citibank',
				period: 'Feb 2019 - May 2021',
				highlights: [
					'Built and maintained client-server applications in C#.',
					'Automated and improved internal processes with Visual Basic macros.',
				],
			},
		],
		projectsTitle: 'Featured Projects',
		projects: [
			{
				title: 'Data Extractor - Levva',
				url: 'https://levva.es/es/data-extractor',
				type: 'Web Platform',
				description:
					'Contributed as a fullstack developer: built frontend and backend for a solution focused on data extraction and processing.',
			},
			{
				title: 'Ekipio - Levva',
				url: 'https://ekipio.es/es',
				type: 'Web Platform',
				description:
					'Fullstack contribution to the product, covering frontend implementation and server-side logic.',
			},
			{
				title: 'FillerRescue (Android)',
				url: 'https://play.google.com/store/apps/details?id=com.fillerrescue&pcampaignid=web_share',
				type: 'Mobile App',
				description:
					'Owned the internal logic and frontend of the mobile app, ensuring a functional and stable experience.',
			},
			{
				title: 'FillerRescue (iOS)',
				url: 'https://apps.apple.com/es/app/fillerrescue/id6751650399',
				type: 'Mobile App',
				description:
					'Implemented the logic and frontend of the iOS app to keep functional consistency across platforms.',
			},
		],
		contactTitle: 'Contact',
		contactCopy:
			'If you are looking for a fullstack developer focused on results, problem solving, and end-to-end ownership, let us talk.',
		whatsappLabel: 'Contact via WhatsApp',
		emailLabel: 'Send email',
		githubLabel: 'View GitHub',
		creditsTitle: 'Credits',
		creditsCopy:
			'The icons used in the contact buttons were taken from Flaticon and belong to their respective authors.',
		esLanguage: 'Español',
		enLanguage: 'English',
		languageLabel: 'Language',
	},
} as const;
