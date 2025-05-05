const obras = [
  {
    titulo: "A Criação de Adão",
    artista: "Michelangelo",
    periodo: "Renascimento (1512)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/24/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    descricao: "Pintada no teto da Capela Sistina, a obra mostra Deus dando vida a Adão. Reflete o ideal renascentista da conexão entre homem e divino, além do domínio da anatomia e perspectiva."
  },
  {
    titulo: "O Grito",
    artista: "Edvard Munch",
    periodo: "Expressionismo (1893)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg",
    descricao: "Expressa a ansiedade existencial moderna. Criada em uma época de grande mudança social e psicológica na Europa, mostra uma figura desesperada em meio a um céu flamejante."
  },
  {
    titulo: "Guernica",
    artista: "Pablo Picasso",
    periodo: "Cubismo / Modernismo (1937)",
    imagem: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
    descricao: "Protesto contra o bombardeio da cidade de Guernica durante a Guerra Civil Espanhola. É uma obra poderosa e caótica que critica a violência da guerra."
  },
  {
    titulo: "A Última Ceia",
    artista: "Leonardo da Vinci",
    periodo: "Renascimento (1495–1498)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Leonardo_da_Vinci_-_The_Last_Supper_%28restored%29.jpg",
    descricao: "Representa a reação dos discípulos após Jesus anunciar que um deles o trairia. Foi encomendada para o convento de Santa Maria delle Grazie, em Milão."
  },
  {
    titulo: "A Persistência da Memória",
    artista: "Salvador Dalí",
    periodo: "Surrealismo (1931)",
    imagem: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
    descricao: "Mostra relógios derretendo em um ambiente onírico, representando a relatividade do tempo e a influência do subconsciente na arte."
  },
  {
    titulo: "O Nascimento de Vênus",
    artista: "Sandro Botticelli",
    periodo: "Renascimento (1486)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    descricao: "A deusa Vênus emerge do mar sobre uma concha. A pintura simboliza o renascimento da beleza clássica e a mitologia grega no pensamento renascentista."
  },
  {
    titulo: "Impressão, Sol Nascente",
    artista: "Claude Monet",
    periodo: "Impressionismo (1872)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
    descricao: "Captura um momento efêmero no porto de Le Havre. O nome da obra deu origem ao movimento impressionista, que focava em luz, cor e sensação imediata."
  },
  {
    titulo: "Las Meninas",
    artista: "Diego Velázquez",
    periodo: "Barroco (1656)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Las_Meninas_01.jpg",
    descricao: "Retrato complexo da corte espanhola com Velázquez se pintando na obra. Brinca com perspectiva, hierarquia e o papel do observador."
  },
  {
    titulo: "A Grande Onda de Kanagawa",
    artista: "Katsushika Hokusai",
    periodo: "Ukiyo-e (1831)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Great_Wave_off_Kanagawa.jpg",
    descricao: "Gravura japonesa famosa que mostra uma enorme onda prestes a engolir barcos, com o Monte Fuji ao fundo. Representa o poder da natureza e a transitoriedade da vida."
  },
  {
    titulo: "Auto-retrato com colar de espinhos",
    artista: "Frida Kahlo",
    periodo: "Modernismo Mexicano (1940)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Frida_Kahlo_-_Autorretrato_con_collarde_espinas_y_colibri.jpg",
    descricao: "Reflete sua dor física e emocional após um acidente. O colar de espinhos simboliza o sofrimento, enquanto os animais representam dualidades como morte e esperança."
  }
];

function mostrarObra() {
  const obra = obras[Math.floor(Math.random() * obras.length)];
  document.getElementById("imagem-obra").src = obra.imagem;
  document.getElementById("imagem-obra").alt = obra.titulo;
  document.getElementById("titulo-obra").textContent = obra.titulo;
  document.getElementById("artista-obra").textContent = `Artista: ${obra.artista}`;
  document.getElementById("periodo-obra").textContent = `Período: ${obra.periodo}`;
  document.getElementById("descricao-obra").textContent = obra.descricao;
}

document.getElementById("nova-obra").addEventListener("click", mostrarObra);
window.onload = mostrarObra;
