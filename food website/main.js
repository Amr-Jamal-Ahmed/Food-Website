let nav = document.querySelector("nav > div > div > ul") , 
tabs = document.querySelectorAll("nav > div > div > ul > li") ,
menuBtn = document.querySelector("nav > div > button") , 
loader = document.querySelector(".loader");

// start javascript for tab hover move animation
tabs.forEach((tab)=>{
    tab.addEventListener("mouseover",(e)=>{
        let navXPos = tab.parentElement.getBoundingClientRect().left
        ,   tabXPos = tab.getBoundingClientRect().left
        ,   x = parseInt(tabXPos - navXPos)
        ,   widthOfTab =  tab.getBoundingClientRect().width;
        nav.firstElementChild.style.width = `${widthOfTab}px`;
        nav.firstElementChild.style.left = `${x}px`;      
    });

    tab.addEventListener("mouseleave",(e)=>{
        nav.firstElementChild.style.width = `0px`;
    });

});
// end javascript for tab hover move animation

// start javascript for handle menu button on click
menuBtn.addEventListener("click",(e)=> {
    menuBtn.classList.toggle("clicked");
})
// start javascript for handle loading animation
window.addEventListener("DOMContentLoaded",(e)=> { 
    handleLoader(e,loader);

})
function handleLoader (e,loader){
    loader.style.setProperty("--loading-dur",`${e.timeStamp}ms`);
    loader.classList.add("active");
}
