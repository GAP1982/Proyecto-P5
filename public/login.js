import axios from 'axios'
import { redirect } from '../public/utils/utils.js'
const objectToSend = {email: "", password: "" }

function getInputValues(){
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input) => objectToSend[input.id]=input.value)
}

const loginUser = async (e)=> {
    e.preventDefault()
    getInputValues()
    try{
        const response = await axios.post('/login',objectToSend)
        swal({
            title: 'Success!',
            text: "",
            icon: 'success',
            confirmButtonText: 'ok'
        })
        redirect("./index.html")
    }
    catch(error){
        swal({
            title: 'Error!',
            text: `${error.response.data.message}`,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}

const LoginButton = document.getElementById('Login')
LoginButton.addEventListener('click', (e)=>loginUser(e))


