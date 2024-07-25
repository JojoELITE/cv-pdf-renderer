import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

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

    <Page size="A4" style={styles.page1} wrap={false}>
      <View style={styles.leftColumn1}>
        <View style={styles.haut}></View>

        <View style={styles.bas}>
          <View style={styles.nom}>
            <Text>TIMOTHY</Text>
            <Text>DUNCAN</Text>
          </View>

          <View style={styles.compétences}>
            <Text style={styles.compétence}>SKILLS</Text>
            <View style={styles.ligne2}></View>
            <View style={styles.compétenceListe}>
              <Text style={styles.t1}>Communication - Customer-Oriented -</Text>
              <Text style={styles.t2}>Leadership - Team Coordination -</Text>
              <Text style={styles.t3}>Negotiation - Business Intelligence -</Text>
              <Text style={styles.t4}>Critical Thinking - Creativity -</Text>
              <Text style={styles.t5}>Sales & Marketing - Pricing Strategy -</Text>
              <Text style={styles.t6}>Time Management - Hubspot -</Text>
            </View>
          </View>

          <View style={styles.industrie}>
            <Text style={styles.industries}>INDUSTRY EXPERTISE</Text>
            <View style={styles.ligne3}></View>
            <View style={styles.industrieListe}>
              <Text style={styles.exper1}>Sales training</Text>
              <View style={styles.progress}>
                <View style={styles.progress11} />
                <View style={styles.progress111} />
              </View>
            </View>

            <View style={styles.industrieListe}>
              <Text style={styles.exper1}>Product-led growth</Text>
              <View style={styles.progress}>
                <View style={styles.progress22} />
                <View style={styles.progress1111} />
              </View>
            </View>

            <View style={styles.industrieListe}>
              <Text style={styles.exper1}>Partnerships</Text>
              <View style={styles.progress}>
                <View style={styles.progress33} />
                <View style={styles.progress11111} />
              </View>
            </View>
          </View>

          <View style={styles.langue}>
            <Text style={styles.langues}>LANGUAGES</Text>
            <View style={styles.ligne4}></View>
            <View>
              <View style={styles.text}>
                <Text style={styles.text1}>English</Text>
                <View style={styles.langue1}>
                  <Text style={styles.text2}>Native</Text>
                  <View style={styles.bar}>
                    <View style={styles.bar1} />
                    <View style={styles.bar2} />
                  </View>
                </View>
              </View>

              <View style={styles.text01}>
                <Text style={styles.text11}>Spanish</Text>
                <View style={styles.langue11}>
                  <Text style={styles.text22}>Advanced</Text>
                  <View style={styles.bar01}>
                    <View style={styles.bar11} />
                    <View style={styles.bar22} />
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.outils}>
            <Text style={styles.outil}>Outils</Text>
            <View style={styles.ligne2}></View>
            <View style={styles.compétenceListe}>
              <Text style={styles.t2}>Figma</Text>
              <Text style={styles.t3}>Git</Text>
              <Text style={styles.t4}>Visual Studio Code</Text>
              <Text style={styles.t5}>Adobe XD</Text>
            </View>
          </View>

          <View style={styles.certificats}>
            <Text style={styles.certificat}>Certificats</Text>
            <View style={styles.ligne2}></View>
            <View style={styles.compétenceListe}>
              <Text style={styles.t2}>Certified Web Developer (CWD)</Text>
              <Text style={styles.t3}>Front-End Web Developer Nanodegree (Udacity)</Text>
              <Text style={styles.t4}>Certified Data Scientist (CDS)</Text>
              <Text style={styles.t5}>Docker Certified Associate</Text>
            </View>
          </View>
        </View>
      </View>





      <View style={styles.rightColumn1}>

        <View>
          <Text style={styles.director1}>Director of Business Development</Text>


          <View style={styles.coordonée}>

            <View style={styles.contact01}>

              <Image src={imageUrl1} style={styles.imagetel} />

              <Text style={styles.contact011}>(+241) 00000000</Text>

            </View>


            <View style={styles.contact02}>

              <Text style={styles.contact011}> @ timithy.duncan@gmail.com</Text>

            </View>
          </View>


          <View style={styles.coordonée}>

            <View style={styles.contact01}>

              <Image src={imageUrl2} style={styles.imagetel} />
              <Text style={styles.contact011}>linkedin.com/timothy-duncan-jr</Text>

            </View>


            <View style={styles.contact02}>

              <Image src={imageUrl3} style={styles.imagetel} />
              <Text style={styles.contact011}>Paterson.New Jersey</Text>

            </View>
          </View>




        </View>


        <View style={styles.summary}>
          <Text style={styles.summary1}>SUMMARY</Text>
          <View style={styles.ligne22}></View>
          <Text style={styles.summarytext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </Text>

        </View>




        <View style={styles.key}>

          <View>
            <Text style={styles.keytitre}>KEY ACHIEVEMENTS</Text>
            <View style={styles.ligne22}></View>
          </View>

          <View>

            <View style={styles.key01}>

              <Image src={imageUrl5} style={styles.imagetel} />
              <Text style={styles.key011}>Sales Training Expert</Text>

            </View>

            <Text style={styles.key022}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </Text>

          </View>


          <View>

            <View style={styles.key01}>
              <Image src={imageUrl6} style={styles.imagetel} />
              <Text style={styles.key011}>Sales Training Expert</Text>

            </View>

            <Text style={styles.key022}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </Text>

          </View>


          <View>

            <View style={styles.key01}>

              <Image src={imageUrl7} style={styles.imagetel} />
              <Text style={styles.key011}>Sales Training Expert</Text>

            </View>

            <Text style={styles.key022}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </Text>

          </View>

        </View>



        <View style={styles.key}>

          <View>
            <Text style={styles.keytitre}>EXPERIENCE</Text>
            <View style={styles.ligne22}></View>


          </View>

          <View style={styles.exper}>

            <View style={styles.experience01}>

              <Text style={styles.experiences1}>Director of Business Development</Text>
              <Text style={styles.experiences2}>2018-Ongong</Text>

            </View>




            <View style={styles.experience01}>

              <Text style={styles.ecole3}>Esycron</Text>
              <Text style={styles.experiences22}>New Jersey</Text>

            </View>

            <Text style={styles.summarytext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </Text>


            <View style={styles.directors}>

              <View style={styles.directors1}>

                <Image src={imageUrl4} style={styles.imagepoint} />
                <Text style={styles.passion1111}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna

                </Text>

              </View>

              <View style={styles.directors1}>

                <Image src={imageUrl4} style={styles.imagepoint} />
                <Text style={styles.passion1111}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna

                </Text>

              </View>

              <View style={styles.directors1}>

                <Image src={imageUrl4} style={styles.imagepoint} />
                <Text style={styles.passion1111}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna

                </Text>

              </View>

            </View>


          </View>





          <View style={styles.exper}>

            <View style={styles.experience01}>

              <Text style={styles.experiences1}>Director of Business Development</Text>
              <Text style={styles.experiences2}>2018-Ongong</Text>

            </View>




            <View style={styles.experience01}>

              <Text style={styles.ecole3}>Esycron</Text>
              <Text style={styles.experiences22}>New Jersey</Text>

            </View>

            <Text style={styles.summarytext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </Text>


            <View style={styles.directors}>

              <View style={styles.directors1}>

                <Image src={imageUrl4} style={styles.imagepoint} />
                <Text style={styles.passion1111}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna

                </Text>

              </View>

              <View style={styles.directors1}>

                <Image src={imageUrl4} style={styles.imagepoint} />
                <Text style={styles.passion1111}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna

                </Text>

              </View>

              <View style={styles.directors1}>

                <Image src={imageUrl4} style={styles.imagepoint} />
                <Text style={styles.passion1111}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna

                </Text>

              </View>

            </View>

          </View>

        </View>



        <View style={styles.ecole}>

          <View>
            <Text>EDUCATION</Text>
            <View style={styles.ligne22}></View>
          </View>


          <View>
            <View style={styles.ecole1}>

              <Text style={styles.ecole11}>MSc Marketing Science</Text>
              <Text style={styles.ecole22}>2006-2007</Text>

            </View>

            <Text style={styles.ecole3}>Columbus University</Text>
          </View>


          <View>
            <View style={styles.ecoles}>

              <Text style={styles.ecole11}>BSc in Marketing</Text>
              <Text style={styles.ecoles1}>2002-2005</Text>

            </View>

            <Text style={styles.ecole3}>Rutgers University</Text>
          </View>

        </View>

      </View>
    </Page>

  </Document>
);

// Create styles
const styles = StyleSheet.create({
  page1: {
    flexDirection: 'row',
    display: 'flex',
  },


  cv1: {
    fontWeight: 'bold',
    opacity: 20,
    color: 'red',
    position: 'absolute',
    fontSize: 100,
    bottom: '130%',            /* Place le texte au milieu verticalement */
    right: '30%',
    transform: 'rotate(-67deg)', // Incline le texte de 67 degrés dans le sens contraire des aiguilles d'une montre
  },

  leftColumn1: {
    width: '35%',
    color: 'white',
  },

  imagetel: {
    width: 10,
    height: 10,

  },


  imagepoint: {
    width: 3,
    height: 3,
    paddingTop: 0,
  },

  haut: {
    backgroundColor: '#005f69',
    height: 10,
  },


  ligne22: {
    height: 1,
    width: 300,
    backgroundColor: 'black',
    borderTopWidth: 0,
    margin: 3,

  },

  ligne2: {
    height: 1,
    width: 150,
    backgroundColor: 'white',
    borderTopWidth: 0,
    margin: 2,

  },


  bas: {
    backgroundColor: '#008080',
    height: 850,

  },

  nom: {

    fontSize: 20,
    fontWeight: 'bold',
    margin: 30,

  },


  t1: {
    marginTop: 0,
  },


  t2: {
    marginTop: 6,
  },


  t3: {
    marginTop: 10,
  },

  t4: {
    marginTop: 6,
  },

  t5: {
    marginTop: 6,
  },

  t6: {
    marginTop: 6,
  },


  compétences: {
    marginLeft: 30,
    width: 300,
  },

  compétence: {
    fontSize: 14,
  },


  compétenceListe: {

    fontSize: 9,

  },

  ligne3: {
    height: 1,
    width: 150,
    backgroundColor: 'white',
    borderTopWidth: 0,
    margin: 5,
    marginLeft: 2,

  },

  industrie: {
    margin: 30,
  },

  industries: {
    fontSize: 14,
    width: 300,
    marginLeft: 0,

  },

  industrieListe: {

    fontSize: 9,

  },

  progress: {
    paddingTop: 6,
    marginLeft: 3,
    flexDirection: 'row',

  },

  exper1: {
    paddingTop: 8,
    marginLeft: 4,
  },

  progress11: {
    width: 100,
    height: 3,
    backgroundColor: 'white',
  },

  progress111: {
    width: 100,
    backgroundColor: 'white',

  },

  progress22: {
    width: 145,
    height: 3,
    backgroundColor: 'white',
  },

  progress1111: {
    width: 10,
    backgroundColor: '#1ca9c9',

  },

  progress33: {
    width: 130,
    height: 3,
    backgroundColor: 'white',
  },

  progress11111: {
    width: 25,
    backgroundColor: '#1ca9c9',

  },


  langue: {
  },


  langues: {
    marginLeft: 35,
    fontSize: 14,

  },

  ligne4: {
    height: 1,
    width: 150,
    backgroundColor: 'white',
    borderTopWidth: 0,
    margin: 5,
    marginLeft: 35,

  },


  text: {
    flexDirection: 'row',
  },

  text1: {
    fontSize: 10,
    marginLeft: 35,
  },

  text2: {
    fontSize: 10,
    marginLeft: 50,

  },

  langue1: {
    flexDirection: 'row',
  },

  bar: {

    paddingTop: 5,
    flexDirection: 'row',
    paddingLeft: 12,
  },

  bar1: {
    width: 13,
    height: 3,
    backgroundColor: 'white',
  },

  bar2: {
    width: 13,
    backgroundColor: 'white',
    height: 3,
  },

  text01: {

    paddingTop: 5,
    fontSize: 10,
    flexDirection: 'row',
  },

  text11: {
    marginLeft: 35,
  },

  langue11: {
    flexDirection: 'row',
  },

  text22: {
    marginLeft: 33,
  },

  bar01: {

    paddingTop: 5,
    flexDirection: 'row',
    marginLeft: 10,
  },

  bar11: {
    width: 13,
    height: 3,
    backgroundColor: 'white',
  },

  bar22: {
    width: 13,
    backgroundColor: '#AFEEEE',
    height: 3,
  },


  compétenceListe1: {

    fontSize: 9,
    width: 150,

  },


  passions: {

    marginLeft: 30,

  },


  passion: {

    fontSize: 16,

  },

  passion1: {
    flexDirection: 'row',
    paddingTop: 0,
    fontSize: 10,
  },

  pass: {

    width: 20,
    backgroundColor: '#1ca9c9',

  },

  passion11: {
    marginLeft: 10,
    fontWeight: 'bold',
  },


  passion111: {
    marginLeft: 30,
    fontSize: 10,
    paddingTop: 5,

  },


  passion1111: {
    fontSize: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    width: 300,


  },



  outils: {

    paddingLeft: 35,
    marginTop: 30,

  },

  outil: {
    fontSize: 14,
    margin: 0,
  },

  outiliste: {
    fontSize: 9,
    width: 150,
  },


  certificats: {

    paddingLeft: 35,
    marginTop: 30,
  },

  certificat: {
    margin: 0,
    fontSize: 14,

  },

  certificatListe: {
    fontSize: 9,
    width: 150,
    margin: 5,
  },


  rightColumn1: {
    width: '65%',
    backgroundColor: 'white',
    paddingLeft: 30,
    paddingTop: 30,
  },


  director1: {

    fontSize: 14,
    color: '#008080',
    paddingTop: 14,
  },


  coordonée: {
    flexDirection: 'row',
    paddingTop: 6,
  },

  contact01: {

    flexDirection: 'row',
    fontSize: 10,

  },


  contact02: {

    flexDirection: 'row',
    fontSize: 10,
    marginLeft: 10,

  },

  contact011: {
    fontSize: 10,
    marginLeft: 5,

  },


  summary: {

    marginTop: 23,
  },


  summary1: {

    fontSize: 14,

  },

  summarytext: {
    fontSize: 10,
    width: 300,
  },


  key: {
    marginTop: 20,

  },


  keytitre: {

    fontSize: 14,

  },

  key01: {

    flexDirection: 'row',
    marginTop: 6

  },

  key011: {
    fontSize: 12,
    fontWeight: 'black',
    marginLeft: 14,
  },


  key022: {
    fontSize: 10,
    marginLeft: 35,
    width: 270,
    marginTop: 6,

  },


  key0222: {
    fontSize: 10,
    marginLeft: 35,
    width: 120,
    marginTop: 6,

  },

  experience01: {

    flexDirection: 'row',

  },

  directors: {
    marginTop: 8,
  },

  directors1: {
    flexDirection: 'row',
    fontSize: 10,
  },

  exper: {
    marginTop: 6,

  },



  experiences1: {

    fontSize: 12,
    marginTop: 6,

  },

  experiences2: {

    fontSize: 10,
    marginLeft: 80,
    marginTop: 6,

  },


  experiences22: {

    fontSize: 12,
    marginLeft: 218,
    marginTop: 6,

  },



  ecole: {

    marginTop: 20,
  },


  ecole1: {

    flexDirection: 'row',

  },


  ecole11: {

    marginTop: 6,
    fontSize: 12,

  },


  ecole22: {

    fontSize: 10,
    marginTop: 6,
    marginLeft: 150,
  },


  ecole3: {
    fontSize: 12,
    color: '#008080',
    marginTop: 3,
  },



  ecoles: {
    flexDirection: 'row',
    marginTop: 6,
  },


  ecoles1: {

    fontSize: 10,
    marginTop: 6,
    marginLeft: 185,

  },

});

export default Pdf;
