document.querySelectorAll('[wm-folder]').forEach(folder =>{
    folder.onclick = function(e) {
        const ul = folder.nextElementSibling
        const displayAtual = ul.style.display
        ul.style.display = displayAtual === 'none' ? 'block' : 'none'
    }
})