
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string; // If it's a link styled as a button
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
  ...props
}) => {
  const baseStyle = "font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 ease-in-out inline-flex items-center justify-center";
  
  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = 'bg-terracon-orange text-white hover:bg-orange-600 focus:ring-terracon-orange';
      break;
    case 'secondary':
      variantStyle = 'bg-terracon-blue text-white hover:bg-sky-700 focus:ring-terracon-blue';
      break;
    case 'outline':
      variantStyle = 'border border-terracon-green text-terracon-green hover:bg-terracon-green hover:text-white focus:ring-terracon-green';
      break;
    case 'link':
      variantStyle = 'text-terracon-blue hover:text-sky-700 underline focus:ring-terracon-blue p-0';
      break;
  }

  let sizeStyle = '';
  switch (size) {
    case 'sm':
      sizeStyle = 'px-3 py-1.5 text-sm';
      break;
    case 'md':
      sizeStyle = 'px-5 py-2.5 text-base';
      break;
    case 'lg':
      sizeStyle = 'px-8 py-3 text-lg';
      break;
  }
  if (variant === 'link') sizeStyle = ''; // Links don't usually have padding like buttons

  const combinedClassName = `${baseStyle} ${variantStyle} ${sizeStyle} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
