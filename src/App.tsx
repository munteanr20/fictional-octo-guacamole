// src/App.jsx
import { Hero } from './components/organisms/Hero.tsx';
import { Navbar } from './components/organisms/Navbar.tsx';
import { FlowDetails } from './components/organisms/FlowDetails.tsx';
import { EventFooter } from './sections/EventFooter.tsx';

function App() {
  return (
    <div className="App">
      {/* Navbar is at the top */}
      <Navbar />
      <main>
       <Hero />
       <FlowDetails />
      </main>
      <EventFooter />
    </div>
  );
}

export default App;