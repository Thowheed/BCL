


function setUser(data: any) {

    if (typeof window !== 'undefined')
        localStorage.setItem("user", JSON.stringify(data));
}


function getUser() {

    if (typeof window !== 'undefined')
        return localStorage.getItem("authToken")
    return null
}

export {setUser, getUser} 

