const { default: axios } = require('axios')
const { redirect } = require("express/lib/response")

const onLoad = async() => {
    try{
        const response = await axios.get('/me')
        let user = response.data
        const {data} = await axios.get('/user/${user.id')
        user = data.data
        return user
    }
    catch(error){
        redirect('./login.html')
    }
}

const logOut = async() => {
    await axios.post('/logout')
    redirect('./login.html')
}

redirect = (url) => {window.location.assign(url)}
const goBack = (e, to) => {
    e.preventDefault()
    redirect(to)
}

export {goBack, redirect, logOut, onLoad}

