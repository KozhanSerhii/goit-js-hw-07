const ass = document.querySelector(".login-form");

const send = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if(email === "" || password === ""){
        return alert("All form fields must be filled in");
    }
    else{
        const values = {
            email: form.elements.email.value.trim(),
            password: form.elements.password.value.trim(),
        };
        console.log(values);    
        ass.reset();
    }

}



ass.addEventListener("submit", send)