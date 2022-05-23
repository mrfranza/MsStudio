var flag1 = true;

$(document).ready(function() {

    setTimeout(function() {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
        $('#loader-wrapper').remove();
        flag1 = false;
    }, 3000);

});


var dots = window.setInterval(function() {
    if (flag1) {
        var wait = document.getElementById("attesa");
        if (wait.innerHTML.length > 23)
            wait.innerHTML = "Caricamento in corso ";
        else
            wait.innerHTML += ".";
    } else {
        //LOADED
    }
}, 300);


function frase_a_caso() {
    var tag = document.getElementById("frase_a_caso");
    var myArray = [
        "Moonshine Studio è stata inaugurata da Alberto Franzin e Michele Chiaradia nel 2020",
        "La musica può rendere gli uomini liberi. cit. Bob Marley",
        "La musica è per l'anima quello che la ginnastica è per il corpo. cit. Platone",
        "Dove le parole non arrivano... la musica parla. cit. Beethoven",
        "Sei un artista? contattaci!",
        "Sei un Artista?? Se hai talento perchè non provare a pubblicare i tuoi risultati?"
    ];

    tag.innerHTML = myArray[Math.floor(Math.random() * myArray.length)];

}
frase_a_caso()