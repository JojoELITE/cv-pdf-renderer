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

            <View style={styles.competences}>
              <Text style={styles.text}>Argumentation commerciale</Text>
              <View style={styles.cadre}>
                <View style={styles.progress22} />
                <View style={styles.progress1111} />
              </View>
            </View>

            <View style={styles.competences}>
              <Text style={styles.textlong}>Logiciel de gestion de stock</Text>
              <View style={styles.cadretextlong}>
                <View style={styles.progress22} />
                <View style={styles.progress1111} />
              </View>
            </View>

            <View style={styles.competences}>
              <Text style={styles.textlong}>Logiciel de gestion de billetterie</Text>
              <View style={styles.cadretextlong}>
                <View style={styles.progress22} />
                <View style={styles.progress1111} />
              </View>
            </View>

            <View style={styles.competences}>
              <Text style={styles.textlong}>Service de carburant à la pompe</Text>
              <View style={styles.cadretextlong}>
                <View style={styles.progress22} />
                <View style={styles.progress1111} />
              </View>
            </View>



          </View>


          <View>
            <Text style={styles.titre}>OUTILS</Text>
            <View style={styles.ligne22}></View>


            <View style={styles.outil1}>

              <Image src={imageUrl7} style={styles.imagepoint} />
              <Text style={styles.textoutil}>Figma
              </Text>

            </View>


            <View style={styles.outil2}>

              <Image src={imageUrl7} style={styles.imagepoint} />
              <Text style={styles.textoutil}>Vs Code
              </Text>

            </View>

            <View style={styles.outil3}>

              <Image src={imageUrl7} style={styles.imagepoint} />
              <Text style={styles.textoutil}>Adobe
              </Text>

            </View>


          </View>



          <View>
            <Text style={styles.titre}>HOBBIES</Text>
            <View style={styles.ligne22}></View>


            <View style={styles.outil1}>

              <Image src={imageUrl7} style={styles.imagepoint} />
              <Text style={styles.textoutil}>Chanter
              </Text>

            </View>


            <View style={styles.outil2}>

              <Image src={imageUrl7} style={styles.imagepoint} />
              <Text style={styles.textoutil}>Danser
              </Text>

            </View>

            <View style={styles.outil3}>

              <Image src={imageUrl7} style={styles.imagepoint} />
              <Text style={styles.textoutil}>Coder
              </Text>

            </View>


          </View>



          <View>
            <Text style={styles.titre}>REFERENCE</Text>
            <View style={styles.ligne22}></View>


            <View style={styles.namereference}>

              <Text>MICKAEL CHRISTOPHER</Text>
              <Text>Creative Manager</Text>
              <Text>international Agency,NY</Text>

            </View>


            <View style={styles.contactreference}>

              <Text style={styles.textreference}>P:
              </Text>
              <Text style={styles.textreference2}>+241 00000000
              </Text>

            </View>



            <View style={styles.contactreference}>

              <Text style={styles.textreference}>E:
              </Text>
              <Text style={styles.textreference2}>mickaelchristopher.com
              </Text>

            </View>


          </View>

        </View>






















        <View style={styles.bas2}>


          <View>
            <Text style={styles.titre}>PARCOURS PROFESSIONNEL</Text>
            <View style={styles.ligne222}></View>



            <View>
              <View style={styles.parcours}>

                <View style={styles.parcours1}>

                  <Text style={styles.parcourstitre}>HÔTESSE DE VENTE
                  </Text>
                  <Text style={styles.parcoursdate}>03/2018-AUJOURD'HUI
                  </Text>

                </View>

                <View style={styles.parcourslieu}>

                  <Text>Centre Commercial Auchan | Mantigues</Text>

                </View>

              </View>

              <View style={styles.parcoursprofessionnel}>


                <View>
                  <View style={styles.parcourstache}>

                    <Image src={imageUrl7} style={styles.imagepoint} />
                    <Text style={styles.parcourstache1}>Rester souriante et courtoise en toutes circonstances.
                    </Text>

                  </View>

                  <View style={styles.parcourstache}>

                    <Image src={imageUrl7} style={styles.imagepoint} />
                    <Text style={styles.parcourstache1}>Rester souriante et courtoise en toutes circonstances.
                    </Text>

                  </View>
                </View>


                <View style={styles.Parcours}>
                  <View style={styles.parcourstache}>

                    <Image src={imageUrl7} style={styles.imagepoint} />
                    <Text style={styles.parcourstache2}>Rester souriante et courtoise en toutes circonstances.
                    </Text>

                  </View>

                  <View style={styles.parcourstache}>

                    <Image src={imageUrl7} style={styles.imagepoint} />
                    <Text style={styles.parcourstache2}>Rester souriante et courtoise en toutes circonstances.
                    </Text>

                  </View>
                </View>
              </View>

            </View>



            <View>
              <View style={styles.parcours}>

                <View style={styles.parcours1}>

                  <Text style={styles.parcourstitre}>HÔTESSE DE VENTE
                  </Text>
                  <Text style={styles.parcoursdate1}>03/2015-03/2018
                  </Text>

                </View>

                <View style={styles.parcourslieu}>

                  <Text>Centre Commercial Auchan | Mantigues</Text>

                </View>

              </View>

              <View style={styles.parcoursprofessionnel}>


                <View>
                  <View style={styles.parcourstache}>

                    <Image src={imageUrl7} style={styles.imagepoint} />
                    <Text style={styles.parcourstache1}>Rester souriante et courtoise en toutes circonstances.
                    </Text>

                  </View>

                  <View style={styles.parcourstache}>

                    <Image src={imageUrl7} style={styles.imagepoint} />
                    <Text style={styles.parcourstache1}>Rester souriante et courtoise en toutes circonstances.
                    </Text>

                  </View>
                </View>


                <View style={styles.Parcours}>
                  <View style={styles.parcourstache}>

                    <Image src={imageUrl7} style={styles.imagepoint} />
                    <Text style={styles.parcourstache2}>Rester souriante et courtoise en toutes circonstances.
                    </Text>

                  </View>

                  <View style={styles.parcourstache}>

                    <Image src={imageUrl7} style={styles.imagepoint} />
                    <Text style={styles.parcourstache2}>Rester souriante et courtoise en toutes circonstances.
                    </Text>

                  </View>
                </View>
              </View>

            </View>



            <View>
              <View style={styles.parcours}>

                <View style={styles.parcours1}>

                  <Text style={styles.parcourstitre}>HÔTESSE DE VENTE
                  </Text>
                  <Text style={styles.parcoursdate2}>01/2012-01-2015
                  </Text>

                </View>

                <View style={styles.parcourslieu}>

                  <Text>Centre Commercial Auchan | Mantigues</Text>

                </View>

              </View>

              <View style={styles.parcoursprofessionnel}>


                <View>
                  <View style={styles.parcourstache}>

                    <Image src={imageUrl7} style={styles.imagepoint} />
                    <Text style={styles.parcourstache1}>Rester souriante et courtoise en toutes circonstances.
                    </Text>

                  </View>

                  <View style={styles.parcourstache}>

                    <Image src={imageUrl7} style={styles.imagepoint} />
                    <Text style={styles.parcourstache1}>Rester souriante et courtoise en toutes circonstances.
                    </Text>

                  </View>
                </View>


                <View style={styles.Parcours}>
                  <View style={styles.parcourstache}>

                    <Image src={imageUrl7} style={styles.imagepoint} />
                    <Text style={styles.parcourstache2}>Rester souriante et courtoise en toutes circonstances.
                    </Text>

                  </View>

                  <View style={styles.parcourstache}>

                    <Image src={imageUrl7} style={styles.imagepoint} />
                    <Text style={styles.parcourstache2}>Rester souriante et courtoise en toutes circonstances.
                    </Text>

                  </View>
                </View>
              </View>

            </View>

          </View>




          <View>
            <Text style={styles.titre}>FORMATION</Text>
            <View style={styles.ligne222}></View>



            <View>
              <View style={styles.parcours}>

                <View style={styles.parcours1}>

                  <Text style={styles.parcourstitre}>HÔTESSE DE VENTE
                  </Text>
                  <Text style={styles.parcoursdate3}>2019
                  </Text>

                </View>

                <View style={styles.parcourslieu}>

                  <Text>Centre Commercial Auchan | Mantigues</Text>
                  <Text style={styles.formation}>Stage pratique : Truffaut, rayon animalerie et alimentation - Vendeuse stagiaire - 8 semaines</Text>


                </View>

              </View>



            </View>







            <View>
              <View style={styles.parcours}>

                <View style={styles.parcours1}>

                  <Text style={styles.parcourstitre}>HÔTESSE DE VENTE
                  </Text>
                  <Text style={styles.parcoursdate3}>2019
                  </Text>

                </View>

                <View style={styles.parcourslieu}>

                  <Text>Centre Commercial Auchan | Mantigues</Text>
                  <Text style={styles.formation}>Stage pratique : Truffaut, rayon animalerie et alimentation - Vendeuse stagiaire - 8 semaines</Text>


                </View>

              </View>

            </View>

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

  /******************************************************** */


  haut: {
    flexDirection: 'row',
    backgroundColor: '#007FFF',
    width: 1000,
    height: 130,
  },


  ligne2: {
    height: 1,
    width: 200,
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
    fontSize: 12,
    fontFamily: 'Roboto-Bold',

  },

  ligne22: {
    height: 1,
    width: 200,
    backgroundColor: '#007FFF',
    marginLeft: 12,
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
    color: '#5e5e57'

  },


  aboutText1: {

    fontSize: 10,
    width: 200,
    marginLeft: 12,
    marginTop: 3,
    color: '#5e5e57'

  },




  /********************************************************* */


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





  /**************************************************************** */






  bas: {
    flexDirection: 'row',
    width: 1000,
  },

  titre: {
    paddingTop: 14,
    color: '#007FFF',
    fontFamily: 'Roboto-Bold',
    marginLeft: 12,
    fontSize: 12,
  },

  /********************************************************** */



  bas1: {

    backgroundColor: '#f4f3f3',
    width: 220,
    height: 520,
    marginLeft: 20,
    color: '#5e5e57'

  },

  competences: {

    fontSize: 10,
    marginTop: 8,
    marginLeft: 12,
    flexDirection: 'row',


  },

  text: {
    width: 90,
  },

  textlong: {
    width: 100,
  },

  cadre: {
    borderWidth: 1,      // Largeur de la bordure
    borderColor: '#007FFF', // Couleur de la bordure (blanche)
    width: 60,          // Largeur de l'élément
    height: 7,         // Hauteur de l'élément
    marginLeft: 50,
    flexDirection: 'row',
    fontSize: 10,
    marginTop: 3,

  },

  cadretextlong: {
    borderWidth: 1,      // Largeur de la bordure
    borderColor: '#007FFF', // Couleur de la bordure (blanche)
    width: 60,          // Largeur de l'élément
    height: 7,         // Hauteur de l'élément
    marginLeft: 40,
    flexDirection: 'row',
    fontSize: 10,
    marginTop: 3,

  },


  progress22: {
    width: 1000,
    height: 5,
    backgroundColor: '#007FFF',
  },

  progress1111: {
    width: 200,
    height: 5,
    backgroundColor: 'white',

  },

  outil1: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },

  outil2: {
    flexDirection: 'row',
    marginTop: 0,
    marginLeft: 10,

  },

  outil3: {
    flexDirection: 'row',
    marginTop: 0,
    marginLeft: 10,
  },

  imagepoint: {
    width: 3,
    height: 3,
    marginTop: 8,
  },

  textoutil: {
    fontSize: 10,
    marginLeft: 8,
    marginTop: 2,
    width: 180,
  },


  namereference: {
    fontSize: 10,
    marginLeft: 12,
    marginTop: 10,


  },


  contactreference: {

    fontSize: 10,
    marginLeft: 5,
    marginTop: 4,
    flexDirection: 'row'
  },



  textreference: {
    fontSize: 10,
    marginLeft: 8,
    marginTop: 2,
    color: '#007FFF',
  },



  textreference2: {
    fontSize: 10,
    marginLeft: 2,
    marginTop: 2,
  },




  /*************************************************************** */




  bas2: {
    marginLeft: 10,
  },


  ligne222: {
    height: 1,
    width: 315,
    backgroundColor: '#007FFF',
    marginLeft: 12,
  },


  parcours: {
    marginLeft: 6,
    marginTop: 8,

  },

  parcours1: {
    flexDirection: 'row',
  },

  parcourstitre: {
    fontSize: 10,
    marginLeft: 8,
    marginTop: 2,
    color: '#007FFF',
    fontFamily: 'Roboto-Bold',

  },


  parcoursdate: {
    fontSize: 10,
    marginHorizontal: 117,
    marginTop: 2,
    color: '#5e5e57',
  },


  parcoursdate1: {
    fontSize: 10,
    marginHorizontal: 145,
    marginTop: 2,
    color: '#5e5e57',
  },


  parcoursdate2: {
    fontSize: 10,
    marginHorizontal: 145,
    marginTop: 2,
    color: '#5e5e57',
  },



  parcourslieu: {
    fontSize: 10,
    marginLeft: 8,
    marginTop: 3,
    color: '#5e5e57',
  },


  parcoursprofessionnel: {
    flexDirection: 'row',
    marginLeft: 16,

  },

  parcourstache: {
    flexDirection: 'row',
    marginTop: 8,

  },

  parcourstache1: {

    fontSize: 10,
    width: 130,
    marginTop: 2,
    marginLeft: 10,
    color: '#5e5e57',

  },



  Parcours: {
    marginHorizontal: 20,
  },



  parcourstache2: {

    fontSize: 10,
    width: 130,
    marginTop: 2,
    marginLeft: 10,
    color: '#5e5e57',

  },


  formation: {

    width: 260,
    marginTop: 4,

  },



  parcoursdate3: {
    fontSize: 10,
    marginHorizontal: 200,
    marginTop: 2,
    color: '#5e5e57',
  },

  

});

export default Pdf;
