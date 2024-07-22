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
        <Image src={imageUrl} style={styles.image} />

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
        <View style={styles.section}>
          <View style={styles.contact}>
            <View style={styles.contactIconPlaceholder} />
            <Text style={styles.sectionHeader}>Phone</Text>
          </View>
          <Text style={styles.contactInfo}>T: +241 00000000</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.contact}>
            <View style={styles.contactIconPlaceholder} />
            <Text style={styles.sectionHeader}>Email</Text>
          </View>
          <Text style={styles.contactInfo}>abcde@gmail.com</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.contact}>
            <View style={styles.contactIconPlaceholder} />
            <Text style={styles.sectionHeader}>Website</Text>
          </View>
          <Text style={styles.contactInfo}>www.site.com</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.contact}>
            <View style={styles.contactIconPlaceholder} />
            <Text style={styles.sectionHeader}>Address</Text>
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

          <View style={styles.skillsContainer}>
            <View style={styles.skillColumn}>
              {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'].map((skill, index) => (
                <View key={index} style={styles.skill}>
                  <Text style={styles.skillText}>{skill}</Text>
                  <Image src={barre} style={styles.skillBar} />
                </View>
              ))}
            </View>

            <View style={styles.skillColumn}>
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
    padding: 10,
  },
  image: {
    width: 200,
    height: 220,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionSubHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  sectionItem: {
    fontSize: 12,
    marginBottom: 3,
  },
  sectionDate: {
    fontSize: 10,
    marginBottom: 3,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  contactIconPlaceholder: {
    width: 20,
    height: 20,
    backgroundColor: 'grey',
    marginRight: 10,
  },
  contactInfo: {
    fontSize: 10,
    paddingLeft: 30,
  },
  rightColumn: {
    width: '65%',
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    backgroundColor: 'yellow',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
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
  },
  aboutText: {
    fontSize: 12,
    marginBottom: 20,
  },
  experience: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  experienceDate: {
    fontSize: 12,
    marginRight: 10,
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
  },
  experienceDescription: {
    fontSize: 12,
  },
  skillsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skillColumn: {
    flex: 1,
    paddingHorizontal: 10,
  },
  skill: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  skillText: {
    fontSize: 12,
    flex: 1,
  },
  skillBar: {
    width: 80,
    height: 4,
    marginLeft: 10,
  },
});

export default Pdf;
