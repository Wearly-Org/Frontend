"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

interface ModelViewer3DProps {
    gender: string;
}

function Model({ gender }: { gender: string }) {
    const modelPath = gender === "Male" ? "/models/male_muscular.glb" : "/models/female_fit.glb";
    const { scene } = useGLTF(modelPath);

    return <primitive object={scene} position={[0, -1, 0]} scale={1.5} />;
}

export default function ModelViewer3D({ gender }: ModelViewer3DProps) {
    return (
        <div className="w-full h-full bg-gray-100 rounded-2xl overflow-hidden">
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                    <OrbitControls enableZoom={true} enablePan={false} minDistance={2} maxDistance={8} />

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
