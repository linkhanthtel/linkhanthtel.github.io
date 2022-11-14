const nom = document.getElementById('name').value;

document.getElementById('submit').onclick = function() {
    document.getElementById('contactinfo').innerHTML = `Dear ${nom} ! <br><br> Thank you for your message! I will get back to you soon! <br><br> <a href='index.html'>Back to home</a>`;
    document.getElementById('contactinfo').style.textAlign = 'center';
    document.getElementById('contactinfo').style.fontFamily = "'Times New Roman', Times, serif";
}
