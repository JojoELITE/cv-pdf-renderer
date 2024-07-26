import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

const imageUrl2 = "/assets/2.png";
const imageUrl3 = "/assets/mail.png";
const imageUrl4 = "/assets/home.png";
const imageUrl1 = "/assets/face.png";
const imageUrl5 = "/assets/twi.png";
const imageUrl6 = "/assets/link.png";
const imageUrl7 = "/assets/5.png";


Font.register({
  family: "Roboto-Black",
  src: '/fonts/Anton/Roboto/Roboto-Black.ttf'
});


Font.register({
  family: "Roboto-Bold",
  src: '/fonts/Anton/Roboto/Roboto-Bold.ttf'
});

const Pdf = () => (
  <Document>


    <Page size="A4" wrap={false}>

      <View style={styles.haut}>

        <View style={styles.haut1}>
          <Text style={styles._titre}>CONTACT</Text>
          <View style={styles.ligne2}></View>

          <View style={styles.contacts}>
            <View style={styles.contact}>
              <Image src={imageUrl2} style={styles.imagetel} />
              <Text style={styles.aboutText}>
                +241 00000000
              </Text>
            </View>


            <View style={styles.contact}>
              <Image src={imageUrl3} style={styles.imagetel} />
              <Text style={styles.aboutText}>
                mail@gmail.com
              </Text>
            </View>

            <View style={styles.contact}>
              <Image src={imageUrl4} style={styles.imagetel} />
              <View>
                <Text style={styles.aboutText}>
                  12 rue de la reussite
                </Text>
                <Text style={styles.aboutText1}>
                  75012 Paris
                </Text>
              </View>

            </View>


          </View>

        </View>



        <View style={styles.haut2}>
          <Text style={styles.titre_}>SOPHIE MONTIGIER</Text>

          <Text style={styles.aboutText2}>
            HÔTESSE DE CAISSE POLYVALENTE, +8 ANS D'EXPERIENCE
          </Text>

          <View style={styles.reseaux}>

            <View style={styles.reseau}>
              <Image src={imageUrl1} style={styles.imagereseau} />
              <Text style={styles.aboutTextreseau}>
                @_Mon_Nom
              </Text>
            </View>

            <View style={styles.reseau}>
              <Image src={imageUrl5} style={styles.imagereseau} />
              <Text style={styles.aboutTextreseau}>
                @_Mon_Nom
              </Text>
            </View>

            <View style={styles.reseau}>
              <Image src={imageUrl6} style={styles.imagereseau} />
              <Text style={styles.aboutTextreseau}>
                @_Mon_Nom
              </Text>
            </View>

          </View>

        </View>


      </View>







      <View style={styles.bas}>

        <View style={styles.bas1}>
          <View>
            <Text style={styles.titre}>A PROPOS DE MOI</Text>
            <View style={styles.ligne22}></View>


            <Text style={styles.aboutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </Text>
          </View>


          <View>
            <Text style={styles.titre}>COMPETENCES CLES</Text>
            <View style={styles.ligne22}></View>


            <Text style={styles.aboutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </Text>
          </View>


          <View>
            <Text style={styles.titre}>A PROPOS DE MOI</Text>
            <View style={styles.ligne22}></View>


            <Text style={styles.aboutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </Text>
          </View>


          <View>
            <Text style={styles.titre}>A PROPOS DE MOI</Text>
            <View style={styles.ligne22}></View>


            <Text style={styles.aboutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </Text>
          </View>


          <View>
            <Text style={styles.titre}>A PROPOS DE MOI</Text>
            <View style={styles.ligne22}></View>


            <Text style={styles.aboutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </Text>
          </View>

        </View>


        <View style={styles.bas2}>


          <View>
            <Text style={styles.titre}>PARCOURS PROFESSIONNEL</Text>
            <View style={styles.ligne22}></View>

          </View>

        </View>



      </View>

    </Page>

  </Document>
);

// Create styles
const styles = StyleSheet.create({
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


  haut: {
    flexDirection: 'row',
    backgroundColor: '#007FFF',
    width: 1000,
    height: 130,
  },


  ligne2: {
    height: 1,
    width: 175,
    backgroundColor: '#007FFF',
    margin: 2,

  },

  haut1: {

    margin: 20,
    backgroundColor: '#f4f3f3',
    width: 220,
    height: 112,
    paddingLeft: 10,

  },


  _titre: {
    paddingTop: 10,
    color: '#007FFF',
    fontWeight: 'bold',  // Texte en gras
    fontSize: 12,

  },


  contact: {
    flexDirection: 'row',

  },

  contacts: {

  },

  imagetel: {
    width: 12,
    height: 10,
    marginTop: 8,
    paddingLeft: 4,
  },


  aboutText: {

    fontSize: 10,
    width: 200,
    marginLeft: 12,
    marginTop: 8,
  },


  aboutText1: {

    fontSize: 10,
    width: 200,
    marginLeft: 12,
    marginTop: 3,
  },


  haut2: {
    borderWidth: 2,      // Largeur de la bordure
    borderColor: '#fff', // Couleur de la bordure (blanche)
    width: 320,          // Largeur de l'élément
    height: 105,         // Hauteur de l'élément
    marginTop: 20,
    color: 'white',

  },

  titre_: {

    fontSize: 16,
    marginLeft: 80,
    marginTop: 25,
    fontWeight: 'black',
    fontFamily: 'Roboto-Black',

  },


  aboutText2: {

    fontSize: 9,
    marginTop: 8,
    marginLeft: 25,
    fontFamily: 'Roboto-Bold',
  },

  reseaux: {
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 6,

  },

  imagereseau: {
    width: 14,
    height: 10,
    marginTop: 10,
    paddingLeft: 0,
  },

  reseau: {
    flexDirection: 'row',
  },


  aboutTextreseau: {

    fontSize: 9,
    width: 200,
    marginLeft: 4,
    marginTop: 10,
  },






















  bas: {
    flexDirection: 'row',
    width: 1000,
  },

  titre: {
    paddingTop: 10,
    color: '#007FFF',
    fontWeight: 'bold',  // Texte en gras
    marginLeft: 12,
    fontSize: 12,
  },


  ligne22: {
    height: 1,
    width: 175,
    backgroundColor: '#007FFF',
    marginLeft: 12,
  },


  bas1: {

    backgroundColor: '#f4f3f3',
    width: 220,
    marginLeft: 20,

  },



  bas2: {
    marginLeft: 10,
  },


});

export default Pdf;
