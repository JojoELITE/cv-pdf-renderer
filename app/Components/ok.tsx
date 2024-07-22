import { useState } from 'react';

export default function App() {
  const [text, setText] = useState("");

 

  return (
    <View style={styles.container}> <br />

      <p>{text}</p>
      <input style={styles.input} 
        placeholder='Texte à afficher' 
        onChange={(e) => setText(e.target.value)}
        defaultValue= {text}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    margin: 15,
    padding: 7,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "black",
  },


});
