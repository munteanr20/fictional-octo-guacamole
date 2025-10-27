import background from '../../assets/images/background.jpg';   // Exemplu .jpeg

export const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-gray-100">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${background})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center py-20 text-center">
          
          <h1 className="font-serif text-5xl font-bold tracking-tight text-gondor-silver sm:text-6xl md:text-7xl">
            ✨ Flowvelionul Vostru de Vis vă Așteaptă! ✨
          </h1>

          {/* Subtitlu (din textul tău) */}
          <p className="mt-6 max-w-3xl font-sans text-lg text-gondor-silver md:text-xl">
            Vino alături de noi să creăm amintiri de neuitat și să sărbătorim trecerea dintre ani într-un stil propriu!
          </p>

          {/* Buton Call to Action (CTA) */}
          <div className="mt-10">
            <a
              href="https://forms.gle/wpZZ7jgNFshRSYKH6"
              className="
                inline-block rounded-md 
                border-2 border-rohan-gold
                px-8 py-3 
                text-lg font-semibold text-rohan-gold
                transition-all duration-200 
                hover:bg-rohan-gold hover:text-mordor-black
                hover:border-mordor-black hover:scale-105
              "
              target="_blank"
            >
              Rezervă-ți Locul Acum! 
            </a>
          </div>
          <div 
            id="program" 
            className="mt-16 text-center scroll-mt-20" 
            // scroll-mt-20 adaugă un "offset" la scroll
          >
            <h2 className="text-center font-serif text-4xl font-bold text-gondor-silver mb-8">
              Program
            </h2>
            <p className="mt-3 text-xl font-semibold text-rohan-gold animate-pulse">
              COMING SOON
            </p>
            <p className="mt-1 text-base text-gray-300">
              Revenim cu detalii despre activități și surprize!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};