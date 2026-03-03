const ass = document.querySelector(".login-form");

const send = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if(email === "" || password === ""){
        return alert("All form fields must be filled in");
    }
    else{
        const values = {
            Email: form.elements.email.value,
            Password: form.elements.password.value,
        };
        console.log(values);    
        ass.reset();
    }

}



ass.addEventListener("submit", send)