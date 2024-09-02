// components/ThreeDComponent.js
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const ThreeDComponent = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.zIndex = '-1';
    }
  }, []);

  return (
    <Canvas ref={canvasRef}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Box args={[1, 1, 1]}>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDComponent;
