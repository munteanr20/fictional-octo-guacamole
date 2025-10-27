import React from 'react';
// Asigură-te că aceste căi sunt corecte
import { WhenWhereSection } from '../../sections/WhenWhereSection';
import { DetailsSection } from '../../sections/DetailsSection';
import { TeamSection } from '../../sections/TeamSection';
import { PaymentSection } from '../../sections/PaymentSection';
import background from '../../assets/images/background1.jpg';

export const FlowDetails: React.FC = () => {
  return (
    <div className="bg-gray-900">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <WhenWhereSection />
      </div>
      <div className="relative pb-10">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${background})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 z-10 bg-gray-900 opacity-70"
          aria-hidden="true"
        />
        <div className="relative z-20 container mx-auto px-4 pt-10 sm:px-6 lg:px-8">
          <DetailsSection />
          <TeamSection />
          <PaymentSection />
        </div>

      </div>
    </div>
  );
};