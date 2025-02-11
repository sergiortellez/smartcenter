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
    <!-- Recreando mi vida 	-->
    <!------------------------------------------------->*/
    // 1. ¿De qué está hecha mi vida?
    {
        id: 't0XERxrQcV4',
        title: '¿De qué está hecha mi vida?',
        prevVideo: null,
        nextVideo: '6LwDe3aRt_g',
        resources: [
            {
                name: 'Ejercicio 1',
                url: 'https://drive.google.com/file/d/1WgohDGhzqggPdTpL-ohTriE9OvyS57PP/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
    },

    // 2. ¿Cómo veo y vivo mi vida?
    {
        id: '6LwDe3aRt_g',
        title: '¿Cómo veo y vivo mi vida?',
        prevVideo: 't0XERxrQcV4',
        nextVideo: 'itbs2yaUXJI',
        resources: [
            {
                name: 'Ejercicio 2',
                url: 'https://drive.google.com/file/d/1M5ot9mRd3mlHTVaT2Eq7jKL0EXK865HN/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
    },

    // 3. ¿Cómo me percibo?
    {
        id: 'itbs2yaUXJI',
        title: '¿Cómo me percibo?',
        prevVideo: '6LwDe3aRt_g',
        nextVideo: 'Urc_u6z9T-0',
        resources: [
            {
                name: 'Ejercicio 3',
                url: 'https://drive.google.com/file/d/13FKvyWXX6ohcbYMqfU8wuohz5sf4xVhk/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
    },

    // 4. Personalidad
    {
        id: 'Urc_u6z9T-0',
        title: 'Personalidad',
        prevVideo: 'itbs2yaUXJI',
        nextVideo: 'SEcKa-PaBu4',
        resources: [
            {
                name: 'Ejercicio 4',
                url: 'https://drive.google.com/file/d/1JlB9O3jHTkUYJrfbojmE_KuyIlmpeGs9/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
    },

    // 5. ¿Cómo me ven los demás?
    {
        id: 'SEcKa-PaBu4',
        title: '¿Cómo me ven los demás?',
        prevVideo: 'Urc_u6z9T-0',
        nextVideo: 'QUvNOrQR7IE',
        resources: [
            {
                name: 'ejercicio 5',
                url: 'https://drive.google.com/file/d/1e_A1INNp-BjzsXcXPg6HoGp3ZgqcJxa8/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
    },

    // 6. Lo que soy
    {
        id: 'QUvNOrQR7IE',
        title: 'Lo que soy',
        prevVideo: 'SEcKa-PaBu4',
        nextVideo: 'Ic_FOAypEb0',
        resources: [],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
    },

    // 7. Mis héroes
    {
        id: 'Ic_FOAypEb0',
        title: 'Mis héroes',
        prevVideo: 'QUvNOrQR7IE',
        nextVideo: 'xkcg3LcC8cA',
        resources: [
            {
                name: 'Ejercicio 6',
                url: 'https://drive.google.com/file/d/1KGVhA7V_9y9yG91dOXDIBTu_iJo_gpns/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
    },

    // 8. Mis deseos
    {
        id: 'xkcg3LcC8cA',
        title: 'Mis deseos',
        prevVideo: 'Ic_FOAypEb0',
        nextVideo: '_ILoXZ5qcf0',
        resources: [
            {
                name: 'Ejercicio 7',
                url: 'https://drive.google.com/file/d/1foc3qxgtLC_xhfRHduVMkpBX-IatOzO8/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
    },

    // 9. 5 años
    {
        id: '_ILoXZ5qcf0',
        title: '5 años',
        prevVideo: 'xkcg3LcC8cA',
        nextVideo: 'O1VMyjVfnFE',
        resources: [],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
    },

    // 10. Ingredientes de la vida que amo
    {
        id: 'O1VMyjVfnFE',
        title: 'Ingredientes de la vida que amo',
        prevVideo: '_ILoXZ5qcf0',
        nextVideo: 'Ukc9euI-mpA',
        resources: [
            {
                name: 'Ejercicio 8',
                url: 'https://drive.google.com/file/d/1KahLjeTKZ_1dpGF3fSBz7x7nMpL44yig/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
    },

    // 11. Mi visión de éxito
    {
        id: 'Ukc9euI-mpA',
        title: 'Mi visión de éxito',
        prevVideo: 'O1VMyjVfnFE',
        nextVideo: 'eJmhJvOcrRM',
        resources: [
            {
                name: 'Ejercicio 9',
                url: 'https://drive.google.com/file/d/1lWm67-D51nFVUgPAYqogDScGf6qEojnO/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
    },

    // 13. Mi vida emocional, física e intelectual
    {
        id: 'eJmhJvOcrRM',
        title: 'Mi vida emocional, física e intelectual',
        prevVideo: 'eJmhJvOcrRM',
        nextVideo: 'zCSou8SjqMc',
        resources: [
            {
                name: 'Ejercicio 10',
                url: 'https://drive.google.com/file/d/1pSAKF3ducx_K5qp3knHTTJVroYZTPt88/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
    },

    // 13. Mi yo futuro
    {
        id: 'zCSou8SjqMc',
        title: 'Mi yo futuro',
        prevVideo: 'eJmhJvOcrRM',
        nextVideo: 'K3cGYjVE7II',
        resources: [],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
    },

    // 14. Tu acción inmediata
    {
        id: 'K3cGYjVE7II',
        title: 'Tu acción inmediata',
        prevVideo: 'zCSou8SjqMc',
        nextVideo: 'EdXzjcqjHTw',
        resources: [
            {
                name: 'Ejercicio 11',
                url: 'https://drive.google.com/file/d/1LQwFz4iVWhGrL1B5rSsPPl3opnJ2LmcN/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
    },

    // 15. Tu manifiesto y cierre
    {
        id: 'EdXzjcqjHTw',
        title: 'Tu manifiesto y cierre',
        prevVideo: 'K3cGYjVE7II',
        nextVideo: null,
        resources: [
            {
                name: 'Ejercicio 12',
                url: 'https://drive.google.com/file/d/1UV8xGmIJK2bDP-OZfEB-LOX4r_x1Hdp-/view',
                type: 'pdf'
            }
        ],
        optionalResources: [],
        optionalResourcesSubTitle: '',
        originExperience: 'Recreando mi vida',
        originExperienceLogo: recreandoLogo
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

