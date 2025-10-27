import React from 'react';
// Asigură-te că ai importat UserIcon. Calea este bazată pe structura noastră anterioară.
import { UserIcon } from '../atoms/Icons';

// 1. Definim interfața pentru props
interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  imageUrl?: string | null; // imageUrl este opțional și poate fi string, undefined sau null
}


export const TeamCard: React.FC<TeamCardProps> = ({ name, role, description, imageUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 text-center transform transition-transform duration-300 hover:scale-105">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto object-cover"
        />
      ) : (
        <UserIcon />
      )}
      <h3 className="mt-4 text-2xl font-semibold text-white">{name}</h3>
      <p className="text-rohan-gold font-medium">{role}</p>
      <p className="text-gondor-silver text-sm mt-2">{description}</p>
    </div>
  );
};