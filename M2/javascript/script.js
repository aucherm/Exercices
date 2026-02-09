const form = document.getElementById("identity-form")
form.addEventListener("submit", submitForm);

 async function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(form);
    let object = {};
    for (let val of formData) {
    object = {...object, [val[0]]: val[1]}
    }
    console.log(formData);
    const res = await fetch("http://localhost:3000/subscription", {body: JSON.stringify(object);

    });
    return res;
 }
 
