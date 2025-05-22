
import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YouTubeIcon, TerraconLogo } from './Icons';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Leadership', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Newsroom', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Environmental', href: '#' },
      { label: 'Facilities', href: '#' },
      { label: 'Geotechnical', href: '#' },
      { label: 'Materials', href: '#' },
      { label: 'View All Services', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Insights', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Client Login', href: '#' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Careers', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Locations', href: '#' },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-terracon-footer-bg text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-1 mb-6 md:mb-0">
             <a href="#" aria-label="Terracon Home">
                <TerraconLogo className="h-10 text-white"/>
             </a>
             <p className="mt-4 text-sm text-gray-400">
                Exploring success from the ground up.
             </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Terracon Consultants, Inc. All rights reserved.
          </div>
          <div className="flex space-x-5">
            <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">LinkedIn</span><LinkedInIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Twitter</span><TwitterIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Facebook</span><FacebookIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">YouTube</span><YouTubeIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Instagram</span><InstagramIcon /></a>
          </div>
        </div>
         <div className="mt-4 text-center text-xs text-gray-500">
            Privacy Policy | Terms of Use
        </div>
      </div>
    </footer>
  );
};
