import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

const imageUrl = "/assets/00.jpeg";
const imageUrl02 = "/assets/icon.png"
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

            <View style={styles.barrebleue}>
            </View>

            <View style={styles.Header}>
                <View>

                    <Text style={styles.nom}>WILLIAM DEBLOIS
                    </Text>
                    <Text style={styles.fonction}>
                        CHEF DE PROJET
                    </Text>

                </View>


                <View style={styles.Adress}>
                    <Text style={styles.Adress1}>
                        webelois@gmail.com
                    </Text>

                    <Text style={styles.Adress2}>
                        25 rue des Fleurs,
                    </Text>
                    <Text>
                        33500 Libourne, France
                    </Text>

                    <Text style={styles.Adress3}>
                        212 635 3364
                    </Text>

                    <Text style={styles.Adress4}>
                        09/07/1984 – Français
                    </Text>

                </View>

            </View>



            <View style={styles.body}>

                <View style={styles.Info}>



                    <View style={styles.colonneGauche}>

                        <Image src={imageUrl} style={styles.image} />

                        <View>
                            <View style={styles.ligneTitre1}></View>

                            <View style={styles.Experiences}>

                                <Image src={imageUrl02} style={styles.imagetel1} />

                                <Text style={styles.grandTitre}>OBJECTIF</Text>


                            </View>

                            <View style={styles.ligneTitre}></View>


                            <Text style={styles.textSimple}>
                                Professionnel dynamique et à l'écoute des clients, fort de plus de 4 ans d'expérience dans des magasins réputés. Expérience en formation et mentorat de membres de l'équipe. Créer, réviser et corriger des communications d'entreprise et marketing. Prise en charge de la communication.
                            </Text>
                        </View>



                        <View>
                            <View style={styles.ligneTitre1}></View>

                            <View style={styles.Experiences}>

                                <Image src={imageUrl02} style={styles.imagetel1} />

                                <Text style={styles.grandTitre}>COMPÉTENCES</Text>


                            </View>

                            <View style={styles.ligneTitre}></View>


                            <View style={styles.Listes}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.listesCompetences}>Gestion de projet
                                </Text>

                            </View>


                            <View style={styles.ListesLangues}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.listesCompetences}>Microsoft Office
                                </Text>

                            </View>

                            <View style={styles.AutreCompetences}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.listesCompetences}>Présentations</Text>

                            </View>


                            <View style={styles.AutreCompetences}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.listesCompetences}>Langues</Text>

                            </View>



                            <View style={styles.AutreCompetences}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.listesCompetences}>Compétences communicatives
                                </Text>

                            </View>


                            <View style={styles.AutreCompetences}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.listesCompetences}>Stratégies commerciales
                                </Text>

                            </View>


                        </View>

                        <View>
                            <View style={styles.ligneTitre1}></View>


                            <View style={styles.Experiences}>

                                <Image src={imageUrl02} style={styles.imagetel1} />

                                <Text style={styles.grandTitre}>LANGUES</Text>


                            </View>

                            <View style={styles.ligneTitre}></View>


                            <View style={styles.Listes}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.listesCompetences}>Français | Natif

                                </Text>

                            </View>


                            <View style={styles.ListesLangues}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.ListesLanguesLong}>Anglais | Compétence professionnelle complète

                                </Text>

                            </View>

                            <View style={styles.AutreCompetences}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.ListesLanguesLong}>Italien – Compétence professionnelle limitée

                                </Text>

                            </View>


                            <View style={styles.AutreCompetences}>

                                <Image src={imageUrl7} style={styles.imagepoint} />
                                <Text style={styles.listesCompetences}>Polonais – Notions élémentaires


                                </Text>

                            </View>


                        </View>


                    </View>


                    {/*******************************************************************************************/}

                    <View style={styles.colonneDroite}>

                        <View style={styles.separation}></View>



                        <View>

                            <View style={styles.Experiences}>

                                <Image src={imageUrl02} style={styles.imagetel} />

                                <Text style={styles.titreExperience}>
                                    EXPÉRIENCES
                                </Text>

                            </View>

                            <View style={styles.separation1}></View>



                            <View>
                                <View style={styles.Experience}>

                                    <View style={styles.Listesexperiences}>

                                        <Text style={styles.PostesExperience}>Spécialiste des communications


                                        </Text>
                                        <Text style={styles.ExperienceDate}>Juin 2013 – Mars 2017

                                        </Text>

                                    </View>

                                    <View style={styles.ExperienceLieu}>

                                        <Text>Agence de marketing AdVibes | Paris

                                        </Text>

                                    </View>

                                </View>



                                <View>
                                    <View style={styles.ExperienceTache}>

                                        <Image src={imageUrl7} style={styles.imagepoint} />
                                        <Text style={styles.ExperienceTacheAutre}>J’ai rendu compte et collaboré avec le directeur financier (CFO) pour évaluer et évoluer les meilleures pratiques des organisations et mettre en place des stratégies financières et comptables efficaces.

                                        </Text>

                                    </View>

                                </View>


                            </View>



                            <View>
                                <View style={styles.Experience}>

                                    <View style={styles.Listesexperiences}>

                                        <Text style={styles.PostesExperience}>Comptable en Personnel

                                        </Text>
                                        <Text style={styles.ExperienceDate}>Janv 2013 - Févr 2018


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
                                        <Text style={styles.ExperienceDate}>Févr 2012 - Janv 2013


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

                            <View>
                                <View style={styles.Experience}>

                                    <View style={styles.Listesexperiences}>

                                        <Text style={styles.PostesExperience}>Comptable

                                        </Text>
                                        <Text style={styles.ExperienceDate}>Févr 2012 - Janv 2013


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
                            <View style={styles.separation}></View>

                            <View style={styles.Experiences}>

                                <Image src={imageUrl02} style={styles.imagetel} />

                                <Text style={styles.titreExperience}>
                                    FORMATIONS
                                </Text>

                            </View>                            <View style={styles.separation1}></View>



                            <View>
                                <View style={styles.Experience}>

                                    <View style={styles.Listesexperiences}>

                                        <Text style={styles.PostesExperience}>Comptabilité Financière Avancée

                                        </Text>
                                        <Text style={styles.ExperienceDate}>Juil 2009 - Déc 2009


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

                                        <Text style={styles.PostesExperience}>Comptabilité Financière Avancée

                                        </Text>
                                        <Text style={styles.ExperienceDate}>Juil 2009 - Déc 2009


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
                                        <Text style={styles.ExperienceDate}>Juil 2009 - Déc 2009


                                        </Text>

                                    </View>

                                    <View style={styles.ExperienceLieu}>

                                        <Text>Université de Paris, Paris.
                                        </Text>

                                    </View>

                                </View>


                            </View>



                            <View>
                                <View style={styles.Experience}>

                                    <View style={styles.Listesexperiences}>

                                        <Text style={styles.PostesExperience}>Comptabilité de Gestion

                                        </Text>
                                        <Text style={styles.ExperienceDate}>Juil 2008 - Juin 2009


                                        </Text>

                                    </View>

                                    <View style={styles.ExperienceLieu}>

                                        <Text>Université Sorbonne, Paris.
                                        </Text>

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
        width: 140,
        height: 150,
        marginLeft: 10,
        marginTop: 10,
    },

    Header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 0,
        padding: 20,
    },

    nom: {

        fontSize: 14,
        fontWeight: 'black',


    },


    fonction: {

        fontSize: 9,
        color: '#5e5e57',
    },

    Adress: {

        fontSize: 9,
        color: '#5e5e57',
    },

    Adress1: {
        paddingLeft: 10,

    },

    Adress2: {
        paddingLeft: 24,

    },

    Adress3: {
        paddingLeft: 40,

    },


    Adress4: {
        paddingLeft: 7,

    },


    barrebleue: {
        backgroundColor: '#5e5e57',
        width: '93.5%',
        height: 30,
        marginLeft: 20,
    },





    /************************************************************************************************** */



    colonneGauche: {

        width: '31%',
        paddingLeft: 10,

    },


    ligneTitre: {
        height: 1,
        width: '80%',
        backgroundColor: 'black',
        marginLeft: 12,
        marginTop: 3,
    },

    ligneTitre1: {
        height: 1,
        width: '80%',
        backgroundColor: 'black',
        marginLeft: 12,
        marginTop: 20,
    },

    imagetel: {
        width: 12,
        height: 10,
        marginTop: 4.5,
    },

    imagetel1: {
        width: 12,
        height: 10,
        marginTop: 4.5,
        marginLeft: 10,
    },


    textSimple: {

        fontSize: 10,
        width: 150,
        paddingLeft: 12,
        paddingTop: 8,
        color: '#5e5e57'

    },



    /*************************************************************************************************/


    separation: {
        height: 1,
        width: '95%',
        backgroundColor: 'black',
        marginLeft: 0,
        marginTop: 10,
    },

    separation1: {
        height: 1,
        width: '95%',
        backgroundColor: 'black',
        marginLeft: 0,
        marginTop: 3,
    },


    colonneDroite: {
        width: '70%',
        height: 650,
    },


    Info: {
        flexDirection: 'row',
    },

    grandTitre: {
        paddingTop: 3,
        color: 'black',
        fontFamily: 'Roboto-Bold',
        paddingLeft: 5,
        fontSize: 12,
    },


    titreExperience: {
        color: 'black',
        fontFamily: 'Roboto-Bold',
        fontSize: 12,
        paddingTop: 3,
        paddingLeft: 5,
    },


    competences: {

        fontSize: 10,
        paddingTop: 8,
        paddingLeft: 12,
        flexDirection: 'row',
    },

    Listes: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 10,
    },

    ListesLangues: {
        flexDirection: 'row',
        paddingLeft: 10,

    },

    AutreCompetences: {
        flexDirection: 'row',
        paddingTop: 0,
        paddingLeft: 10,
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
        color: '#5e5e57',

    },


    ListesLanguesLong: {
        fontSize: 10,
        paddingLeft: 8,
        paddingTop: 2,
        width: 120,
        color: '#5e5e57',

    },


    Experiences: {
        flexDirection: 'row',
    },



    Experience: {
        paddingTop: 8,

    },

    Listesexperiences: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    PostesExperience: {
        fontSize: 10,
        fontFamily: 'Roboto-Bold',

    },


    ExperienceDate: {
        fontSize: 10,
        color: '#5e5e57',
        paddingRight: 18,
    },


    ExperienceLieu: {
        fontSize: 10,
        paddingTop: 3,
        color: 'black',
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
        width: 300,
        paddingTop: 2,
        paddingLeft: 10,
        color: '#5e5e57',

    },



    Parcours: {
        marginHorizontal: 20,
    },



    formation: {

        width: 260,
        paddingTop: 4,

    },






});

export default Pdf;
