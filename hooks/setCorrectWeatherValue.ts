import { useState } from 'react';
export function useSetCorrectValue(value: number): string {
    const [state, setState] = useState<string>('');
    function showCorrectValue(value: number) {
        switch (value) {
            case 0 | 1 | 2 | 3:
                return setState('°C');
            case 4:
                return setState('hPa');
            case 7:
                return setState('%');
            default:
                return setState('');
        }
    }
    showCorrectValue(value);

    return state;
}
