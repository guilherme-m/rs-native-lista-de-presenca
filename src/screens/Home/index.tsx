import React, { useState } from "react"
import { View, Text, StatusBar, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native"
import { Participant } from "../../components/Participant"
import { styles } from "./styles"


export const Home = () => {

  const [nomes, setNomes] = useState<string[]>([])
  const [nome, setNome] = useState('')
  
  function handleAddParticipant() {
    
    if(nomes.includes(nome)){
      return Alert.alert('Nome já existe',
      'O nome informado já consta na lista de participantes.')
    }
    
    if(nome.length > 0 ){
      setNomes(prev => [...prev, nome])
      setNome('')
    }
  }

  function handleRemoveParticipant(name: string, index: number) {
    
    Alert.alert('Remover', `Remover o participante ${name}`,
    [
      {
        text: 'Sim',
        onPress: () => setNomes(nomes => nomes.filter((_nome, i) => i !== index))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>

      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Brasília, 13 de fevereiro de 2022
      </Text>

      <View style={styles.form}>

        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={'#6b6b6b'}
          onChangeText={setNome}
          value={nome}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddParticipant}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>

      </View>
      
      <ScrollView >
        
        {nomes.map((nome, i) => (
          <Participant
            key={i}
            name={nome}
            onRemove={() => handleRemoveParticipant(nome, i)} />
        ))}
        
      </ScrollView>


    </View>
  )
}
