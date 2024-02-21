function addToFavorites(e){
    const star = e.target 
    star.classList.toggle('favorite')
  }
  
  function addFavorites(favorites){
    const imgs = document.querySelectorAll(".img-album")

    imgs.forEach(img=>{
      const icon = document.createElement("i")
      icon.classList.add("fa-solid", "fa-star", "cursor-pointer", "position-favorite") 
      const div = img.parentElement
      div.append(icon, img) 
      icon.addEventListener("click", (e)=>addToFavorites(e)) 
    })
  } 
  addFavorites()

  //const redirect = id => window.location.href = `/album.html?album=${id}`
  const renderAlbums = album => {
	console.log("ALBUM: ", album)
	const div = document.getElementById("viewAlbums")
	const newDiv = document.createElement("div")
	newDiv.classList.add("mb-20")

	const img = document.createElement("img")
	img.classList.add("rounded", "cursor-point")
	//img.addEventListener("click", () => redirect(album._id))
	img.src = album.coverimg ? album.coverimg : 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/9/9c/Screen_Shot_2021-10-15_at_9.46.54_AM.png'
	const p = document.createElement("p")
	p.classList.add("text-black", "text-center", "text-xl", "font-bold", "pr-5")
	p.textContent = album.title
	div.appendChild(newDiv)
	newDiv.append(img, p)
}

  const getAlbums = async() => {
	try {
		const response = await axios.get("/band")
		console.log("RESPONSE RECEIVED: ", response)
		response.data.data.map(album => renderAlbums(album))
	} catch (error) {
		console.log("AXIOS ERROR: ", error)
		return []
	}
  }

  getAlbums()
