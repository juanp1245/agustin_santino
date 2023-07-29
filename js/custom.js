var err01 = 'Por favor ingrese su nombre'; 
var err02 = 'Por favor ingrese su fecha de nacimiento';
var err03 = 'Porfavor ingrese una dirección de correo electrónico válida';
var err04 = 'Porfavor ingrese su teléfono celular (solo números, mínimo 10 caracteres)';
var suc01 = 'Mensaje enviado exitosamente';

window.addEventListener('load',()=>{
    const contactbtn=document.querySelector('#btnContactar');
    const Nombre=document.querySelector('#txtNombre');
    const Fecha_nacimiento=document.querySelector('#dtFecha');
    const EMail=document.querySelector('#txtEmail');
    const Celular=document.querySelector('#txtTelefono');
    const Mensaje=document.querySelector('#contactmessage');
    const forminputs = document.getElementsByClassName("forminputs");
    const my_form = document.getElementById("template_contactform");

    var myFunction = function() {
        this.classList.remove('error');
    };
    
    Array.from(forminputs).forEach(function(element) {
        element.addEventListener('focus', myFunction);
    });

    async function handleSubmit(event) {
        
        event.preventDefault();

        let valido=true;
        let mensaje='';
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 2000
        })

        if (Nombre.value==''){
            Nombre.classList.add('error');
            valido=false;
            Toast.fire({
                icon: 'error',
                title: err01
            })
        }else if(Fecha_nacimiento.value==''){
            Fecha_nacimiento.classList.add('error');
            valido=false;
            Toast.fire({
                icon: 'error',
                title: err02
            })
        }else if(EMail.value=='' || !(EMail.value.match(/^[\u00C0-\u017Fa-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[\u00C0-\u017Fa-zA-Z0-9-]+(?:\.[\u00C0-\u017Fa-zA-Z0-9-]+)*$/)) || !(EMail.value.indexOf('.') !== -1) ){
            EMail.classList.add('error');
            valido=false;
            Toast.fire({
                icon: 'error',
                title: err03
            })
        }else if((Celular.value=='') || !(/^\d+$/.test(Celular.value)) || (Celular.value.length < 10) ){
            Celular.classList.add('error');
            valido=false;
            Toast.fire({
                icon: 'error',
                title: err04
            })
        }
        if (valido){
            contactbtn.classList.add('oculto');
            json = {
                Nombre:    Nombre.value,
                Fecha_nacimiento:    Fecha_nacimiento.value,
                EMail:    EMail.value,
                Celular:   Celular.value,
                Mensaje: Mensaje.value
            };
            // handle load event
            fetch(event.target.action,{
                method: my_form.method,
                body: JSON.stringify(json), // data can be `string` or {object}!
                headers:{
                    'Accept': 'application/json'
                }
            })
            .then((res) => {
                console.log("Fetch enviado, respuesta recibida");
                if(res.status < 200 || res.status >= 300){
                    return Promise.reject(res.statusText);
                }else{
                    return res.json();
                }
            })
            .then((data) => {
                $('#template_contactform')[0].reset();
                contactbtn.classList.remove('oculto');
                Toast.fire({
                    icon: 'success',
                    title: suc01
                  })
                
            })
            .catch((err) => {
                console.log(err);
            });
        }else{
            contactbtn.classList.remove('oculto');
            //modalbody.innerHTML = "Ingreso incorrecto!";
            //$("#mensaje").modal();
        }

    }

    my_form.addEventListener("submit", handleSubmit)
    
    /* contactbtn.addEventListener('click',(evento)=>{

        evento.preventDefault();
        let valido=true;
        let mensaje='';
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 2000
        })

        if (Nombre.value==''){
            Nombre.classList.add('error');
            valido=false;
            Toast.fire({
                icon: 'error',
                title: err01
            })
        }else if(Fecha_nacimiento.value==''){
            Fecha_nacimiento.classList.add('error');
            valido=false;
            Toast.fire({
                icon: 'error',
                title: err02
            })
        }else if(EMail.value=='' || !(EMail.value.match(/^[\u00C0-\u017Fa-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[\u00C0-\u017Fa-zA-Z0-9-]+(?:\.[\u00C0-\u017Fa-zA-Z0-9-]+)*$/)) || !(EMail.value.indexOf('.') !== -1) ){
            EMail.classList.add('error');
            valido=false;
            Toast.fire({
                icon: 'error',
                title: err03
            })
        }else if((Celular.value=='') || !(/^\d+$/.test(Celular.value)) || (Celular.value.length < 10) ){
            Celular.classList.add('error');
            valido=false;
            Toast.fire({
                icon: 'error',
                title: err04
            })
        }
        if (valido){
            contactbtn.classList.add('oculto');
            json = {
                Nombre:    Nombre.value,
                Fecha_nacimiento:    Fecha_nacimiento.value,
                EMail:    EMail.value,
                Celular:   Celular.value,
                Mensaje: Mensaje.value
            };
            // handle load event
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(json), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                console.log("Fetch enviado, respuesta recibida");
                if(res.status < 200 || res.status >= 300){
                    return Promise.reject(res.statusText);
                }else{
                    return res.json();
                }
            })
            .then((data) => {
                $('#template_contactform')[0].reset();
                contactbtn.classList.remove('oculto');
                Toast.fire({
                    icon: 'success',
                    title: suc01
                  })
                
            })
            .catch((err) => {
                console.log(err);
            });
        }else{
            contactbtn.classList.remove('oculto');
            //modalbody.innerHTML = "Ingreso incorrecto!";
            //$("#mensaje").modal();
        }

    }); */
    
});