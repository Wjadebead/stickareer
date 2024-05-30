import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import React from 'react';
import { CgSun } from "react-icons/cg";
import { RiMoonFill } from "react-icons/ri";

export const darkModeAtom = atomWithStorage('darkMode', true);

export default function DarkModeButton() {

    const [darkMode, setDarkMode] = useAtom(darkModeAtom);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <button
        className='rounded-full shadow-md w-10 h-10 self-start flex justify-center items-center transition-all dark:bg-slate-700'
        onClick={toggleDarkMode}
        >
            {darkMode ? <RiMoonFill color='white' /> : <CgSun />}
        </button>
    );
}

