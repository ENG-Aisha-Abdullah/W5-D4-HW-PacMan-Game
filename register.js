const apiUrl = "https://682199fa259dad2655afc100.mockapi.io";
const name = document.getElementById("name");
const pass = document.getElementById("pass");
const confirm_pass = document.getElementById("confirm");
const btn = document.getElementById("registerBtn");

btn.addEventListener("click", async () => {
    
    let username = name.value
    let password = pass.value
    let confirm_password = confirm_pass.value

    if(username == "" || password == "" || confirm_password == "") {
        alert("username or password must not be empty")
        return;
    }

    if(password !== confirm_password){
        alert("passwords did not match")
        return
    }

    try {

        const res = await fetch(`${apiUrl}/users`);

        const users = await res.json();

        const userExist = users.find((user) => {
            return user.username == username
        });

        if(userExist){
            alert("user already exists");
            return
        }

       await fetch(`${apiUrl}/users`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({username: username, password: password}),
        });
        
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("you have signed up successfully")

        window.location.href = "./login.html"
        
    } catch (error) {
        console.log(error)
    }

})