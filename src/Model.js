import React from 'react';
import { Canvas } from '@react-three/fiber'
import Hat from './Hat';

export default function Model() {
    return (
        <>
            <h1>Model</h1>
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Hat />
            </Canvas>
        </>
    );
}