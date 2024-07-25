import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

const imageUrl = "/assets/1.png";
const imageUrl1 = "/assets/2.png";
const imageUrl2 = "/assets/3.png";
const imageUrl3 = "/assets/4.png";
const imageUrl4 = "/assets/5.png";
const imageUrl5 = "/assets/alter.png";
const imageUrl6 = "/assets/main.png";
const imageUrl7 = "/assets/diamant.png";




Font.register({
  family: "CustomFont",
  src: '/path/to/font.ttf'
});

const Pdf = () => (
  <Document>


    <Page size="A4" style={styles.page2} wrap={false}>

      <View>
        <Text>CARRIE JONES</Text>
        <Text>Product Manager | Strategy & Innovation</Text>


        <View>

          <Text>@ help@enhancv.com</Text>


          <View>

            <Image src={imageUrl2} style={styles.imagetel} />
            <Text>linkedin.com/timothy-duncan-jr</Text>

          </View>


          <View>

            <Image src={imageUrl3} style={styles.imagetel} />
            <Text>Paterson.New Jersey</Text>

          </View>


        </View>

      </View>


      <View>

        <View style={styles.leftColumn2}>

        </View>



        <View style={styles.rightColumn2}>

        </View>

      </View>

    </Page>

  </Document>
);

// Create styles
const styles = StyleSheet.create({
  page2: {
    flexDirection: 'row',
    display: 'flex',
  },

  cv: {
    fontWeight: 'bold',
    opacity: 20,
    color: 'red',
    position: 'absolute',
    fontSize: 100,
    bottom: '130%',            /* Place le texte au milieu verticalement */
    right: '30%',
    transform: 'rotate(-67deg)', // Incline le texte de 67 degrés dans le sens contraire des aiguilles d'une montre
  },


  imagetel: {
    width: 10,
    height: 10,

  },


  leftColumn2: {

  },




  rightColumn2: {

  },


});

export default Pdf;
