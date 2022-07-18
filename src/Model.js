import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Hat from './Hat';

export default function Model() {
const [crownColor, setCrownColor] = useState('#FF0000');
const [capeColor, setCapeColor] = useState('#FFFFFF');
const [visorColor, setVisorColor] = useState('#FFFFFF');
const [topPoint, setTopPointColor] = useState('#FFFFFF');

const [crownVisibility, setCrownVisibility] = useState(true);
const [capeVisibility, setCapeVisibility] = useState(true);
const [visorVisibility, setVisorVisibility] = useState(true);
const [topPointVisibility, setTopPointVisibility] = useState(true);

return (
    <>
        <h1>Model</h1>
        <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Hat
                colors={{
                    crownColor,
                    capeColor,
                    visorColor,
                    topPoint,
                }}
                visibility={{
                    crownVisibility,
                    capeVisibility,
                    visorVisibility,
                    topPointVisibility,
                }}
            />
        </Canvas>
    </>
);
}