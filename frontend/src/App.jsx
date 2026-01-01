import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import OurStory from './components/Sections/OurStory';
import WeddingParty from './components/Sections/WeddingParty';
import Details from './components/Sections/Details';
import Schedule from './components/Sections/Schedule';
import Travel from './components/Sections/Travel';
import FAQ from './components/Sections/FAQ';
import RSVP from './components/Sections/RSVP';
import Gallery from './components/Sections/Gallery';
import SharePhotos from "./components/Sections/SharePhotos";
import Footer from './components/Layout/Footer';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-b from-wedding-ivory/30 to-white">
                <Header />
                <main>
                    <Hero />
                    <OurStory />
                    <WeddingParty />
                    <Details />
                    <Schedule />
                    <Gallery />
                    <SharePhotos />
                    <Travel />
                    <FAQ />
                    <RSVP />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
