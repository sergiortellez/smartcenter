/*<------------------------------------------------->
<!--	Video(page)	-->
<!-------------------------------------------------->
* Description:

* Parameters:
    -
* Dependencies:
* Returns/results:
<!------------------------------------------------->*/

//-----------------------imports---------------------

//React
import { useParams } from 'react-router-dom'


//components


//context


//data


//styles
import styles from './Video.module.css'


export default function Video({
    id = '',
    title = '',
    nextVideo = '',
    prevVideo = '',
    resources = [],
    optionalResources = [],
    optionalResourcesSubTitle = '',
    originExperience = '',
    originExperienceLogo = null
}) {
    const params = useParams()
    console.log(params.id)
    /*<------------------------------------------------->
    <!--	Render Logic	-->
    <!------------------------------------------------->*/
    return (
        <section className={styles.container} >

            <main className={styles.videoContainer} >

                <iframe class="frame-video" id="ytplayer" type="text/html" src="https://www.youtube.com/embed/v7QYFEiEKtQ?loop=1&color=white&modestbranding=1&enablejsapi=1&showinfo=0" frameborder="0" allow="accelerometer;  clipboard-write; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>

                <h2 class="animate__animated animate__bounceInLeft animate__delay-0.8s">Es momento de distinguirse.</h2>
            </main>



            <aside class="animate__animated animate__bounceInRight animate__delay-0.8s">
                <div class="buttons">

                    <a href="0.html" class="prev">Anterior</a>
                    <a href="2.html" class="next">Siguiente</a>
                </div>
                <div class="downloads">
                    <h2>Recursos <i class="fa-duotone fa-cloud-arrow-down"></i></h2>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeljqKex6gVtNecdmbg1eMNM8UZncUh1YnZwcpzTQJYOyviEw/viewform?usp=sharing" target="_blank">
                        <i class="fa-duotone fa-list-check"></i> <span>Armar tu pitch</span>
                    </a>
                    <hr />
                    <h3> Te ayudamos a conocerte (opcional)<i class="fa-duotone fa-solid fa-image-polaroid-user"></i> </h3>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfg_OosGrUfc7J_zY13KhnOvBiTCp2JIdaPpXjdewuousu_cQ/viewform?usp=sharing" target="_blank">
                        <i class="fa-duotone fa-list-check"></i> <span>Quiero conocerme</span>
                    </a>
                    <a href="https://drive.google.com/file/d/1YYgpCbzJpz4XFLfrcxq0A-FkiJ4xvGSS/view" target="_blank">
                        <i class="fa-duotone fa-file-pdf"></i> <span>5 pasos para realizar y descargar las pruebas</span>
                    </a>

                    <a href="https://drive.google.com/file/d/1rLjxSdPYzID8wSlCJNsfpd1n-cHei09Q/view" target="_blank">
                        <i class="fa-duotone fa-file-pdf"></i> <span>Interpreta tus resultados</span>
                    </a>

                    <a href="https://drive.google.com/file/d/1GjVjGJ3nS6qCvywQikrk8GE6blsMsOt9/view" target="_blank">
                        <i class="fa-duotone fa-file-pdf"></i> <span>Nombre del recurso</span>
                    </a>
                    <a href="https://drive.google.com/file/d/1GjVjGJ3nS6qCvywQikrk8GE6blsMsOt9/view" target="_blank">
                        <i class="fa-duotone fa-list-check"></i> <span>Nombre del recurso</span>
                    </a>
                    <a href="https://drive.google.com/file/d/1GjVjGJ3nS6qCvywQikrk8GE6blsMsOt9/view" target="_blank">
                        <i class="fa-duotone fa-images"></i> <span>Nombre del recurso</span>
                    </a>
                </div>
                <header>
                    <h1>Mi mejor versión</h1>
                    <img src="../../assets/images/experiencias/version.webp" alt="mi mejor versión" />
                </header>
            </aside>


        </section>
    )
    /*<!------------------------------------------------->
    <!--	end Render Logic	-->
    <!------------------------------------------------->*/

}


/*<!------------------------------------------------->
<!--	end Video(page)	-->
<!------------------------------------------------->*/