
import React from 'react';
import { CardData } from '../types';
import { Button } from './Button';
import { ArrowRightIcon } from './Icons';

interface Props extends CardData {}

export const Card: React.FC<Props> = ({ image, title, description, linkText, linkHref, category, date }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6 flex flex-col flex-grow">
        {category && <p className="text-sm text-terracon-blue font-semibold mb-1">{category}</p>}
        <h3 className="text-xl font-semibold text-terracon-text mb-2">{title}</h3>
        {date && <p className="text-xs text-terracon-dark-gray mb-2">{date}</p>}
        <p className="text-terracon-dark-gray text-sm mb-4 flex-grow">{description}</p>
        {linkText && linkHref && (
          <Button href={linkHref} variant="link" className="mt-auto self-start text-terracon-green hover:text-terracon-green font-semibold">
            {linkText} <ArrowRightIcon className="w-4 h-4 ml-1 inline-block" />
          </Button>
        )}
      </div>
    </div>
  );
};
