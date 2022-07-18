import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { Collapse, Button } from 'antd';
import Hat from './Hat';

const { Panel } = Collapse;

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
        <Collapse>
            <Panel header="Стенка">
                <Button type={crownVisibility ? 'default' : 'primary'} onClick={() => setCrownVisibility(crownVisibility ? false : true)}>
                    {crownVisibility ? 'Скрыть' : 'Показать'}
                </Button>
            </Panel>
            <Panel header="Отлетная часть">
                <Button type={capeVisibility ? 'default' : 'primary'} onClick={() => setCapeVisibility(capeVisibility ? false : true)}>
                    {capeVisibility ? 'Скрыть' : 'Показать'}
                </Button>
            </Panel>
            <Panel header="Козырёк">
                <Button type={visorVisibility ? 'default' : 'primary'} onClick={() => setVisorVisibility(visorVisibility ? false : true)}>
                    {visorVisibility ? 'Скрыть' : 'Показать'}
                </Button>
            </Panel>
            <Panel header="Верхняя заклёпка">
                <Button type={topPointVisibility ? 'default' : 'primary'} onClick={() => setTopPointVisibility(topPointVisibility ? false : true)}>
                    {topPointVisibility ? 'Скрыть' : 'Показать'}
                </Button>
            </Panel>
        </Collapse>
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