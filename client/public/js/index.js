import Hamburger from "../components/Hamburger.js";
import Navlist from "../components/Navlist.js";
const mainNav = document.getElementById("mainNav")

const sizeWindow = () =>{
    let windowSize = window.innerWidth;
    mainNav.innerHTML = ""
    if(windowSize <= 700){
        mainNav.append(Hamburger({handleClick:null}))
    } else {
        mainNav.append(Navlist([{text:"LINK ONE", href:"#"},{text:"LINK TWO", href:"#"},{text:"LINK THREE", href:"#"},{text:"LINK FOUR", href:"#"}]))
    }
}
sizeWindow()

window.addEventListener("resize", sizeWindow)



