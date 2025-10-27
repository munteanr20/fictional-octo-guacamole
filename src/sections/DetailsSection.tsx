import { CheckIcon } from '../components/atoms/Icons.tsx'; // Asigură-te că calea e corectă

export const DetailsSection = () => (
  <section id="detalii" className="mb-16 scroll-mt-20">
    <h2 className="text-center font-serif text-4xl font-bold text-gondor-silver mb-8">
      Un Sfârșit de An Legendar 💥
    </h2>
    <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
      <p className="text-lg mb-6 text-rohan-gold">
        Nu vă propunem o petrecere oarecare, ci o experiență memorabilă. Vibe-ul unic BEST, prieteni noi și amintiri pentru o viață!
      </p>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <CheckIcon />
          <span className='text-rohan-gold'><strong className="text-gondor-silver">Gătim Împreună:</strong> Fiecare aduce ce știe mai bine și punem de-o masă festivă pe cinste!</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckIcon />
          <span className='text-rohan-gold'><strong className="text-gondor-silver">BYOB:</strong> Bring Your Own... Happiness! (Și băutură, nu e inclusă în cost 🙁🥂)</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckIcon />
          <span className='text-rohan-gold'><strong className="text-gondor-silver">Distracție & Muzică:</strong> Distracție la cote maxime și muzică pe toate gusturile.</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckIcon />
          <span className='text-rohan-gold'><strong className="text-gondor-silver">Logistică:</strong> Vom crea un grup de WhatsApp dedicat pentru meniu, transport și alte detalii.</span>
        </li>
      </ul>
    </div>
  </section>
);