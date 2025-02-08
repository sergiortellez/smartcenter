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
import { useParams, NavLink } from 'react-router-dom'



//components
import YoutubeEmbed from '@components/YoutubeEmbed/YoutubeEmbed';

//context


//data


//styles
import styles from './Video.module.css'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faFilePdf, faImages, faListCheck, faFile } from '@awesome.me/kit-c09e05c963/icons/duotone/solid'
import { faAppStoreIos } from '@awesome.me/kit-c09e05c963/icons/classic/brands';

//data
import { VideoPlayerData } from './data/VideoPageData';



export default function Video({
    id = '',
    title = '',
    prevVideo = '',
    nextVideo = '',
    resources = [],
    optionalResources = [],
    optionalResourcesSubTitle = '',
    originExperience = '',
    originExperienceLogo = null
}) {
    //get id from url
    const params = useParams()
    //get current video from data
    const CurrentVideo = VideoPlayerData.find(video => video.id === params.id)

    //set current video data
    if (CurrentVideo) {
        id = CurrentVideo.id
        title = CurrentVideo.title
        prevVideo = CurrentVideo.prevVideo
        nextVideo = CurrentVideo.nextVideo
        resources = CurrentVideo.resources
        optionalResources = CurrentVideo.optionalResources
        optionalResourcesSubTitle = CurrentVideo.optionalResourcesSubTitle
        originExperience = CurrentVideo.originExperience
        originExperienceLogo = CurrentVideo.originExperienceLogo
    }
    /*<------------------------------------------------->
    <!--	get resource icon	-->
    <!------------------------------------------------->*/
    const getResourceIcon = (type) => {
        switch (type) {
            case 'pdf':
                return faFilePdf
            case 'image':
                return faImages
            case 'form':
                return faListCheck
            case 'app':
                return faAppStoreIos
            default:
                return faFile

        }
    }
    /*<!------------------------------------------------->
    <!--	end get resource icon	-->
    <!------------------------------------------------->*/


    /*<------------------------------------------------->
    <!--	Render Logic	-->
    <!------------------------------------------------->*/
    return (
        <div className={styles.container}>

            <main className={styles.videoContainer} >

                <YoutubeEmbed
                    videoId={id}
                    containerClassName='videoContainer'
                />

                <h2>{title}</h2>
            </main>



            <aside>
                <nav className={styles.navigation}>
                    {prevVideo && <NavLink to={`/experiencias/${prevVideo}`}>Anterior</NavLink>}
                    {nextVideo && <NavLink to={`/experiencias/${nextVideo}`}>Siguiente</NavLink>}
                </nav>
                <div className={styles.downloads} >
                    <h2>Recursos <FontAwesomeIcon icon={faCloudArrowDown} /></h2>

                    {resources.length === 0 && optionalResources.length === 0 && (
                        <span>Este video no contiene recursos</span>
                    )}

                    {resources.map((resource, index) => (
                        <a key={`${index}-resources`} href={resource.url} target="_blank">

                            <FontAwesomeIcon icon={getResourceIcon(resource.type)} /> <span>{resource.name}</span>
                        </a>
                    ))}

                    {optionalResources.length > 0 && (
                        <>
                            <hr />
                            <h3>{optionalResourcesSubTitle}</h3>
                            {optionalResources.map((resource, index) => (

                                <a key={`${index}-optionalResources`} href={resource.url} target="_blank">
                                    <FontAwesomeIcon icon={getResourceIcon(resource.type)} /> <span>{resource.name}</span></a>
                            ))}
                        </>
                    )}




                </div>
                <header className={styles.originExperience}>
                    <h1>{originExperience}</h1>
                    {originExperienceLogo && <img src={originExperienceLogo} alt="mi mejor versión" />}
                </header>
            </aside>


        </div>
    )
    /*<!------------------------------------------------->
    <!--	end Render Logic	-->
    <!------------------------------------------------->*/

}


/*<!------------------------------------------------->
<!--	end Video(page)	-->
<!------------------------------------------------->*/