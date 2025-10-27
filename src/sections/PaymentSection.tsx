export const PaymentSection = () => (
  <section id="plata" className="scroll-mt-20">
    <h2 className="text-center font-serif text-4xl font-bold text-gondor-silver mb-8">
      Cost & Plată (Important!) 💸
    </h2>
    <div className="max-w-2xl mx-auto text-center bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
      <div className="mb-6">
        <p className="text-2xl font-bold text-gondor-silver">125 RON / noapte</p>
        <p className="text-gray-400">(Costul se poate ajusta. Banii rămași intră la bugetul comun!)</p>
      </div>
      <div className="bg-cyan-900 bg-opacity-30 border border-rohan-gold rounded-md p-4 mb-6">
        <h4 className="text-xl font-semibold text-gondor-silver">Avans Necesar: 150 RON</h4>
        <p className="text-gray-300">Plata avansului cât mai rapid asigură rezervarea cabanei și locul tău. Diferența se poate plăti ulterior.</p>
      </div>
      
      <a 
        href="https://revolut.me/cristig3qp" 
        target="_blank" 
        rel="noopener noreferrer"
        className="
          inline-block rounded-md 
          bg-rohan-gold 
          px-10 py-3 
          text-lg font-bold text-gray-900 
          transition-all duration-200 
          hover:bg-rohan-gold
          hover:shadow-lg hover:shadow-rohan-gold/30
          transform hover:-translate-y-0.5
        "
      >
        Plătește Avansul (Revolut)
      </a>
      <p className="text-gondor-silver mt-4 text-sm">
        La descrierea plății, te rugăm să scrii: <br/> <strong>"Numele tău - X nopți"</strong> (Ex: Popescu Ion - 2 nopți).
      </p>
    </div>
  </section>
);