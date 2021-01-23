const navlinks = document.getElementById('nav')
const links = document.getElementsByClassName('menulines')[0]

links.addEventListener("click",function(){
    console.log(links.classList);
    
    
    navlinks.classList.toggle("showlinks")
    links.classList.toggle("btndesign")
});
