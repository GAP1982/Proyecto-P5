
// Selectors
const albumTitle = document.querySelector("#titleField");
const albumYear = document.querySelector("#yearField");
const albumDescription = document.querySelector("#descField");
const albumImage = document.querySelector("#urlField");
const submitForm = document.querySelector("#form");

// Listeners
function eventListeners() {
  albumTitle.addEventListener("input", albumData);
  albumYear.addEventListener("input", albumData);
  albumDescription.addEventListener("input", albumData);
  albumImage.addEventListener("input", albumData);
  submitForm.addEventListener("submit",addAlbum )
}

// Functions

const objectToSend = {
  title: "",
  year: "",
  description: "",
  image: "",
};

function albumData(e) {
  objectToSend[e.target.name] = e.target.value;
  console.log(e.target.value);
}

const addAlbum = async (e) => {
  e.preventDefault();
  try {
    await axios.post("/band", objectToSend);
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

eventListeners();