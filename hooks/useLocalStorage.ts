export function useLocalStorage<T>(key: string, initialValue: T) {
    const getValue = () => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
        }
    }

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value: T | ((val: T) => T)) => {
        if (typeof window !== "undefined") {
            try {
                // Save to local storage
                window.localStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                // A more advanced implementation would handle the error case
                console.log(error);
            }
        }
    };

    return [getValue, setValue];
}