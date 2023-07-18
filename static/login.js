function login()
{
    // do db stuff
}

function showSignUp()
{
    const main = document.getElementById("wrapper");
    main.className = "input-wrapper fade-in";

    document.getElementById("login").remove();
    const signUpButton = document.getElementById("sign-up");
    signUpButton.className = "";
    signUpButton.removeAttribute("onclick");
    signUpButton.addEventListener("click", signUp);

    const back = document.createElement("button");
    back.className = "minor-button";
    back.innerHTML = "Back"
    back.addEventListener("click", showLogin)
    main.appendChild(back)
}

function signUp(evt) 
{
    // do db stuff
}

function showLogin(evt)
{
    evt.currentTarget.remove();
    document.getElementById("sign-up").remove();
    const main = document.getElementById("wrapper")
    main.className = "input-wrapper slide-in"

    const login = document.createElement("button");
    login.id = "login";
    login.innerHTML = "Login";
    login.onclick = login
    main.appendChild(login)

    const signUp = document.createElement("button");
    signUp.id = "sign-up";
    signUp.className = "minor-button";
    signUp.innerHTML = "Sign Up"
    signUp.onclick = showSignUp
    main.appendChild(signUp)
}

function animation() 
{
    const wrapper = document.getElementById("liquid-effect")

    const animateLiquid = x => {
        const liquid = document.createElement("div")
        liquid.className = "liquid"
        liquid.style.left = `${x}px`
        wrapper.appendChild(liquid)
        setTimeout(() => wrapper.removeChild(liquid), 2000);
    }
    window.onmousemove = evt => animateLiquid(evt.clientX);
}

animation()