import { PortfolioProject, TechItem, ServiceItem } from '../types';

export const AVATAR_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1UjK5Yzek55EKuralfb6sQtXBcNq47yuYTTGgL94-lHJ_n09bZZ3BedWmOchnWEnGd74kQJU-swJf5S3AJGw9lFi6CnFlKVYam_TT3kPVC_yWemOFi8sMMPhXGaIVuJmWBSeBH4aX0wj4aDKVCztVN9vpJ_Degsxto3r7MpTIa72kHT-T72Mqn0lq77TaaSdJY6UWJu4tLaTVXwH9OFRMmdq1DedzsO5VTPVFLr6PKGWX_zmtJtpdhuIzDXcYxgMszSGrXvh1E';

export const HERO_OFFICE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXT38d1rnq4VFIbKjOZMNe287GJF2mbYUbIBz2eiDPbTDLppBn6eaQl1ikQ9gSSlm_zAdRSN0PgIuNhWdUnk-7aqeBfQvuCXBXY2-LvDWc-JYoNgSHWsE--69xXApjHJXKbUgPBBtI5lUYaTp9quh3q9adtsR7VIFkWTGbPkl4_RVPZ_S774Xu2eEfgZNEn_cP8iBgFviDFWreKf5RpH14UlyTFMvYjn5-CA4sBiO6r4GRE8aqfUU';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'jr-ingenieria',
    title: 'JR Ingeniería Eléctrica',
    subtitle: 'Sistema de Análisis de Ventas y Gestión de Procesos',
    category: 'erp',
    categoryLabel: 'Plataformas ERP',
    tags: ['Ingeniería', 'CRM / ERP', 'Notificaciones'],
    description: 'Sistema integral para análisis de reportes de venta y seguimiento de procesos administrativos y de ingeniería, equipado con notificaciones automáticas.',
    fullOverview: 'Plataforma desarrollada para optimizar el flujo de trabajo de JR Ingeniería Eléctrica. Permite la toma de decisiones basada en reportes de ventas, seguimiento detallado de los proyectos desde la administración hasta la ingeniería, y mantiene informados a los clientes y al equipo mediante un módulo omnicanal de alertas por WhatsApp y Email.',
    architectureDetails: [
      'Módulo de análisis de reportes de venta en tiempo real.',
      'Tracking y control de procesos (Administración e Ingeniería).',
      'Motor de notificaciones automatizadas vía WhatsApp API y Email.'
    ],
    imageUrl: '/jr-dashboard.png',
    imageAlt: 'Dashboard CRM JR Ingeniería Eléctrica',
    gallery: [
      '/jr-dashboard.png',
      '/jr-login.png',
      '/jr-tasks.png'
    ],
    clientIndustry: 'Ingeniería Eléctrica y Construcción',
    deliveryYear: '2026',
    stack: ['React', 'Node.js', 'SQL Server', 'WhatsApp API', 'SMTP'],
    metrics: {
      primaryLabel: 'Eficiencia de Procesos',
      primaryValue: '+120%',
      secondaryLabel: 'Notificaciones Enviadas',
      secondaryValue: 'Automático'
    }
  }
];

export const TECH_STACK: TechItem[] = [
  {
    id: 'angular',
    name: 'Angular',
    category: 'frontend',
    description: 'Framework robusto para SPAs empresariales con tipado estricto y modularidad.',
    iconName: 'code',
    badgeColor: '#ef4444',
    accentColor: '#ef4444',
    features: ['Inyección de Dependencias', 'RxJS Reactivo', 'Estructura Enterprise-grade'],
    metrics: [
      { label: 'Tiempo de Carga', value: '< 0.8s' },
      { label: 'Escalabilidad', value: '100k+ LOC' }
    ]
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    description: 'Interfaces dinámicas y componentes reactivos de máxima fidelidad y velocidad.',
    iconName: 'javascript',
    badgeColor: '#5a9bd5',
    accentColor: '#5a9bd5',
    features: ['Virtual DOM optimizado', 'Server Components', 'Ecosistema masivo'],
    metrics: [
      { label: 'FPS Render', value: '60 FPS' },
      { label: 'Adopción', value: '#1 UI Tech' }
    ]
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    description: 'Backend asíncrono de alto rendimiento con arquitecturas non-blocking I/O.',
    iconName: 'terminal',
    badgeColor: '#34b563',
    accentColor: '#34b563',
    features: ['Event Loop de alta concurrencia', 'TypeScript Nativo', 'Microservicios ultraligeros'],
    metrics: [
      { label: 'RPS (Req/Sec)', value: '45,000+' },
      { label: 'Latencia P99', value: '4ms' }
    ]
  },
  {
    id: 'dotnet',
    name: '.NET',
    category: 'backend',
    description: 'Ecosistema empresarial seguro y escalable para misión crítica de nivel bancario.',
    iconName: 'integration_instructions',
    badgeColor: '#7db3d9',
    accentColor: '#7db3d9',
    features: ['C# 12 & CLR optimizado', 'Seguridad Enterprise', 'Microservicios gRPC'],
    metrics: [
      { label: 'Throughput', value: 'High Perf' },
      { label: 'Seguridad', value: 'FIPS / ISO' }
    ]
  },
  {
    id: 'sqlserver',
    name: 'SQL Server',
    category: 'database',
    description: 'Gestión de datos relacionales íntegros con transacciones ACID y alta disponibilidad.',
    iconName: 'database',
    badgeColor: '#34b563',
    accentColor: '#34b563',
    features: ['Clustering AlwaysOn', 'Columnstore Indexes', 'Encriptación TDE'],
    metrics: [
      { label: 'Disponibilidad', value: '99.999%' },
      { label: 'Consistencia', value: 'ACID Strict' }
    ]
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    description: 'Flexibilidad NoSQL para big data, esquemas dinámicos y analítica en tiempo real.',
    iconName: 'storage',
    badgeColor: '#2a9d52',
    accentColor: '#2a9d52',
    features: ['Sharding horizontal', 'Documentos JSON nativos', 'Aggregations avanzadas'],
    metrics: [
      { label: 'Escritura / seg', value: '120k IOPS' },
      { label: 'Elasticidad', value: 'Auto-scale' }
    ]
  },
  {
    id: 'azurefunctions',
    name: 'Azure Functions',
    category: 'cloud',
    description: 'Arquitectura Serverless impulsada por eventos en la nube con escalabilidad instantánea.',
    iconName: 'cloud',
    badgeColor: '#34b563',
    accentColor: '#34b563',
    features: ['Facturación por milisegundo', 'Triggers de Event Hubs', 'Cero mantenimiento'],
    metrics: [
      { label: 'Cold Start', value: '< 150ms' },
      { label: 'Escala Máx', value: '10k nodes' }
    ]
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'custom-systems',
    title: 'Sistemas a la Medida',
    subtitle: 'CRM / ERP / PORTALES',
    description: 'Plataformas empresariales diseñadas desde cero para integrarse perfectamente con los flujos de trabajo específicos de su organización.',
    icon: 'architecture',
    tags: ['Arquitectura Limpia', 'Microservicios', 'Escalabilidad'],
    capabilities: [
      'Modelado de dominio centrado en el negocio (DDD).',
      'Arquitectura modular desacoplada para evolución continua.',
      'Auditoría y trazabilidad integral de eventos corporativos.',
      'Integración con plataformas legacy y APIs de terceros.'
    ]
  },
  {
    id: 'mobile-apps',
    title: 'Aplicaciones Móviles',
    subtitle: 'REACT NATIVE / ELECTRON',
    description: 'Experiencias nativas de alto rendimiento para iOS, Android y escritorio. Código unificado para un time-to-market acelerado.',
    icon: 'devices',
    tags: ['Cross-Platform', 'UI/UX Avanzado', 'Offline First'],
    capabilities: [
      'Sincronización en segundo plano con persistencia local cifrada.',
      'Animaciones a 60 FPS con diseño responsivo premium.',
      'Soporte biométrico y notificaciones push segmentadas.',
      'Publicación automatizada con pipelines CI/CD de App Store y Play Store.'
    ]
  },
  {
    id: 'cloud-infra',
    title: 'Infraestructura y Cloud',
    subtitle: 'AWS / AZURE / GCP',
    description: 'Despliegues robustos, seguros y auto-escalables. Migración a la nube, DevOps y optimización de recursos continuos.',
    icon: 'cloud',
    tags: ['Alta Disponibilidad', 'Seguridad', 'DevOps & IaC'],
    capabilities: [
      'Infraestructura como código (Terraform / Bicep / Pulumi).',
      'Monitoreo 24/7 con observabilidad distribuida (OpenTelemetry).',
      'Políticas de Zero Trust Network Access y firewalls perimetrales.',
      'Optimización de costos cloud FinOps con reducción del 30-50%.'
    ]
  }
];
