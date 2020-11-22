export default function addToLocalStorage(timeStamp, derp, reps, abiplos, nouke, xoon, localStorageList) {
    const addToLocalStorage = {timeStamp: timeStamp, derp: derp, reps: reps, abiplos: abiplos, nouke: nouke, xoon: xoon}
    localStorageList = [addToLocalStorage]
    saveToLocalStorage(localStorageList)
}

export function saveToLocalStorage(data) {
    localStorage.setItem('Productdata', JSON.stringify(data))
}

export function loadFromLocalStorage(name) {
    try {
        return JSON.parse(localStorage.getItem(name))
    } catch (error) {
        console.log(error.message)
    }
}