function pesquisar() {
    // Essa função é responsável por buscar os dados e exibir os resultados na página.
    console.log(dados); // Loga os dados no console para fins de depuração.
  
    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos.
    console.log(section); // Loga a seção no console para verificar se foi encontrada.

    let campoPesquisa = document.getElementById("campo-pesquisa").value
      if (!campoPesquisa){
          section.innerHTML ="<p> Não encontrado,</p>"
          return
      }

      campoPesquisa = campoPesquisa.toLowerCase()

      let titulo = "";
      let descricao = "";
      let tags = "";
  
    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados.

  
    // Itera sobre os dados e cria HTML para cada item
    for (let dado of dados) {
        
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
              <h2> <a href="https://www.youtube.com/watch/v=AY0eV_9w_j8" target="_blank">${dado.titulo}</a></h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank"> clique aqui e saiba mais</a>
            </div>`;


        }
     
    }
    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"

    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }




