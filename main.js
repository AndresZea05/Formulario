

let cuerpotabla=document.getElementById('tablausuario')
let i=1;

function checkDuplicateIds() {
    const idInputs = document.querySelectorAll('input[type="text"][name="id"]');
    const idSet = new Set();
    let isDuplicate = false;
  
    idInputs.forEach(input => {
      if (idSet.has(input.value)) {
        isDuplicate = true;
      } else {
        idSet.add(input.value);
      }
    });
  
    if (isDuplicate) {
      alert('Hay dos o más ID iguales en la tabla.');
    }
  }
  
function registro(){
    fetch('data.json')
  .then(response => response.json())
  .then(data => {
    let id=document.getElementById('ID').value;
    let nombre=document.getElementById('name').value;
    let apellido=document.getElementById('last_name').value;
    let nickName=document.getElementById('nickName').value;
    let pais=document.getElementById('pais').value;
    let numeroTelefono=document.getElementById('numeroTelefono').value;
    let email=document.getElementById('email').value;
    let cargo=document.getElementById('cargo').value;

    
    let i=0;
    cuerpotabla.innerHTML+='<tr><th scope="row">' + (i+1) + '</th><td>' + id + '</td><td>' + nombre + '</td><td>' + apellido + '</td><td>' + nickName + '</td><td>' + pais + '</td><td>' + numeroTelefono + '</td><td>' + email +'</td><td>' + cargo + '</td></tr>';
    i+=1
    let nuevo={id:id,nombre:nombre,apellido:apellido,nickName:nickName,pais:pais,numeroTelefono:numeroTelefono,email:email,cargo:cargo}
    data.push(nuevo)
    document.getElementById('nombre').value='';
    document.getElementById('apellido').value='';
    document.getElementById('nickName').value='';
    document.getElementById('pais').value='';
    document.getElementById('numeroTelefono').value='';
    document.getElementById('email').value='';
    document.getElementById('cargo').value='';
})
.catch(error => console.error(error));
}

function listado(){
    fetch('data.json')
  .then(response => response.json())
  .then(data => {
    let listado="";
    for (let i = 0; i < data.length; i++) {
        listado += '<tr><th scope="row">' + (i+1) + '</th><td>' + data[i].id + '</td><td>' + data[i].nombre + '</td><td>' + data[i].apellido + '</td><td>' + data[i].nickName + '</td><td>' + data[i].pais + '</td><td>' + data[i].numeroTelefono + '</td><td>' + data[i].email +'</td><td>' + data[i].cargo + '</td></tr>';
    }
    cuerpotabla.innerHTML=listado
})
.catch(error => console.error(error));
}