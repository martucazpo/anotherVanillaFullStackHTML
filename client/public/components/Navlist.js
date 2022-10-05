const Navlist = (props) => {
    let navUl = document.createElement("ul")
    navUl.style.listStyle = "none"
    navUl.setAttribute("class", "navlist")
    navUl.style.display = "flex"
    navUl.style.alignItems = "center"
    navUl.style.justifyContent = "space-between"
    props.forEach(link => {
        let li = document.createElement("li")
        let anchor = document.createElement("a")
        anchor.innerText = link.text
        anchor.setAttribute("href", link.href)
        anchor.style.textDecoration = "none"
        li.append(anchor)
        navUl.append(li)
    })
    return navUl
}

export default Navlist