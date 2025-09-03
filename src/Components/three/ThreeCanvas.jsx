import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Octahedron, Tetrahedron, Icosahedron } from '@react-three/drei';

// Componente para las partículas (con animación mejorada)
function Particles({ count, colorPalette }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [count, colorPalette]);

  useFrame((state) => {
    const { mouse, clock } = state;
    
    if (pointsRef.current) {
      // 1. Animación constante y general
      // Rota lentamente sobre su eje Y y X basado en el tiempo transcurrido
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.01;
      pointsRef.current.rotation.x = clock.getElapsedTime() * 0.005;

      // 2. Influencia del ratón (interpolada para suavidad)
      // El ratón añade una rotación adicional sobre la animación base
      const targetRotationX = mouse.y * 0.2;
      const targetRotationY = mouse.x * 0.2;

      pointsRef.current.rotation.x += (targetRotationX - pointsRef.current.rotation.x) * 0.02;
      pointsRef.current.rotation.y += (targetRotationY - pointsRef.current.rotation.y) * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.15} vertexColors transparent opacity={0.8} />
    </points>
  );
}

// Componente para las formas geométricas flotantes
function FloatingShapes({ count, colorPalette, geometries }) {
  const shapes = useMemo(() => {
    const shapeArray = [];
    for (let i = 0; i < count; i++) {
      shapeArray.push({
        id: i,
        GeometryComponent: geometries[Math.floor(Math.random() * geometries.length)],
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        position: [
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 60,
        ],
        initialRotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ],
        rotationSpeed: {
          x: 0.002 + Math.random() * 0.002,
          y: 0.001 + Math.random() * 0.001,
        }
      });
    }
    return shapeArray;
  }, [count, colorPalette, geometries]);

  return (
    <group>
      {shapes.map(shape => (
        <FloatingShape key={shape.id} {...shape} />
      ))}
    </group>
  );
}

function FloatingShape({ GeometryComponent, color, position, initialRotation, rotationSpeed }) {
  const ref = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x += rotationSpeed.x;
      ref.current.rotation.y += rotationSpeed.y;
      ref.current.position.y = position[1] + Math.sin(time + position[0]) * 0.5;
    }
  });

  // Renderiza directamente el componente de geometría y le aplica el material como hijo
  return (
    <GeometryComponent ref={ref} position={position} rotation={initialRotation}>
      <meshBasicMaterial color={color} transparent opacity={0.3} wireframe />
    </GeometryComponent>
  );
}


const ThreeCanvas = () => {
  const colorPalette = useMemo(() => [
    new THREE.Color(0x00ff41), new THREE.Color(0xff0080), new THREE.Color(0x0080ff),
    new THREE.Color(0xff8000), new THREE.Color(0x8000ff), new THREE.Color(0x00ffff),
  ], []);

  const geometries = useMemo(() => [Octahedron, Tetrahedron, Icosahedron], []);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 25], fov: 75 }}>
        <Particles count={3000} colorPalette={colorPalette} />
        <FloatingShapes count={15} colorPalette={colorPalette} geometries={geometries} />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;