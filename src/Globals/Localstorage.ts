


function setUser(data: any) {
    console.log("data", data);
    if (typeof window !== 'undefined')
        localStorage.setItem("user", JSON.stringify(data));
}


function getUser() {

    if (typeof window !== 'undefined') {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    }
    return null
}

export { setUser, getUser }

