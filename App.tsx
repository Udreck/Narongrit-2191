import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
//import AppFooter from "./components/AppFooter";
import AppHeader from "./componant/AppHeader";
import AppFooter from "./componant/AppFooter";
import Content from "./componant/ProfileScreen";

export default function App(): React.JSX.Element {
  const title = "Message from App.tsx";
  return (
    <View style={styles.container}>
      <AppHeader title={title} />
      <Content fullname={title} />
      <AppFooter message="Thai-Nichi Institute of Technology" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});