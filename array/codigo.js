const ingrid = atletas[0];



const preenche = (atleta) => {
    const container = document.createElement('div');
    const titulo = document.createElement('h3');
    const imagem = document.createElement('img');
    const descricao = document.createElement('p');

    container.appendChild(titulo);
    container.appendChild(imagem);
    container.appendChild(descricao);

document.body.appendChild(container);

    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    descricao.innerHTML = atleta.descricao;
}
/*
atletas.foreach( (atleta) => {preenche(alteta)});
*/

/*let indice = 0;

while (indice < atletas.length){
  preenche(atleta);
  console.log(indice, atletas[indice].nome)
  indice++;

}*/

for ( let indice = 0; indice < atletas.length; indice++){
    preenche(atletas[indice]);
    console.log(indice, 'loop for')


}
