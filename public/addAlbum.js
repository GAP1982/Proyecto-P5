
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
  coverimg: "",
};

function albumData(e) {
  objectToSend[e.target.name] = e.target.value;
  console.log(e.target.value);
}

const addAlbum = async (e) => {
  e.preventDefault();

  let axiosConfig = {
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
		"Access-Control-Allow-Origin": "*",
	}
  };
  
  try {
	console.log(objectToSend)
    await axios.post("/band", objectToSend, axiosConfig).then((res) => {
		console.log("RESPONSE RECEIVED: ", res);
	  })
    (window.location.href = "./index.html");
  } catch (error) {
	console.log("AXIOS ERROR: ", error);
    swal({
        title: 'Error!',
        text: `${error}`,
        icon: 'error',
        confirmButtonText: 'Cool' 
    })
  }
}

eventListeners();