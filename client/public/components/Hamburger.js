

const Hamburger = (props) =>{
    let hamburger = document.createElement("div")
    hamburger.style.width = '5vh';
    hamburger.style.height = '5vh';
    hamburger.style.display = "flex";
    hamburger.style.flexDirection = "column"
    hamburger.style.alignItems = "center";
    hamburger.style.justifyContent = "space-between";
    hamburger.style.backgroundColor = "inherit";
    hamburger.setAttribute("class", "hamburger")
    if(props.handleClick){
        hamburger.addEventListener("click", props.handleClick)
    } else {
        null
    }
    for(let i = 0; i < 4; i++){
        let patty = document.createElement("span")
        patty.style.width = '100%';
        patty.style.height = '0.75vh';
        if(i === 0){
            patty.style.borderTopRightRadius = "45%";
            patty.style.borderTopLeftRadius = "45%";
        }
        if(i == 3){
            patty.style.borderBottomRightRadius = "45%";
            patty.style.borderBottomLeftRadius = "45%";
        }
        hamburger.append(patty)
    }
    return hamburger
}

export default Hamburger