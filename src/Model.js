import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { Collapse, Button, Layout } from 'antd';
import { CirclePicker } from "react-color";
import './Model.css'
import Hat from './Hat';

const { Panel } = Collapse;
const { Sider, Content } = Layout;

export default function Model() {
const [crownColor, setCrownColor] = useState('#FFFFFF');
const [capeColor, setCapeColor] = useState('#FFFFFF');
const [visorColor, setVisorColor] = useState('#FFFFFF');
const [topPointColor, setTopPointColor] = useState('#FFFFFF');

const [crownVisibility, setCrownVisibility] = useState(true);
const [capeVisibility, setCapeVisibility] = useState(true);
const [visorVisibility, setVisorVisibility] = useState(true);
const [topPointVisibility, setTopPointVisibility] = useState(true);

return (
    <>
        {/* <h1>Model</h1> */}
        <Layout hasSider>
            <Content>
                <Canvas
                    style={{
                        boxShadow: 'inset 15px 15px 150px 5px #CCCCCC',
                        position: 'fixed',
                        height: 'calc(100vh - 46px)',
                        width: 'calc(100% - 320px)',
                        right: '0',
                        top: '46'
                    }}
                >
                    <OrbitControls />
                    <ambientLight />
                    <spotLight
                        intensity={0.9}
                        position={[10, 15, 10]}
                        penumbra={1}
                        angle={0.1}
                        castShadow
                    />
                    <pointLight position={[-10, -10, -10]} />
                    <Hat
                        colors={{
                            crownColor,
                            capeColor,
                            visorColor,
                            topPointColor,
                        }}
                        visibility={{
                            crownVisibility,
                            capeVisibility,
                            visorVisibility,
                            topPointVisibility,
                        }}
                    />
                </Canvas>
            </Content>
            <Sider
                width={320}
                style={{
                    background: '#FFFFFF',
                    overflow: 'auto',
                    height: 'calc(100vh - 46px)',
                    position: 'fixed',
                    left: 0,
                    top: 46,
                    bottom: 0,
                }}>
                <Collapse className='model-menu' accordion>
                    <Panel header="Стенка">
                        <CirclePicker width="auto" onChange={color => setCrownColor(color.hex)} />
                        <Button type={crownVisibility ? 'default' : 'primary'} onClick={() => setCrownVisibility(crownVisibility ? false : true)}>
                            {crownVisibility ? 'Скрыть' : 'Показать'}
                        </Button>
                    </Panel>
                    <Panel header="Отлетная часть">
                        <CirclePicker width="auto" onChange={color => setCapeColor(color.hex)} />
                        <Button type={capeVisibility ? 'default' : 'primary'} onClick={() => setCapeVisibility(capeVisibility ? false : true)}>
                            {capeVisibility ? 'Скрыть' : 'Показать'}
                        </Button>
                    </Panel>
                    <Panel header="Козырёк">
                        <CirclePicker width="auto" onChange={color => setVisorColor(color.hex)} />
                        <Button type={visorVisibility ? 'default' : 'primary'} onClick={() => setVisorVisibility(visorVisibility ? false : true)}>
                            {visorVisibility ? 'Скрыть' : 'Показать'}
                        </Button>
                    </Panel>
                    <Panel header="Верхняя заклёпка">
                        <CirclePicker width="auto" onChange={color => setTopPointColor(color.hex)} />
                        <Button type={topPointVisibility ? 'default' : 'primary'} onClick={() => setTopPointVisibility(topPointVisibility ? false : true)}>
                            {topPointVisibility ? 'Скрыть' : 'Показать'}
                        </Button>
                    </Panel>
                </Collapse>
            </Sider>
        </Layout>
    </>
);
}