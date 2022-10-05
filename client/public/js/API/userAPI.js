import { authURL } from "./config.js"

console.log("hello")

const testUser = {
    firstName: "Test",
    lastName: "User",
    email: "test1@mail.com",
    password1: "password",
    password2: "password"
}

//await axios.post(`${authURL}signup`, testUser)

let user = await axios.post(`${authURL}test`, testUser).then(res => res.data)
console.log(user)
