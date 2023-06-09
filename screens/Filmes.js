import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Card from "../src/components/Card";

export default function App() {
  const [filmes, setFilmes] = React.useState([
    {
      id: 1,
      nome: "Mauro",
      genero: "Aventura",
      capa: "https://uploads.jovemnerd.com.br/wp-content/uploads/2023/02/super_mario_bros_filme_poster__2b3rnu52-758x1200.jpeg",
    },
    {
      id: 2,
      nome: "Meu Gay Favorito",
      genero: "Biografia",
      capa: "https://static.wikia.nocookie.net/meu-malvado-favorito/images/f/f1/Image1.jpg/revision/latest?cb=20130724012419&path-prefix=pt-br",
    },
    {
      id: 3,
      nome: "Morbius",
      genero: "Bom",
      capa: "https://pbs.twimg.com/media/FFyT_6GVgAAGgrG?format=jpg&name=900x900",
    },
    {
      id: 4,
      nome: "Sharknado 5",
      genero: "Tubação",
      capa: "https://m.media-amazon.com/images/M/MV5BMjQ3Mzk5NzAwNV5BMl5BanBnXkFtZTgwNDkwOTc3MjI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 5,
      nome: "O Biscoito Assassino",
      genero: "Nem sei",
      capa: "https://media.fstatic.com/STk4Yah-zE0ROG-KNjTZFvF3yQw=/322x478/smart/filters:format(webp)/media/movies/covers/2010/06/1145f96568edd14ede57b28bf156369f.jpg",
    },
    {
      id: 6,
      nome: "Vivemos em uma Sociedade que",
      genero: "Drama",
      capa: "https://img.elo7.com.br/product/original/2A1A4B7/big-poster-filme-joker-coringa-joaquin-phoenix-tam-90x60-cm-nerd.jpg",
    },
    {
      id: 7,
      nome: "Among Us",
      genero: "Terror / Mistério",
      capa: "https://upload.wikimedia.org/wikipedia/pt/f/f9/Thing_1982.png",
    },
    {
      id: 8,
      nome: "Deltarune O Filme",
      genero: "Muitos",
      capa: "https://i.etsystatic.com/31113100/r/il/858258/3577034661/il_794xN.3577034661_lvnd.jpg",
    },
    {
      id: 9,
      nome: "Tubarão de 6 cabeças",
      genero: "Nem me pergunte",
      capa: "https://media.fstatic.com/sXKpFVatQNEju1RsLcNnKgc9xOo=/322x478/smart/filters:format(webp)/media/movies/covers/2018/05/20180509_222042.png",
    },
  ]);
  const removerItem = (id) => {
    const index = filmes.findIndex((filme) => filme.id === id);
    const novaLista = [...filmes];
    novaLista.splice(index, 1);
    setFilmes(novaLista);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Filminhos</Text>
      </View>
      <ScrollView>
        {filmes.map((filme) => (
          <Card
            nome={filme.nome}
            genero={filme.genero}
            capa={filme.capa}
            removerItem={() => removerItem(filme.id)}
            key={filme.id}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    backgroundColor: "red",
    color: "white",
    fontSize: 30,
    margin: 10,
    padding: 20,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  titulo: {
    color: "white",
    fontSize: 30,
  },
});
