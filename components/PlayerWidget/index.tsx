import React from 'react';
import {Text,View,Image} from 'react-native';
import styles from './styles';
import {AntDesign,FontAwesome} from '@expo/vector-icons';

 const song={
  id: '1',
  imageUri: 'https://i.scdn.co/image/ab67616d0000b27384350b406522fc53c1b2a621',
  title: 'High on You',
  artist: 'Masked',
}
const PlayerWidget=()=>{
  
    return(
      <View style={styles.container}>
       <Image source={{uri:song.imageUri}} style={styles.image}/>
         
          <View style={styles.rightcontainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
           </View>
          <View style={styles.iconContainer}>
            <AntDesign  name='hearto' size={30} color={'white'} />
            <FontAwesome name='play' size={30} color={'white'}/>
          </View>
           
          </View>

         
      </View>
    )
}
export default PlayerWidget;