import React from 'react';

export const Display = ({ value }: { value: number }) => {
    return (
        <div className="w-full bg-black h-20 rounded justify-end flex items-end text-bold text-5xl text-white p-3">
            {value}
        </div>
    );
};


