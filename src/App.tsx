import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductPage from './ecommerce/ProductPage';
import SimpleNavigation from './navigation/SimpleNavigation';
import BasicContactForm from './forms/BasicContactForm';
import BlogManager from './blog/BlogManager';
import Dashboard from './components/Dashboard';

type View = 'portfolio' | 'ecommerce' | 'navigation' | 'forms' | 'blog' | 'dashboard';

function App() {
  const [view, setView] = useState<View>('portfolio');

  return (
    <div className="App">
      <div style={{
        position: 'fixed',
        top: '80px',
        left: '20px',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <button 
          onClick={() => setView('portfolio')}
          style={{
            padding: '8px 16px',
            background: view === 'portfolio' ? '#fff' : '#333',
            color: view === 'portfolio' ? '#000' : '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            textAlign: 'left'
          }}
        >
          1. Portfolio
        </button>
        <button 
          onClick={() => setView('ecommerce')}
          style={{
            padding: '8px 16px',
            background: view === 'ecommerce' ? '#fff' : '#333',
            color: view === 'ecommerce' ? '#000' : '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            textAlign: 'left'
          }}
        >
          2. E-commerce Page
        </button>
        <button 
          onClick={() => setView('navigation')}
          style={{
            padding: '8px 16px',
            background: view === 'navigation' ? '#fff' : '#333',
            color: view === 'navigation' ? '#000' : '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            textAlign: 'left'
          }}
        >
          3. Simple Navigation
        </button>
        <button 
          onClick={() => setView('forms')}
          style={{
            padding: '8px 16px',
            background: view === 'forms' ? '#fff' : '#333',
            color: view === 'forms' ? '#000' : '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            textAlign: 'left'
          }}
        >
          4. HTML Forms
        </button>
        <button 
          onClick={() => setView('blog')}
          style={{
            padding: '8px 16px',
            background: view === 'blog' ? '#fff' : '#333',
            color: view === 'blog' ? '#000' : '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            textAlign: 'left'
          }}
        >
          5. Blogging Platform
        </button>
        <button 
          onClick={() => setView('dashboard')}
          style={{
            padding: '8px 16px',
            background: view === 'dashboard' ? '#fff' : '#333',
            color: view === 'dashboard' ? '#000' : '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            textAlign: 'left'
          }}
        >
          6. Interactive App
        </button>
      </div>

      {view === 'portfolio' && (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects onViewChange={setView} />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      {view === 'ecommerce' && <ProductPage />}
      {view === 'navigation' && <SimpleNavigation />}
      {view === 'forms' && <BasicContactForm />}
      {view === 'blog' && <BlogManager />}
      {view === 'dashboard' && <Dashboard />}
    </div>
  );
}

export default App;
