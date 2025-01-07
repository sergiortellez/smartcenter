/*<---------------------------------------------------------------------------->
<!--	Experiences(Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//....................imports........................
//styles
import styles from './Experiences.module.css';
//Components
import ExpandableCard from '../../../components/ExpandableCard/ExpandableCard';
import ExpandableCardParallax from '../../../components/ExpandableCardParallax/ExpandableCardParallax';
import LinkCard from '../../../components/LinkCard/LinkCard';
import IconTextTitle from '../../../components/IconTextTitle/IconTextTitle';
import LinkCardParallax from '../../../components/LinkCardParallax/LinkCardParallax';
//FontAwesome
import { faCoffee } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid';
//cards
import WelcomeToSmart from './buttons/WelcomeToSmart/WelcomeToSmart';



export default function Experiences() {

    const sampleIcon = (<IconTextTitle icon={faCoffee} title='Coffee 4 u' iconSize='3' titleSize='0.6' />)
    const secondIcon = (<IconTextTitle icon={faCoffee} title='Coffee 4 u' flow='row' />)

    return (
        <section id="experiencias">
            <h1 className={styles.title} >Nuestras experiencias</h1>

            <div className={styles.experiencesGrid} >
                <WelcomeToSmart />
                <LinkCardParallax
                    route="/experiencias"
                    contents={secondIcon}
                    areaName="second"
                    images={[
                        { src: '/images/parallax/experiencias_parallax_up.webp', speed: -0.3, offset: 0 },
                        { src: '/images/parallax/experiencias_parallax_down.webp', speed: 0.3, offset: -100 }

                    ]}
                />



                <LinkCard
                    route='/experiencias'
                    contents={<div> Link content 3</div>}
                    areaName='third'
                />

                <ExpandableCardParallax
                    buttonContent={sampleIcon}
                    expandedContent={<div>Contenido Expandido Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat, facere nam pariatur earum a obcaecati, optio facilis illum, blanditiis quo aspernatur totam veniam. Vel eos, nostrum ipsum optio voluptatibus officiis eius consectetur rem dolorum maiores? Exercitationem, aliquam. Temporibus, cum.</div>}
                    areaName='fourth'
                    cardMinHeight='10'
                    images={[
                        { src: '/images/parallax/experiencias_parallax_up.webp', speed: -0.3, offset: 0 },
                        { src: '/images/parallax/experiencias_parallax_down.webp', speed: 0.3, offset: -100 }

                    ]}
                />
                <LinkCardParallax
                    route="/experiencias"
                    contents={secondIcon}
                    areaName="fifth"
                    images={[
                        { src: '/images/parallax/experiencias_parallax_up.webp', speed: -0.3, offset: 0 },
                        { src: '/images/parallax/experiencias_parallax_down.webp', speed: 0.3, offset: -100 }

                    ]}
                />
            </div>
        </section>
    )
}

/*<!--------------------------------------------------------------------------->
<!--	end Experiences(Component)	-->
<!--------------------------------------------------------------------------->*/