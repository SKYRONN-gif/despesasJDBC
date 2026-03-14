/********************************************** 
 * listadesp.js
 * script de listadesp.html
*/

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btnCarregar").addEventListener("click", function () {

        fetch("despesas/")
            .then(res => res.json())
            .then(dados => {

				// joga o corpo da tabela numa var
                const tbody = document.querySelector("#tabela tbody");
				
				// zera o html do corpo da tabela
                tbody.innerHTML = "";

                dados.forEach(d => { // vasculha o array de despesas

					// cria uma linha
                    const linha = document.createElement("tr");

					// escreve a linha
					linha.innerHTML = `
					    <td><a href="mostradesp.html?id=${d.id}">${d.descricao}</a></td>
					    <td>${d.valor}</td>
					    <td>${d.data}</td>
					    <td>${d.categoria.nome}</td>
					`;

					// adiciona essa linha na tabela
                    tbody.appendChild(linha);
                });

            })
            .catch(err => console.error(err));

    });

});