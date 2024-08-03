import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      padding: 20,
    }
});
const stylesPractice = StyleSheet.create({
    header: {
      backgroundColor: '#AEC6CF',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    subtitleText: {
      fontSize: 16,
      color: '#fff',
    },
    footer: {
      backgroundColor: '#f8f8f8',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    footerText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    content: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 18,
      marginBottom: 20,
    },
  });


  export { styles,stylesPractice };