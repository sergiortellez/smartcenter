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
import LinkCard from '../../../components/LinkCard/LinkCard';
import IconTextTitle from '../../../components/IconTextTitle/IconTextTitle';
import { faCoffee } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid';
//cards
import WelcomeToSmart from './buttons/WelcomeToSmart/WelcomeToSmart';


export default function Experiences() {

    const sampleIcon = (<IconTextTitle icon={faCoffee} title='Coffee 4 u' iconSize='3' titleSize='0.6' />)
    const secondIcon = (<IconTextTitle icon={faCoffee} title='Coffee 4 u' flow='row' />)

    return (
        <section id="experiences">
            <h1 className={styles.title} >Nuestras experiencias</h1>

            <div className={styles.experiencesGrid} >
                <WelcomeToSmart />

                <ExpandableCard
                    buttonContent={secondIcon}
                    expandedContent={<div>Contenido Expandido Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat, facere nam pariatur earum a obcaecati, optio facilis illum, blanditiis quo aspernatur totam veniam. Vel eos, nostrum ipsum optio voluptatibus officiis eius consectetur rem dolorum maiores? Exercitationem, aliquam. Temporibus, cum.</div>}
                    areaName='second'
                />

                <LinkCard
                    rout='/experiencias'
                    contents={<div> Link content 3</div>}
                    areaName='third'
                />
                <ExpandableCard
                    buttonContent={<div> button content 4</div>}
                    expandedContent={<div>Contenido Expandido Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat, facere nam pariatur earum a obcaecati, optio facilis illum, blanditiis quo aspernatur totam veniam. Vel eos, nostrum ipsum optio voluptatibus officiis eius consectetur rem dolorum maiores? Exercitationem, aliquam. Temporibus, cum.</div>}
                    areaName='fourth'
                />
                <LinkCard
                    rout='http://google.com'
                    contents={<div> Go to google</div>}
                    areaName='fifth'
                    isExternal={true}
                />
            </div>
        </section>
    )
}

/*<!--------------------------------------------------------------------------->
<!--	end Experiences(Component)	-->
<!--------------------------------------------------------------------------->*/