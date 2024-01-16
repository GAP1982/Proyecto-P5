// Selectors

const albumTitle = document.querySelector("#titleField");
const albumYear = document.querySelector("#yearField");
const albumDescription = document.querySelector("#textField");
const albumImage = document.querySelector("#urlField");
const submitBtn = document.querySelector("#submitBtn");

// Listeners
eventListeners();
function eventListeners() {
  albumTitle.addEventListener("input", albumData);
  albumYear.addEventListener("input", albumData);
  albumDescription.addEventListener("input", albumData);
  albumImage.addEventListener("input", albumData);
  submitBtn.addEventListener("submit",addAlbum )
}

// Functions

const albumInfo = {
  title: "",
  year: "",
  description: "",
  image: "",
};

function albumData(e) {
  albumInfo[e.target.name] = e.target.value;
  console.log(e.target.value);
}

const addAlbum = async (e) => {
  e.preventDefault();
  try {
    getInputValues();
    await axios.post("/album", objectToSend);
    swal({
      title: "success",
      text: "Se ha añadido un album",
      icon: "success",
      button: "ok",
    }),
      (window.location.href = "./index.html");
  } catch (error) {
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
