import axios from 'axios'
import { onLoad, redirect, logOut } from '../utils/utils.js'
const fullUser = await onload()
const userString = `${fullUser.name} ${fullUser.lastName}`
const userName = document.getElementById('user-name')
userName.textContent = userString

let album;
let newSong = {}
const albumId = window.location.search.split('album=')[1]

const getAlbum = async () => {
  try{
      const {data} = await axios.get(`/band/${albumId}`)
      album = data.data;
  }
  catch(error){
      console.log(error)
  }
}

const addSong = async (e) => {
    e.preventDefault()
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input)=> newSong[input.id]=input.value)
    album.songs.push(newSong)
    try {
        await axios.put(`/band/${album._id}`,album)
        swal({
            title: 'Success!',
            text: "You added a song",
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          redirect(`./album.html?=${album._id}`)
        }
        catch(error){
            swal({
              title: 'Error!',
              text: `${error}`,
              icon: 'error',
              confirmButtonText: 'Cool'
            })
          }
          const button = document.getElementsByClassName(' w-1/3 h-10  mt-8 text-center text-sm font-bold text-white bg-blue-600  rounded-md hover:bg-opacity-90 focus:ring-4')[0]
          const cancelButton= document.getElementById('cancel')
          button.addEventListener('click', (e)=> addSong(e))
          cancelButton.addEventListener('click', (e) => goBack(e, `../album.html?=${album._id}`))
          const logOutButton = document.getElementById('logout')
          logOutButton.addEventListener('click',logOut)
          getAlbum()
}


