// components/ExperienceCard.js
import GlassCard from './GlassCard';

const ExperienceCard = ({ company, position, duration, description }) => (
  <GlassCard>
    <h2>{position} at {company}</h2>
    <h4>{duration}</h4>
    <p>{description}</p>
  </GlassCard>
);

export default ExperienceCard;
