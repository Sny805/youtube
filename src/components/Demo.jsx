import React, { useMemo, useState } from 'react';
import { findPrime } from '../utills/helper';
import Demo2 from './Demo2';

const Demo = () => {

    const [text, setText] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const prime = useMemo(() => findPrime(text))
    console.log("render");

    return (
        <>
            <div className={'m-4 p-2 w-96 h-96 border border-black ' + (isDarkTheme && "bg-gray-900 text-white")}>
                <div>
                    <button
                        className="m-10 p-2 bg-green-200"
                        onClick={() => setIsDarkTheme(!isDarkTheme)}
                    >
                        Toggle
                    </button>
                </div>
                <div>
                    <input type="number" value={text} onChange={(e) => setText(e.target.value)} className='border border-black w-72' />
                </div>

                <div>
                    <h1>nth Prime : {prime}</h1>
                </div>

            </div>
            <Demo2 />
        </>
    )
}

export default Demo
