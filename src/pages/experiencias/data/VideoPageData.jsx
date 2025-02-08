/*<---------------------------------------------------------------------------->
<!--	VideoPlayerData(Data)	-->
<!----------------------------------------------------------------------------->
* Description: Data for the existing linked experiences in the Experiences component, It should be imported in the Experiencias component for creating the cards.

* Parameters:
    - none
* Dependencies:
    - none
* Returns/results: Exported array with the objects containing the data of each experience.
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//Logos origin CDMX
import cvmpLogo from '@assets/intercampi/experiencias/cvmp.webp';
import oylbLogo from '@assets/intercampi/experiencias/oylb.webp';
import recreandoLogo from '@assets/intercampi/experiencias/recreando.webp';
import versionLogo from '@assets/intercampi/experiencias/version.webp';






export const VideoPlayerData = [

    /*<------------------------------------------------->
    <!-- Organizing your life like a boss 	-->
    <!------------------------------------------------->*/
    // 1. Introducción
    {
        id: 'RyBQv4WI_W4',
        title: 'Introducción',
        prevVideo: null,
        nextVideo: '2GaWvppC1s8',
        resources: [],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Organizing your life like a boss',
        originExperienceLogo: oylbLogo
    },

    // 2. Productivity 101
    {
        id: '2GaWvppC1s8',
        title: 'Productivity 101',
        prevVideo: 'RyBQv4WI_W4',
        nextVideo: 'owTBmXymBO8', // Ensure this points to the 3rd video’s ID
        resources: [
            {
                name: 'Test de productividad',
                url: 'https://docs.google.com/spreadsheets/d/1YhId2okPd7Ih2GT8I1yZgM8-2lDwwlpr4_k3t9WgdTY',
                type: 'form'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Organizing your life like a boss',
        originExperienceLogo: oylbLogo
    },

    // 3. Estudia sin distracciones
    {
        id: 'owTBmXymBO8',
        title: 'Estudia sin distracciones',
        prevVideo: '2GaWvppC1s8',
        nextVideo: 'XoDGORofKlU',
        resources: [
            {
                name: 'Pomodoro timer (web)',
                url: 'https://pomofocus.io',
                type: 'app'
            },
            {
                name: 'Be focused (iOS/MacOS)',
                url: 'https://apps.apple.com/mx/app/be-focused-pomodoro-timer/id973134470?mt=12',
                type: 'app'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Organizing your life like a boss',
        originExperienceLogo: oylbLogo
    },

    // 4. ¿Cómo ser más efectivo?
    {
        id: 'XoDGORofKlU',
        title: '¿Cómo ser más efectivo?',
        prevVideo: 'owTBmXymBO8',
        nextVideo: 'YOWSVq06sEE',
        resources: [
            {
                name: '7 hábitos para ser más efectivos',
                url: 'https://drive.google.com/file/d/1GjVjGJ3nS6qCvywQikrk8GE6blsMsOt9/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Organizing your life like a boss',
        originExperienceLogo: oylbLogo
    },

    // 5. ¿Cómo usas tu tiempo?
    {
        id: 'YOWSVq06sEE',
        title: '¿Cómo usas tu tiempo?',
        prevVideo: 'XoDGORofKlU',
        nextVideo: 'Zieb2guZIq4',
        resources: [
            {
                name: '¿Cómo usas tu tiempo?',
                url: 'https://drive.google.com/file/d/1uVTALlgc0HoSIQ2vKdK6R-ZAdtR8wyLp/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Organizing your life like a boss',
        originExperienceLogo: oylbLogo
    },

    // 6. 5 formas de tener más energía
    {
        id: 'Zieb2guZIq4',
        title: '5 formas de tener más energía',
        prevVideo: 'YOWSVq06sEE',
        nextVideo: 'mhKj-9v8Lx8',
        resources: [
            {
                name: 'Eleva tu energía',
                url: 'https://drive.google.com/file/d/19D792qEVox8HAPrUaWNbWRGUuSKbtLZ3/view',
                type: 'pdf'
            },
            {
                name: 'Niveles de energía',
                url: 'https://form.typeform.com/to/QET6K2hi',
                type: 'form'
            },
            {
                name: 'Relax Fast',
                url: 'https://drive.google.com/file/d/1kpJBJtcOptYqf02C9xlhF0M_YOD88HD-/view',
                type: 'image'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Organizing your life like a boss',
        originExperienceLogo: oylbLogo
    },

    // 7. ¿Quieres tener tu propio coach?
    {
        id: 'mhKj-9v8Lx8',
        title: '¿Quieres tener tu propio coach?',
        prevVideo: 'Zieb2guZIq4',
        nextVideo: '3rfkPMw3vIM',
        resources: [],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Organizing your life like a boss',
        originExperienceLogo: oylbLogo
    },

    // 8. ¿No tienes tiempo de nada?
    {
        id: '3rfkPMw3vIM',
        title: '¿No tienes tiempo de nada?',
        prevVideo: 'mhKj-9v8Lx8',
        nextVideo: 'TDtbc6hlC_Q',
        resources: [
            {
                name: 'Matriz de tiempo',
                url: 'https://drive.google.com/file/d/1gcDGPs-ZERwtmo-Dt8QkgA53vFbeNDPi/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Organizing your life like a boss',
        originExperienceLogo: oylbLogo
    },

    // 9. Casi estás en la meta
    {
        id: 'TDtbc6hlC_Q',
        title: 'Casi estás en la meta',
        prevVideo: '3rfkPMw3vIM',
        nextVideo: null,
        resources: [],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Organizing your life like a boss',
        originExperienceLogo: oylbLogo
    },
    /*<------------------------------------------------->
    <!-- Your CV your master peace 	-->
    <!------------------------------------------------->*/
    // 1. Bienvenido
    {
        id: 'bIzNh_hvu_4',
        title: 'Bienvenido',
        prevVideo: null,
        nextVideo: '4dDSU4xD_dk',
        resources: [],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Your CV Your Masterpiece',
        originExperienceLogo: cvmpLogo
    },
    // 2. ¿Qué es un CV y para qué sirve?
    {
        id: '4dDSU4xD_dk',
        title: '¿Qué es un CV y para qué sirve?',
        prevVideo: 'bIzNh_hvu_4',
        nextVideo: '9v5M3k8Of4c',
        resources: [],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Your CV Your Masterpiece',
        originExperienceLogo: cvmpLogo
    },
    // 3. Enfócate en ti mismo
    {
        id: '9v5M3k8Of4c',
        title: 'Enfócate en ti mismo.',
        prevVideo: '4dDSU4xD_dk',
        nextVideo: 'yEMkpaVFCW8',
        resources: [
            {
                name: 'Enfocado en ti',
                url: 'https://drive.google.com/file/d/1eJcFxm0aqPcUgWcKS79rmEbMXAvfHjDE/view',
                type: 'image'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Your CV Your Masterpiece',
        originExperienceLogo: cvmpLogo
    },// 4. Enfócate en la empresa
    {
        id: 'yEMkpaVFCW8',
        title: 'Enfócate en la empresa',
        prevVideo: '9v5M3k8Of4c',
        nextVideo: '3zIARCVgYGM',
        resources: [
            {
                name: 'Enfocado en la empresa',
                url: 'https://drive.google.com/file/d/1ncKl6KaJ8-s9U1CYGTiHSkBrGadG6T5e/view',
                type: 'image'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Your CV Your Masterpiece',
        originExperienceLogo: cvmpLogo
    },
    // 5. Enfócate en el puesto
    {
        id: '3zIARCVgYGM',
        title: 'Enfócate en el puesto',
        prevVideo: 'yEMkpaVFCW8',
        nextVideo: 'XGW_o7tppLA',
        resources: [
            {
                name: 'Enfocado en tu puesto',
                url: 'https://drive.google.com/file/d/1R0IlQgmLwI01DdCUqwlIyBWVMoP939Xb/view',
                type: 'image'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Your CV Your Masterpiece',
        originExperienceLogo: cvmpLogo
    },
    // 6. Prepara tu CV
    {
        id: 'XGW_o7tppLA',
        title: 'Prepara tu CV',
        prevVideo: '3zIARCVgYGM',
        nextVideo: 'RmNpRqCqiyM',
        resources: [
            {
                name: 'Haciendo tu CV',
                url: 'https://drive.google.com/file/d/1DMAmxXFRuSyz3KZSqP5Fe2VibbaJb5rw/view',
                type: 'image'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Your CV Your Masterpiece',
        originExperienceLogo: cvmpLogo
    },
    // 7. ¿Qué no debe faltar en tu CV?
    {
        id: 'RmNpRqCqiyM',
        title: '8 musts del CV perfecto',
        prevVideo: 'XGW_o7tppLA',
        nextVideo: null,
        resources: [
            {
                name: 'Asesoría personalizada',
                url: 'https://drive.google.com/file/d/0Bz5aTX-6J1TzTHpzbnBPYzliRnk2TzVoaWM3QjBMQnQ0NmdF/view?resourcekey=0-BbPdwcp8JYUMbBYmYvClZg',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Your CV Your Masterpiece',
        originExperienceLogo: cvmpLogo
    },
    /*<------------------------------------------------->
    <!-- Mi mejor versión 	-->
    <!------------------------------------------------->*/
    // Nadie mejor que tú.
    {
        id: 'YWQe1LCER1I',
        title: 'Nadie mejor que tú.',
        prevVideo: null,
        nextVideo: 'v7QYFEiEKtQ',
        resources: [
            {
                name: 'Ejercicio',
                url: 'https://docs.google.com/forms/d/e/1FAIpQLSdYRWlvPnS3LaDDOLX-v0hN_lN3F7V5RLv9SSj-TGqLhMug8w/viewform',
                type: 'form'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Mi mejor versión',
        originExperienceLogo: versionLogo
    },

    // Es momento de distinguirse.
    {
        id: 'v7QYFEiEKtQ',
        title: 'Es momento de distinguirse.',
        prevVideo: 'YWQe1LCER1I',
        nextVideo: 'xQkAZGwDNj4',
        resources: [
            {
                name: 'Armar tu pitch',
                url: 'https://docs.google.com/forms/d/e/1FAIpQLSeljqKex6gVtNecdmbg1eMNM8UZncUh1YnZwcpzTQJYOyviEw/viewform?usp=sharing',
                type: 'form'
            }
        ],
        optionalResources: [
            {
                name: 'Quiero conocerme',
                url: 'https://docs.google.com/forms/d/e/1FAIpQLSfg_OosGrUfc7J_zY13KhnOvBiTCp2JIdaPpXjdewuousu_cQ/viewform?usp=sharing',
                type: 'form'
            },
            {
                name: '5 pasos para realizar y descargar las pruebas',
                url: 'https://drive.google.com/file/d/1YYgpCbzJpz4XFLfrcxq0A-FkiJ4xvGSS/view',
                type: 'pdf'
            },
            {
                name: 'Interpreta tus resultados',
                url: 'https://drive.google.com/file/d/1rLjxSdPYzID8wSlCJNsfpd1n-cHei09Q/view',
                type: 'pdf'
            }
        ],
        optionalResourcesSubTitle: 'Te ayudamos a conocerte (opcional)',
        originExperience: 'Mi mejor versión',
        originExperienceLogo: versionLogo
    },

    // Es clave ir más allá.
    {
        id: 'xQkAZGwDNj4',
        title: 'Es clave ir más allá.',
        prevVideo: 'v7QYFEiEKtQ',
        nextVideo: 'X1bhrDtmZoE',
        resources: [
            {
                name: 'Ejercicio',
                url: 'https://docs.google.com/forms/d/e/1FAIpQLSews0e1GWxwoi2wAJ9iu_toybW7ux3ftoG5JT2alJqJro83Ww/viewform?usp=sharing',
                type: 'form'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Mi mejor versión',
        originExperienceLogo: versionLogo
    },

    // No te detengas, el esfuerzo y dirección dependen de ti.
    {
        id: 'X1bhrDtmZoE',
        title: 'No te detengas, el esfuerzo y dirección dependen de ti.',
        prevVideo: 'xQkAZGwDNj4',
        nextVideo: 'RoZBdyxcoIU',
        resources: [
            {
                name: 'Ejercicio',
                url: 'https://docs.google.com/forms/d/e/1FAIpQLSd_c2SnIRvMiMTCKOMGs1RRSOtGK8f26XaU-9CK00Ken-TS5Q/viewform?usp=sharing',
                type: 'form'
            },
            {
                name: 'Camino a mi mejor versión',
                url: 'https://drive.google.com/file/d/1YixrUunADBUqbcMwr6qdAveHtWM5p02n/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Mi mejor versión',
        originExperienceLogo: versionLogo
    },

    // El mejor aliado.
    {
        id: 'RoZBdyxcoIU',
        title: 'El mejor aliado.',
        prevVideo: 'X1bhrDtmZoE',
        nextVideo: 'sC2l2dSL5jE',
        resources: [
            {
                name: 'Aliados internos y externos',
                url: 'https://docs.google.com/presentation/d/1SmXN7ZnLYPZv_Mn0QmYe4D5N1pXNBl00/edit?usp=sharing&ouid=102846578788827669069&rtpof=true&sd=true',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Mi mejor versión',
        originExperienceLogo: versionLogo
    },

    // El mejor aliado - Cuida cómo te hablas.
    {
        id: 'sC2l2dSL5jE',
        title: 'El mejor aliado - Cuida cómo te hablas.',
        prevVideo: 'RoZBdyxcoIU',
        nextVideo: 'S23FSIpTVt4',
        resources: [
            {
                name: 'Ejercicio',
                url: 'https://drive.google.com/file/d/1FNoEDiVpGl4V5msPuCWe3n0SgRASBWL4/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Mi mejor versión',
        originExperienceLogo: versionLogo
    },

    // El mejor aliado - Rueda de la vida (opcional)
    {
        id: 'S23FSIpTVt4',
        title: 'El mejor aliado - Rueda de la vida (opcional)',
        prevVideo: 'sC2l2dSL5jE',
        nextVideo: 'NRMP094E59A',
        resources: [
            {
                name: 'Rueda de la vida',
                url: 'https://drive.google.com/file/d/1IiNlTkMA6oiLCfyxH6HsOddzziDdHVNU/view?usp=drive_link',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Mi mejor versión',
        originExperienceLogo: versionLogo
    },

    // Cierre
    {
        id: 'NRMP094E59A',
        title: 'Cierre',
        prevVideo: 'S23FSIpTVt4',
        nextVideo: null,
        resources: [
            {
                name: 'Ejercicio',
                url: 'https://docs.google.com/document/d/1IYCxeBqQFLRcqcXt2Qs7RpF7p_fRBCd3/edit?usp=drive_link&ouid=115897287336816014134&rtpof=true&sd=true',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Mi mejor versión',
        originExperienceLogo: versionLogo
    }
];

/*<!--------------------------------------------------------------------------->
<!--	end VideoPlayerData(Data)	-->
<!--------------------------------------------------------------------------->*/

