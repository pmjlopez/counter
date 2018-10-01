export const mockLocalStorage = () => {
    let store = {}
    return {
        clear: () => { store = {} },
        getItem: (key: string) => store[key],
        setItem: (key: string, value: string) => {
            store = {...store, [key]: value}
        }
    }
}