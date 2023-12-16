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
