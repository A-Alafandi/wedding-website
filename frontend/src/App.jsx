import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import Countdown from './components/Layout/Countdown'; // ✅ Used this now
import OurStory from './components/Sections/OurStory';
import WeddingParty from './components/Sections/WeddingParty'; // ⬆️ Moved up
import Details from './components/Sections/Details';
import Schedule from './components/Sections/Schedule';
import Travel from './components/Sections/Travel';
import FAQ from './components/Sections/FAQ'; // ⬆️ Moved before RSVP (clears doubts)
import RSVP from './components/Sections/RSVP'; // ⬆️ Priority Action
import Gallery from './components/Sections/Gallery';
import SharePhotos from "./components/Sections/SharePhotos"; // ⬇️ logical end
import Footer from './components/Layout/Footer';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-b from-wedding-ivory/30 to-white">
                <Header />
                <main>
                    {/* 1. The Hook */}
                    <Hero />

                    {/* 2. The Personal Connection */}
                    <OurStory />
                    <WeddingParty />

                    {/* 3. The Logistics (The "Need to Know") */}
                    <Details />
                    <Schedule />
                    <Travel />

                    {/* 4. The Action (Clear doubts -> Commit) */}
                    <FAQ />
                    <RSVP />

                    {/* 5. The Fun / Visuals (Reward for scrolling) */}
                    <Gallery />
                    <SharePhotos />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
