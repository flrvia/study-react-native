import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Texto from '../../../components/Texto'




export default function Detalhes({name, logoFarm, name_partner, description, price, button}) {
  return (
    <>
      <Texto style={styles.name}>{ name }</Texto>
      <View style={styles.partner}>
        <Image source={logoFarm} style={styles.logo} />
        <Texto style={styles.name_partner}> { name_partner } </Texto>
      </View>
      <Texto style={styles.description}>
        { description }
      </Texto>
      <Texto style={styles.price}>{ price }</Texto>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Texto tyle={styles.textButton}>{ button }</Texto>        
        </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    width: "100%",
    textAlign: "start",
    fontSize: 30,
    paddingVertical: 8,
    fontWeight: "bold",
  },
  partner: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  name_partner: {
    fontSize: 20,
    fontWeight: 300,
    paddingVertical: 5,
    marginLeft: 10,
  },
  description: {
    width: "100%",
    fontSize: 21,
    lineHeight: 28,
    fontWeight: 400,
    color: "#A3A3A3",
    paddingVertical: 5,
  },
  price: {
    width: "100%",
    textAlign: "start",
    fontSize: 30,
    lineHeight: 28,
    fontWeight: "bold",
    color: "#2A9F85",
    paddingVertical: 15,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textButton: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  }
});
