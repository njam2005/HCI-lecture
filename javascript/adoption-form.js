function showBtn(){
    const petfood = document.getElementById("petfood")
    const petaccessories = document.getElementById("petaccessories")
    const petcage = document.getElementById("petcage")
    const pettoy = document.getElementById("pettoy")
    const btn = document.getElementById("petneedsBtn")
    
    if(petfood.value === "1"){
        btn.style.display = "initial";
        petfood.value = "";
    }
    if(petaccessories.value === "1"){
        btn.style.display = "initial";
        petaccessories.value = ""
    }
    if(petcage.value === "1"){
        btn.style.display = "initial";
        petcage.value = ""
    }
    if(pettoy.value === "1"){
        btn.style.display = "initial";
        pettoy.value = ""
    }
    
}
// .files.type;
function validateAll(){
    const form = document.getElementsByClassName("form")
    const allowedExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
    const image = document.getElementById("input-picture")
    const name = document.getElementById("name")
    const age = document.getElementById("age")
    const gender = document.getElementsByName("gender")
    const reason = document.getElementById("reason")
    const email = document.getElementById("email")
    const address = document.getElementById("address")
    const pickupdate = document.getElementById("pickupdate")
    const pickuptime = document.getElementById("pickuptime")
    const pickupDate = new Date(pickupdate.value);
    const pickupTime = new Date(pickuptime.value);
    const today = new Date();
    const timemin = new Date(); timemin.setHours(9,0);
    const timemax = new Date(); timemax.setHours(20,0);

    if(image.value === ""
    || name.value.trim() === ""
    || age.value === ""
    || gender.value === ""
    || reason.value.trim() === ""
    || email.value.trim() === ""
    || address.value.trim() === ""
    || pickupdate.value === ""
    || pickuptime.value === ""){
        alert("All field must be filled.")
    }else if(!allowedExtensions.includes(type)){
        alert("Make sure your image is in .jpg, .jpeg, or .png format.")
    }else if(age.value < 15){
        alert("You must be over 15 years old to adopt a pet.")
    }else if(!email.value.endWith("@gmail.com")){
        alert("Please provide the correct e-mail.")
    }else if(!address.value.startWith("Jalan")){
        alert("Please provide the correct address")
    }else if(pickupDate <= today){
        alert("We cannot process your adoption on the same day.")
    }else if(pickupTime < timemin || pickupTime > timemax){
        alert("You can only pickup your pet at our open-hour.")
    }else{
        alert("We're happy for you and your pet!")
        console.log("tes")
        form.submit();
        window.location.href = "/html/thank-you-page.html"
    }

}