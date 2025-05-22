
import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { SearchIcon, MenuIcon, XIcon, ChevronDownIcon, LocationMarkerIcon, TerraconLogo } from './Icons';
import { Button } from './Button';

const topNavItems: NavItem[] = [
  { label: 'Client Login', href: '#' },
  { label: 'Employee Login', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Locations', href: '#', icon: <LocationMarkerIcon className="w-4 h-4 mr-1 inline"/> },
];

const mainNavItems: NavItem[] = [
  { label: 'What We Do', href: '#', children: [] }, // Empty children indicates dropdown capability
  { label: 'Who We Are', href: '#', children: [] },
  { label: 'Insights', href: '#', children: [] },
  { label: 'Join Our Team', href: '#', isButton: true },
];

const TopBar: React.FC = () => (
  <div className="bg-terracon-light-gray text-terracon-dark-gray text-sm py-2">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {topNavItems.map((item) => (
          <a key={item.label} href={item.href} className="hover:text-terracon-blue transition-colors">
            {item.icon}{item.label}
          </a>
        ))}
      </div>
      <button aria-label="Search" className="hover:text-terracon-blue transition-colors">
        <SearchIcon className="w-5 h-5" />
      </button>
    </div>
  </div>
);


const MainNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const handleDropdownToggle = (label: string) => {
    // In a real app, this would open/close a dropdown menu.
    // For this clone, we'll just log or could add a simple visual indicator.
    console.log(`Dropdown for ${label} clicked. Implement dropdown logic here.`);
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };


  return (
    <nav className="bg-terracon-header-bg shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" aria-label="Terracon Home">
              <TerraconLogo className="h-10 md:h-12" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {mainNavItems.map((item) => 
              item.isButton ? (
                <Button key={item.label} href={item.href} variant="primary" size="md">
                  {item.label}
                </Button>
              ) : (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    onClick={item.children ? (e) => { e.preventDefault(); handleDropdownToggle(item.label); } : undefined}
                    className="text-terracon-text hover:text-terracon-green px-3 py-2 rounded-md text-base font-semibold flex items-center"
                  >
                    {item.label}
                    {item.children && <ChevronDownIcon className="ml-1 w-4 h-4" />}
                  </a>
                  {/* Basic dropdown placeholder - not fully functional */}
                  {item.children && openDropdown === item.label && (
                     <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-20">
                       <a href="#" className="block px-4 py-2 text-sm text-terracon-text hover:bg-terracon-light-gray">Sub Item 1</a>
                       <a href="#" className="block px-4 py-2 text-sm text-terracon-text hover:bg-terracon-light-gray">Sub Item 2</a>
                     </div>
                  )}
                </div>
              )
            )}
            <button aria-label="Search" className="text-terracon-text hover:text-terracon-green">
              <SearchIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="text-terracon-text hover:text-terracon-green focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <XIcon className="block h-7 w-7" /> : <MenuIcon className="block h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-terracon-header-bg shadow-lg z-40" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainNavItems.map((item) => (
               item.isButton ? (
                <Button key={item.label} href={item.href} variant="primary" size="md" className="w-full mt-2">
                  {item.label}
                </Button>
               ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={item.children ? (e) => { e.preventDefault(); handleDropdownToggle(item.label); } : undefined}
                  className="text-terracon-text hover:bg-terracon-light-gray hover:text-terracon-green block px-3 py-2 rounded-md text-base font-semibold"
                >
                  {item.label}
                  {item.children && <ChevronDownIcon className="ml-1 inline-block" />}
                </a>
               )
            ))}
             <button aria-label="Search" className="w-full text-left text-terracon-text hover:bg-terracon-light-gray hover:text-terracon-green block px-3 py-2 rounded-md text-base font-semibold">
              <SearchIcon className="w-5 h-5 inline-block mr-2" /> Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Header: React.FC = () => {
  return (
    <>
      <TopBar />
      <MainNavigation />
    </>
  );
};
