const rightToLeftSliders = document.querySelectorAll('.slide-from-right')
const leftToRightSliders = document.querySelectorAll('.slide-from-left')
const titleSlider = document.querySelectorAll('.title-slide')
const socials = document.querySelectorAll('.social-links')

const mainImage = document.querySelectorAll('.main-image-container img')

const supportingImages = document.querySelectorAll('.supporting-images-container img')

const skills = document.querySelectorAll('.skills-wrapper img')

const appearOptions = {
    threshold: 0.1

}

const socialOptions = {
    threshold: 0
}

const projectOptions = {
    threshold: 1
}

const appearOnScroll = new IntersectionObserver((entries, appearOnScrollObserver) => {
    entries.forEach(entry => {
        console.log(entry.target, entry.isIntersecting)
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('appear');
            appearOnScrollObserver.unobserve(entry.target)
        }
    })
}, appearOptions)


const socialsAppearOnScroll = new IntersectionObserver((entries, socialsOnScrollObserver) => {
    entries.forEach(entry => {
        console.log(entry.target, entry.isIntersecting)
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('socials-appear');
            socialsOnScrollObserver.unobserve(entry.target)
        }
    })
}, socialOptions)


const projectsAppearOnScroll = new IntersectionObserver((entries, projectsOnScrollObserver) => {
    entries.forEach(entry => {
        console.log(entry.target, entry.isIntersecting)
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('appear');
            projectsOnScrollObserver.unobserve(entry.target)
        }
    })
}, projectOptions)


titleSlider.forEach(slider => {
    appearOnScroll.observe(slider)
})

rightToLeftSliders.forEach(slider => {
    appearOnScroll.observe(slider)
})

leftToRightSliders.forEach(slider => {
    appearOnScroll.observe(slider)
})

socials.forEach(social => {
    socialsAppearOnScroll.observe(social)
})


mainImage.forEach(image => {
    projectsAppearOnScroll.observe(image)
})

supportingImages.forEach(image => {
    projectsAppearOnScroll.observe(image)
})

skills.forEach(skill => {
    projectsAppearOnScroll.observe(skill)
})
