import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Flame, Film, Puzzle, Ghost, Users, Brain, Camera } from 'lucide-react';
import { horrorEvents } from '../data/mockEvents';
import './EventsSection.css';

const getEventIcon = (thumbnail) => {
  const iconMap = {
    maze: Puzzle,
    cinema: Film,
    costume: Users,
    seance: Ghost,
    escape: Puzzle,
    zombie: Flame,
    trivia: Brain,
    photo: Camera
  };
  const Icon = iconMap[thumbnail] || Ghost;
  return <Icon className="event-icon" />;
};

const EventCard = ({ event, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="event-card"
    >
      <div className="event-card-glow"></div>
      <div className="event-card-content">
        <div className="event-icon-wrapper">
          {getEventIcon(event.thumbnail)}
        </div>
        <h3 className="event-title">{event.name}</h3>
        <p className="event-description">{event.description}</p>
        <div className="event-meta">
          <div className="event-meta-item">
            <Clock size={16} />
            <span>{event.duration}</span>
          </div>
          <div className="event-meta-item">
            <Flame size={16} />
            <span>{event.intensity}</span>
          </div>
        </div>
        <div className="event-category-badge">{event.category}</div>
      </div>
    </motion.div>
  );
};

const EventsSection = () => {
  return (
    <section id="events-section" className="events-section">
      <div className="events-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="events-header"
        >
          <h2 className="events-title">Dare to Experience</h2>
          <p className="events-subtitle">
            Choose your nightmare. Each event is crafted to test your limits.
          </p>
        </motion.div>

        <div className="events-grid">
          {horrorEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
