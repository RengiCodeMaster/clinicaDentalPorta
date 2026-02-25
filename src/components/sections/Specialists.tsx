import React, { useEffect, useRef, useState } from 'react';
import { SPECIALISTS } from '../../constants';

const TeamCard: React.FC<{ doc: typeof SPECIALISTS[0]; delay: number }> = ({ doc, delay }) => {
  const [visible, setVisible] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
          // Clear the staggered delay after entrance animation finishes
          // so it doesn't affect hover transitions
          const totalDelay = (delay + 0.7) * 1000; // delay + animation duration
          setTimeout(() => setAnimationDone(true), totalDelay);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`team-card team-card-animate ${visible ? 'team-card-visible' : ''}`}
      style={{
        transitionDelay: animationDone ? '0s' : `${delay}s`,
        pointerEvents: visible ? 'auto' : 'none'
      }}
    >
      <div className="team-card-img-wrapper">
        <img
          src={doc.image}
          alt={doc.name}
          className="team-card-img"
          loading="lazy"
        />
      </div>
      <div className="team-card-info">
        <h4 className="team-card-name">{doc.name}</h4>
        <p className="team-card-role">{doc.role}</p>
        <p className="team-card-cop">{doc.subtitle}</p>
        <p className="team-card-bio">{doc.bio}</p>
      </div>
    </div>
  );
};

const Specialists: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [teamHeaderVisible, setTeamHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const teamHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current && entry.isIntersecting) {
            setIsVisible(true);
          }
          if (entry.target === teamHeaderRef.current && entry.isIntersecting) {
            setTeamHeaderVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (teamHeaderRef.current) observer.observe(teamHeaderRef.current);

    return () => observer.disconnect();
  }, []);

  const founder = SPECIALISTS.find(s => s.featured);
  const team = SPECIALISTS.filter(s => !s.featured);

  return (
    <section id="team" ref={sectionRef}>
      {/* ========== BLOCK 1: THE FOUNDER ========== */}
      <div className="founder-section">
        <div className="founder-container">
          <div className={`founder-label-wrapper ${isVisible ? 'animate-in' : ''}`}>
            <span className="founder-eyebrow">Nuestra Fundadora</span>
          </div>

          <div className={`founder-layout ${isVisible ? 'animate-in' : ''}`}>
            {/* Founder Photo */}
            <div className="founder-photo-side">
              <div className="founder-photo-frame">
                <img
                  src={founder?.image}
                  alt={founder?.name}
                  className="founder-photo"
                  loading="eager"
                />

              </div>
            </div>

            {/* Founder Info */}
            <div className="founder-info-side">
              <h2 className="founder-name">{founder?.name}</h2>
              <div className="founder-credentials">
                <span className="founder-role">{founder?.role}</span>
                <span className="founder-cop">{founder?.subtitle}</span>
              </div>
              <p className="founder-bio">{founder?.bio}</p>

              <blockquote className="founder-quote">
                "Mi pasión es que cada paciente salga con una sonrisa que le cambie la vida."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* ========== BLOCK 2: THE TEAM ========== */}
      <div className="team-section">
        <div className="team-container">
          <div ref={teamHeaderRef} className={`team-header ${teamHeaderVisible ? 'animate-in' : ''}`}>
            <span className="team-eyebrow">Nuestro Equipo</span>
            <h3 className="team-title">Profesionales que te acompañan</h3>
            <p className="team-desc">
              Cada uno aporta su especialidad para brindarte la mejor atención integral.
            </p>
          </div>

          <div className="team-grid">
            {team.map((doc, idx) => (
              <TeamCard key={idx} doc={doc} delay={0.15 * idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialists;
