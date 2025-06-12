function validateAll() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const phoneNumber = document.getElementById("phoneNumber");
    const email = document.getElementById("email");
    const petName = document.getElementById("petName");
    const petBreed = document.getElementById("petBreed");
    const petHealthCondition = document.getElementById("petHealthCondition");
    const petPictures = document.getElementById("petPictures");

    let genderSelected = false;
    const genderRadios = document.getElementsByName("gender");
    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            genderSelected = true;
            break;
        }
    }

    if (fname.value.trim() === "" || lname.value.trim() === "" || phoneNumber.value.trim() === "" || email.value.trim() === ""
        || petName.value.trim() === "" || petBreed.value.trim() === "" || petHealthCondition.value.trim() === "") {
        alert("All section must be filled!");
    } else if (!email.value.endsWith("@gmail.com")) {
        alert("Email must ends with dengan @gmail.com");
    } else if (petPictures.files.length === 0) {
        alert("Pet's picture must be uploaded!");
    } else if (!genderSelected) {
        alert("Pet's Gender must be picked!");
    } else {
        form.submit();
    }
}


function goBack() {
    document.querySelector('.arrow-button').addEventListener('click', function(event) {
        event.preventDefault();  // Mencegah perilaku default
        window.location.href = 'pawfund.html';  // Mengarahkan ke halaman sebelumnya
    });
}