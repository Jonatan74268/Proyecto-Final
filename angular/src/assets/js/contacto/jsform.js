var getData = function () {
    var name = document.getElementById("InputNombre").value;
    var lastname = document.getElementById("InputApellido").value;
    var phone = document.getElementById("InputTelefono").value;
    var mail = document.getElementById("InputEmail").value;
    var msg = document.getElementById("InputComment").value;
    var expresion = /\w+@\w+\.+[a-z]/;
    console.log("ya jaló el js");
    if (name === "" || lastname === "" || phone === "" || mail === "" || msg === "") {
      swal({
        title: "Faltan datos",
        text: "Completa los datos por favor.",
        icon: "warning",
        button: "OK",
      });
      return false;
    } else {
        if (name.length > 20) {
            swal({
                title: "Nombre incorrecto",
                text: "Ingresa tu(s) nombre(s).",
                icon: "warning",
                button: "OK",
            });
            return false;
        } else {
            if (name.length < 3) {
                swal({
                    title: "Nombre incorrecto",
                    text: "Ingresa tu(s) nombre(s).",
                    icon: "warning",
                    button: "OK",
                });
                return false;
            } else {
                if (lastname.length > 25) {
                    swal({
                        title: "Apellidos incorrectos",
                        text: "Ingresa tus apellidos.",
                        icon: "warning",
                        button: "OK",
                    });
                    return false;
                } else {
                    if (lastname.length < 10) {
                        swal({
                            title: "Apellidos incorrectos",
                            text: "Ingresa tus apellidos.",
                            icon: "warning",
                            button: "OK",
                        });
                        return false;
                    } else {
                        if(phone.length != 10){
                            swal({
                                title: "Teléfono incorrecto",
                                text: "Ingresa 10 dígitis.",
                                icon: "warning",
                                button: "OK",
                            });
                            return false;
                        } else {
                            if(mail.length > 100) {
                                swal({
                                    title: "Correo inválido largo",
                                    text: "El correo es muy largo.",
                                    icon: "warning",
                                    button: "OK",
                                });
                                return false;
                            } else {
                                if(!expresion.test(mail)) {
                                    swal({
                                        title: "Correo inválido",
                                        text: "Ingresa nuevamente el correo por favor.",
                                        icon: "warning",
                                        button: "OK",
                                    });
                                    return false;
                                } else {
                                    if (msg.length < 10) {
                                        swal({
                                            title: "Mensaje inválido",
                                            text: "Escribe un poco más de tu opinión, por favor.",
                                            icon: "warning",
                                            button: "OK",
                                        });
                                        return false;
                                    } else {//name, lastname, phone, mail, msg
                                        //InputNombre,InputApellido,InputTelefono,InputEmail,InputComment
                                        console.log("Los datos enviados han sido:");
                                        console.log("Nombre: ", name);
                                        console.log("Apellidos: ", lastname);
                                        console.log("Teléfono: ", phone);
                                        console.log("E-mail: ", mail);
                                        console.log("Mensaje: ", msg);
                                        // document.getElementById("InputNombre").value = "";
                                        // document.getElementById("InputApellido").value = "";
                                        // document.getElementById("InputTelefono").value = "";
                                        // document.getElementById("InputEmail").value = "";
                                        // document.getElementById("InputComment").value = "";
                                        swal({
                                            title: "Datos enviados",
                                            text: "Muchas gracias, en breve nos contactaremos.",
                                            icon: "success",
                                            button: "OK",
                                        });
                                        document.forms["formcontacto"].submit();
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};