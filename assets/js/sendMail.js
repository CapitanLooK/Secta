let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let consulta = document.getElementById('consulta');

const form = document.getElementById('contacto');

form.addEventListener('submit', (e) => { // la variable e hace referencia al evento por defecto del tipo submit
    
    e.preventDefault(); 
      
      sendMail(nombre.value,email.value,consulta.value);

      form.reset();
   });


function sendMail(nombre, email, consulta) {
    Email.send({
        SecureToken : "44fa6039-dd5f-4ea3-a709-b55dd5e461a0",
        To: "info@secta.com.ar",
        From: "info@secta.com.ar",
        Subject: `${nombre} envió un mensaje de consulta`,
        Body: `<p>Nombre: <b>${nombre}</b></p>
        <p>Email: <b>${email}</b></p>
        <p>Consulta: <b>${consulta}</b></p>
        `
        }).then(
        message => swal("Consulta enviada con exito!", "Gracias por comunicarte con nosotros, en breve nos pondremos en contacto.", "success")
    )
    .catch(error => console.log('error: ', error))

    if(sendMail==true){
        console.log("Mensaje enviado")
    }
}