# SMART 2.0 -  SMART Center UP
---

# Tabla de Contenidos
---

- [1. Introducción](#1-introducción)
  - [1.1 Objetivo del Proyecto](#11-objetivo-del-proyecto)
  - [1.2 Antecedentes](#12-antecedentes)
  - [1.3 Lenguaje de comunicación](#13-lenguaje-de-comunicación)
  - [1.4 Tecnologías y dependencias involucradas en el desarrollo](#14-tecnologías-y-dependencias-involucradas-en-el-desarrollo)
    - [1.4.1 El sitio usa globalmente las siguientes **tecnologías**](#141-el-sitio-usa-globalmente-las-siguientes-tecnologías)
    - [1.4.2 Además de tener las siguientes **dependencias**](#142-además-de-tener-las-siguientes-dependencias)
  - [1.5 Versiones](#15-versiones)
- [2. Navegación](#2-navegación)
  - [2.1 Barra de Navegación (componente)](#21-barra-de-navegación-componente)
  - [2.2 Sección de Experiencias](#22-sección-de-experiencias)
  - [2.3 Sección de Contacto](#23-sección-de-contacto)
  - [2.4 Redes Sociales y Otros Enlaces](#24-redes-sociales-y-otros-enlaces)
- [3. Secciones Principales](#3-secciones-principales)
  - [3.1 Portada](#31-portada)
  - [3.2 Nuestras Experiencias](#32-nuestras-experiencias)
    - [3.2.1 Experiencias Digitales](#321-experiencias-digitales)
    - [3.2.2 Experiencias Presenciales](#322-experiencias-presenciales)
    - [3.2.3 Oferta GEAS](#323-oferta-geas)
    - [3.2.4 Otras secciones](#324-otras-secciones)
  - [3.3 ¿Quiénes Somos?](#33-quiénes-somos)
  - [3.4 Noticias](#34-noticias)
  - [3.5 SMART Tips](#35-smart-tips)
  - [3.6 Contacto](#36-contacto)
  - [3.7 Footer](#37-footer)
- [4. Recursos Adicionales](#4-recursos-adicionales)
  - [4.1 Agenda](#41-agenda)
    - [4.1.1 Sección de Agenda Personal](#411-sección-de-agenda-personal)
    - [4.1.2 Widget de SimplyBook](#412-widget-de-simplybook)
    - [4.1.3 Funcionalidad JS para la Interactividad](#413-funcionalidad-js-para-la-interactividad)
    - [4.1.4 Interacción con los Eventos](#414-interacción-con-los-eventos)
  - [4.2 DPI](#42-dpi)


## 1. Introducción
---
   - ### 1.1 Objetivo del Proyecto
   SMART Center es un  Centro de estudiantes en el que el alumno cuenta con proyectos , servicios y experiencias para desarrollar competencias profesionales, académicas y de vida, motivo por el. que el principal objetivo del proyecto es darle una 'casa en la red' al centro, un lugar de llegada para alumnos que desean acercarse a los servicios que se ofrecen en el mismo. Se pretende también que sea un proyecto que permite  magnificar el alcance que el centro tiene al ofrecer experiencias directamente desde la página.
   

   - ### 1.2 Antecedentes
   La manera orgánica en la que creció el sitio respecto a las necesidades del centro ocasionó problemas respecto a la elección y uso de tecnologías. A finales de 2019 se detectó la necesidad de reescribir todo el código usando una sola arquitectura y una lista de tecnologías definidas. Se abandonaron los frameworks y se re estructuró todo a una arquitectura basada en componentes. 

   - ### 1.3 Lenguaje de comunicación

      - Se trabajó por meses en desarrollar un lenguaje de comunicación para la interfaz de nuestro sitio. Basándonos en aplicaciones comúnmente usadas por jóvenes escribimos las reglas para un lenguaje de interfaz fluido e intuitivo. 
      Alguno de los principios de este lenguaje son: 

         - La información se subdivide en tarjetas. (es un lenguaje basado en tarjetas)
         - Las tarjetas muestran la mínima cantidad de texto posible, si se necesita más información no se asume que el usuario quiere consumirla, la información adicional se despliega después de un click. 
         - Las tarjetas funcionan de manera jerárquica a lo largo de la página. La semántica de las tarjetas permite esconder sub secciones que se abren al oprimir la tarjeta misma. 
         - Las tarjetas pueden funcionar de las siguientes maneras: 
            - Tarjeta estática: Contiene información estática o dinámica pero la tarjeta no es clickleable. 
            - Tarjeta de enlace: Si es necesario llevar al usuario a otro sitio dentro o fuera de la página las tarjetas pueden comportarse como botones.
            - Tarjeta con sección oculta: Se programaron tarjetas que abren un espacio debajo de ellas y recorren a todas las demás en el grid mientras la sub sección está abierta.   

   - ### 1.3 Arquitectura

      Trabajamos con tecnologías web. Todos los elementos de la página respetan una arquitectura en componentes siguiendo un paradigma funcional. 
      

   - ### 1.4 Tecnologías y dependencias involucradas en el desarrollo

      - #### 1.4.1 El sitio usa globalmente las siguientes **tecnologías**: 

         - **HTML5**: Se utilizan varios elementos y atributos de HTML5, demostrando estándares web modernos para estructuración de contenido y diseño responsivo.
         - **Técnicas de Diseño Responsivo**: A través de configuraciones del meta viewport y CSS, el sitio está diseñado para ser responsivo, asegurando que se adapta a diferentes tamaños de pantalla y dispositivos.
         - **CSS**: Se usa CSS externo para el estilo (`assets/style/style.min.css`).
         - **JavaScript**: Se hacen referencia a varios archivos JavaScript externos para funcionalidad, incluyendo navegación, inserción de videos, integración de API de Instagram, tarjetas expandibles, desplazamiento espía, gestión de FAQ y carruseles. Estos scripts son responsables de elementos interactivos, ajustes de diseño y gestión de contenido.


      - #### 1.4.2 Además de tener las siguientes **dependencias**: 

         - **Google Fonts**: El sitio utiliza Google Fonts para la tipografía, específicamente la familia de fuentes 'Nunito'.
         - **GSAP (GreenSock Animation Platform)**: El sitio utiliza GSAP junto con su plugin ScrollTrigger para animaciones basadas en el desplazamiento.
      TODO: revisar constantemente la disponibilidad de la tecnología en CSS para reemplazar esta dependencia.(última revisión: ene 2023 - negativa) 
         - **Google Tag Manager (Gtag.js)**: Para análisis y seguimiento, se integra el `gtag.js` de Google Tag Manager. Se usa para google analytics. 
         - **Google Analytics**: PAra seguimiento y estadísticas del sitio, los resultados son incrustados automáticamente en el reporte "SMART Stats" 
         - **Rellax.js**: Para efectos de paralaje, el sitio utiliza Rellax.js, una biblioteca ligera de JavaScript vanilla. Se usa específicamente en las tarjetas dinámicas. 
      TODO: revisar constantemente la disponibilidad de la tecnología en CSS para reemplazar esta dependencia.(última revisión: ene 2023 - negativa) 
         - **Font Awesome**: El sitio utiliza Font Awesome para los iconos, como se indica por la fuente del script a un kit de Font Awesome (`https://kit.fontawesome.com/c09e05c963.js`). (Este Kit es pagado por el desarrollador y compartido gratuitamente al SMART)
         - **https://simplybook.me/**: La agenda presencial de las sesiones de counseling, coaching y programas de SMART es manejada desde el software de simplybook.me, un plugin costumizado para la página es el que se presenta de cara a los alumnos. 
         - Revisar Tecnologías en sección de proyecto DPI.
         - **Animate.css**: Para animaciones, el sitio incorpora Animate.css, una biblioteca de animaciones listas para usar.
         - **Google Auth**: Para manejar el login en cualquier página individual del sitio donde se requiera. 
         - **Instagram Api** Alimenta la sección "SMART news"
         - **Youtube API** Alimenta la sección: "SMART Tips"  


  - ### 1.5 Versiones:

      - **Alpha** 

         - Versión de prueba que se presentó a la Vicerrectoría de innovación, Diseño aprobado por comunicación institucional de la universidad.
      ---
      - **Beta**  

         - Primer versión pública, contenía una biblioteca de experiencias digitales (cursos) de un programa llamado "My career my success"
      ---
      - **0.5**  

         - Primer versión que contenía un landing page para SMART, se explicaban los objetivos del centro. Contenía secciones de noticias en tiempo real y un buzón para que los alumnos se comunicaran con la dirección del centro. Además un directorio con los miembros del equipo. 
      ---
      - **1.0**  

         - Versión que contenía una sección especializada para cada una de las sub secciones del Centro: 
            * Success Center: Además de la biblioteca de experiencias digitales los alumnos tenían acceso a un catálogo completo de las actividades de success, podían comunicarse con el área, pedir diplomas de sus cursos y calificar algunas experiencias.
            * Meeting Point: Se creó un catálogo para que los alumnos conocieran todas los grupos estudiantiles. Además de botones para que formaran sus propios grupos estudiantiles o se unieran a alguno.
            * Advisory: Se publicaron guías respecto a lo que el alumno pude esperar y debe hacer antes, durante y después de la asesoría universitaria. Se dio la posibilidad a los alumnos de solicitar un cambio de asesor desde Advisory. 
            * Reload & Talent: Se publicaron guías de aprovechamiento académico, consejos respecto a técnicas de estudio, y la agenda original del centro pertenecía a esta área.
      ---
      - **1.5**  

         - A raíz del cambio de imagen institucional el Centro adaptó su página para seguir los estándares institucionales. 
         Desaparecieron las páginas de las secciones pues el enfoque del centro ahora sería centralizado, se trabajó más en un enfoque a lo que el alumno podía hacer en la página y menos en darle información innecesaria.
         --- 
      - **2.0**  
   
         Versión detallada en la presente wiki, se añaden detalles de cada versión a partir de 2.06:

      - **2.06**  

         * implementación del login en el buscador para asesores de DPI, ahora sólo cuentas de la UP pueden acceder.
         * Se añadió la tarjeta de Érika en el directorio.
         * Se actualizó el enlace del campus virtual.
         * Se añadió un formulario para solicitud de cambio de asesor, y se conectó con un SCRIPT que automáticamente envía un correo a Caro con el resumen de la petición.
         * Buzón SMART: Se añadió una sección en la página principal para que alumnos escriban comentarios o sugerencias, se creó un SCRIPT para que automáticamente envíe un correo a Fer con el comentario, el nombre y correo de quien lo envió.
         * Implementación de Power UP como experiencia SMART

         Solución de errores:

         * La animación de entrada ahora corre en versiones más viejas de google chrome, además ahora se ajusta el tamaño para computadoras más pequeñas o más grandes.

         * Se solucionaron todos los problemas de visualización en monitores ultra wide (de más de 34 pulgadas)

         * Se eliminó totalmente la lista de bugs.
         ---

      - **2.07**  

         * La tarjeta de Aurora contiene el título correcto (disculpa el error).
         * Se añadió la tarjeta de Santiago.
         * Se añadió la tarjeta de Fer Sarmiento.
         * Se retiró la tarjeta de Sofía Rux
         * Todas las tarjetas de contacto ahora tienen el mismo ancho sin importar su contenido. 
         * Así mismo se realizaron algunas acciones de mantenimiento: 
         * Depuración de código en la página de inicio. 
         * Se mejoró la resolución de la animación de entrada.
         * Se renovaron los permisos para que el feed de IG se vea en el sitio.
         * Se conectó el mantenimiento de la página con el semestral del DPI para asegurarnos que todo funcionara para las aplicaciones. 
         * Mantenimiento generalizado semestral. 
         ---

      - **2.08**  

         Actualización de seguridad: 
         - Ahora los usuarios del buscador de asesores y del DPI deben estar logueados con una cuenta @up.edu.mx. 
         ---

      - **2.09**  

         Actualización de seguridad: 
         - Ahora los números de cuenta en la aplicación DPI se encriptan con una llave de seguridad única para cada ID.
         - Se creó una pantalla para DPIs no encontrados que da instrucciones a los alumnos que escriban mal la URL.
         - Se arregló un error que impedía ejecutar nuestras experiencias interactivas. 
         ---

## 2. Navegación
---
   - ### 2.1 Barra de Navegación (componente)
      La barra de navegación está diseñada para estar presente en todo el sitio, de un click puede llevarnos a: 
      - Experiencias(#experiencias) 
      - ¿Quiénes somos?(#somos) 
      - Noticias(#news) 
      - SMART Tips(#tips) 
      - Contacto(#contacto) 
      - Citas(citas.html) 

   - ### 2.2 Sección de Experiencias

      - Experiencias Digitales (experiencias.html)
      - Experiencias Presenciales (presenciales.html)
      - Conoce nuestros GEAS (oferta_geas.html)
      - Únete a un GEA(https://form.typeform.com/to/B3w43naa?typeform-source=successcenter1.typeform.com)
      - Eventos GEA(https://calendar.google.com/calendar/embed?src=c_04s4ftskn78nu8vjsp0dseidpc%40group.calendar.google.com&ctz=America%2FMexico_City)
      - Crea tu GEA (https://docs.google.com/forms/d/e/1FAIpQLSeWJPgUl6ZTCLZXKFrPKvoPaIXD_VOjeb0KGhKqojdYhYVIQg/viewform?usp=pp_url)
      - ¿Eres Asesor?(https://asesoria.up.edu.mx)
      - Cambio de asesor(https://forms.gle/BNqd2BnFyApZYJVL7)

   - ### 2.3 Sección de Contacto

      - Formulario de Contacto (https://forms.gle/yVDwtKpG1gDEmdT89)

   - ### 2.4 Redes Sociales y Otros Enlaces

      - [YouTube](https://www.youtube.com/channel/UCMAOisJbM69nBTLbCK_b4LQ?view_as=subscriber)
      - [Facebook](https://www.facebook.com/SuccessCenterUP/)
      - [Instagram](https://www.instagram.com/smartcenterup/)
      - [Aviso de privacidad](https://www.up.edu.mx/legales-politicas/)
      - [SMART Center](https://smartcenter.up.edu.mx)
      - [Visita Virtual](https://spotvirtual.com/invite/smart-center-eb42618dd1212b0a-enmMJMj8nb/sign-up)


## 3. Secciones Principales
---
   - ### 3.1 Portada
      - Banner con animación
      - Video promocional

   - ### 3.2 Nuestras Experiencias
      - Se han generado dos diferentes plantillas para dos tipos de experiencias digitales. Puede ser que las experiencias que desarrolla el equipo sean en forma de vídeo con playlists secuenciales que incluyen materiales o instrucciones por video o que sean interactivas. Las experiencias interactivas simplemente se añaden como archivo externo ligado en el mismo paquete de la página, la plantilla da la sensación de que la experiencia está integrada a la página. 

      - ####  3.2.1 Experiencias Digitales

         - **Organizing Your Life Like a Boss (Video)**
            - **Duración:** 20min
            - **Resumen:** Esta experiencia ofrece estrategias para mejorar la organización del tiempo y aumentar la productividad. Incluye 9 videos cortos con técnicas sencillas y la posibilidad de una sesión de coaching personalizado.
         ---   

         - **Discovering the Leader in You (Interactiva)**
            - **Duración:** 10min
            - **Resumen:** Un taller en línea para descubrir tu estilo de liderazgo y aprender cómo aplicarlo efectivamente en diversas situaciones.
         ---

         - **Your CV Your Masterpiece (Video)**
            - **Duración:** 30min
            - **Resumen:** Aprende a crear un CV impresionante y a destacar en procesos de selección. Incluye 7 videos educativos y la opción de recibir asesoría personalizada.
         ---

         - **Communicate Better (Interactiva)**
            - **Duración:** 12min
            - **Resumen:** Mejora tu estilo de comunicación descubriendo sus ventajas y desventajas, y aprende a relacionarte de manera más efectiva con los demás.
         ---

         - **Enfrenta tus problemas con mayor facilidad (Interactiva)**
            - **Duración:** 10min
            - **Resumen:** Aprende a gestionar situaciones estresantes de manera efectiva, encontrando soluciones prácticas a problemas comunes.
         ----

         - **Negociación (Interactiva)**
            - **Duración:** 22min
            - **Resumen:** Descubre tu estilo de negociación y cómo aplicarlo en diferentes contextos para lograr resultados óptimos.
         ---

         - **Live Smarter (Self-awareness) (Interactiva)**
            - **Duración:** 15min
            - **Resumen:** Fomenta tu autoconocimiento y mejora tu inteligencia emocional a través de actividades y reflexiones guiadas.
         ---

         - **Live Smarter (Manage yourself) (Interactiva)**
            - **Duración:** 16min
            - **Resumen:** Continúa tu desarrollo personal y profesional gestionando mejor tus emociones y reacciones ante diversas situaciones.
         ---

         - **Recreando mi vida (Video)**
            - **Duración:** 40min
            - **Resumen:** Potencia tu autoconocimiento y establece un plan de acción para alcanzar tus metas personales y profesionales.
         ---

         - **Atrévete a ser un master (Interactiva)**
            - **Duración:** 30min
            - **Resumen:** Explora los requisitos de admisión para estudios de posgrado en el extranjero, conoce programas de preparación y obtén información sobre becas.
         ---

         - **Gestión del cambio (Interactiva)**
            - **Duración:** 60min
            - **Resumen:** Aprende a adaptarte y gestionar el cambio de manera efectiva para alcanzar tus objetivos personales y profesionales.
         ---

         - **Power UP (Interactiva)**
            - **Duración:** 35min
            - **Resumen:** Transforma tus habilidades en superpoderes laborales a través de talleres, proyectos innovadores y mentoring.
         ---
      - #### 3.2.2 Experiencias Presenciales
         - Experiencias presenciales es un componente diseñado a la medida para SMART para que cuando nuestros colaboradores organicen eventos presenciales se vean reflejados en tiempo real en la página. El procedimiento para agregar un evento presencial es sencillo: 
            1. El colaborador abrirá el documento: https://docs.google.com/spreadsheets/d/1TXTHaHBOZXMPBtT8X5LJaZIuixXd-osvNHAGAHpPgZg/edit#gid=0
            2. llenará los campos correspondientes a su evento.
            3. El módulo automáticamente se comunicará con el documento y generará la tarjeta correspondiente que los alumnos pueden consultar. 
         ---
      - #### 3.2.3 Oferta GEAS
         
         - **AIESEC**
            - **Simulador empresarial**
            - **Training program**
            - **Descripción:** Red de jóvenes que ofrece desarrollo personal y experiencias internacionales a través de voluntariado y pasantías.
         ---
         - **COPARMEX UP**
            - **Simulador empresarial**
            - **Training program**
            - **Descripción:** Semillero de líderes empresariales que promueve una nueva cultura empresarial entre los jóvenes.
         ---
         - **GROWTH**
            - **Simulador empresarial**
            - **Training program**
            - **Descripción:** Iniciativas para beneficiar la salud integral, promoviendo conocimiento y reflexión sobre el manejo de las emociones.
         ---
         - **Hult Prize**
            - **Simulador empresarial**
            - **Training program**
            - **Descripción:** Competencia global que invita a universitarios a resolver problemas sociales a través del emprendimiento social.
         ---
         - **Inspire UP**
            - **Simulador empresarial**
            - **Training program**
            - **Descripción:** Grupo estudiantil de excelencia que busca formar futuros líderes de México enfocándose en el sentido humano y la responsabilidad social.
         ---
         - **Nous**
            - **Simulador empresarial**
            - **Training program**
            - **Descripción:** Espacio para el ejercicio filosófico y de reflexión a través de debates, diálogos, y discusiones sobre temas diversos.
         ---
         - **SH+E**
            - **Simulador empresarial**
            - **Training program**
            - **Descripción:** Promueve el empoderamiento femenino y la igualdad de oportunidades a través de conferencias, ferias, y talleres.
         ---
         - **TEDx**
            - **Simulador empresarial**
            - **Training program**
            - **Descripción:** Eventos locales que siguen el estilo de TED para difundir "ideas que valen la pena" a través de charlas y presentaciones.
         ---
         - **The Green Project**
            - **Simulador empresarial**
            - **Training program**
            - **Descripción:** Fomenta una vida ecológica y busca hacer de la universidad un lugar más sustentable a través de diferentes proyectos y eventos.
         ---
      - #### 3.2.4 Otras secciones: 
         - Únete a un GEA
         - Eventos GEA
         - Crea tu GEA
         - ¿Qué es la AU? (Asesoría Universitaria)
         - ¿Eres Asesor?
         - Prepara tu asesoría
         - Temas en la AU
         - FAQ AU
         - Cambio de asesor
         - ¿Qué es counseling?
         - Conócete con DPI
         - Atención uno a uno (ver sección agenda) <br>

   - ### 3.3 ¿Quiénes Somos?
      - Tarjeta Portada
      - Tarjeta texto explicativo
      - Tarjeta CIIE (Centro Institucional de Innovación Educativa)
      - Objetivos de SMART
      - Historia de SMART
      - Misión y Visión de SMART
      - Valores de SMART

   - ### 3.4 Noticias
      - Enlaces a noticias (cargadas dinámicamente desde Instagram) <br>

   - ### 3.5 SMART Tips
      - Carruseles de videos extraídos de nuestro canal de youtube, se sincronizan en tiempo real gracias a la API de youtube:
         - UP Explorer
         - Competencias en el cine
         - Cómo sobreviví a...
         - Apps para ti

   - ### 3.6 Contacto
      - Información de contacto de todos los colaboradores del SMART
      - Mapa de ubicación
      - Buzón de sugerencias <br>

   - ### 3.7  Footer
      - Logo de la Universidad Panamericana
      - Derechos Reservados y Enlaces de interés
      - Información de contacto del campus CDMX

## 4. Recursos Adicionales
---
La sección de la agenda en el sitio web está diseñada para permitir a los usuarios programar citas o eventos de manera fácil e interactiva. A continuación, se detalla cómo funciona esta sección: 
   - ### 4.1 Agenda

      - #### 4.1.1 Sección de Agenda Personal (`#app_citas`)
         - Esta sección muestra un **widget de SimplyBook**, un sistema de reservas online que permite a los usuarios elegir y reservar citas.
         - **Loader (`#loader`):** Muestra una animación de carga mientras el widget de SimplyBook se carga, mejorando la experiencia de usuario.

      - #### 4.1.2 Widget de SimplyBook
         - Se integra mediante un script que carga un iFrame del servicio de SimplyBook.
         - Los usuarios pueden seleccionar el tipo de cita, la fecha y la hora directamente desde este widget interactivo.
         - El tema del widget está personalizado para coincidir con el diseño general del sitio (`theme: "space"`).


      - ####  4.1.3 Funcionalidad JS para la Interactividad
         - **Animaciones GSAP:** Se utilizan para animaciones en la página, mejorando la visual y transiciones.
         - **Script de Navegación (`nav_citas.min.js`):** Controla la interacción con la barra de navegación.
         - **SpyScroll (`spyscroll.min.js`):** Permite el seguimiento de la sección activa en la barra de navegación mientras el usuario se desplaza por la página.
         - **Loader de Citas (`loader_citas.min.js`):** Gestiona la visualización del loader mientras se carga el widget de SimplyBook.

      - #### 4.1.4 Interacción con los Eventos (`events_grid`)
         - Permite a los usuarios expandir información sobre eventos específicos para leer más detalles.
         - Los botones de "ver más" expanden las tarjetas de eventos para mostrar más información utilizando animaciones suaves y cambios de íconos para una indicación visual clara.

   Esta sección está diseñada para ser intuitiva y fácil de usar, asegurando que los usuarios puedan programar sus citas o registrarse para eventos presenciales sin inconvenientes.


   - ### 4.2 DPI
      - El sitio alberga las siguientes partes del proyecto DPI (consultar diagramas de documentación):
         - Lectura.
         - Despliegue de DPI por alumno.
         - Buscador para asesores.




