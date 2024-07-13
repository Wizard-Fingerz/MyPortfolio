// components/ProjectCard.js
import GlassCard from './GlassCard';

const ProjectCard = ({ title, description, link }) => (
  <GlassCard>
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
  </GlassCard>
);

export default ProjectCard;
