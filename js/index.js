function typeMaterial () {
    const btnArigon= document.getElementById('arigon'),
    btnAlkantara = document.getElementById('alkantara'),
    btnVelur = document.getElementById('velur'),
    alkantaraImg = document.getElementById('alkantara-img'),
    arigonImg = document.getElementById('arigon-img'),
    velurImg = document.getElementById('velur-img');

    btnArigon.addEventListener('click', () => {
        btnArigon.className = "material-button-active";
        btnAlkantara.className = "material-button";
        btnVelur.className = "material-button";
        alkantaraImg.style.display = 'none';
        arigonImg.style.display = '';
        velurImg.style.display = 'none';


    });

    btnAlkantara.addEventListener('click', () => {
        btnArigon.className = "material-button";
        btnAlkantara.className = "material-button-active";
        btnVelur.className = "material-button";
        alkantaraImg.style.display = '';
        arigonImg.style.display = 'none';
        velurImg.style.display = 'none';

    });

    btnVelur.addEventListener('click', () => {
        btnArigon.className = "material-button";
        btnAlkantara.className = "material-button";
        btnVelur.className = "material-button-active";
        alkantaraImg.style.display = 'none';
        arigonImg.style.display = 'none';
        velurImg.style.display = '';


    });
}

function catalog () {
    const simple = document.getElementById('simple'),
    simpleAlcantara = document.getElementById('simple-alcantara'),
    advanced = document.getElementById('advanced'),
    simplesAdvanced = document.getElementById('advanced-alcantara');

    simple.addEventListener('click', () => {
        simple.className = "btn_catalog_active";
        simpleAlcantara.className = "btn_catalog";
        advanced.className = "btn_catalog";
        simplesAdvanced.className = "btn_catalog";
    })

    simpleAlcantara.addEventListener('click', () => {
        simple.className = "btn_catalog";
        simpleAlcantara.className = "btn_catalog_active";
        advanced.className = "btn_catalog";
        simplesAdvanced.className = "btn_catalog";
    })

    advanced.addEventListener('click', () => {
        simple.className = "btn_catalog";
        simpleAlcantara.className = "btn_catalog";
        advanced.className = "btn_catalog_active";
        simplesAdvanced.className = "btn_catalog";
    })

    simplesAdvanced.addEventListener('click', () => {
        simple.className = "btn_catalog";
        simpleAlcantara.className = "btn_catalog";
        advanced.className = "btn_catalog";
        simplesAdvanced.className = "btn_catalog_active";
    })
}

function order () {
    const btnOrder = document.getElementById('btn-order');

    btnOrder.addEventListener('click', () => {
        alert("Ваше заявление успешно отправлено")
    })
}

order ()

typeMaterial ()
catalog ()


