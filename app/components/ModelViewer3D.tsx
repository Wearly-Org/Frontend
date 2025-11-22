"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense } from "react";

interface ModelViewer3DProps {
    gender: string;
}

function Model({ gender }: { gender: string }) {
    // Placeholder geometry for the model
    // Using a Capsule to represent a human figure roughly
    return (
        <mesh position={[0, 0, 0]}>
            <capsuleGeometry args={[0.5, 2, 4, 8]} />
            <meshStandardMaterial
                color={gender === "Male" ? "#4A90E2" : "#E24A8D"}
                roughness={0.3}
                metalness={0.1}
            />
        </mesh>
    );
}

export default function ModelViewer3D({ gender }: ModelViewer3DProps) {
    return (
        <div className="w-full h-full bg-gray-100 rounded-2xl overflow-hidden">
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <OrbitControls enableZoom={true} enablePan={false} minDistance={3} maxDistance={8} />

                    {/* Lighting */}
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />

                    {/* Environment for better reflections */}
                    <Environment preset="city" />

                    {/* The Model */}
                    <Model gender={gender} />
                </Suspense>
            </Canvas>
        </div>
    );
}
