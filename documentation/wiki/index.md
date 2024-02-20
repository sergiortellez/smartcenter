# SMART 2.0 -  SMART Center UP

---
# Tabla de Contenidos

- [1. Introducción](#1-introducción)
  - [Objetivo del Proyecto](#objetivo-del-proyecto)
  - [Antecedentes](#antecedentes)
  - [Tecnologías y dependencias involucradas en el desarrollo](#tecnologías-y-dependencias-involucradas-en-el-desarrollo)
  - [Versiones](#versiones)
- [2. Navegación](#2-navegación)
  - [Barra de Navegación (componente)](#barra-de-navegación-componente)
  - [Sección de Experiencias](#sección-de-experiencias)
  - [Sección de Contacto](#sección-de-contacto)
  - [Redes Sociales y Otros Enlaces](#redes-sociales-y-otros-enlaces)
- [3. Secciones Principales](#3-secciones-principales)
  - [Portada](#portada)
  - [Nuestras Experiencias](#nuestras-experiencias)
  - [¿Quiénes Somos?](#¿quiénes-somos)
  - [Noticias](#noticias)
  - [SMART Tips](#smart-tips)
  - [Contacto](#contacto)
  - [Footer](#footer)
- [4. Recursos Adicionales](#4-recursos-adicionales)
  - [Agenda](#agenda)
  - [DPI](#dpi)



## 1. Introducción

   ### Objetivo del Proyecto
   SMART Center es parte importante de la cultura universitaria de cara a los alumnos. El primer objetivo del proyecto es darle una 'casa en la red' al centro, un lugar de llegada para alumnos que desean acercarse a los servicios que se ofrecen en el mismo. 
   Se pretende también que sea un trampolín para magnificar el alcance que el centro tiene al ofrecer experiencias asincrónicas y de valor. 
   

   ### Antecedentes
   La manera orgánica en la que creció el sitio respecto a las necesidades del centro ocasionó problemas respecto a la elección y uso de tecnologías. A finales de 2019 se detectó la necesidad de reescribir todo el código usando una sola arquitectura y una lista de tecnologías definidas. Se abandonaron los frameworks y se restructuró todo a una arquitectura basada en componentes. 

   ### Tecnologías y dependencias involucradas en el desarrollo

   #### El sitio usa globalmente las siguientes **tecnologías**: 

   1. **HTML5**: Se utilizan varios elementos y atributos de HTML5, demostrando estándares web modernos para estructuración de contenido y diseño responsivo.
   2. **Técnicas de Diseño Responsivo**: A través de configuraciones del meta viewport y CSS, el sitio está diseñado para ser responsivo, asegurando que se adapta a diferentes tamaños de pantalla y dispositivos.
   3. **CSS**: Se usa CSS externo para el estilo (`assets/style/style.min.css`).
   4. **JavaScript**: Se hacen referencia a varios archivos JavaScript externos para funcionalidad, incluyendo navegación, inserción de videos, integración de API de Instagram, tarjetas expandibles, desplazamiento espía, gestión de FAQ y carruseles. Estos scripts son responsables de elementos interactivos, ajustes de diseño y gestión de contenido.


   #### Además de tener las siguientes **dependencias**: 

   1. **Google Fonts**: El sitio utiliza Google Fonts para la tipografía, específicamente la familia de fuentes 'Nunito'.
   2. **GSAP (GreenSock Animation Platform)**: El sitio utiliza GSAP junto con su plugin ScrollTrigger para animaciones basadas en el desplazamiento.
   TODO: revisar constantemente la disponibilidad de la tecnología en CSS para reemplazar esta dependencia.(última revisión: ene 2023 - negativa) 
   4. **Google Tag Manager (Gtag.js)**: Para análisis y seguimiento, se integra el `gtag.js` de Google Tag Manager. Se usa para google analytics. 
   5. **Google Analytics**: PAra seguimiento y estadísticas del sitio, los resultados son incrustados automáticamente en el reporte "SMART Stats" 
   6. **Rellax.js**: Para efectos de paralaje, el sitio utiliza Rellax.js, una biblioteca ligera de JavaScript vanilla. Se usa específicamente en las tarjetas dinámicas. 
   TODO: revisar constantemente la disponibilidad de la tecnología en CSS para reemplazar esta dependencia.(última revisión: ene 2023 - negativa) 
   7. **Font Awesome**: El sitio utiliza Font Awesome para los iconos, como se indica por la fuente del script a un kit de Font Awesome (`https://kit.fontawesome.com/c09e05c963.js`). (Este Kit es pagado por el desarrollador y compartido gratuitamente al SMART)
   8. **https://simplybook.me/**: La agenda presencial de las sesiones de counseling, coaching y programas de SMART es manejada desde el software de simplybook.me, un plugin costumizado para la página es el que se presenta de cara a los alumnos. 
   9. Revisar Tecnologías en sección de proyecto DPI.
   10. **Animate.css**: Para animaciones, el sitio incorpora Animate.css, una biblioteca de animaciones listas para usar.
   11. **Google Auth**: Para manejar el login en cualquier página individual del sitio donde se requiera. 
   12. **Instagram Api** Alimenta la sección "SMART news"
   13. **Youtube API** Alimenta la sección: "SMART Tips"


   ### Versiones:

   - **Alpha** 

      Versión de prueba que se presentó a la Vicerrectoría de innovación, Diseño aprobado por comunicación institucional de la universidad.
      --- 
   - **Beta**  

      Primer versión pública, contenía una biblioteca de experiencias digitales (cursos) de un programa llamado "My career my success"
      ---
   - **0.5**  

      Primer versión que contenía un landing page para SMART, se explicaban los objetivos del centro. Contenía secciones de noticias en tiempo real y un buzón para que los alumnos se comunicaran con la dirección del centro. Además un directorio con los miembros del equipo. 
      ---
   - **1.0**  

      Versión que contenía una sección especializada para cada una de las sub secciones del Centro: 
      * Success Center: Además de la biblioteca de experiencias digitales los alumnos tenían acceso a un catálogo completo de las actividades de success, podían comunicarse con el área, pedir diplomas de sus cursos y calificar algunas experiencias.
      * Meeting Point: Se creó un catálogo para que los alumnos conocieran todas los grupos estudiantiles. Además de botones para que formaran sus propios grupos estudiantiles o se unieran a alguno.
      * Advisory: Se publicaron guías respecto a lo que el alumno pude esperar y debe hacer antes, durante y después de la asesoría universitaria. Se dio la posibilidad a los alumnos de solicitar un cambio de asesor desde Advisory. 
      * Reload & Talent: Se publicaron guías de aprovechamiento académico, consejos respecto a técnicas de estudio, y la agenda original del centro pertenecía a esta área.
      ---
   - **1.5**  

      A raíz del cambio de imagen institucional el Centro adaptó su página para seguir los estándares institucionales. 
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

   ### Barra de Navegación (componente)
      La barra de navegación está diseñada para estar presente en todo el sitio, de un click puede llevarnos a: 
      - [Experiencias](#experiencias)
      - [¿Quiénes somos?](#somos)
      - [Noticias](#news)
      - [SMART Tips](#tips)
      - [Contacto](#contacto)
      - [Citas](citas.html)

   ### Sección de Experiencias

      - [Experiencias Digitales](experiencias.html)
      - [Experiencias Presenciales](presenciales.html)
      - [Conoce nuestros GEAS](oferta_geas.html)
      - [Únete a un GEA](https://form.typeform.com/to/B3w43naa?typeform-source=successcenter1.typeform.com)
      - [Eventos GEA](https://calendar.google.com/calendar/embed?src=c_04s4ftskn78nu8vjsp0dseidpc%40group.calendar.google.com&ctz=America%2FMexico_City)
      - [Crea tu GEA](https://docs.google.com/forms/d/e/1FAIpQLSeWJPgUl6ZTCLZXKFrPKvoPaIXD_VOjeb0KGhKqojdYhYVIQg/viewform?usp=pp_url)
      - [¿Eres Asesor?](https://asesoria.up.edu.mx)
      - [Cambio de asesor](https://forms.gle/BNqd2BnFyApZYJVL7)

   ### Sección de Contacto

      - [Formulario de Contacto](https://forms.gle/yVDwtKpG1gDEmdT89)

   ### Redes Sociales y Otros Enlaces

      - [YouTube](https://www.youtube.com/channel/UCMAOisJbM69nBTLbCK_b4LQ?view_as=subscriber)
      - [Facebook](https://www.facebook.com/SuccessCenterUP/)
      - [Instagram](https://www.instagram.com/smartcenterup/)
      - [Aviso de privacidad](https://www.up.edu.mx/legales-politicas/)
      - [SMART Center](https://smartcenter.up.edu.mx)
      - [Visita Virtual](https://spotvirtual.com/invite/smart-center-eb42618dd1212b0a-enmMJMj8nb/sign-up)


## 3. Secciones Principales

   ### Portada
   - Banner con animación
   - Video promocional

   ### Nuestras Experiencias

      ####  Experiencias Digitales

      1. **Organizing Your Life Like a Boss (Video)**
         - **Duración:** 20min
         - **Resumen:** Esta experiencia ofrece estrategias para mejorar la organización del tiempo y aumentar la productividad. Incluye 9 videos cortos con técnicas sencillas y la posibilidad de una sesión de coaching personalizado.

      2. **Discovering the Leader in You (Interactiva)**
         - **Duración:** 10min
         - **Resumen:** Un taller en línea para descubrir tu estilo de liderazgo y aprender cómo aplicarlo efectivamente en diversas situaciones.

      3. **Your CV Your Masterpiece (Video)**
         - **Duración:** 30min
         - **Resumen:** Aprende a crear un CV impresionante y a destacar en procesos de selección. Incluye 7 videos educativos y la opción de recibir asesoría personalizada.

      4. **Communicate Better (Interactiva)**
         - **Duración:** 12min
         - **Resumen:** Mejora tu estilo de comunicación descubriendo sus ventajas y desventajas, y aprende a relacionarte de manera más efectiva con los demás.

      5. **Enfrenta tus problemas con mayor facilidad (Interactiva)**
         - **Duración:** 10min
         - **Resumen:** Aprende a gestionar situaciones estresantes de manera efectiva, encontrando soluciones prácticas a problemas comunes.

      6. **Negociación (Interactiva)**
         - **Duración:** 22min
         - **Resumen:** Descubre tu estilo de negociación y cómo aplicarlo en diferentes contextos para lograr resultados óptimos.

      7. **Live Smarter (Self-awareness) (Interactiva)**
         - **Duración:** 15min
         - **Resumen:** Fomenta tu autoconocimiento y mejora tu inteligencia emocional a través de actividades y reflexiones guiadas.

      8. **Live Smarter (Manage yourself) (Interactiva)**
         - **Duración:** 16min
         - **Resumen:** Continúa tu desarrollo personal y profesional gestionando mejor tus emociones y reacciones ante diversas situaciones.

      9. **Recreando mi vida (Video)**
         - **Duración:** 40min
         - **Resumen:** Potencia tu autoconocimiento y establece un plan de acción para alcanzar tus metas personales y profesionales.

      10. **Atrévete a ser un master (Interactiva)**
         - **Duración:** 30min
         - **Resumen:** Explora los requisitos de admisión para estudios de posgrado en el extranjero, conoce programas de preparación y obtén información sobre becas.

      11. **Gestión del cambio (Interactiva)**
         - **Duración:** 60min
         - **Resumen:** Aprende a adaptarte y gestionar el cambio de manera efectiva para alcanzar tus objetivos personales y profesionales.

      12. **Power UP (Interactiva)**
         - **Duración:** 35min
         - **Resumen:** Transforma tus habilidades en superpoderes laborales a través de talleres, proyectos innovadores y mentoring.
   ---
      ####  Experiencias Presenciales
      - Experiencias presenciales es un componente diseñado a la medida para SMART para que cuando nuestros colaboradores organicen eventos presenciales se vean reflejados en tiempo real en la página. El procedimiento para agregar un evento presencial es sencillo: 
         1. El colaborador abrirá el documento: https://docs.google.com/spreadsheets/d/1TXTHaHBOZXMPBtT8X5LJaZIuixXd-osvNHAGAHpPgZg/edit#gid=0
         2. llenará los campos correspondientes a su evento.
         3. El módulo automáticamente se comunicará con el documento y generará la tarjeta correspondiente que los alumnos pueden consultar. 
   ---
      #### Oferta GEAS
      ##### Opciones Disponibles de GEAs
      1. **AIESEC**
         - **Simulador empresarial**
         - **Training program**
         - **Descripción:** Red de jóvenes que ofrece desarrollo personal y experiencias internacionales a través de voluntariado y pasantías.

      2. **COPARMEX UP**
         - **Simulador empresarial**
         - **Training program**
         - **Descripción:** Semillero de líderes empresariales que promueve una nueva cultura empresarial entre los jóvenes.

      3. **GROWTH**
         - **Simulador empresarial**
         - **Training program**
         - **Descripción:** Iniciativas para beneficiar la salud integral, promoviendo conocimiento y reflexión sobre el manejo de las emociones.

      4. **Hult Prize**
         - **Simulador empresarial**
         - **Training program**
         - **Descripción:** Competencia global que invita a universitarios a resolver problemas sociales a través del emprendimiento social.

      5. **Inspire UP**
         - **Simulador empresarial**
         - **Training program**
         - **Descripción:** Grupo estudiantil de excelencia que busca formar futuros líderes de México enfocándose en el sentido humano y la responsabilidad social.

      6. **Nous**
         - **Simulador empresarial**
         - **Training program**
         - **Descripción:** Espacio para el ejercicio filosófico y de reflexión a través de debates, diálogos, y discusiones sobre temas diversos.

      7. **SH+E**
         - **Simulador empresarial**
         - **Training program**
         - **Descripción:** Promueve el empoderamiento femenino y la igualdad de oportunidades a través de conferencias, ferias, y talleres.

      8. **TEDx**
         - **Simulador empresarial**
         - **Training program**
         - **Descripción:** Eventos locales que siguen el estilo de TED para difundir "ideas que valen la pena" a través de charlas y presentaciones.

      9. **The Green Project**
         - **Simulador empresarial**
         - **Training program**
         - **Descripción:** Fomenta una vida ecológica y busca hacer de la universidad un lugar más sustentable a través de diferentes proyectos y eventos.
   ---

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
      - Atención uno a uno (ver sección agenda) 

   ### ¿Quiénes Somos?
   - Tarjeta Portada
   - Tarjeta texto explicativo
   - Tarjeta CIIE (Centro Institucional de Innovación Educativa)
   - Objetivos de SMART
   - Historia de SMART
   - Misión y Visión de SMART
   - Valores de SMART

   ### Noticias
   - Enlaces a noticias (cargadas dinámicamente desde Instagram)

   ### SMART Tips
   Carruseles de videos extraídos de nuestro canal de youtube, se sincronizan en tiempo real gracias a la API de youtube.
   - Preview de Video
   - Carruseles de videos temáticos
   - UP Explorer
   - Competencias en el cine
   - Cómo sobreviví a...
   - Apps para ti

   ### Contacto
   - Información de contacto de todos los colaboradores del SMART
   - Mapa de ubicación
   - Buzón de sugerencias

   ### Footer
   - Logo de la Universidad Panamericana
   - Derechos Reservados y Enlaces de interés
   - Información de contacto del campus CDMX

## 4. Recursos Adicionales

   ### Agenda
   La sección de la agenda en el sitio web está diseñada para permitir a los usuarios programar citas o eventos de manera fácil e interactiva. A continuación, se detalla cómo funciona esta sección:
   #### Sección de Agenda Personal (`#app_citas`)
   - Esta sección muestra un **widget de SimplyBook**, un sistema de reservas online que permite a los usuarios elegir y reservar citas.
   - **Loader (`#loader`):** Muestra una animación de carga mientras el widget de SimplyBook se carga, mejorando la experiencia de usuario.

   #### Widget de SimplyBook
   - Se integra mediante un script que carga un iFrame del servicio de SimplyBook.
   - Los usuarios pueden seleccionar el tipo de cita, la fecha y la hora directamente desde este widget interactivo.
   - El tema del widget está personalizado para coincidir con el diseño general del sitio (`theme: "space"`).


   #### Funcionalidad JS para la Interactividad
   - **Animaciones GSAP:** Se utilizan para animaciones en la página, mejorando la visual y transiciones.
   - **Script de Navegación (`nav_citas.min.js`):** Controla la interacción con la barra de navegación.
   - **SpyScroll (`spyscroll.min.js`):** Permite el seguimiento de la sección activa en la barra de navegación mientras el usuario se desplaza por la página.
   - **Loader de Citas (`loader_citas.min.js`):** Gestiona la visualización del loader mientras se carga el widget de SimplyBook.

   #### Interacción con los Eventos (`events_grid`)
   - Permite a los usuarios expandir información sobre eventos específicos para leer más detalles.
   - Los botones de "ver más" expanden las tarjetas de eventos para mostrar más información utilizando animaciones suaves y cambios de íconos para una indicación visual clara.

   Esta sección está diseñada para ser intuitiva y fácil de usar, asegurando que los usuarios puedan programar sus citas o registrarse para eventos presenciales sin inconvenientes.


   ### DPI
   El sitio alberga las siguientes partes del proyecto DPI (consultar diagramas de documentación):
   - Lectura.
   - Despliegue de DPI por alumno.
   - Buscador para asesores.




