const searchInput = document.getElementById("searchInput")
const names = document.getElementsByClassName("name")
searchInput.addEventListener("keyup",(e)=>{
    let searchQeury = e.target.value.toLowerCase()
    for ( let i = 0 ; i <names.length;i++){
        if (names[i].textContent.toLowerCase().includes(searchQeury)){
            names[i].style.display = "block"
        } else{
            names[i].style.display = "none"     
        }
    }
})