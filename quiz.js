function kuvaSoovitused() {
    const valitud = document.querySelectorAll('input[name="problem"]:checked');
    const tulemusDiv = document.getElementById('quiz-tulemus');
    
    if (valitud.length === 0) {
        tulemusDiv.innerHTML = "<p>Palun vali vähemalt üks väide, millega samastud.</p>";
        return;
    }

    const soovitused = {
        akadeemiline: '<li><a href="akadeemiline-stress.html">Akadeemiline ja ajaplaneerimise stress</a></li>',
        emotsionaalne: '<li><a href="emotsionaalsed-ja-meeleoluhäired.html">Emotsionaalsed raskused ja meeleolu</a></li>',
        eluviis: '<li><a href="eluviis.html">Füsioloogilised ja elustiili tegurid (uni, liikumine)</a></li>',
        raha: '<li><a href="rahalised-mured.html">Finantsilised ja elulised mured</a></li>',
        sotsiaalne: '<li><a href="sotsiaalne-kohanemine.html">Sotsiaalne kohanemine ja keskkonnamuutused</a></li>',
        enesehinnang: '<li><a href="enesehinnang.html">Enesehinnang ja kognitiivsed mustrid</a></li>',
        abi: '<li><a href="abi-teadlikkus.html">Abi kättesaadavus ja teadlikkus</a></li>'
    };

    let vastusHTML = "<p><strong>Sulle võiksid abiks olla need teemad:</strong></p><ul>";
    
    valitud.forEach(kast => {
        if (soovitused[kast.value]) {
            vastusHTML += soovitused[kast.value];
        }
    });
    
    vastusHTML += "</ul>";
    tulemusDiv.innerHTML = vastusHTML;
}