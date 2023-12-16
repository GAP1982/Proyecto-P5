import axios from 'axios'
import {onLoad, redirect, logOut} from '../utils/utils.js'

const fullUser =await onLoad()
const userString = `${fullUser.name} ${fullUser.lastName}`
const userName = document.getElementById('user-name')
userName.textContent = userString

const objectToSend = {title: "", yearOfRelease: "", description:"", img:""}

function getInputValues(){
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input)=> objectToSend[input.id]=input.value)
}

const addAlbum = async (e) => {
    e.preventDefault()
    try{
        getInputValues()
        await axios.post('/band', objectToSend)
        swal({
            title: 'Success!',
            text: 'Album added to the collection!',
            icon: 'success',
            confirmButtonText: 'ok'
        })
        window.location.href='./index.html'
    }
    catch(error){
        swal({
            title: 'Error!',
            text: `${error}`,
            icon: 'error',
            confirmButtonText: 'Cool' 
        })
    }
}

const button = document.getElementsByClassName('w-1/3 h-10 mt-8 mb-8 text-center text-sm font-bold text-white bg-blue-600')
button.addEventListener('click', (e)=> addAlbum(e))

const logOutButton = document.getElementById('logout')
logOutButton.addEventListener('click',logOut)
