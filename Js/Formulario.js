function alertas() {
    let esVacio = false;
  
    let mensaje = "";
    let Nombre = document.getElementById("Name").value;
    let Apellido = document.getElementById("Lastname").value;
    let Edad = document.getElementById("Age").value;
    let Email = document.getElementById("Email").value;
  
    Edad = parseInt(Edad);
  
    let formulario = [Nombre, Apellido, Edad, Email];
  
    console.log(formulario);
    for (let i = 0; i < formulario.length; i++) {
      if (formulario[i] === "") {
        esVacio = true;
      }
    }
    if (esVacio === true) {
      alert("Por favor llene todos los campos ");
    }
    if (Edad >= 18 && esVacio === false) {
      alert(`Hola ${Nombre}${Apellido} ¡Has aplicado correctamente te contactaremos en ${Email}`
      );
      Vaciarcampos();
    } else if (Edad < 18 && esVacio === false) {
      alert(`Hola ${Nombre}${Apellido} No cumples con la edad requerida `);
    }
  }
  