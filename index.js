function equalizeHeight() {
    let div1 = document.querySelector('.professional');
    let div2 = document.querySelector('.formation');

    
    div1.style.height = 'auto';
    div2.style.height = 'auto';

    time(div1, div2);
}

// Exécuter après chargement 
window.addEventListener('load', equalizeHeight);
window.addEventListener('resize', equalizeHeight);

function equalizeHeightother() {
    let div1 = document.querySelector('.langue');
    let div2 = document.querySelector('.contact');

    
    div1.style.height = 'auto';
    div2.style.height = 'auto';

    time(div1, div2);
}

// Exécuter après chargement 
window.addEventListener('load', equalizeHeightother);
window.addEventListener('resize', equalizeHeightother);

function time(div1, div2) {
    setTimeout(() => {
        let maxHeight = Math.max(div1.offsetHeight, div2.offsetHeight);
        console.log("Hauteur recalculée :", maxHeight);

        div1.style.height = maxHeight + 'px';
        div2.style.height = maxHeight + 'px';
    }, 50);
}

