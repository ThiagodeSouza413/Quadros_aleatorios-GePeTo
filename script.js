const obras = [
  {
    titulo: "Mona Lisa",
    artista: "Leonardo da Vinci",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg",
    descricao: `Pintada entre 1503 e 1506, é talvez a obra mais famosa do mundo. 
    A mulher retratada, provavelmente Lisa Gherardini, apresenta um sorriso misterioso. 
    A técnica do sfumato aplicada por Da Vinci confere profundidade e realismo à obra.`
  },
  {
    titulo: "A Última Ceia",
    artista: "Leonardo da Vinci",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg",
    descricao: `Pintada entre 1495 e 1498, retrata o momento em que Jesus anuncia sua traição. 
    Foi feita no refeitório do convento Santa Maria delle Grazie, em Milão. 
    A composição e a emoção dos apóstolos influenciaram gerações de artistas.`
  },
  {
    titulo: "A Criação de Adão",
    artista: "Michelangelo",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/24/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    descricao: `Parte do teto da Capela Sistina (1511), mostra Deus criando Adão com um toque. 
    A cena simboliza a ligação entre o divino e o humano, com destaque para a anatomia e movimento.`
  },
  {
    titulo: "O Nascimento de Vênus",
    artista: "Sandro Botticelli",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    descricao: `Pintada em 1485, mostra a deusa Vênus nascendo do mar em uma concha. 
    Representa a beleza ideal e foi encomendada pela família Médici. Está na Galeria Uffizi.`
  },
  {
    titulo: "Escola de Atenas",
    artista: "Rafael",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/9/94/Sanzio_01.jpg",
    descricao: `Feita entre 1509 e 1511, representa os maiores filósofos da antiguidade, como Platão e Aristóteles. 
    Uma celebração da razão e do conhecimento, situada em uma arquitetura clássica idealizada.`
  },
  {
    titulo: "O Casal Arnolfini",
    artista: "Jan van Eyck",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Van_Eyck_-_Arnolfini_Portrait.jpg",
    descricao: `Apesar de Jan van Eyck ser flamengo, sua obra influenciou o Renascimento italiano. 
    O retrato de Giovanni Arnolfini e sua esposa é famoso pelo simbolismo e detalhes minuciosos.`
  },
  {
    titulo: "Retrato de uma Jovem",
    artista: "Piero della Francesca",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Piero_della_Francesca_036b.jpg",
    descricao: `Obra de cerca de 1472, conhecida pela simetria e serenidade. 
    Francesca foi um mestre da geometria e da perspectiva, e isso se reflete em sua arte.`
  },
  {
    titulo: "Batismo de Cristo",
    artista: "Andrea del Verrocchio e Leonardo da Vinci",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/22/Verrocchio%2C_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg",
    descricao: `Leonardo pintou um dos anjos e parte da paisagem, enquanto ainda era aprendiz. 
    A obra é uma colaboração entre mestre e aluno, unindo o estilo de ambos.`
  },
  {
    titulo: "Adoração dos Magos",
    artista: "Leonardo da Vinci",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/03/Leonardo_da_Vinci_-_Adorazione_dei_Magi.jpg",
    descricao: `Uma obra inacabada de Da Vinci, feita em 1481. 
    Mostra os Reis Magos visitando o menino Jesus com uma multidão em movimento e gestos dramáticos.`
  },
  {
    titulo: "Primavera",
    artista: "Sandro Botticelli",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Primavera_by_Botticelli.jpg",
    descricao: `Uma das obras mais simbólicas do Renascimento, retrata figuras da mitologia em um jardim. 
    A Primavera representa o amor, a fertilidade e a renovação da vida, com riqueza de detalhes.`
  }
];

function mostrarObraAleatoria() {
  const obra = obras[Math.floor(Math.random() * obras.length)];
  document.getElementById("imagem-obra").src = obra.imagem;
  document.getElementById("imagem-obra").alt = obra.titulo;
  document.getElementById("titulo-obra").textContent = obra.titulo;
  document.getElementById("artista-obra").textContent = `Por: ${obra.artista}`;
  document.getElementById("descricao-obra").textContent = obra.descricao;
}

document.getElementById("nova-obra").addEventListener("click", mostrarObraAleatoria);
mostrarObraAleatoria(); // Mostra uma obra inicial
