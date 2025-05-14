const apiUrl = "https://682199fa259dad2655afc100.mockapi.io";
const name = document.getElementById("name");
const pass = document.getElementById("pass");
const btn = document.getElementById("loginBtn");

btn.addEventListener("click", async () => {
    let username = name.value
    let password = pass.value

    if(username == "" || password == "") {
        alert("username or password must not be empty")
        return;
    }

    try {

        const res = await fetch(`${apiUrl}/users`);
        const users = await res.json();

        const userExist = users.find(user => {
            return user.username == username && user.password == password
        });

        if(!userExist){
            alert("invalid username or password");
            return;
        }

        alert("you are logged in");
        window.location.href = "./index.html";
        
    } catch (error) {
        console.log(error)
    }

})