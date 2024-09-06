let generos =[
    {nome: "Aventura"}, //0
    {nome: "Ação"}, //1
    {nome: "Mistério"}, //2
    {nome: "Suspense"}, //3
    {nome: "Fantasia"}, //4
    {nome: "Drama"}, //5
    {nome: "Shounen"}, //6
    {nome: "Comédia"} //7
]
var separador = " / "

let animes = [
    {
        titulo: "One piece",
        imagem: "imagens/i-one-piece.jpg",
        descricao: "A história gira em torno de Monkey D. Luffy, um garoto que sonha em se tornar o Rei dos Piratas e encontrar o tesouro lendário, o One Piece.",
        link: "https://www.crunchyroll.com/pt-br/series/GRMG8ZQZR/one-piece",
        genero: generos[1].nome + separador + generos[0].nome,
    },
    {
        titulo: "Kimetsu no Yaiba",
        imagem: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/demon-slayer-design-template-dba8e0fe8103592741eba76165513733_screen.jpg?ts=1682434830",
        descricao: "A história gira em torno de Tanjiro Kamado, um jovem gentil e trabalhador que, após encontrar sua família brutalmente assassinada por um demônio, embarca em uma jornada para vingar seus entes queridos.",
        link: "https://www.crunchyroll.com/pt-br/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
        genero: generos[1].nome
    },
    {
        titulo: "Death Note",
        imagem: "https://www.forceprint.com.br/imgsist/loja/2291Placa_Death_Note_Anime.jpg",
        descricao: "A história gira em torno de Light Yagami, um estudante brilhante que encontra um caderno sobrenatural chamado Death Note.",
        link: "https://www.crunchyroll.com/pt-br/series/G6QWD3EE6/death-note",
        genero: generos[2].nome + separador + generos[3].nome
    },
    {
        titulo: "Jujutsu Kaisen",
        imagem: "https://img.freepik.com/fotos-premium/goju-satoru-coolcabelos-brancosolhos-azuispapel-de-parede-de-jujutsu-kaisen-anime_731538-61.jpg",
        descricao: " Após a morte de seu avô, Yuji se envolve com uma organização secreta de feiticeiros jujutsu.",
        link: "https://www.crunchyroll.com/pt-br/series/GRDV0019R/jujutsu-kaisen",
        genero: generos[1].nome + separador + generos[6].nome
    },
    {
        titulo: "Boku no Hero",
        imagem: "https://img.elo7.com.br/product/zoom/321C104/quadro-decorativa-com-moldura-boku-no-hero-academia-ma017-placa-boku-no-hero.jpg",
        descricao: "A história acompanha Izuku Midoriya, um garoto que nasceu sem nenhuma Individualidade, mas que sonha em se tornar um herói como seu ídolo, All Might.",
        link: "https://www.crunchyroll.com/pt-br/series/G6NQ5DWZ6/my-hero-academia",
        genero: generos[1].nome + separador + generos[6].nome
    },
    {
        titulo: "Tokyo Ghoul",
        imagem: "https://cdn.iset.io/assets/55268/produtos/49367/thumb_750-750-tokyo-ghoul-02-05.jpg",
        descricao: "Se passa em um mundo onde humanos e ghouls coexistem em segredo. Ghouls são criaturas que se alimentam de carne humana para sobreviver, o que os coloca em conflito com os humanos.",
        link: "https://www.crunchyroll.com/pt-br/series/G6NV7Z50Y/tokyo-ghoul",
        genero: generos[1].nome + separador + generos[5].nome
    },
    {
        titulo: "Naruto",
        imagem: "https://m.media-amazon.com/images/I/81HcwfK4D7L._AC_UF1000,1000_QL80_.jpg",
        descricao: "A história gira em torno de Tanjiro Kamado, um jovem gentil e trabalhador que, após encontrar sua família brutalmente assassinada por um demônio, embarca em uma jornada para vingar seus entes queridos.",
        link: "https://www.crunchyroll.com/pt-br/series/GY9PJ5KWR/naruto",
        genero: generos[1].nome + separador + generos[6].nome
    },
    {
        titulo: "Dragon Ball",
        imagem: "https://cdn.awsli.com.br/2500x2500/2394/2394401/produto/248586168e0990db7f5.jpg",
        descricao: "Um jovem guerreiro com uma força extraordinária e um coração puro. A história se desenrola em um mundo onde as artes marciais são valorizadas e onde existem sete esferas mágicas, conhecidas como Esferas do Dragão.",
        link: "https://www.crunchyroll.com/pt-br/series/GR19V7816/dragon-ball-super",
        genero: generos[1].nome + separador + generos[4].nome
    },
    {
        titulo: "Tower of God",
        imagem: "https://i0.wp.com/ovicio.com.br/wp-content/uploads/2024/03/20240314-tower-of-god-t2.jpg?resize=555%2C555&ssl=1",
        descricao: "A história gira em torno de Bam, um jovem que viveu isolado no subsolo da torre por toda a sua vida.",
        link: "https://www.crunchyroll.com/pt-br/series/G6J0G49DR/tower-of-god",
        genero: generos[1].nome + separador + generos[4].nome
    },
    {
        titulo: "Spy x Family",
        imagem: "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2022/03/legiao_h9yCJMWEu2na.jpg.webp",
        descricao: "Spy x Family é um anime e mangá que combina comédia, ação e uma pitada de drama, contando a história de uma família peculiar formada por três indivíduos com segredos.",
        link: "https://www.crunchyroll.com/pt-br/series/G4PH0WXVJ/spy-x-family",
        genero: generos[7].nome + separador + generos[1].nome
    },
];