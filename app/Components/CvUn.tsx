import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

const imageUrl = "/assets/1.png";
const barre = "/assets/barre.png";

Font.register({
  family: "CustomFont",
  src: '/path/to/font.ttf'
});

const Pdf = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap={false}>

      {/* Left column */}
      <View style={styles.leftColumn}>
        <View>
          {/* Include the Image component */}
          <Image src={imageUrl} style={styles.image} />
        </View>

        {/* Education */}
        <View>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>EDUCATION</Text>
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
            <Text style={styles.sectionSubHeader}>Sara Taylor</Text>
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
        <View style={styles.section1}>
          <View style={styles.contacts}>
            <View style={styles.contact1}>
            </View>
            <View style={styles.contact2}>
          <Text style={styles.sectionHeader1}>Phone</Text>
            </View>
          </View>

          <View>
            <Text style={styles.contactInfo}>T: +241 00000000</Text>
          </View>

        </View>


        
        <View style={styles.section1}>
          <View style={styles.contacts}>
            <View style={styles.contact1}>
            </View>
            <View style={styles.contact2}>
            <Text style={styles.sectionHeader1}>Email</Text>
            </View>
          </View>

          <View>
          <Text style={styles.contactInfo}>abcde@gmail.com</Text>
          </View>

        </View>


        <View style={styles.section1}>
          <View style={styles.contacts}>
            <View style={styles.contact1}>
            </View>
            <View style={styles.contact2}>
            <Text style={styles.sectionHeader1}>Website</Text>
            </View>
          </View>

          <View>
          <Text style={styles.contactInfo}>www.site.com</Text>
          </View>

        </View>


        <View style={styles.section1}>
          <View style={styles.contacts}>
            <View style={styles.contact1}>
            </View>
            <View style={styles.contact2}>
            <Text style={styles.sectionHeader1}>Address</Text>
            </View>
          </View>

          <View>
          <Text style={styles.contactInfo}>your street address</Text>
          <Text style={styles.contactInfo}>SS Sterrt City'Zip Code-456</Text>

          </View>

        </View>

      </View>

      {/* Right column */}
      <View style={styles.rightColumn}>
        <View style={styles.header}>
          <View>
            <Text style={styles.firstName}>KABEN
              <Text style={styles.lastName}> RICHARDS</Text>

            </Text>
          </View>
          <Text style={styles.professionalTitle}>PROFESSIONAL TITLE</Text>
        </View>

        <View>
          <Text style={styles.aboutHeader}>ABOUT</Text>
          <Text style={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.aboutHeader}>WORK EXPERIENCE</Text>

          {[...Array(3)].map((_, index) => (
            <View key={index} style={styles.experience}>
              <Text style={styles.experienceDate}>sept 20xx - jul 20xx</Text>
              <View style={styles.experienceDetails}>
                <Text style={styles.experienceTitle}>JOB POSITION HERE</Text>
                <Text style={styles.experienceCompany}>Company name/Californie USA</Text>
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

          <View style={styles.skillsContainer}>
            <View style={styles.skillColumn}>
              {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'].map((skill, index) => (
                <View key={index} style={styles.skill}>
                  <Text style={styles.skillText}>{skill}</Text>
                  <Image src={barre} style={styles.skillBar} />
                </View>
              ))}
            </View>

            <View style={styles.skillColumn1}>
              {['Microsoft Word', 'Microsoft PowerPoint', 'HTML/CSS'].map((skill, index) => (
                <View key={index} style={styles.skill}>
                  <Text style={styles.skillText}>{skill}</Text>
                  <Image src={barre} style={styles.skillBar} />
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
  leftColumn: {
    width: '35%',
    backgroundColor: '#161718',
    color: 'white',
  },

  image: {
    width: 200,
    height: 220,
    paddingLeft: 3,
  },

  section: {
    padding: 10,
  },

  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 0,
  },
  sectionSubHeader: {
    fontSize: 12,
    paddingLeft: 40,
    fontWeight: 'bold',
    paddingTop: 0,
  },
  sectionItem: {
    fontSize: 12,
    paddingLeft: 40,
  },
  sectionDate: {
    fontSize: 10,
    paddingLeft: 40,
  },


  section1: {

  },


  contact1: {
    backgroundColor: 'yellow',
    width: 40,
  },

  contact2: {
    backgroundColor: 'grey',
    width: 180,
    fontWeight: 'bold',
  },


  contacts: {

    flexDirection: 'row',
    paddingTop: 10,

  },




  sectionHeader1: {
    fontSize: 12,
    paddingLeft: 10,

  },


  contactInfo: {
    fontSize: 10,
    paddingLeft: 50,
    paddingTop: 6,
  },

  icon: {
    width: 30,
    height: 35,
  },

  rightColumn: {
    width: '60%',
    backgroundColor: 'white',
    padding: 0,
  },
  header: {
    backgroundColor: 'yellow',
    width: '120%',
    height: 80,
    marginTop: 35,
  },

  firstName: {
    fontSize: 22,
    paddingHorizontal: 30,
    paddingTop: 25,
    fontWeight: 'bold',
  },
  lastName: {
    fontSize: 22,
    paddingTop: 25,
  },
  professionalTitle: {
    fontSize: 12,
    paddingHorizontal: 30,
  },
  aboutHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 30,
    paddingTop: 15,
    color: '#4C516D',
  },
  aboutText: {
    fontSize: 12,
    paddingLeft: 30,
    paddingTop: 10,
    color: '#4C516D',
  },
  experience: {
    flexDirection: 'row',
    color: '#4C516D',
    marginBottom: 10,
  },
  experienceDate: {
    fontSize: 12,
    paddingLeft: 30,
    paddingTop: 10,
  },
  experienceDetails: {
    fontSize: 12,
    paddingTop: 10,
    paddingLeft: 20,
  },
  experienceTitle: {
    fontSize: 12,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  experienceCompany: {
    fontSize: 12,
    paddingLeft: 10,
  },
  experienceDescription: {
    paddingLeft: 10,
    width: 230,
    paddingTop: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    color: '#4C516D',
  },

  skillColumn: {
    paddingLeft: 150,
  },

  skillColumn1: {
    paddingLeft: 50,
  },


  skill: {
    paddingTop: 10,

  },
  skillText: {
    fontSize: 12,
    paddingTop: 8,

  },
  skillBar: {
    width: 80,
    height: 4,
    paddingTop: 3,

  },

});

export default Pdf;
