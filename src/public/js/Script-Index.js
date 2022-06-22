
const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {
    target.addEventListener('click',() => {
        //Elimina un bloque para mostrar el siguiente
        content.forEach(contenido => {
            contenido.classList.remove('active')
        })
        //Muesta la informacion requerida
        const t = document.querySelector(target.dataset.target)
        t.classList.add('active')
    })
})