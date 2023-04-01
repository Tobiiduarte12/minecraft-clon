import { useEffect, useState } from 'react'
import * as images from '../assets/images/images.js'
import { useKeyboard } from './hooks/useKeyboard.js'
import { useStore } from './hooks/useStore.js'

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

    const {
        dirt,
        grass,
        wood,
        glass,
        log,
    } = useKeyboard

    useEffect(() => {
        const options = {
            dirt,
            grass,
            wood,
            glass,
            log,
        }
        const selectedTexture = Object
            .entries(options)
            .find(([texture, isEnabled]) => isEnabled)

        if (selectedTexture) {
            const [textureName] = selectedTexture
            setTexture(textureName)
        }
        console.log(selectedTexture);
        
    }, [dirt, grass, glass, wood, log])
    
    return null
}