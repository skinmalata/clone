
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { CardData, StatItemData, ServiceHighlightItem } from './types';
import { ArrowRightIcon, ChevronRightIcon } from './components/Icons';

const HeroSection: React.FC = () => (
  <section className="relative bg-terracon-dark-gray text-white h-[calc(100vh-160px)] min-h-[500px] max-h-[700px] flex items-center justify-center">
    <img 
      src="https://picsum.photos/seed/terraconground/1600/900" 
      alt="Construction site" 
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    />
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Exploring Success <br className="hidden sm:inline"/>From the Ground Up
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
        Terracon is an employee-owned consulting engineering firm providing environmental, facilities, geotechnical, and materials services.
      </p>
      <Button href="#" variant="primary" size="lg">
        Explore Our Solutions <ArrowRightIcon className="ml-2 w-5 h-5" />
      </Button>
    </div>
  </section>
);

const services: ServiceHighlightItem[] = [
  { id: 'env', title: 'Environmental', color: 'bg-terracon-green' },
  { id: 'fac', title: 'Facilities', color: 'bg-terracon-blue' },
  { id: 'geo', title: 'Geotechnical', color: 'bg-sky-700' }, // Using a variant of blue for variety
  { id: 'mat', title: 'Materials', color: 'bg-teal-700' }, // Using a variant of green/blue
];

const ServicesHighlightSection: React.FC = () => (
  <section className="py-16 bg-terracon-light-gray">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-terracon-text mb-2">What We Do</h2>
        <p className="text-lg text-terracon-dark-gray max-w-2xl mx-auto">
          We partner with our clients to manage risk, overcome complex challenges, and achieve their project goals with innovative, practical solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {services.map(service => (
          <a key={service.id} href="#" className={`group p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-white ${service.color} flex flex-col items-center text-center`}>
            {/* Icon placeholder - could add SVG icons here */}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm opacity-90 mb-4">Explore our {service.title.toLowerCase()} services.</p>
            <span className="mt-auto text-sm font-semibold inline-flex items-center group-hover:underline">
              Learn More <ChevronRightIcon className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"/>
            </span>
          </a>
        ))}
      </div>
      <div className="text-center">
        <Button href="#" variant="outline" size="lg">
          View All Services
        </Button>
      </div>
    </div>
  </section>
);

const stats: StatItemData[] = [
  { value: '5,500+', label: 'Employee-Owners' },
  { value: '175+', label: 'Offices Nationwide' },
  { value: '60+', label: 'Years of Experience' },
  { value: '100%', label: 'Committed to Safety' },
];

const StatsSection: React.FC = () => (
  <section className="py-12 bg-terracon-blue text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map(stat => (
          <div key={stat.label}>
            <p className="text-4xl font-bold mb-1">{stat.value}</p>
            <p className="text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const insightsData: CardData[] = [
  { 
    id: 'insight1', 
    image: 'https://picsum.photos/seed/insightA/400/300', 
    title: 'Navigating PFAS Regulations: What You Need to Know', 
    description: 'A deep dive into the evolving landscape of PFAS regulations and their impact on various industries.',
    category: 'Environmental',
    date: 'October 26, 2023',
    linkText: 'Read More',
    linkHref: '#'
  },
  { 
    id: 'insight2', 
    image: 'https://picsum.photos/seed/insightB/400/300', 
    title: 'The Future of Geotechnical Engineering in Infrastructure Projects', 
    description: 'Exploring innovative geotechnical solutions for sustainable and resilient infrastructure development.',
    category: 'Geotechnical',
    date: 'October 15, 2023',
    linkText: 'Read More',
    linkHref: '#'
  },
  { 
    id: 'insight3', 
    image: 'https://picsum.photos/seed/insightC/400/300', 
    title: 'Ensuring Building Envelope Performance: Best Practices', 
    description: 'Key considerations and techniques for designing and maintaining high-performance building envelopes.',
    category: 'Facilities',
    date: 'September 28, 2023',
    linkText: 'Read More',
    linkHref: '#'
  },
];

const InsightsSection: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-terracon-text mb-2">Featured Insights</h2>
        <p className="text-lg text-terracon-dark-gray max-w-2xl mx-auto">
          Stay informed with the latest perspectives and expertise from Terracon's thought leaders.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {insightsData.map(insight => <Card key={insight.id} {...insight} />)}
      </div>
      <div className="text-center">
        <Button href="#" variant="primary" size="lg">
          View All Insights
        </Button>
      </div>
    </div>
  </section>
);

const projectsData: CardData[] = [
  { 
    id: 'project1', 
    image: 'https://picsum.photos/seed/projectX/400/300', 
    title: 'Major Highway Expansion Project', 
    description: 'Provided comprehensive geotechnical and materials testing services for a critical infrastructure upgrade.',
    category: 'Transportation',
    linkText: 'View Project',
    linkHref: '#'
  },
  { 
    id: 'project2', 
    image: 'https://picsum.photos/seed/projectY/400/300', 
    title: 'New Corporate Campus Development', 
    description: 'Managed environmental assessments and site development for a large-scale corporate facility.',
    category: 'Commercial',
    linkText: 'View Project',
    linkHref: '#'
  },
];

const ProjectsSection: React.FC = () => (
  <section className="py-16 bg-terracon-light-gray">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-terracon-text mb-2">Featured Projects</h2>
        <p className="text-lg text-terracon-dark-gray max-w-2xl mx-auto">
          See how we deliver success for our clients across diverse markets and project types.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projectsData.map(project => <Card key={project.id} {...project} />)}
      </div>
      <div className="text-center">
        <Button href="#" variant="secondary" size="lg">
          View All Projects
        </Button>
      </div>
    </div>
  </section>
);


const JoinTeamSection: React.FC = () => (
  <section className="relative py-20 bg-terracon-green text-white">
     <img 
      src="https://picsum.photos/seed/teamwork/1200/400" 
      alt="Team collaborating" 
      className="absolute inset-0 w-full h-full object-cover opacity-30"
    />
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Team</h2>
      <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
        Become an employee-owner and build a rewarding career with a company that values your contributions and invests in your growth.
      </p>
      <Button href="#" variant="primary" size="lg" className="bg-terracon-orange hover:bg-orange-600">
        Explore Career Opportunities
      </Button>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesHighlightSection />
        <StatsSection />
        <InsightsSection />
        <ProjectsSection />
        <JoinTeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
