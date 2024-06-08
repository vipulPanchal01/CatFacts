let URL = "https://catfact.ninja/fact";
let btn = document.querySelector("button");
let spinner = document.querySelector(".spinner");
let p = document.querySelector("p");

btn.addEventListener("click", async ()=>{
    try {
        spinner.style.display = "block";
        let response = await getFacts();
        p.innerText = response;
    }
    catch(err) {
        console.log("ERROR CAUGHT - " + err);
    }
    finally {
        spinner.style.display = "none";
    }
});

async function getFacts() {
    try{
        let response = await axios.get(URL);
        return response.data.fact;
    }
    catch (err) {
        return "No facts found!";
    }
}
