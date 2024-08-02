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

                <View style={styles.noms}>

                    <Text style={styles.fonction}>
                        Directeur Comptable

                    </Text>
                    <Text style={styles.nom}>GUSTAVE
                    </Text>
                    <Text style={styles.nom}>ROUSSEAU

                    </Text>

                </View>


                <Image src={imageUrl} style={styles.image} />

            </View>


            <View style={styles.ligneTitre1}></View>



            <View style={styles.Info}>


                <View style={styles.colonneGauche}>

                    <View>
                        <Text style={styles.grandTitre}>CONTACT</Text>

                        <View>

                            <View style={styles.AutreCompetences}>
                                <Image src={imageUrl3} style={styles.imagetel} />
                                <Text style={styles.textSimpleContact}>
                                    mail@gmail.com
                                </Text>
                            </View>


                            <View style={styles.AutreCompetences}>
                                <Image src={imageUrl2} style={styles.imagetel} />
                                <View>
                                    <Text style={styles.textSimpleContact}>
                                        12 rue de la reussite
                                    </Text>
                                    <Text style={styles.textSimple1}>
                                        75012 Paris
                                    </Text>
                                </View>

                            </View>
                            <View style={styles.AutreCompetences}>
                                <Image src={imagePhone} style={styles.imagetel} />
                                <Text style={styles.textSimpleContact}>
                                    +241 00000000
                                </Text>
                            </View>

                            <View style={styles.AutreCompetences}>
                                <Image src={imageCalendar} style={styles.imagetel} />
                                <Text style={styles.textSimpleContact}>
                                    23 juin 1985

                                </Text>
                            </View>

                            <View style={styles.AutreCompetences}>
                                <Image src={imageWorld} style={styles.imagetel} />
                                <Text style={styles.textSimpleContact}>
                                    Française

                                </Text>
                            </View>

                            <View style={styles.AutreCompetences}>
                                <Image src={imageLink1} style={styles.imagetel} />
                                <Text style={styles.textSimpleContact}>
                                    linkedin.com/theophilehamon

                                </Text>
                            </View>

                        </View>

                    </View>



                    <View style={styles.ligneTitre}></View>




                    <View>
                        <Text style={styles.grandTitre}>COMPÉTENCES</Text>


                        <View style={styles.Listes}>

                            <Image src={imageUrl7} style={styles.imagepoint} />
                            <Text style={styles.listesCompetences}>Compétences en organisation</Text>

                        </View>


                        <View style={styles.ListesLangues}>

                            <Image src={imageUrl7} style={styles.imagepoint} />
                            <Text style={styles.listesCompetences}>Gestion du temps</Text>

                        </View>

                        <View style={styles.AutreCompetences}>

                            <Image src={imageUrl7} style={styles.imagepoint} />
                            <Text style={styles.listesCompetences}>Adaptabilité</Text>

                        </View>


                        <View style={styles.AutreCompetences}>

                            <Image src={imageUrl7} style={styles.imagepoint} />
                            <Text style={styles.listesCompetences}>Leadership</Text>

                        </View>



                        <View style={styles.AutreCompetences}>

                            <Image src={imageUrl7} style={styles.imagepoint} />
                            <Text style={styles.listesCompetences}>Microsoft Excel</Text>

                        </View>


                        <View style={styles.AutreCompetences}>

                            <Image src={imageUrl7} style={styles.imagepoint} />
                            <Text style={styles.listesCompetences}>Souci du détail</Text>

                        </View>


                    </View>


                    <View style={styles.ligneTitre}></View>


                    <View>
                        <Text style={styles.grandTitre}>LANGUES</Text>


                        <View style={styles.Listes}>

                            <Image src={imageUrl7} style={styles.imagepoint} />
                            <Text style={styles.listesCompetences}>Français | Natif

                            </Text>

                        </View>


                        <View style={styles.ListesLangues}>

                            <Image src={imageUrl7} style={styles.imagepoint} />
                            <Text style={styles.listesCompetences}>Anglais | Compétence professionnelle complète

                            </Text>

                        </View>

                        <View style={styles.AutreCompetences}>

                            <Image src={imageUrl7} style={styles.imagepoint} />
                            <Text style={styles.listesCompetences}>Espagnol | Notions élémentaires

                            </Text>

                        </View>


                    </View>







                </View>



                <View style={styles.barremilieu}>
                </View>


                {/*******************************************************************************************/}

                <View style={styles.colonneDroite}>


                    <View>
                        <Text style={styles.titreExperience}>OBJECTIF</Text>


                        <Text style={styles.textSimple}>
                            Un comptable agréé avec plus de 6 ans d’expérience. S'adapte sans heurts aux processus comptables en constante évolution et aux nouvelles technologies. Soucieux des détails, efficace et organisé, avec une vaste expérience des systèmes comptables.</Text>
                    </View>


                    <View style={styles.ligneExperience}></View>



                    <View>
                        <Text style={styles.titreExperience}>EXPÉRIENCES</Text>



                        <View>
                            <View>
                                <View style={styles.Experience}>


                                    <View style={styles.ExperienceLieu}>

                                        <Text>SPÉCIALISTE DES COMMUNICATIONS
                                        </Text>

                                    </View>

                                    <View>

                                        <Text style={styles.PostesExperience}>Agence AdVibes.

                                            <Text style={styles.ExperienceDate6}> Paris | Juil 2008 - Juin 2009


                                            </Text>

                                        </Text>


                                    </View>



                                </View>



                            </View>



                            <View>
                                <View style={styles.ExperienceTache}>

                                    <Image src={imageUrl7} style={styles.imagepoint} />
                                    <Text style={styles.ExperienceTacheAutre}>J’ai rendu compte et collaboré avec le directeur financier (CFO) pour évaluer et évoluer les meilleures pratiques des organisations et mettre en place des stratégies financières et comptables efficaces.

                                    </Text>

                                </View>

                                <View style={styles.ExperienceTache}>

                                    <Image src={imageUrl7} style={styles.imagepoint} />
                                    <Text style={styles.ExperienceTacheAutre}>Superviser l’équipe comptable et fournir une orientation et une direction au besoin.

                                    </Text>

                                </View>
                            </View>


                        </View>



                        <View>
                            <View>
                                <View style={styles.Experience}>


                                    <View style={styles.ExperienceLieu}>

                                        <Text>SPÉCIALISTE DES COMMUNICATIONS
                                        </Text>

                                    </View>

                                    <View>

                                        <Text style={styles.PostesExperience}>Agence AdVibes.

                                            <Text style={styles.ExperienceDate6}> Paris | Juil 2008 - Juin 2009


                                            </Text>

                                        </Text>


                                    </View>



                                </View>



                            </View>

                            <View style={styles.parcoursprofessionnel}>


                                <View>
                                    <View style={styles.ExperienceTache1}>

                                        <Image src={imageUrl7} style={styles.imagepoint} />
                                        <Text style={styles.ExperienceTacheAutre}>J’ai préparé des rapports financiers et des rapports mensuels / trimestriels pour examen par le comptable senior et la direction supérieure. J’ai veillé à la précision et à la livraison à temps de tous les rapports.

                                        </Text>

                                    </View>

                                    <View style={styles.ExperienceTache1}>

                                        <Image src={imageUrl7} style={styles.imagepoint} />
                                        <Text style={styles.ExperienceTacheAutre}>Gérer les relations avec les auditeurs externes, les professionnels fiscaux et autres fournisseurs de services financiers.

                                        </Text>

                                    </View>
                                </View>
                            </View>

                        </View>



                        <View>
                            <View>
                                <View style={styles.Experience}>


                                    <View style={styles.ExperienceLieu}>

                                        <Text>SPÉCIALISTE DES COMMUNICATIONS
                                        </Text>

                                    </View>

                                    <View>

                                        <Text style={styles.PostesExperience}>Agence AdVibes.

                                            <Text style={styles.ExperienceDate6}> Paris | Juil 2008 - Juin 2009


                                            </Text>

                                        </Text>


                                    </View>



                                </View>



                            </View>

                            <View style={styles.parcoursprofessionnel}>


                                <View>
                                    <View style={styles.ExperienceTache1}>

                                        <Image src={imageUrl7} style={styles.imagepoint} />
                                        <Text style={styles.ExperienceTacheAutre}>J’ai formé, embauché et mentoré des comptables en veillant au respect de bonnes pratiques comptables.

                                        </Text>

                                    </View>

                                    <View style={styles.ExperienceTache1}>

                                        <Image src={imageUrl7} style={styles.imagepoint} />
                                        <Text style={styles.ExperienceTacheAutre}>Gérer le processus de budgétisation et de prévision.

                                        </Text>

                                    </View>
                                </View>

                            </View>

                        </View>

                    </View>


                    <View style={styles.ligneExperience}></View>



                    <View>
                        <Text style={styles.titreExperience}>FORMATIONS</Text>



                        <View>
                            <View>
                                <View style={styles.Experience}>


                                    <View style={styles.ExperienceLieu}>

                                        <Text>Comptabilité de Gestion
                                        </Text>

                                    </View>

                                    <View>

                                        <Text style={styles.PostesExperience}>Université Sorbonne

                                            <Text style={styles.ExperienceDate6}> Paris | Juil 2008 - Juin 2009


                                            </Text>

                                        </Text>


                                    </View>



                                </View>



                            </View>

                            <View style={styles.parcoursprofessionnel}>


                                <View>
                                    <View style={styles.ExperienceTache1}>

                                        <Image src={imageUrl7} style={styles.imagepoint} />
                                        <Text style={styles.ExperienceTacheAutre}>Principes et concepts avancés de comptabilité financière.

                                            <Text style={styles.ExperienceTacheAutre}>Principes et concepts avancés de comptabilité financière.</Text>

                                        </Text>

                                    </View>
                                </View>

                            </View>

                        </View>


                        <View>
                            <View style={styles.Experience}>


                                <View style={styles.ExperienceLieu}>

                                    <Text>Comptabilité de Gestion
                                    </Text>

                                </View>

                                <View>

                                    <Text style={styles.PostesExperience}>Université Sorbonne.

                                        <Text style={styles.ExperienceDate6}> Paris | Juil 2008 - Juin 2009


                                        </Text>

                                    </Text>


                                </View>



                            </View>



                        </View>



                        <View>
                            <View style={styles.Experience}>


                                <View style={styles.ExperienceLieu}>

                                    <Text>Comptabilité de Gestion
                                    </Text>

                                </View>

                                <View>

                                    <Text style={styles.PostesExperience}>Université Sorbonne.

                                        <Text style={styles.ExperienceDate6}> Paris | Juil 2008 - Juin 2009


                                        </Text>

                                    </Text>


                                </View>



                            </View>



                        </View>



                        <View>
                            <View style={styles.Experience}>


                                <View style={styles.ExperienceLieu}>

                                    <Text>Comptabilité de Gestion
                                    </Text>

                                </View>

                                <View>

                                    <Text style={styles.PostesExperience}>Université Sorbonne.

                                        <Text style={styles.ExperienceDate6}> Paris | Juil 2008 - Juin 2009


                                        </Text>

                                    </Text>


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

    body: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 30,


    },

    image: {
        width: 100,
        height: 100,
        borderRadius: '90'
    },


    barremilieu: {
        backgroundColor: '#5e5e57',
        width: 1,
        height: 670,
        marginLeft: 20,
    },



    colonneGauche: {

        width: '35%',

    },


    ligneTitre: {
        height: 1,
        width: '160',
        backgroundColor: 'black',
        marginLeft: 30,
        marginTop: 30,

    },

    ligneTitre1: {
        height: 1,
        width: '530',
        backgroundColor: 'black',
        marginTop: 6,
        marginLeft: 30,

    },


    imagetel: {
        width: 12,
        height: 10,
        marginTop: 8,
        paddingLeft: 4,
    },


    textSimple: {

        fontSize: 10,
        width: 330,
        paddingTop: 8,
        color: '#5e5e57'

    },


    textSimpleContact: {

        fontSize: 10,
        width: 180,
        paddingTop: 8,
        paddingLeft: 10,
        color: '#5e5e57'

    },


    textSimple1: {

        fontSize: 10,
        width: 200,
        paddingLeft: 12,
        paddingTop: 3,
        color: '#5e5e57'

    },



    colonneDroite: {
        width: '65%',
        paddingLeft: 20,
        height: 700,

    },

    noms: {
        paddingTop: 10,

    },




    nom: {

        fontSize: 30,
        fontWeight: 'black',


    },


    fonction: {

        fontSize: 16,
        color: '#5e5e57',
    },


    Info: {
        flexDirection: 'row',
    },

    grandTitre: {
        paddingTop: 20,
        fontFamily: 'Roboto-Bold',
        paddingLeft: 30,
        fontSize: 12,
    },


    titreExperience: {
        paddingTop: 20,
        fontFamily: 'Roboto-Bold',
        fontSize: 12,
    },


    competences: {

        fontSize: 10,
        paddingTop: 8,
        paddingLeft: 30,
        flexDirection: 'row',


    },

    Listes: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 30,
    },

    ListesLangues: {
        flexDirection: 'row',
        paddingLeft: 30,

    },

    AutreCompetences: {
        flexDirection: 'row',
        paddingLeft: 30,
    },

    imagepoint: {
        width: 3,
        height: 3,
        marginTop: 8,
    },

    listesCompetences: {
        fontSize: 10,
        paddingLeft: 8,
        paddingTop: 2,
        width: 180,
        color: '#5e5e57'

    },


    ligneExperience: {
        height: 1,
        width: 330,
        backgroundColor: 'black',
        marginTop: 20,
    },



    Experience: {
        paddingTop: 8,

    },

    Listesexperiences: {
        flexDirection: 'row',
    },

    PostesExperience: {
        fontSize: 10,
        paddingTop: 2,
        fontFamily: 'Roboto-Bold',

    },


    ExperienceDate: {
        fontSize: 10,
        paddingLeft: 130,
        paddingTop: 2,
        color: '#5e5e57',
    },


    ExperienceDate0: {
        fontSize: 10,
        paddingLeft: 110,
        paddingTop: 2,
        color: '#5e5e57',
    },


    ExperienceDate1: {
        fontSize: 10,
        paddingLeft: 170,
        paddingTop: 2,
        color: '#5e5e57',
    },



    ExperienceLieu: {
        fontSize: 10,
        paddingTop: 3,
        fontFamily: 'Roboto-Bold',

    },


    parcoursprofessionnel: {
        flexDirection: 'row',
        paddingLeft: 0,

    },

    ExperienceTache: {
        flexDirection: 'row',
        paddingTop: 8,

    },

    ExperienceTache1: {
        flexDirection: 'row',
        paddingTop: 8,

    },

    ExperienceTacheAutre: {

        fontSize: 10,
        width: 330,
        paddingTop: 2,
        paddingLeft: 10,
        color: '#5e5e57',

    },



    formation: {

        width: 260,
        marginTop: 4,

    },



    ExperienceDate4: {
        fontSize: 10,
        paddingLeft: 80,
        color: '#5e5e57',
    },


    ExperienceDate5: {
        fontSize: 10,
        paddingLeft: 185,
        color: '#5e5e57',
    },


    ExperienceDate6: {
        fontSize: 10,
        paddingLeft: 120,
        color: '#5e5e57',
    },



});

export default Pdf;
