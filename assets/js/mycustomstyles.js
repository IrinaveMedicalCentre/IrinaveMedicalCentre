function whatsapp(){
    var name = document.getElementById("name").value;
    var phoneno = document.getElementById("phoneno").value;
    var date = document.getElementById("date").value;
    var email = document.getElementById("email").value;
    var select2 = document.getElementById("select2").value;

    var whatsappurl="https://wa.me/919605741041?text="
    + "Name of the Patient :" + name +"%0a"
    + "Phone-no. :" + phoneno +"%0a"
    + "Date :" + date + "%0a"
    + "Email-id :" + email + "%0a"
    + "Doctor :" + select2;

    // console.log(whatsappurl);
    window.open(whatsappurl,"_blank").focus();
}