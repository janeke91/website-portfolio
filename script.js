//type anim js
const type = new Typed('.multiple-text',{
    strings:['IT/Software Sophomore', 'Frontend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
//email
function SendMail(){
    var params = {
        from_name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }

emailjs.send("service_gmx7mi4", "template_62yvaph", params).then(function(res) {
    alert("Message Sent Succesfully :D" + res.status);
})

}