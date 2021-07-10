function generate() {
    let length = document.getElementById("passLength").value;
    let output = "";
    if (length === "") alert("the password length is necessary !!");
    else {
        let chars =
            "123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!£$ù*@_/-|[](){#}=+&~^";
        for (let index = 0; index < length; index++) {
            output += chars.charAt(Math.floor(Math.random() * 84));
        }
        document.getElementById("passwordOutput").value = output;
        //console.log(output);
    }
}