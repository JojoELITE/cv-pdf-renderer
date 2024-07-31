import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

const imageUrl = "/assets/1.png";

Font.register({
  family: "CustomFont",
  src: '/path/to/font.ttf'
});

const Pdf = () => (
  <Document>

    <Page size="A4" style={styles.page} wrap={false}>

      {/* Left column */}
      <View style={styles.leftColumn}>
        <Image src={imageUrl} style={styles.image} />


        {/* Education */}
        <View>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>EDUCATION</Text>
            <View style={styles.ligne}></View>
            <Text style={styles.sectionSubHeader}>ENTER YOUR MAJOR</Text>
            <Text style={styles.sectionItem}>Name Of Your University</Text>
            <Text style={styles.sectionDate}>2009-2011</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionSubHeader}>ENTER YOUR MAJOR</Text>
            <Text style={styles.sectionItem}>Name Of Your University</Text>
            <Text style={styles.sectionDate}>2011-2015</Text>
          </View>
        </View>

        {/* Reference */}
        <View>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>REFERENCE</Text>
            <View style={styles.ligne}></View>

            <Text style={styles.sectionSubHeader1}>Sara Taylor</Text>
            <Text style={styles.sectionItem}>Director | Company Name</Text>
            <Text style={styles.sectionDate}>T: +241 00000000</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionSubHeader}>Mike Anderson</Text>
            <Text style={styles.sectionItem}>Web Developer | Company</Text>
            <Text style={styles.sectionDate}>T: +241 00000000</Text>
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <View style={styles.contact}>
            <View style={styles.contactIconPlaceholder} />
            <Text style={styles.sectionHeader2}>Phone</Text>
          </View>
          <Text style={styles.contactInfo}>T: +241 00000000</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.contact}>
            <View style={styles.contactIconPlaceholder} />
            <Text style={styles.sectionHeader2}>Email</Text>
          </View>
          <Text style={styles.contactInfo}>abcde@gmail.com</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.contact}>
            <View style={styles.contactIconPlaceholder} />
            <Text style={styles.sectionHeader2}>Website</Text>
          </View>
          <Text style={styles.contactInfo}>www.site.com</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.contact}>
            <View style={styles.contactIconPlaceholder} />
            <Text style={styles.sectionHeader2}>Address</Text>
          </View>
          <Text style={styles.contactInfo}>Your street address</Text>
          <Text style={styles.contactInfo}>SS Street City'Zip Code-456</Text>
        </View>
      </View>


      {/* Right column */}
      <View style={styles.rightColumn}>
        <View style={styles.header}>
          <Text style={styles.firstName}>KABEN
            <Text style={styles.lastName}> RICHARDS</Text>
          </Text>
          <Text style={styles.professionalTitle}>PROFESSIONAL TITLE</Text>
        </View>

        <View>
          <Text style={styles.aboutHeader}>ABOUT</Text>
          <View style={styles.ligne1}></View>

          <Text style={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.aboutHeader}>WORK EXPERIENCE</Text>
          <View style={styles.ligne1}></View>


          {[...Array(3)].map((_, index) => (
            <View key={index} style={styles.experience}>

              <Text style={styles.experienceDate}>sept 20xx - jul 20xx</Text>
              <View style={styles.experienceDetails}>
                <Text style={styles.experienceTitle}>JOB POSITION HERE</Text>
                <Text style={styles.experienceCompany}>Company name/California USA</Text>
                <Text style={styles.experienceDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Software Skills */}
        <View>
          <Text style={styles.aboutHeader}>SOFTWARE SKILL</Text>
          <View style={styles.ligne1}></View>

          <Text style={styles.cv}>CVPROS</Text>


          <View style={styles.skillsContainer}>

            <View style={styles.skillColumn}>

            </View>



            <View style={styles.skillColumn}>
              {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'].map((skill, index) => (
                <View key={index} style={styles.skill}>
                  <Text style={styles.skillText}>{skill}</Text>
                  <View style={styles.section1}>
                    <View style={styles.contact1}>
                      <View style={styles.contactIconPlaceholder1} />
                      <Text style={styles.sectionHeader3}></Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.skillColumn}>
              {['Microsoft Word', 'Microsoft PowerPoint', 'HTML/CSS'].map((skill, index) => (
                <View key={index} style={styles.skill}>
                  <Text style={styles.skillText}>{skill}</Text>

                  <View style={styles.section1}>
                    <View style={styles.contact1}>
                      <View style={styles.contactIconPlaceholder1} />
                      <Text style={styles.sectionHeader3}></Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

// Create styles
const styles = StyleSheet.create({
  page: {
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


  ligne: {
    height: 0.5,
    width: 500,
    backgroundColor: 'yellow',
    borderTopWidth: 0,
    margin: 15,
    marginLeft: 30,

  },


  ligne1: {
    height: 1,
    width: 500,
    backgroundColor: '#161718',
    borderTopWidth: 0,
    margin: 15,
    marginLeft: 30,

  },


  leftColumn: {
    width: '35%',
    backgroundColor: '#161718',
    color: 'white',
    padding: 10,
  },

  image: {
    width: 180,
    height: 220,
    
  },

  section: {
    paddingTop: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 30,

  },

  contactIconPlaceholder: {
    width: 30,
    height: 20,
    backgroundColor: 'yellow',
  },


  sectionHeader2: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
    width: 170,
    backgroundColor: 'grey',

  },
  sectionSubHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 40,
  },
  sectionSubHeader1: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 40,
    paddingTop: 10,
  },

  sectionItem: {
    fontSize: 12,
    marginBottom: 3,
    paddingLeft: 40,

  },
  sectionDate: {
    fontSize: 10,
    marginBottom: 3,
    paddingLeft: 40,
  },
  contact: {
    flexDirection: 'row',
    marginBottom: 5,
  },

  contactInfo: {
    fontSize: 10,
    paddingLeft: 40,
  },

  rightColumn: {
    width: '60%',
    backgroundColor: 'white',
    paddingTop: 50,
  },
  header: {
    backgroundColor: 'yellow',
    padding: 30,
    marginBottom: 20,
    width: 1000,
  },
  firstName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  lastName: {
    fontSize: 22,
  },
  professionalTitle: {
    fontSize: 12,
  },
  aboutHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingLeft: 30,
    color: '#4C516D',


  },
  aboutText: {
    fontSize: 12,
    marginBottom: 30,
    paddingLeft: 40,
    color: '#4C516D',

  },
  experience: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 30,
    color: '#4C516D',


  },
  experienceDate: {
    fontSize: 12,
    marginRight: 10,
    color: '#4C516D',
    paddingLeft: 5,


  },
  experienceDetails: {
    flex: 1,
  },
  experienceTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  experienceCompany: {
    fontSize: 12,
    marginBottom: 3,
    color: '#4C516D',

  },
  experienceDescription: {
    fontSize: 12,
    color: '#4C516D',

  },
  skillsContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 10,
  },
  skillColumn: {
    flex: 1,
    paddingHorizontal: 10,
  },
  skill: {
    marginBottom: 20,
  },

  skillText: {
    fontSize: 8.5,
    flex: 1,
    paddingLeft: 10,
    color: '#4C516D',
  },
  section1: {
  },

  contact1: {
    flexDirection: 'row',
    paddingLeft: 10,
  },

  contactIconPlaceholder1: {
    width: 170,
    height: 5,
    backgroundColor: 'black',
  },

  sectionHeader3: {
    fontWeight: 'bold',
    width: 30,
    backgroundColor: 'grey',

  },
});

export default Pdf;

