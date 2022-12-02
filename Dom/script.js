function fazGet(url) {
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

function criaLinha(usuario) {
  console.log(usuario)
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdNome = document.createElement("td");
  tdGenero = document.createElement("td");
  tdEspecie = document.createElement("td");
  tdProfissao = document.createElement("td");
  tdId.innerHTML = usuario.id
  tdNome.innerHTML = usuario.nome
  tdGenero.innerHTML = usuario.genero
  tdEspecie.innerHTML = usuario.especie
  tdProfissao.innerHTML = usuario.profissao

  linha.appendChild(tdId);
  linha.appendChild(tdNome);
  linha.appendChild(tdGenero);
  linha.appendChild(tdEspecie);
  linha.appendChild(tdProfissao);

  return linha;
}

function main() {
  let data = fazGet("http://localhost:5500");
  let usuarios = JSON.parse(data);
  
  let tabela = document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });

    
}

main()