import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

const imageUrl = "/assets/1.png";
const imageUrl3 = "/assets/mail1.png";
const imageUrl2 = "/assets/home1.png";
const imagePhone = "/assets/phone.png";
const imageCalendar = "/assets/calendar.png";
const imageWorld = "/assets/world.png";
const imageLink1 = "/assets/link1.png";






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

            <View style={styles.body}>

                <View style={styles.debut}>
                </View>


                <View style={styles.bas}>



                    <View style={styles.bas1}>

                        <Image src={imageUrl} style={styles.image} />

                        <View>
                            <Text style={styles.titre}>OBJECTIF</Text>
                            <View style={styles.ligne2}></View>


                            <Text style={styles.aboutText}>
                                Un comptable agréé avec plus de 6 ans d’expérience. S'adapte sans heurts aux processus comptables en constante évolution et aux nouvelles technologies. Soucieux des détails, efficace et organisé, avec une vaste expérience des systèmes comptables.</Text>
                        </View>



                        <View>
                            <Text style={styles.titre}>COMPÉTENCES</Text>
                            <View style={styles.ligne22}></View>


                            <View style={styles.outil1}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.textoutil}>Compétences en organisation</Text>

                            </View>


                            <View style={styles.outil2}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.textoutil}>Gestion du temps</Text>

                            </View>

                            <View style={styles.outil3}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.textoutil}>Adaptabilité</Text>

                            </View>


                            <View style={styles.outil3}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.textoutil}>Leadership</Text>

                            </View>



                            <View style={styles.outil3}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.textoutil}>Microsoft Excel</Text>

                            </View>


                            <View style={styles.outil3}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.textoutil}>Souci du détail</Text>

                            </View>


                        </View>

                        <View>
                            <Text style={styles.titre}>LANGUES</Text>
                            <View style={styles.ligne2}></View>


                            <View style={styles.outil1}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.textoutil}>Français | Natif

                                </Text>

                            </View>


                            <View style={styles.outil2}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.textoutil}>Anglais | Compétence professionnelle complète

                                </Text>

                            </View>

                            <View style={styles.outil3}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.textoutil}>Espagnol | Notions élémentaires

                                </Text>

                            </View>


                        </View>




                        <View>
                            <Text style={styles.titre}>CONTACT</Text>
                            <View style={styles.ligne2}></View>

                            <View>

                                <View style={styles.outil3}>
                                    <Image src={imageUrl3} style={styles.imagetel} />
                                    <Text style={styles.aboutText}>
                                        mail@gmail.com
                                    </Text>
                                </View>


                                <View style={styles.outil3}>
                                    <Image src={imageUrl2} style={styles.imagetel} />
                                    <View>
                                        <Text style={styles.aboutText}>
                                            12 rue de la reussite
                                        </Text>
                                        <Text style={styles.aboutText1}>
                                            75012 Paris
                                        </Text>
                                    </View>

                                </View>
                                <View style={styles.outil3}>
                                    <Image src={imagePhone} style={styles.imagetel} />
                                    <Text style={styles.aboutText}>
                                        +241 00000000
                                    </Text>
                                </View>

                                <View style={styles.outil3}>
                                    <Image src={imageCalendar} style={styles.imagetel} />
                                    <Text style={styles.aboutText}>
                                        23 juin 1985

                                    </Text>
                                </View>

                                <View style={styles.outil3}>
                                    <Image src={imageWorld} style={styles.imagetel} />
                                    <Text style={styles.aboutText}>
                                        Française

                                    </Text>
                                </View>

                                <View style={styles.outil3}>
                                    <Image src={imageLink1} style={styles.imagetel} />
                                    <Text style={styles.aboutText}>
                                        linkedin.com/theophilehamon

                                    </Text>
                                </View>

                            </View>

                        </View>


                    </View>



                    <View style={styles.mileu}>
                    </View>


/****************************************************************************************** */

                    <View style={styles.bas2}>


                        <View>

                            <Text style={styles.aboutText2}>
                                Directeur Comptable

                            </Text>
                            <Text style={styles.titre_}>Théophile
                            </Text>
                            <Text style={styles.titre_}>Hamon

                            </Text>

                        </View>


                        <View>
                            <Text style={styles.titreExperience}>EXPÉRIENCES</Text>
                            <View style={styles.ligne222}></View>



                            <View>
                                <View style={styles.parcours}>

                                    <View style={styles.parcours1}>

                                        <Text style={styles.parcourstitre}>Directeur Comptable

                                        </Text>
                                        <Text style={styles.parcoursdate}>Févr 2018 - Présent


                                        </Text>

                                    </View>

                                    <View style={styles.parcourslieu}>

                                        <Text>Apex Corporation, Paris, FR.
                                        </Text>

                                    </View>

                                </View>



                                    <View>
                                        <View style={styles.parcourstache}>

                                            <Image src={imageUrl7} style={styles.imagepoint} />
                                            <Text style={styles.parcourstache1}>J’ai rendu compte et collaboré avec le directeur financier (CFO) pour évaluer et évoluer les meilleures pratiques des organisations et mettre en place des stratégies financières et comptables efficaces.

                                            </Text>

                                        </View>

                                        <View style={styles.parcourstache}>

                                            <Image src={imageUrl7} style={styles.imagepoint} />
                                            <Text style={styles.parcourstache1}>Superviser l’équipe comptable et fournir une orientation et une direction au besoin.

                                            </Text>

                                        </View>
                                    </View>


                            </View>



                            <View>
                                <View style={styles.parcours}>

                                    <View style={styles.parcours1}>

                                        <Text style={styles.parcourstitre}>Comptable en Personnel

                                        </Text>
                                        <Text style={styles.parcoursdate1}>Janv 2013 - Févr 2018


                                        </Text>

                                    </View>

                                    <View style={styles.parcourslieu}>

                                        <Text>Apex Corporation, Paris, FR.
                                        </Text>

                                    </View>

                                </View>

                                <View style={styles.parcoursprofessionnel}>


                                    <View>
                                        <View style={styles.parcourstache}>

                                            <Image src={imageUrl7} style={styles.imagepoint} />
                                            <Text style={styles.parcourstache1}>J’ai préparé des rapports financiers et des rapports mensuels / trimestriels pour examen par le comptable senior et la direction supérieure. J’ai veillé à la précision et à la livraison à temps de tous les rapports.

                                            </Text>

                                        </View>

                                        <View style={styles.parcourstache}>

                                            <Image src={imageUrl7} style={styles.imagepoint} />
                                            <Text style={styles.parcourstache1}>Gérer les relations avec les auditeurs externes, les professionnels fiscaux et autres fournisseurs de services financiers.

                                            </Text>

                                        </View>
                                    </View>
                                </View>

                            </View>



                            <View>
                                <View style={styles.parcours}>

                                    <View style={styles.parcours1}>

                                        <Text style={styles.parcourstitre}>Comptable

                                        </Text>
                                        <Text style={styles.parcoursdate2}>Févr 2012 - Janv 2013


                                        </Text>

                                    </View>

                                    <View style={styles.parcourslieu}>

                                        <Text>Apex Corporation, Paris, FR.
                                        </Text>

                                    </View>

                                </View>

                                <View style={styles.parcoursprofessionnel}>


                                    <View>
                                        <View style={styles.parcourstache}>

                                            <Image src={imageUrl7} style={styles.imagepoint} />
                                            <Text style={styles.parcourstache1}>J’ai formé, embauché et mentoré des comptables en veillant au respect de bonnes pratiques comptables.

                                            </Text>

                                        </View>

                                        <View style={styles.parcourstache}>

                                            <Image src={imageUrl7} style={styles.imagepoint} />
                                            <Text style={styles.parcourstache1}>Gérer le processus de budgétisation et de prévision.

                                            </Text>

                                        </View>
                                    </View>

                                </View>

                            </View>

                        </View>


                        <View>
                            <Text style={styles.titreExperience}>EDUCATION</Text>
                            <View style={styles.ligne2222}></View>



                            <View>
                                <View style={styles.parcours}>

                                    <View style={styles.parcours1}>

                                        <Text style={styles.parcourstitre}>Comptabilité Financière Avancée

                                        </Text>
                                        <Text style={styles.parcoursdate4}>Juil 2009 - Déc 2009


                                        </Text>

                                    </View>

                                    <View style={styles.parcourslieu}>

                                        <Text>Université de Paris, Paris.
                                        </Text>

                                    </View>

                                </View>

                                <View style={styles.parcoursprofessionnel}>


                                    <View>
                                        <View style={styles.parcourstache}>

                                            <Image src={imageUrl7} style={styles.imagepoint} />
                                            <Text style={styles.parcourstache1}>Principes et concepts avancés de comptabilité financière.

                                            </Text>

                                        </View>
                                    </View>

                                </View>

                            </View>



                            <View>
                                <View style={styles.parcours}>

                                    <View style={styles.parcours1}>

                                        <Text style={styles.parcourstitre}>Auditing
                                        </Text>
                                        <Text style={styles.parcoursdate5}>Juil 2009 - Déc 2009


                                        </Text>

                                    </View>

                                    <View style={styles.parcourslieu}>

                                        <Text>Université de Paris, Paris.
                                        </Text>

                                    </View>

                                </View>

                                <View style={styles.parcoursprofessionnel}>


                                    <View>
                                        <View style={styles.parcourstache}>

                                            <Image src={imageUrl7} style={styles.imagepoint} />
                                            <Text style={styles.parcourstache1}>Principes et pratiques de l’audit, y compris le rôle de l’auditeur, le processus d’audit et la détection et la prévention de la fraude.

                                            </Text>

                                        </View>
                                    </View>
                                </View>

                            </View>



                            <View>
                                <View style={styles.parcours}>

                                    <View style={styles.parcours1}>

                                        <Text style={styles.parcourstitre}>Comptabilité de Gestion

                                        </Text>
                                        <Text style={styles.parcoursdate6}>Juil 2008 - Juin 2009


                                        </Text>

                                    </View>

                                    <View style={styles.parcourslieu}>

                                        <Text>Université Sorbonne, Paris.
                                        </Text>

                                    </View>

                                </View>

                                <View style={styles.parcoursprofessionnel}>


                                    <View>
                                        <View style={styles.parcourstache}>

                                            <Image src={imageUrl7} style={styles.imagepoint} />
                                            <Text style={styles.parcourstache1}>Information comptable pour la prise de décision et la planification internes.

                                            </Text>

                                        </View>
                                    </View>

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

    body: {
        flexDirection: 'row',

    },

    image: {
        width: 100,
        height: 150,
        marginLeft: 50,
        marginTop: 50,
    },

    /******************************************************** */


    debut: {
        backgroundColor: '#007FFF',
        width: 50,
        height: 900,
    },

    mileu: {
        backgroundColor: '#5e5e57',
        width: 1,
        height: 900,
        marginLeft: 40,
    },


    ligne2: {
        height: 1,
        width: 50,
        backgroundColor: '#007FFF',
        marginLeft: 12,

    },

    ligne22: {
        height: 1,
        width: 90,
        backgroundColor: '#007FFF',
        marginLeft: 12,
    },


    contact: {
        flexDirection: 'row',

    },

    imagetel: {
        width: 12,
        height: 10,
        marginTop: 8,
        paddingLeft: 4,
    },


    aboutText: {

        fontSize: 10,
        width: 180,
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



    titre_: {

        fontSize: 50,
        margin: 2,
        fontWeight: 'black',

    },


    aboutText2: {

        fontSize: 18,
        marginTop: 14,
        color: '#5e5e57',
    },


    /**************************************************************** */






    bas: {
        flexDirection: 'row',
        margin: 0,
    },

    titre: {
        paddingTop: 40,
        color: '#007FFF',
        fontFamily: 'Roboto-Bold',
        marginLeft: 10,
        fontSize: 12,
    },


    titreExperience: {
        paddingTop: 40,
        color: '#007FFF',
        fontFamily: 'Roboto-Bold',
        marginLeft: 0,
        fontSize: 12,
    },

    /********************************************************** */



    bas1: {

        width: '35%',

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
        color: '#5e5e57'

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
        width: '65%',
        margin: 20,
    },


    ligne222: {
        height: 1,
        width: 80,
        backgroundColor: '#007FFF',
        marginLeft: 0,
    },

    ligne2222: {
        height: 1,
        width: 70,
        backgroundColor: '#007FFF',
        marginLeft: 0,
    },


    parcours: {
        marginTop: 8,

    },

    parcours1: {
        flexDirection: 'row',
    },

    parcourstitre: {
        fontSize: 10,
        marginTop: 2,
        color: '#007FFF',
        fontFamily: 'Roboto-Bold',

    },


    parcoursdate: {
        fontSize: 10,
        marginLeft: 130,
        marginTop: 2,
        color: '#5e5e57',
    },


    parcoursdate1: {
        fontSize: 10,
        marginLeft: 110,
        marginTop: 2,
        color: '#5e5e57',
    },


    parcoursdate2: {
        fontSize: 10,
        marginLeft: 170,
        marginTop: 2,
        color: '#5e5e57',
    },



    parcourslieu: {
        fontSize: 10,
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
        width: 280,
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



    parcoursdate4: {
        fontSize: 10,
        marginLeft: 80,
        marginTop: 2,
        color: '#5e5e57',
    },


    parcoursdate5: {
        fontSize: 10,
        marginLeft: 185,
        marginTop: 2,
        color: '#5e5e57',
    },


    parcoursdate6: {
        fontSize: 10,
        marginLeft: 120,
        marginTop: 2,
        color: '#5e5e57',
    },



});

export default Pdf;
