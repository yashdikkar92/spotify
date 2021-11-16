import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:
  {
    flexDirection: 'row',
    
    position:'absolute',
    bottom:48,
    width:'100%',
    backgroundColor:'#131313',
    borderWidth:2,
    borderColor:"black",
    marginLeft:0
  },
  rightcontainer:
  {
    flexDirection:"row",
    justifyContent:"space-between"
  },
  nameContainer:{
    flexDirection:"row"
  },
  iconContainer:{
 flexDirection:"row",
 alignItems:"center",
 width:120,
 justifyContent:"space-around",
 marginLeft:50
  },
  image:
  {
    width: 55,
    height: 60,
    marginRight:3,
  },
  title:
  {
    color: 'white',
    fontSize: 18,
    fontWeight:"bold",
    margin:19,
    marginRight:5

    
  },
  artist:
  {
    color: "lightgray",
    fontSize: 18,
    margin:19,
    marginLeft:1 
  },
  


})
export default styles;