import React, {useState} from 'react';
import { View, Text, StatusBar, StyleSheet, SafeAreaView, ScrollView, FlatList} from 'react-native';

import Header from './src/Header'
import List from './src/List';

export default function Instagram() {

const[feed, setFeed] = useState([{
  id: 1,
  name: 'HarryPotter',
  description: 'Presentinho de aniversário @almofadinhas',
  imgProfile: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/04/14/594335823-harry-potter.jpg',
  imgPublish: 'https://pm1.aminoapps.com/7844/b8a94cf6e0298bbb1dabf301bf4ec038b3681e32r1-1920-1278v2_uhq.jpg',
  liked: true,
  numOfLikes: 44
},
{
  id: 2,
  name: 'HermioneGranger',
  description: 'No melhor lugar do mundo :)',
  imgProfile: 'https://pm1.aminoapps.com/6674/ef1729c2e279078f296b0b578fdcdfeefa338227_hq.jpg',
  imgPublish: 'https://www.visitbritain.com/sites/default/files/styles/wysiwyg_image/public/consumer/Brasil/England/duke_humfreys_library_by_the_fella.jpg?itok=RuyyHJ7s',
  liked: true,
  numOfLikes: 34
},
{
  id: 3,
  name: 'RonWeasley',
  description: 'Hoje é dia de #tbt',
  imgProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahlr1IgwV0MXakNVH9xoLl7CrKzqrMx7y3Q&usqp=CAU',
  imgPublish: 'https://www.hypeness.com.br/1/2020/03/restaurac%CC%A7a%CC%83o-pira%CC%82mide-egito-2.jpg',
  liked: false,
  numOfLikes: 27
},
{
  id: 4,
  name: 'GemialidadesWeasley',
  description: 'Kit mata aulas já disponíveis! Não conte ao seu professor ;)',
  imgProfile: 'https://static.wikia.nocookie.net/harrypotter/images/5/58/Fred_and_George_Weasley.jpg/revision/latest?cb=20161015004351&path-prefix=pt-br',
  imgPublish: 'https://parkaholic.com/wp-content/uploads/2016/09/weasley.jpg',
  liked: true,
  numOfLikes: 120
},
{
  id: 5,
  name: 'Minerva',
  description: 'Um lindo dia para uma vitória da grifinória!',
  imgProfile: 'https://criticalhits.com.br/wp-content/uploads/2021/10/melhores-frases-minerva-mcgonagall.jpg',
  imgPublish: 'https://static.wikia.nocookie.net/esharrypotter/images/0/03/P1_Castillo_de_Hogwarts_desde_campo_de_Quidditch.jpg/revision/latest/thumbnail/width/360/height/360?cb=20090303222605',
  liked: false,
  numOfLikes: 96
}
])


 return (
  
  <SafeAreaView style = {styles.container}>
      <StatusBar/>

      <Header/>

      <FlatList
      showsVerticalScrollIndicator = {false}
      keyExtractor={(item)=> item.id} //Cada lista deve ter um identificador único
      data = {feed} //array a ser renderizado
      renderItem={({item}) => <List data = {item}/>} //Função que retorna o componente que irá renderizar a cada item
      />

  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff'
  }
})

