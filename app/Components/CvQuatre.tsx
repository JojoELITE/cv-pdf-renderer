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

                <View style={styles.barrebleue}>
                </View>


                <View style={styles.Info}>



                    <View style={styles.colonneGauche}>

                        <Image src={imageUrl} style={styles.image} />

                        <View>
                            <Text style={styles.grandTitre}>OBJECTIF</Text>
                            <View style={styles.ligneTitre}></View>


                            <Text style={styles.textSimple}>
                                Un comptable agréé avec plus de 6 ans d’expérience. S'adapte sans heurts aux processus comptables en constante évolution et aux nouvelles technologies. Soucieux des détails, efficace et organisé, avec une vaste expérience des systèmes comptables.</Text>
                        </View>



                        <View>
                            <Text style={styles.grandTitre}>COMPÉTENCES</Text>
                            <View style={styles.ligneTitre1}></View>


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

                        <View>
                            <Text style={styles.grandTitre}>LANGUES</Text>
                            <View style={styles.ligneTitre}></View>


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




                        <View>
                            <Text style={styles.grandTitre}>CONTACT</Text>
                            <View style={styles.ligneTitre}></View>

                            <View>

                                <View style={styles.AutreCompetences}>
                                    <Image src={imageUrl3} style={styles.imagetel} />
                                    <Text style={styles.textSimple}>
                                        mail@gmail.com
                                    </Text>
                                </View>


                                <View style={styles.AutreCompetences}>
                                    <Image src={imageUrl2} style={styles.imagetel} />
                                    <View>
                                        <Text style={styles.textSimple}>
                                            12 rue de la reussite
                                        </Text>
                                        <Text style={styles.textSimple1}>
                                            75012 Paris
                                        </Text>
                                    </View>

                                </View>
                                <View style={styles.AutreCompetences}>
                                    <Image src={imagePhone} style={styles.imagetel} />
                                    <Text style={styles.textSimple}>
                                        +241 00000000
                                    </Text>
                                </View>

                                <View style={styles.AutreCompetences}>
                                    <Image src={imageCalendar} style={styles.imagetel} />
                                    <Text style={styles.textSimple}>
                                        23 juin 1985

                                    </Text>
                                </View>

                                <View style={styles.AutreCompetences}>
                                    <Image src={imageWorld} style={styles.imagetel} />
                                    <Text style={styles.textSimple}>
                                        Française

                                    </Text>
                                </View>

                                <View style={styles.AutreCompetences}>
                                    <Image src={imageLink1} style={styles.imagetel} />
                                    <Text style={styles.textSimple}>
                                        linkedin.com/theophilehamon

                                    </Text>
                                </View>

                            </View>

                        </View>


                    </View>



                    <View style={styles.barremilieu}>
                    </View>


                    {/*******************************************************************************************/}

                    <View style={styles.colonneDroite}>


                        <View>

                            <Text style={styles.fonction}>
                                Directeur Comptable

                            </Text>
                            <Text style={styles.nom}>Théophile
                            </Text>
                            <Text style={styles.nom}>Hamon

                            </Text>

                        </View>


                        <View>
                            <Text style={styles.titreExperience}>EXPÉRIENCES</Text>
                            <View style={styles.ligneExperience}></View>



                            <View>
                                <View style={styles.Experience}>

                                    <View style={styles.Listesexperiences}>

                                        <Text style={styles.PostesExperience}>Directeur Comptable

                                        </Text>
                                        <Text style={styles.ExperienceDate}>Févr 2018 - Présent


                                        </Text>

                                    </View>

                                    <View style={styles.ExperienceLieu}>

                                        <Text>Apex Corporation, Paris, FR.
                                        </Text>

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
                                <View style={styles.Experience}>

                                    <View style={styles.Listesexperiences}>

                                        <Text style={styles.PostesExperience}>Comptable en Personnel

                                        </Text>
                                        <Text style={styles.ExperienceDate0}>Janv 2013 - Févr 2018


                                        </Text>

                                    </View>

                                    <View style={styles.ExperienceLieu}>

                                        <Text>Apex Corporation, Paris, FR.
                                        </Text>

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
                                <View style={styles.Experience}>

                                    <View style={styles.Listesexperiences}>

                                        <Text style={styles.PostesExperience}>Comptable

                                        </Text>
                                        <Text style={styles.ExperienceDate1}>Févr 2012 - Janv 2013


                                        </Text>

                                    </View>

                                    <View style={styles.ExperienceLieu}>

                                        <Text>Apex Corporation, Paris, FR.
                                        </Text>

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


                        <View>
                            <Text style={styles.titreExperience}>EDUCATION</Text>
                            <View style={styles.ligne2222}></View>



                            <View>
                                <View style={styles.Experience}>

                                    <View style={styles.Listesexperiences}>

                                        <Text style={styles.PostesExperience}>Comptabilité Financière Avancée

                                        </Text>
                                        <Text style={styles.ExperienceDate4}>Juil 2009 - Déc 2009


                                        </Text>

                                    </View>

                                    <View style={styles.ExperienceLieu}>

                                        <Text>Université de Paris, Paris.
                                        </Text>

                                    </View>

                                </View>

                                <View style={styles.parcoursprofessionnel}>


                                    <View>
                                        <View style={styles.ExperienceTache1}>

                                            <Image src={imageUrl7} style={styles.imagepoint} />
                                            <Text style={styles.ExperienceTacheAutre}>Principes et concepts avancés de comptabilité financière.

                                            </Text>

                                        </View>
                                    </View>

                                </View>

                            </View>



                            <View>
                                <View style={styles.Experience}>

                                    <View style={styles.Listesexperiences}>

                                        <Text style={styles.PostesExperience}>Auditing
                                        </Text>
                                        <Text style={styles.ExperienceDate5}>Juil 2009 - Déc 2009


                                        </Text>

                                    </View>

                                    <View style={styles.ExperienceLieu}>

                                        <Text>Université de Paris, Paris.
                                        </Text>

                                    </View>

                                </View>

                                <View style={styles.parcoursprofessionnel}>


                                    <View>
                                        <View style={styles.ExperienceTache1}>

                                            <Image src={imageUrl7} style={styles.imagepoint} />
                                            <Text style={styles.ExperienceTacheAutre}>Principes et pratiques de l’audit, y compris le rôle de l’auditeur, le processus d’audit et la détection et la prévention de la fraude.

                                            </Text>

                                        </View>
                                    </View>
                                </View>

                            </View>



                            <View>
                                <View style={styles.Experience}>

                                    <View style={styles.Listesexperiences}>

                                        <Text style={styles.PostesExperience}>Comptabilité de Gestion

                                        </Text>
                                        <Text style={styles.ExperienceDate6}>Juil 2008 - Juin 2009


                                        </Text>

                                    </View>

                                    <View style={styles.ExperienceLieu}>

                                        <Text>Université Sorbonne, Paris.
                                        </Text>

                                    </View>

                                </View>

                                <View style={styles.parcoursprofessionnel}>


                                    <View>
                                        <View style={styles.ExperienceTache1}>

                                            <Image src={imageUrl7} style={styles.imagepoint} />
                                            <Text style={styles.ExperienceTacheAutre}>Information comptable pour la prise de décision et la planification internes.

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

    body: {
        flexDirection: 'row',

    },

    image: {
        width: 100,
        height: 150,
        marginLeft: 50,
        marginTop: 50,
    },


    barrebleue: {
        backgroundColor: '#007FFF',
        width: 50,
        height: 900,
    },

    barremilieu: {
        backgroundColor: '#5e5e57',
        width: 1,
        height: 900,
        marginLeft: 40,
    },



    /************************************************************************************************** */



    colonneGauche: {

        width: '35%',

    },


    ligneTitre: {
        height: 1,
        width: 50,
        backgroundColor: '#007FFF',
        marginLeft: 12,

    },

    ligneTitre1: {
        height: 1,
        width: 85,
        backgroundColor: '#007FFF',
        marginLeft: 12,
    },


    imagetel: {
        width: 12,
        height: 10,
        marginTop: 8,
        paddingLeft: 4,
    },


    textSimple: {

        fontSize: 10,
        width: 180,
        marginLeft: 12,
        marginTop: 8,
        color: '#5e5e57'

    },


    textSimple1: {

        fontSize: 10,
        width: 200,
        marginLeft: 12,
        marginTop: 3,
        color: '#5e5e57'

    },




    /*************************************************************************************************/




    colonneDroite: {
        width: '65%',
        margin: 20,
    },


    nom: {

        fontSize: 50,
        margin: 2,
        fontWeight: 'black',

    },


    fonction: {

        fontSize: 18,
        marginTop: 14,
        color: '#5e5e57',
    },


    Info: {
        flexDirection: 'row',
        margin: 0,
    },

    grandTitre: {
        paddingTop: 40,
        color: '#007FFF',
        fontFamily: 'Roboto-Bold',
        marginLeft: 10,
        fontSize: 12,
    },


    titreExperience: {
        marginTop: 65,
        color: '#007FFF',
        fontFamily: 'Roboto-Bold',
        fontSize: 12,
    },


    competences: {

        fontSize: 10,
        marginTop: 8,
        marginLeft: 12,
        flexDirection: 'row',


    },

    Listes: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
    },

    ListesLangues: {
        flexDirection: 'row',
        marginTop: 0,
        marginLeft: 10,

    },

    AutreCompetences: {
        flexDirection: 'row',
        marginTop: 0,
        marginLeft: 10,
    },

    imagepoint: {
        width: 3,
        height: 3,
        marginTop: 8,
    },

    listesCompetences: {
        fontSize: 10,
        marginLeft: 8,
        marginTop: 2,
        width: 180,
        color: '#5e5e57'

    },


    ligneExperience: {
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


    Experience: {
        marginTop: 8,

    },

    Listesexperiences: {
        flexDirection: 'row',
    },

    PostesExperience: {
        fontSize: 10,
        marginTop: 2,
        fontFamily: 'Roboto-Bold',

    },


    ExperienceDate: {
        fontSize: 10,
        marginLeft: 130,
        marginTop: 2,
        color: '#5e5e57',
    },


    ExperienceDate0: {
        fontSize: 10,
        marginLeft: 110,
        marginTop: 2,
        color: '#5e5e57',
    },


    ExperienceDate1: {
        fontSize: 10,
        marginLeft: 170,
        marginTop: 2,
        color: '#5e5e57',
    },



    ExperienceLieu: {
        fontSize: 10,
        marginTop: 3,
        color: '#5e5e57',
    },


    parcoursprofessionnel: {
        flexDirection: 'row',
        marginLeft: 0,

    },

    ExperienceTache: {
        flexDirection: 'row',
        marginTop: 8,

    },

    ExperienceTache1: {
        flexDirection: 'row',

    },

    ExperienceTacheAutre: {

        fontSize: 10,
        width: 280,
        marginTop: 2,
        marginLeft: 10,
        color: '#5e5e57',

    },



    Parcours: {
        marginHorizontal: 20,
    },



    formation: {

        width: 260,
        marginTop: 4,

    },



    ExperienceDate4: {
        fontSize: 10,
        marginLeft: 80,
        marginTop: 2,
        color: '#5e5e57',
    },


    ExperienceDate5: {
        fontSize: 10,
        marginLeft: 185,
        marginTop: 2,
        color: '#5e5e57',
    },


    ExperienceDate6: {
        fontSize: 10,
        marginLeft: 120,
        marginTop: 2,
        color: '#5e5e57',
    },



});

export default Pdf;
