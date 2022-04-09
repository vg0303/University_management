//Welcome prompt after login
var username = document.getElementById("name");
document.getElementById("loginbutton").addEventListener("click", function () {
    // Then, use the properties of the (already gotten) elment as you need them:
    alert('Welcome to IGDTUW portal ' + username.value);
})