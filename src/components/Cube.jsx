import { useBox } from "@react-three/cannon"
import * as textures from '../assets/images/textures.js'
import { useState } from "react"
import { useStore } from './hooks/useStore'

export const Cube = ({id, position, texture}) => {
    const [IsHovered, setIsHovered ] = useState(false)
    const [removeCube] = useStore(state => [state.removeCube])
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))

    const activeTexture = textures [texture + 'Texture']

    return  (
        <mesh 
        onPointerMove={(e) => {
            e.stopPropagation()
            setIsHovered(true)
        }}
        onPointerOut={(e) => {
            e.stopPropagation()
            setIsHovered(false)
        }}
        ref={ref}
        onClick={(e) => {
            e.stopPropagation
            if (e.shiftKey) {
                removeCube(id)
            }
        }}
        >
        <boxBufferGeometry attach='geometry'/>
        <meshStandardMaterial 
        color={IsHovered ? 'grey' : 'white'}
        map={activeTexture} 
        attach='material'/>      
        </mesh>
    ) 
}