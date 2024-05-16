import React from 'react';

export default function Card({ title, detail }) {
    return (
        <li className='h-64 border-2 border-black'>
            <h1>{title}</h1>
        </li>
    );
}

