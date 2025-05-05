const obras = [
  {
    titulo: "A Criação de Adão",
    artista: "Michelangelo",
    periodo: "Renascimento (1512)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/800px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    descricao: "Pintada no teto da Capela Sistina, mostra o momento em que Deus dá vida a Adão. Representa a conexão divina e a valorização do corpo humano típica do Renascimento."
  },
  {
    titulo: "O Grito",
    artista: "Edvard Munch",
    periodo: "Expressionismo (1893)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/800px-The_Scream.jpg",
    descricao: "Símbolo da angústia moderna, a obra representa o pavor e ansiedade existencial. Foi criada num momento de inquietações sociais e pessoais intensas na Europa."
  },
  {
    titulo: "Guernica",
    artista: "Pablo Picasso",
    periodo: "Modernismo / Cubismo (1937)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/PicassoGuernica.jpg/800px-PicassoGuernica.jpg",
    descricao: "Retrata os horrores do bombardeio da cidade de Guernica durante a Guerra Civil Espanhola. É uma denúncia visual do sofrimento causado pela guerra."
  },
  {
    titulo: "A Última Ceia",
    artista: "Leonardo da Vinci",
    periodo: "Renascimento (1495–1498)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Leonardo_da_Vinci_-_The_Last_Supper_%28restored%29.jpg/800px-Leonardo_da_Vinci_-_The_Last_Supper_%28restored%29.jpg",
    descricao: "Pintada no refeitório de um convento em Milão, representa a reação dos discípulos ao anúncio da traição. Marca o uso preciso da perspectiva e emoção."
  },
  {
    titulo: "A Persistência da Memória",
    artista: "Salvador Dalí",
    periodo: "Surrealismo (1931)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/The_Persistence_of_Memory.jpg/800px-The_Persistence_of_Memory.jpg",
    descricao: "Relógios derretidos em uma paisagem onírica representam a flexibilidade do tempo. É uma das obras mais icônicas do Surrealismo e da psicanálise visual."
  },
  {
    titulo: "O Nascimento de Vênus",
    artista: "Sandro Botticelli",
    periodo: "Renascimento (c. 1486)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/800px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    descricao: "A deusa emerge do mar sobre uma concha. Simboliza o renascimento da beleza clássica e mitologia, exaltando o ideal de perfeição renascentista."
  },
  {
    titulo: "Impressão, Sol Nascente",
    artista: "Claude Monet",
    periodo: "Impressionismo (1872)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/800px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
    descricao: "A pintura que nomeou o movimento impressionista. Captura a luz do amanhecer com pinceladas soltas e foco na percepção visual imediata."
  },
  {
    titulo: "Las Meninas",
    artista: "Diego Velázquez",
    periodo: "Barroco (1656)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Las_Meninas_01.jpg/800px-Las_Meninas_01.jpg",
    descricao: "Obra-prima do Barroco espanhol. Mostra a infanta Margarida rodeada por sua corte, e o próprio pintor na composição, criando um jogo de perspectivas e realidade."
  },
  {
    titulo: "A Grande Onda de Kanagawa",
    artista: "Katsushika Hokusai",
    periodo: "Ukiyo-e (1831)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Great_Wave_off_Kanagawa2.jpg/800px-Great_Wave_off_Kanagawa2.jpg",
    descricao: "Gravura japonesa famosa que mostra uma enorme onda prestes a engolir barcos. Simboliza o poder da natureza e a transitoriedade da vida na cultura japonesa."
  },
  {
    titulo: "Auto-retrato com colar de espinhos",
    artista: "Frida Kahlo",
    periodo: "Modernismo Mexicano (1940)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Frida_Kahlo_%28self_portrait_with_thorn_necklace%29.jpg/800px-Frida_Kahlo_%28self_portrait_with_thorn_necklace%29.jpg",
    descricao: "Representa o sofrimento físico e emocional de Frida após acidentes e perdas. A obra é rica em símbolos da cultura mexicana e da dor pessoal."
  }
];
