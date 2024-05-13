export const getItem = (key) => {
    const data = JSON.parse(localStorage.getItem(key))
    if(data) return data;
    return [];
}

export const appendItem = (key, value) => {
    const data = JSON.parse(localStorage.getItem(key))
    if(data) {
        data.push(value)
        localStorage.setItem(key, JSON.stringify(data))
    }
    else {
        localStorage.setItem(key, JSON.stringify([value]))
    }
        
}


export const removeItem = (key, value) => {
    const data = JSON.parse(localStorage.getItem(key));
    if(data){
        localStorage.setItem(key, JSON.stringify(data.filter(d => d.id != value.id)))
    }
    else {
        localStorage.setItem(key, JSON.stringify([]))
    }
        
}