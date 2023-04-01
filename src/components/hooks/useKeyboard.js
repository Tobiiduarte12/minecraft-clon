import { useEffect, useState } from "react"

const ACTIONS_KEYBOARD_MAP = {
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyW:'moveForward',
    KeyD: 'moveRigth',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'wood',
    Digit4: 'glass',
    Digit5: 'log'
}

export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRigth: false,
        jump: false,
        dirt: false,
        grass: false,
        wood: false,
        glass: false,
        log: false
    })

    useEffect(() => {
        const handleKeyDown = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP [code]

            if (action) {

                // if (actions[action]) return

                setActions(prevActions =>({
                    ...prevActions,
                    [action]: true
                }))
            }
        }

        const handleKeyUp = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP [code]

            if (action) {
                
                // if (!actions[action]) return

                setActions(prevActions =>({
                    ...prevActions,
                    [action]: false
                }))
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    return actions
}