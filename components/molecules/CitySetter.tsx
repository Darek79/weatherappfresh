import { KeyboardEvent, useRef, useEffect } from 'react';
interface ICitySetter {
    setCity(value: string): void;
}

export default function CitySetter({ setCity }: ICitySetter) {
    const inputRef = useRef<HTMLInputElement>(null);
    function onEnter(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            setCity(inputRef.current!.value);
            window.localStorage.setItem('city', inputRef.current!.value);
        }
    }

    useEffect(() => {
        const city = window.localStorage.getItem('city') as string;
        if (city) {
            setCity(city);
        }
    }, [setCity]);
    return (
        <div className="flex flex-col items-center gap-y-2">
            <p className="text-center font-bold">Please set your city :</p>
            <input
                ref={inputRef}
                onKeyDown={onEnter}
                className="appearance-none max-w-md h-fit font-bold text-center bg-white border-2 border-blue-400 p-2 rounded-2xl outline-none"
            />
        </div>
    );
}
