import { useState } from 'react'

export default function useToggle( initilVal = false ) {
    const [state, setState] = useState( initilVal )
    const toggle = () => {
        setState( !state )
    }
    return [state, toggle]
}