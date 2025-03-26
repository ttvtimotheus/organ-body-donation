import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

// Type definitions for organ data
interface OrganDataType {
  name: string;
  description: string;
  donationInfo: string;
  waitingList: number;
  color: string;
  position: [number, number, number];
  scale: number;
}

interface OrganDataMapType {
  [key: string]: OrganDataType;
}

// Organ data with descriptions and statistics
const organData: OrganDataMapType = {
  heart: {
    name: 'Herz',
    description: 'Das Herz pumpt Blut durch den Körper und versorgt alle Organe mit Sauerstoff und Nährstoffen.',
    donationInfo: 'In Deutschland warten etwa 700 Menschen auf ein Spenderherz. Die Wartezeit kann mehrere Jahre betragen.',
    waitingList: 700,
    color: '#e74c3c',
    position: [0, 0.5, 0],
    scale: 0.5,
  },
  lungs: {
    name: 'Lunge',
    description: 'Die Lunge nimmt Sauerstoff auf und gibt Kohlendioxid ab. Sie ist entscheidend für die Atmung.',
    donationInfo: 'Etwa 400 Menschen in Deutschland warten auf eine Lungentransplantation. Oft werden beide Lungenflügel transplantiert.',
    waitingList: 400,
    color: '#3498db',
    position: [0, 0, 0],
    scale: 0.6,
  },
  liver: {
    name: 'Leber',
    description: 'Die Leber entgiftet den Körper und produziert lebenswichtige Proteine. Sie kann sich teilweise selbst regenerieren.',
    donationInfo: 'Die Leber ist das am häufigsten transplantierte Organ. Etwa 1.200 Menschen warten auf eine Spenderleber.',
    waitingList: 1200,
    color: '#e67e22',
    position: [-0.5, -0.5, 0],
    scale: 0.7,
  },
  kidneys: {
    name: 'Nieren',
    description: 'Die Nieren filtern Abfallstoffe aus dem Blut und regulieren den Wasser- und Elektrolythaushalt.',
    donationInfo: 'Etwa 7.000 Menschen warten auf eine Nierentransplantation. Nieren können auch von lebenden Spendern gespendet werden.',
    waitingList: 7000,
    color: '#9b59b6',
    position: [0.5, -0.5, 0],
    scale: 0.4,
  },
  pancreas: {
    name: 'Bauchspeicheldrüse',
    description: 'Die Bauchspeicheldrüse produziert Insulin und andere Hormone, die den Blutzuckerspiegel regulieren.',
    donationInfo: 'Etwa 300 Menschen warten auf eine Bauchspeicheldrüsentransplantation, oft in Kombination mit einer Nierentransplantation.',
    waitingList: 300,
    color: '#f1c40f',
    position: [0, -1, 0],
    scale: 0.3,
  },
};

// Loading component shown while 3D models are loading
function LoadingFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mb-4"></div>
        <p className="text-gray-700 dark:text-gray-300">Lade 3D-Modelle...</p>
      </div>
    </Html>
  );
}

interface OrganProps {
  name: string;
  position: [number, number, number];
  scale: number;
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

/**
 * Individual organ model component
 * Handles the rendering and interaction for a single organ
 */
function Organ({ name, position, scale, color, isSelected, onClick }: OrganProps) {
  // Using simple geometric shapes instead of loading external models
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  
  // Animate the organ when selected
  useFrame((state) => {
    if (meshRef.current) {
      if (isSelected) {
        meshRef.current.rotation.y += 0.01;
      } else {
        // Gentle floating animation for non-selected organs
        meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      }
    }
  });

  // Focus camera on the selected organ
  useEffect(() => {
    if (isSelected && meshRef.current) {
      camera.lookAt(meshRef.current.position);
    }
  }, [isSelected, camera]);

  // Different shapes for different organs
  const renderOrganGeometry = () => {
    switch(name) {
      case 'heart':
        return <sphereGeometry args={[1, 32, 16]} />; // Heart-like shape (simplified)
      case 'lungs':
        return <cylinderGeometry args={[0.7, 0.7, 1.5, 16]} />; // Cylinder for lungs
      case 'liver':
        return <boxGeometry args={[1.2, 0.8, 0.6]} />; // Box for liver
      case 'kidneys':
        return <torusGeometry args={[0.5, 0.3, 16, 32]} />; // Torus for kidneys
      case 'pancreas':
        return <capsuleGeometry args={[0.3, 1, 8, 16]} />; // Capsule for pancreas
      default:
        return <sphereGeometry args={[1, 32, 32]} />; // Default sphere
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={isSelected ? scale * 1.2 : scale}
      onClick={onClick}
      castShadow
      receiveShadow
    >
      {renderOrganGeometry()}
      <meshStandardMaterial 
        color={color} 
        roughness={0.7} 
        metalness={0.2}
        emissive={isSelected ? color : '#000000'}
        emissiveIntensity={isSelected ? 0.3 : 0}
      />
      
      {isSelected && (
        <Html position={[0, 1.5, 0]} center distanceFactor={10}>
          <div className="bg-white dark:bg-gray-800 p-2 rounded-md shadow-lg text-center text-sm w-24">
            <p className="font-bold">{organData[name].name}</p>
          </div>
        </Html>
      )}
    </mesh>
  );
}

interface HumanBodyProps {
  selectedOrgan: string | null;
  setSelectedOrgan: (organ: string | null) => void;
}

/**
 * Human body model that contains all the organs
 * Acts as a container for the individual organ components
 */
function HumanBody({ selectedOrgan, setSelectedOrgan }: HumanBodyProps) {
  return (
    <group>
      {/* Body silhouette (simplified) */}
      <mesh position={[0, 0, -0.5]} receiveShadow>
        <capsuleGeometry args={[1, 3, 8, 16]} />
        <meshStandardMaterial color="#f5f5f5" transparent opacity={0.1} />
      </mesh>
      
      {/* Render each organ */}
      {Object.keys(organData).map((organ) => (
        <Organ
          key={organ}
          name={organ}
          position={organData[organ].position}
          scale={organData[organ].scale}
          color={organData[organ].color}
          isSelected={selectedOrgan === organ}
          onClick={() => setSelectedOrgan(organ === selectedOrgan ? null : organ)}
        />
      ))}
    </group>
  );
}

interface OrganInfoPanelProps {
  selectedOrgan: string | null;
}

/**
 * Information panel that displays details about the selected organ
 */
function OrganInfoPanel({ selectedOrgan }: OrganInfoPanelProps) {
  if (!selectedOrgan) return null;
  
  const organ = organData[selectedOrgan];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-4 left-0 right-0 mx-auto w-full max-w-md px-4"
    >
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle>{organ.name}</CardTitle>
            <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900">
              {organ.waitingList.toLocaleString()} Wartende
            </Badge>
          </div>
          <CardDescription>{organ.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700 dark:text-gray-300">{organ.donationInfo}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/**
 * Main component for the 3D organ visualization
 * Provides an interactive 3D view of human organs with educational information
 */
const OrganVisualization = () => {
  const [selectedOrgan, setSelectedOrgan] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === 'dark';
  
  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
      <div className="absolute top-4 left-4 z-10 bg-white dark:bg-gray-800 p-2 rounded-md shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">3D Organvisualisierung</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Klicke auf ein Organ für Details</p>
      </div>
      
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={[isDarkTheme ? '#1a1a1a' : '#f8f9fa']} />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={<LoadingFallback />}>
          <HumanBody selectedOrgan={selectedOrgan} setSelectedOrgan={setSelectedOrgan} />
          <Environment preset="city" />
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={4} 
            resolution={256} 
            color={isDarkTheme ? '#000000' : '#000000'} 
          />
        </Suspense>
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={true} 
          minPolarAngle={Math.PI / 6} 
          maxPolarAngle={Math.PI - Math.PI / 6} 
        />
      </Canvas>
      
      <OrganInfoPanel selectedOrgan={selectedOrgan} />
      
      <div className="absolute bottom-4 right-4 z-10">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setSelectedOrgan(null)}
          className="bg-white dark:bg-gray-800"
        >
          Zurücksetzen
        </Button>
      </div>
    </div>
  );
};

export default OrganVisualization;
