// src/components/atoms/Button.jsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode; // 'React.ReactNode' is the type for any valid React child
  href: string;
}

// Use 'React.FC<ButtonProps>' to type the component
export const Button: React.FC<ButtonProps> = ({ children, href }) => {
  return (
    <a
      href={href}
      className="px-5 py-2 bg-shire-green text-white font-sans font-bold rounded-lg shadow-md hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-rohan-gold focus:ring-opacity-75"
    >
      {children}
    </a>
  );
};