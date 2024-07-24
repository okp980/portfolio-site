import React, { useEffect, useState } from 'react';
import Switch from "react-switch";

const ToggleSwitch = () => {
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        const theme = window.matchMedia('(prefers-color-scheme: dark)')
        const storage = localStorage.getItem('theme')
        if (theme.matches && !storage) {
            setChecked(true)
        }
        if (theme.matches && storage) {
            if (storage === 'light') {
                setChecked(false)
                return
            }
            setChecked(true)
        }
    }, [])
    useEffect(() => {
        if (checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark')
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light')
        }
    }, [checked])

    function handleChange() {
        setChecked(prevState => !prevState)
    }

    return (
        <div>
            <Switch
                checked={checked}
                onChange={handleChange}
                onColor='#3700b3'
                uncheckedIcon={false}
                checkedIcon={false}
            />
        </div>
    )
}

export default ToggleSwitch
