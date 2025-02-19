/*<---------------------------------------------------------------------------->
<!--	ContactUSData(Component)	-->
<!----------------------------------------------------------------------------->
* Description: Data for the team members in the ContactUs component, It should be imported in the ContactUs component for creating the cards.

* Parameters:
    - none
* Dependencies:
    - none
* Returns/results: Exported array with the objects containing the data of the team members.
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//images AGS
import santiago from '@assets/cdmx/team/santiago.webp';
import anaPauQuiroga from '@assets/ags/team/ana_pau_quiroga.webp';
import guillermoRamos from '@assets/ags/team/guillermo_ramos.webp';
import lilianaMedina from '@assets/ags/team/liliana_medina.webp';
import oscarArmendariz from '@assets/ags/team/oscar_armendariz.webp';


//images CDMX
import almaMestas from '@assets/cdmx/team/almaMestas.webp';
import auroraPino from '@assets/cdmx/team/aurora.webp';
import beatrizQuintero from '@assets/cdmx/team/bquintero.webp';
import anaCarolinaBalseca from '@assets/cdmx/team/caro.webp';
import citlaliVazquez from '@assets/cdmx/team/citlaliVazquez.webp';
import erikaRangel from '@assets/cdmx/team/erangel.webp';
import ferHaro from '@assets/cdmx/team/ferHaro.webp';
import ferSarmiento from '@assets/cdmx/team/ferSarmiento.webp';
import marianaCubas from '@assets/cdmx/team/marianaCubas.webp';
import sofiaDerat from '@assets/cdmx/team/sofiaDerat.webp';

//images GDL
import claudiaVillareal from '@assets/gdl/team/claudia_villareal.webp';
import joseLuisAlvarado from '@assets/gdl/team/jose_luis_alvarado.webp';
import sofiaGonzales from '@assets/gdl/team/sofia_gonzales.webp';
import hildaCervantez from '@assets/gdl/team/hilda_cervantez.webp';
import lilianaMejorado from '@assets/gdl/team/liliana_mejorado.webp';
import margaritaPerez from '@assets/gdl/team/margarita_perez.webp';
import marianaFernandez from '@assets/gdl/team/mariana_fernandez.webp';

export const ContactUsData = [
    // AGS
    {
        name: 'Mtra. Liliana Medina de la Torre',
        position: 'Jefa de Área',
        email: 'mmedina@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 7134,
        profilePicture: lilianaMedina,
        campi: 'AGS'
    },
    {
        name: 'Dr. Guillermo Ramos Kuri',
        position: 'Psicólogo de la Universidad Panamericana',
        email: 'gramos@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 7134,
        profilePicture: guillermoRamos,
        campi: 'AGS'
    },
    {
        name: 'Esp. Ana Paula Quiroga Domínguez',
        position: 'Coordinadora Smart Center',
        email: 'apquiroga@up.edu.mx',
        secondaryEmail: 'anapauqdg6@gmail.com',
        phoneExtension: 7134,
        profilePicture: anaPauQuiroga,
        campi: 'AGS'
    },
    {
        name: 'Santiago Jiménez de la Torre',
        position: 'Fortalecimiento Académico',
        email: 'sjimenezt@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 5351,
        profilePicture: santiago,
        campi: 'AGS'
    },
    {
        name: 'Mtro. Oscar David Armendariz Loureiro',
        position: 'Gerente Career Services',
        email: 'oarmendariz@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 7176,
        profilePicture: oscarArmendariz,
        campi: 'AGS'
    },
    // CDMX
    {
        name: 'Mtra. Maria Fernanda Haro',
        position: 'Jefa de área',
        email: 'mx_smartcenter@up.edu.mx',
        secondaryEmail: 'mfharo@up.edu.mx',
        phoneExtension: 5363,
        profilePicture: ferHaro,
        campi: 'CDMX'
    },
    {
        name: 'Mtra. Diana Sofía Derat Castrejón',
        position: 'Fortalecimiento Académico',
        email: 'mx_successcenter@up.edu.mx',
        secondaryEmail: 'dderat@up.edu.mx',
        phoneExtension: 5353,
        profilePicture: sofiaDerat,
        campi: 'CDMX'
    },
    {
        name: 'Mtra. María Fernanda Sarmiento',
        position: 'Fortalecimiento Académico',
        email: 'mx_meetingpoint@up.edu.mx',
        secondaryEmail: 'msarmiento@up.edu.mx',
        phoneExtension: 5351,
        profilePicture: ferSarmiento,
        campi: 'CDMX'
    },
    {
        name: 'Mtra. Aurora Pino Ruesga',
        position: 'Fortalecimiento Académico',
        email: 'dpino@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 6600,
        profilePicture: auroraPino,
        campi: 'CDMX'
    },
    {
        name: 'MBA Ana Carolina Balseca',
        position: 'Fortalecimiento Académico',
        email: 'mx_advisory@up.edu.mx',
        secondaryEmail: 'abalseca@up.edu.mx',
        phoneExtension: 5319,
        profilePicture: anaCarolinaBalseca,
        campi: 'CDMX'
    },
    {
        name: 'Mtra. Mariana Cubas Montaño',
        position: 'Fortalecimiento Académico',
        email: 'mx_reload-talent@up.edu.mx',
        secondaryEmail: 'mcubas@up.edu.mx',
        phoneExtension: 6004,
        profilePicture: marianaCubas,
        campi: 'CDMX'
    },
    {
        name: 'Mtra. Alma Rocío Mestas Vilchis',
        position: 'Fortalecimiento Académico',
        email: 'armestas@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 6606,
        profilePicture: almaMestas,
        campi: 'CDMX'
    },
    {
        name: 'Mtra. Erika X. Rangel Barajas',
        position: 'Fortalecimiento Académico',
        email: 'erangel@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 6623,
        profilePicture: erikaRangel,
        campi: 'CDMX'
    },
    {
        name: 'Mtra. Citlali Vázquez Ochoa',
        position: 'Fortalecimiento Académico',
        email: 'cvazquezo@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 6604,
        profilePicture: citlaliVazquez,
        campi: 'CDMX'
    },
    {
        name: 'Beatriz Quintero Díaz',
        position: 'Primera atención',
        email: 'bquinter@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 5380,
        profilePicture: beatrizQuintero,
        campi: 'CDMX'
    },
    //GDL
    {
        name: 'Mtra. Hilda Leticia Cervantes Barragán',
        position: 'Jefa de área',
        email: 'hcervan@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 4680,
        profilePicture: hildaCervantez,
        campi: 'GDL'
    },
    {
        name: 'Mtra. Liliana Mejorada',
        position: 'Coordinación Psicopedagógica y Reencuadre emocional',
        email: 'lmejorad@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 4684,
        profilePicture: lilianaMejorado,
        campi: 'GDL'
    },
    {
        name: 'Mtra. Sofía González Rosado',
        position: 'Coordinación Psicopedagógica y Tutorías Académicas',
        email: 'sgonzale@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 4682,
        profilePicture: sofiaGonzales,
        campi: 'GDL'
    },
    {
        name: 'Mtra. Margarita Pérez Pantoja',
        position: 'Coordinación Psicopedagógica y Reencuadre emocional',
        email: 'mperezp@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 4097,
        profilePicture: margaritaPerez,
        campi: 'GDL'
    },
    {
        name: 'Mtra. Claudia Fabiola Villareal González',
        position: 'Coordinación Psicopedagógica y Reencuadre emocional',
        email: 'cvillare@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 4680,
        profilePicture: claudiaVillareal,
        campi: 'GDL'
    },
    {
        name: 'Mtro. José Luis Alvarado Corona',
        position: 'Coordinación Psicopedagógica y Reencuadre emocional',
        email: 'lalvarado@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 4685,
        profilePicture: joseLuisAlvarado,
        campi: 'GDL'
    },
    {
        name: 'Lic. Mariana Fernández Cueto Gutiérrez',
        position: 'Coordinación de Asesorías Universitarias y Coaching',
        email: 'mfernandezc@up.edu.mx',
        secondaryEmail: null,
        phoneExtension: 4912,
        profilePicture: marianaFernandez,
        campi: 'GDL'
    },
];

/*<!--------------------------------------------------------------------------->
<!--	end ContactUSData(Component)	-->
<!--------------------------------------------------------------------------->*/

