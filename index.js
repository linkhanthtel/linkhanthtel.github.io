$('.welcomepage h1').click(function() {
    alert("Nice to meet you! Thanks for visiting my site")
});

$("#dropdownmenu").click(function() {
    $("#dropdown").fadeToggle();
})

$('#lang').click(function() {
    alert("Burmese version is not available yet")
})

// document.getElementById('submit').onclick = function() {
//     const nom = document.getElementById('name').value;
//     document.getElementById('contactinfo').innerHTML = `Dear ${nom} ! <br><br> Thank you for your message! I will get back to you soon!`;
//     document.getElementById('contactinfo').style.textAlign = 'center';
//     document.getElementById('contactinfo').style.color = 'rgb(2,0,40)';
//     document.getElementById('contactinfo').style.fontFamily = "'Times New Roman', Times, serif";
// }
