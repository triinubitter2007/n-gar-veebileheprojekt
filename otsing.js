
const otsingukast = document.getElementById("otsingukast");
const kaardid = document.querySelectorAll(".kaart");
const teade = document.getElementById("tulemusi-pole");

otsingukast.addEventListener("input", function () {
    const otsing = otsingukast.value.toLowerCase().trim();
    let leitud = 0;

    kaardid.forEach(function (kaart) {
        const tekst = kaart.textContent.toLowerCase();

        if (tekst.includes(otsing)) {
            kaart.style.display = "";
            leitud++;
        } else {
            kaart.style.display = "none";
        }
    });

    teade.hidden = leitud > 0;
});
