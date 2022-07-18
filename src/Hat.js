/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Hat({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/hat.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Crown.geometry} material={materials['Material.001']} material-color={props.colors.crownColor} visible={props.visibility.crownVisibility} />
      <mesh geometry={nodes.Cape.geometry} material={materials['Material.004']} material-color={props.colors.capeColor} visible={props.visibility.capeVisibility}/>
      <mesh geometry={nodes.Visor.geometry} material={materials['Material.002']} material-color={props.colors.visorColor} visible={props.visibility.visorVisibility}/>
      <mesh geometry={nodes.Top_point.geometry} material={materials['Material.003']} material-color={props.colors.topPointColor} visible={props.visibility.topPointVisibility}position={[0, 0.93, 0]} scale={[0.04, 0.02, 0.04]} />
    </group>
  )
}

useGLTF.preload('/models/hat.glb')
