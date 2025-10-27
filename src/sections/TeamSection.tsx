import React from 'react';
// 1. Asigură-te că ai calea corectă către componenta TeamCard
import { TeamCard } from '../components/molecules/TeamCard.tsx';


import razvanImg from '../assets/images/raz.jpg'; // Exemplu .jpg
import cristiImg from '../assets/images/cris.jpg'; // Exemplu .png
import piqImg from '../assets/images/piq.jpg';   // Exemplu .jpeg

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string | null; // Se potrivește cu props-urile din TeamCard
}

// 3. Folosește variabilele importate în array-ul tău
const teamData: TeamMember[] = [
  {
    name: 'Răzvan',
    role: 'PR & IT Responsible',
    description: 'Responsabil cu promovarea și partea tehnică. Contactați-l pentru întrebări și nelămuriri!',
    imageUrl: razvanImg,
  },
  {
    name: 'Cristi',
    role: 'MO & Pax Responsible',
    description: "Organizator principal și responsabil cu participanții. El este 'Master of Coin', gestionând plățile.",
    imageUrl: cristiImg,
  },
  {
    name: 'Piq',
    role: 'GD & Logistica',
    description: 'Mintea creativă și omul de bază pentru logistică. Se asigură că avem tot ce ne trebuie la cabană.',
    imageUrl: piqImg,
  },
];

// 4. Transformă componenta în React.FC (Functional Component)
export const TeamSection: React.FC = () => (
  <section id="echipa" className="mb-16 scroll-mt-20">
    <h2 className="text-center font-serif text-4xl font-bold text-gondor-silver mb-12">
      Faceți cunoștință cu Echipa
    </h2>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {teamData.map((member) => (
        <TeamCard
          key={member.name}
          name={member.name}
          role={member.role}
          description={member.description}
          imageUrl={member.imageUrl}
        />
      ))}
    </div>
  </section>
);