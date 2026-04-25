import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import logo from '../assets/logo.png'; // Make sure this is the updated Natiq logo
import { Clock, TrendingDown, Frown, Globe, Bot, BarChart3, Languages, Smile, Mail, Phone, ThumbsUp, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Adding a subtle scroll reveal effect
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="landing-container">
      {/* Splash Screen */}
      <div className={`splash-screen ${!showSplash ? 'hide' : ''}`}>
        <div className="splash-particles">
          <div className="splash-ring ring-1"></div>
          <div className="splash-ring ring-2"></div>
          <div className="splash-ring ring-3"></div>
          <div className="splash-ring ring-4"></div>
          <div className="splash-dot dot-1"></div>
          <div className="splash-dot dot-2"></div>
          <div className="splash-dot dot-3"></div>
          <div className="splash-dot dot-4"></div>
        </div>
        <img src={logo} alt="Natiq Logo" className="splash-logo" />
      </div>

      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-logo">
          <img src={logo} alt="Natiq Logo" />
        </div>
        
        <div className={`nav-links-dropdown ${isMenuOpen ? 'open' : ''}`}>
          <a href="#overview" onClick={() => setIsMenuOpen(false)}>Overview</a>
          <a href="#problems" onClick={() => setIsMenuOpen(false)}>Problem Statement</a>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>Core Features</a>
          <a href="#architecture" onClick={() => setIsMenuOpen(false)}>Architecture</a>
          <button className="nav-cta-mobile" onClick={() => navigate('/login')}>
            Get Started
          </button>
        </div>

        <div className="nav-right">
          <button className="nav-cta desktop-only" onClick={() => navigate('/login')}>
            Get Started
          </button>
          <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section hidden-reveal">
        <div className="hero-content">
          <div className="badge">Next-Gen Customer Support</div>
          <h1 className="hero-title">
            AI-POWERED OMNICHANNEL 
            <span className="text-gradient"> CONTACT CENTER</span>
          </h1>
          <p className="hero-subtitle">
            Transforming traditional contact centers into intelligent, scalable, and performance-driven ecosystems. Natiq leverages NLP, intelligent automation, and real-time sentiment analysis.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => document.getElementById('features').scrollIntoView()}>
              Explore Features
            </button>
            <button className="secondary-btn" onClick={() => document.getElementById('how-it-works').scrollIntoView()}>
              How it Works
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glow-orb"></div>
          <div className="glass-card floating">
            <div className="mock-chat">
              <div className="mock-msg bot">Hello! How can Natiq AI assist you today?</div>
              <div className="mock-msg user">I need help with my order status.</div>
              <div className="mock-msg bot">Certainly. Your order is out for delivery and will arrive by 4 PM.</div>
            </div>
          </div>
        </div>
      </header>

      {/* Abstract / Overview */}
      <section id="overview" className="overview-abstract-section hidden-reveal">
        <div className="section-header">
          <h2>Abstract & Overview</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', lineHeight: '1.8' }}>
            In today’s fast-paced digital environment, traditional contact centers face significant challenges in delivering efficient and satisfying customer experiences. Customers often endure long waiting times, leading to frustration. Meanwhile, agents handle repetitive requests under constant pressure, which affects productivity.
            <br/><br/>
            Natiq addresses these challenges by introducing an AI-powered omnichannel contact center designed to enhance communication efficiency and decision-making. By integrating AI automation, multilingual support, workflow orchestration, and conversational intelligence into a unified platform, Natiq acts as a strategic decision-support system that reduces operational costs and reshapes customer service.
          </p>
        </div>
      </section>

      {/* Overview & Problem Statement */}
      <section id="problems" className="overview-section hidden-reveal">
        <div className="section-header">
          <h2>Problem Statement</h2>
          <p>The core challenges currently facing customer service operations.</p>
        </div>
        <div className="challenges-grid">
          <div className="challenge-card">
            <div className="feature-icon"><Clock size={32} /></div>
            <h3>High Call Pressure</h3>
            <p><strong>Issue:</strong> A large percentage of customer inquiries are repetitive and routine.</p>
            <p><strong>Impact:</strong> Long waiting times, frustration, and reduced trust in service quality.</p>
          </div>
          <div className="challenge-card">
            <div className="feature-icon"><TrendingDown size={32} /></div>
            <h3>Limited Quality Monitoring</h3>
            <p><strong>Issue:</strong> Manual monitoring of calls and chats is time consuming and inefficient.</p>
            <p><strong>Impact:</strong> Poor visibility into agent performance and customer satisfaction.</p>
          </div>
          <div className="challenge-card">
            <div className="feature-icon"><Frown size={32} /></div>
            <h3>Employee Burnout</h3>
            <p><strong>Issue:</strong> Continuous workload and stress from handling repetitive requests.</p>
            <p><strong>Impact:</strong> Decreased productivity, lower morale, and high turnover rates.</p>
          </div>
          <div className="challenge-card">
            <div className="feature-icon"><Globe size={32} /></div>
            <h3>Language Barriers</h3>
            <p><strong>Issue:</strong> Difficulty providing consistent support across multiple languages.</p>
            <p><strong>Impact:</strong> Loss of potential customers and limited market reach.</p>
          </div>
        </div>
      </section>

      {/* Key Features / Significance */}
      <section id="features" className="features-section hidden-reveal">
        <div className="section-header">
          <h2>Project Significance & Core Features</h2>
          <p>The significance of Natiq resides in providing four core pillars of intelligent customer service.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Bot size={32} /></div>
            <h3>Intelligent Automation</h3>
            <p>Reduces call pressure by automatically handling routine queries like password resets and order tracking using NLP. Integrates across voice, chat, email, and social media.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><BarChart3 size={32} /></div>
            <h3>Quality Monitoring</h3>
            <p>Interactive dashboards displaying CSAT, sentiment trends, and resolution rates. Eliminates manual call reviewing by detecting customer emotions live.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Languages size={32} /></div>
            <h3>Multilingual Support</h3>
            <p>Overcomes language barriers by automatically detecting and translating customer messages in real-time. Currently supports Arabic, English, and more.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Smile size={32} /></div>
            <h3>Employee Empowerment</h3>
            <p>Shifts agents to complex problem-solving. Includes an AI-driven simulation mode for practice, reducing stress and improving job satisfaction.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section hidden-reveal">
        <div className="hiw-header">
          <span className="hiw-subtitle">HOW IT WORKS</span>
          <h2 className="hiw-title">From a phone call to a decision —<br/>in seconds.</h2>
        </div>
        
        <div className="hiw-grid">
          <div className="hiw-card">
            <div className="hiw-number">01</div>
            <h3>During the call</h3>
            <p>Customer explains the issue; the AI agent assists or hands off to a human.</p>
          </div>
          <div className="hiw-card">
            <div className="hiw-number">02</div>
            <h3>Capture</h3>
            <p>Customer info + MP3 voice recording are stored securely.</p>
          </div>
          <div className="hiw-card">
            <div className="hiw-number">03</div>
            <h3>AI processing</h3>
            <p>Speaker separation, transcription, problem extraction, and CSAT scoring.</p>
          </div>
          <div className="hiw-card">
            <div className="hiw-number">04</div>
            <h3>Decision support</h3>
            <p>Insights flow into dashboards for managers to act on instantly.</p>
          </div>
        </div>
      </section>

      {/* Architecture & Stack */}
      <section id="architecture" className="architecture-section hidden-reveal">
        <div className="section-header">
          <h2>System Architecture & Tools</h2>
          <p>Built with cutting-edge technologies to ensure reliability and scale.</p>
        </div>
        <div className="tech-stack-container">
          <div className="tech-item">
            <span className="tech-name">ChatWoot</span>
            <span className="tech-desc">Centralized communication hub</span>
          </div>
          <div className="tech-item">
            <span className="tech-name">n8n</span>
            <span className="tech-desc">Automation and workflow engine</span>
          </div>
          <div className="tech-item">
            <span className="tech-name">AI Models</span>
            <span className="tech-desc">NLP, sentiment analysis, translation</span>
          </div>
          <div className="tech-item">
            <span className="tech-name">Database</span>
            <span className="tech-desc">SQL/NoSQL for interaction data</span>
          </div>
        </div>
      </section>

      {/* Footer / CTA Wrapper */}
      <footer id="contact" className="footer-wrapper hidden-reveal">
        <div className="cta-card">
          <h2>Ready to level up your contact center?</h2>
          <p>Support your business with Natiq's powerful AI integrations, analytics, and automated workflows. Get in touch with us today!</p>
          <div className="cta-buttons">
            <button className="primary-btn" onClick={() => navigate('/login')} style={{ background: '#219e9f', color: '#fff', marginRight: '1rem' }}>
              Get Started
            </button>
            <button className="secondary-btn" onClick={() => document.querySelector('.footer-contact-info').scrollIntoView({ behavior: 'smooth', block: 'start' })} style={{ borderColor: '#219e9f', color: '#fff' }}>
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="footer-contact-info">
          <div className="contact-item">
            <span className="contact-icon"><Mail size={20} /></span>
            <a href="mailto:natiq.official.2026@gmail.com">natiq.official.2026@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><Phone size={20} /></span>
            <a href="tel:01149761941">0114 976 1941</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><ThumbsUp size={20} /></span>
            <a href="https://www.facebook.com/share/1D9Kx4D1DL/" target="_blank" rel="noreferrer">Natiq on Facebook</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo-section">
            <img src={logo} alt="Natiq Logo" />
            <p>&copy; {new Date().getFullYear()} Natiq. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
