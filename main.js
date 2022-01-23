function plus(){
    alert("Movie - Sooryavanshi has been added to your wishlist.");
}
function review(){
    alert("Thank You. Your Review has been recorded by us!");
}
function validateform(){
    var name=document.myform.name.value;
    var noseats=document.myform.noseats.value;
    var phnno=document.myform.phnno.value;
    var location=document.myform.location.value;
    var time=document.myform.time.value;
    var date=document.myform.date.value;
    if(name==null||name==""){
        alert("Name can't be blank");
        return false;
    }
    else if(noseats==null||noseats==""){
        alert("Please choose a seat");
        return false;
    }
    else if(phnno==null||phnno==""){
        alert("Enter Phone Number");
        return false;
    }
    else if(phnno.length>10||phnno.length<10){
        alert("Invalid Phone Number (Enter 10 digit phone number)");
        return false;
    }
    else if(location==null||location==""){
        alert("Select the location");
        return false;
    }
    else if(time==null||time==""){
        alert("Select a time slot");
        return false;
    }
    else if(date==null||date==""){
        alert("Please choose a date");
        return false;
    }
}
function login(){
    var email=document.myform.email.value;
    var password=document.myform.password.value;
    if(email==null||email==""){
        alert("Email can't be blank");
        return false;
    }
    else if(password.length<6){
        alert("Password must be atleast 6 characters long.");
        return false;
    }
}
function signup(){
    var name=document.myform.name.value;
    var email=document.myform.email.value;
    var password=document.myform.password.value;
    if(name==null||name==""){
        alert("Name can't be blank");
        return false;
    }
    else if(email==null||email==""){
        alert("Email can't be blank");
        return false;
    }
    else if(password.length<6){
        alert("Password must be atleast 6 characters long.");
        return false;
    }
}
function validateform1(){
    var name=document.myform.name.value;
    var email=document.myform.email.value;
    var phnno=document.myform.phnno.value;
    if(name==null||name==""){
        alert("Name can't be blank");
        return false;
    }
    else if(email==null||email==""){
        alert("Email can't be blank");
        return false;
    }
    else if(phnno==null||phnno==""){
        alert("Enter Phone Number");
        return false;
    }
    else if(phnno.length>10||phnno.length<10){
        alert("Invalid Phone Number (Enter 10 digit phone number)");
        return false;
    }
}