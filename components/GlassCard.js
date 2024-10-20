// components/GlassCard.js
import styled from 'styled-components';

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px;
  margin: 10px;
`;

export default GlassCard;
