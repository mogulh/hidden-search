let btn = document.getElementById('btn')
let searchInput = document.getElementById('searchInput')


btn.addEventListener('click', function(){
    kuku()
})


function kuku(){
   if(searchInput.style.display == "inline-block"){
    // hide the element
    searchInput.style.display = "none"
   }else{
    // show the element
    searchInput.style.display = "inline-block"
   }
}