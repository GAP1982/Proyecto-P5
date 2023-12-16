import { onLoad , redirect , logOut } from '../utils/utils.js'

const fullUser = await onLoad()
const userString = `${fullUser.name} ${fullUser.lastName}`
const userName = document.getElementById('user-name')
userName.textContent = userString

let albumToUse;
function renderAlbum(album){
    const div = document.getElementById("view-album")
    const h1 = document.createElement('h1')
    h1.classList.add('text-white', 'text-5xl', 'mt-20', 'mb-4', 'ml-4', 'font-bold')
    h1.textContent=album.title
    div.appendChild(h1)
    const p = document.createElement('p')
    p.classList.add('text-white', 'mb-4', 'ml-4', 'w-1/2')
    p.textContent=album.description
    div.appendChild(p)
    const h1Songs = document.createElement('h1')
    h1Songs.textContent= 'Songs'
    h1Songs.classList.add('text-white', 'text-2xl', 'ml-4', 'font-bold')
    div.appendChild(h1Songs)
    const newDiv = document.createElement('div')
    div.appendChild(newDiv)
    newDiv.id ='songs-list'
    if(album.songs.length){
        album.songs.map((song, index)=> {
            rederSong(song, index)})
            const buttonTrash = document.getElementsByClassName('fa-trash')
            for (let i = 0; i < album.songs.length; i++) {
                buttonTrash[i].addEventListener('click', () => deleteSong(album.songs[i]._id))
            }
    }
}






