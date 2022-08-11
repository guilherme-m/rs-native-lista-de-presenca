import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#131016',
    padding: 24,
    
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input: {
    flexGrow: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#fdfcfe',
    padding: 16,
    fontSize: 16,
    
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    
  },
  button:{
    width:56,
    height:56,
    borderRadius:5,
    backgroundColor:'#31cf67',
    justifyContent:"center",
    alignItems:'center'
    
  },
  form: {
    flexDirection:"row",
    alignItems:"center", 
    marginTop: 15,
    marginBottom: 36,
    width:"100%"
  }
  
})