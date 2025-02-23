import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';
import About from '../components/About';
import Events from '../components/Events';
// import News from '../components/News';
import Membership from '../components/Membership.jsx';
import Resources from '../components/Resources';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Highlights />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            {/* <Route path="/news" element={<News />} /> */}
            <Route path="/membership" element={<Membership />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;