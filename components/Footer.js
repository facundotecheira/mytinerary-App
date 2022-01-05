import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

const Footer = () => {
    const image = { uri: "https://cdn.pixabay.com/photo/2017/02/26/09/43/beatenberg-2099823_960_720.jpg" };
    return(

            <ImageBackground style={styles.footerBack}  source={ image} resizeMode="cover">
                <Text style={styles.logoFooter} >Mytinerary</Text>
                <View style={styles.iconsFooter}>
                    <Image style={styles.footerIcon} source={require('../assets/icons8-facebook-nuevo-96.png')} resizeMode="contain"/>
                    <Image style={styles.footerIcon} source={require('../assets/icons8-instagram-96.png')} resizeMode="contain"/>
                    <Image style={styles.footerIcon} source={require('../assets/icons8-twitter-cuadrado-96.png')} resizeMode="contain"/>
                </View>
                <Text style={styles.copyFooter} >Copyright &copy; Facundo Techeira | MindHub | 2022 </Text>
            </ImageBackground>
    
    )
}

const styles = StyleSheet.create({
    footerBack:{
        width:"100%",
        height:300,
        justifyContent:"space-between"
    
    },
    logoFooter:{
        color:"black",
        alignSelf:"center",
        fontFamily:"Italianno_400Regular",
        fontSize:45,
        padding:10,
        marginVertical:10
    },
    copyFooter:{
       textAlign:"center",
       color:"white",
       paddingVertical:10,
       fontSize:14
    },
    footerIcon:{
        width:30
    },
    iconsFooter:{
        alignSelf:"center",
        width:"70%",
        flexDirection:"row",
        justifyContent:"space-around",
       

        
    }
})

export default Footer