
document.getElementById('form_add').addEventListener("submit", function(event){
  
  event.preventDefault();
  
  let code = document.getElementById("codigo").value;
  let name = document.getElementById("nombre").value;
  let category = document.getElementById("categoria").value;
  let description = document.getElementById("descripcion").value;
  let publish = document.getElementById("publicado").value;
  
  let movie = {
    code: code,
    name: name,
    category: category,
    description: description,
    publish: publish,
  }
  let movieList = JSON.parse(localStorage.getItem("ls_lista")) || []; 
  movieList.push(movie);  

  localStorage.setItem("ls_lista", JSON.stringify(movieList));  
  
  document.getElementById("codigo").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("descripcion").value = "";

  renderList()

}); 

function renderList() {
  let movieList = JSON.parse(localStorage.getItem("ls_lista")) || [];
  let father = document.getElementById("listaPadre");
  father.innerHTML = ""; 
  
  let table = document.createElement("table");
  table.classList.add("table")
  father.appendChild(table); 
  

  let thead = document.createElement("thead");
  table.appendChild(thead);                    
  
  let trHead = document.createElement("tr");
  thead.appendChild(trHead);  
  
  let thCode = document.createElement("th");
  thCode.textContent = "Codigo";
  trHead.appendChild(thCode); 
  
  let thName = document.createElement("th");
  thName.textContent = "Nombre";
  trHead.appendChild(thName); 
  
  let thCategory = document.createElement("th");
  thCategory.textContent = "Categoría";
  trHead.appendChild(thCategory); 
  
  let thDescription = document.createElement("th");
  thDescription.textContent = "Descripción";
  trHead.appendChild(thDescription);  
  
  let thPublished = document.createElement("th");
  thPublished.textContent = "Publicado";
  trHead.appendChild(thPublished); 
  
  let thActions = document.createElement("th");
  thActions.textContent = "";
  trHead.appendChild(thActions);  
  
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
    for(let movie of movieList) {
      let tr = document.createElement("tr");
      tbody.appendChild(tr); 

      let tdCode= document.createElement("td");
      tdCode.textContent = movie.code;
      tr.appendChild(tdCode)

      let tdName = document.createElement("td");
      tdName.textContent = movie.name;
      tr.appendChild(tdName);

      let tdCategory= document.createElement("td");
      tdCategory.textContent = movie.category;
      tr.appendChild(tdCategory);

      let tdDescription = document.createElement("td");
      tdDescription.textContent = movie.description;
      tr.appendChild(tdDescription)

      let tdPublished= document.createElement("td");
      tdPublished.textContent = movie.publish;
      tr.appendChild(tdPublished);    

      let tdActions = document.createElement("td");
      tr.appendChild(tdActions);
        
      let btnEdit = document.createElement("button");
      btnEdit.textContent = "Modificar";
      btnEdit.classList.add("btn", "btn-secondary", "edit-button");

      btnEdit.addEventListener("click", function () {
        document.getElementById("codigo").value = movie.code;
        document.getElementById("nombre").value = movie.name;
        document.getElementById("categoria").value = movie.category;
        document.getElementById("descripcion").value = movie.description;
        document.getElementById("publicado").value = movie.publish;

        let index = movieList.indexOf(movie);
        if (index > -1) {
          movieList.splice(index, 1);
          localStorage.setItem("ls_lista", JSON.stringify(movieList));
          renderList();
        }
        const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
        modal.show();
      });
      tdActions.appendChild(btnEdit);

      let btnDelete = document.createElement("button");
      btnDelete.textContent = "Eliminar";
      btnDelete.classList.add("btn", "btn-danger");

      btnDelete.addEventListener("click", function () {
        let index = movieList.indexOf(movie);
        if (index > -1) {
          movieList.splice(index, 1);
          localStorage.setItem("ls_lista", JSON.stringify(movieList));
          renderList();
        }
      });
      tdActions.appendChild(btnDelete);  
    }
}

let editButtons = document.querySelectorAll(".edit-button");

renderList();