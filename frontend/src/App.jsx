import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import Countdown from './components/Layout/Countdown';
import OurStory from './components/Sections/OurStory';
import Details from './components/Sections/Details';
import Schedule from './components/Sections/Schedule';
import Travel from './components/Sections/Travel';
import Gallery from './components/Sections/Gallery';
import WeddingParty from './components/Sections/WeddingParty';
import FAQ from './components/Sections/FAQ';
import RSVP from './components/Sections/RSVP';
import Footer from './components/Layout/Footer';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-b from-wedding-ivory/30 to-white">
                <Header />
                <main>
                    <Hero />
                    <OurStory />
                    <Details />
                    <Schedule />
                    <Travel />
                    <Gallery />
                    <WeddingParty />
                    <FAQ />
                    <RSVP />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
