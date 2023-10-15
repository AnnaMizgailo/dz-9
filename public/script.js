avatarSelect.onchange = (event) =>{
    const image = avatarSelect.files[0];
    if (image){
        avatarImage.src = URL.createObjectURL(image);
        avatarImage.classList.toggle("previewAvatar");
        avatarLabel.classList.remove("previewAvatar");
        avatarLabel.classList.toggle("disable");
    }
};

sendInfo.onclick = (event) => { 
    event.preventDefault();
    const pass = formPost.elements.passwordUp.value == formPost.elements.repeatedPassword.value
    && formPost.elements.passwordUp.value;

    if(pass){
        formPost.elements.passwordUp.classList.remove("error");
        formPost.elements.repeatedPassword.classList.remove("error");

        formPost.elements.passwordUp.classList.add("success");
        formPost.elements.repeatedPassword.classList.add("success");
    }else{
        formPost.elements.passwordUp.classList.remove("success");
        formPost.elements.repeatedPassword.classList.remove("success");

        formPost.elements.passwordUp.classList.add("error");
        formPost.elements.repeatedPassword.classList.add("error");
    }

    const image = avatarSelect.files[0];
    if (image && pass) {
        setTimeout(() => formPost.submit(), 600);
        return;
    }

    sendInfo.innerText = "Invalid data!";
    sendInfo.classList.add("error");
    setTimeout(() => {
      sendInfo.innerText = "Click Me";
      sendInfo.classList.remove("error");
    }, 2000);
};

async function register(){
    const user = {
        login: formGet.elements.loginIn.value,
        password: formGet.elements.passwordIn.value
    }
    const response = await fetch(`/sign-in?login=${user.login}&password=${user.password}`, {});
    if(response.ok){
        const image = await response.blob();
        authorizedAvatar.src = image;
        console.log(image);
        alert("Hello " + user.login + "!");
        return;
    }

    const responseText = await response.text();
    alert(responseText);
}