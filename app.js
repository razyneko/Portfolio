const tl = gsap.timeline()

tl.from('#nav h1', {
    y: -20,
    opacity:0,
    duration: 1,   
})

tl.from('#nav-list h2', {
    y: -20,
    opacity:0,
    duration: 1,
    stagger: 0.3,   
})

gsap.from('#bio', {
    y:-20,
    opacity:0,
    duration: 1,
    delay:2,
})

gsap.from('.project-card', {
    y: -20,
    opacity:0,
    scrollTrigger: {
        trigger: '#projects h1',
        scroller: 'body',
        start: 'top 78%',
        end: 'top 38%',
        scrub: 3,
    }
})



const skillsArr = ["./assets/skills/html.png", "./assets/skills/css.png", "./assets/skills/js.png"]

const skillSet = document.querySelector('#skillset');

for (let i = 0; i < skillsArr.length; i++){
    skillSet.innerHTML += `<img src=${skillsArr[i]}>`
}


gsap.from('#skillset img', {
    x: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '#skillset img',
        scroller: 'body',
        start: 'top 85%',
        end: 'top 55%',
        scrub: 3,
    }
})

const pointer = document.querySelector('#pointer');
function pointerFollower() {
    document.querySelector('#main').addEventListener('mousemove', (dets) => {
        const clientX = dets.clientX;
        const clientY = dets.clientY;
        pointer.style.transform = `translate(${clientX}px, ${clientY}px)`
    })
}

pointerFollower()
