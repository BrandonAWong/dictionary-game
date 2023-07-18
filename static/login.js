function animation() 
{
    const wrapper = document.getElementById("liquid-effect")

    const animateLiquid = x => {
        const liquid = document.createElement('div')
        liquid.className = "liquid"
        liquid.style.left = `${x}px`
        wrapper.appendChild(liquid)
        setTimeout(() => wrapper.removeChild(liquid), 2000);
    }
    window.onmousemove = evt => animateLiquid(evt.clientX);
}

animation()