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


export default function Experiences() {

    const sampleIcon = (<IconTextTitle icon={faCoffee} title='Coffee 4 u' />)
    const secondIcon = (<IconTextTitle icon={faCoffee} title='Coffee 4 u' flow='row' />)

    return (
        <section id="experiences">
            <h1 className={styles.title} >Nuestras experiencias</h1>
            <div className={styles.experiencesGrid} >
                <ExpandableCard
                    buttonContent={sampleIcon}
                    expandedContent={<div>Contenido Expandido Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat, facere nam pariatur earum a obcaecati, optio facilis illum, blanditiis quo aspernatur totam veniam. Vel eos, nostrum ipsum optio voluptatibus officiis eius consectetur rem dolorum maiores? Exercitationem, aliquam. Temporibus, cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa incidunt. Sint dignissimos consequatur, rerum quam ad mollitia suscipit saepe ducimus voluptatibus. Veritatis dignissimos cumque officia soluta unde porro hic, eveniet explicabo consequatur vitae accusamus enim minima iste? Quidem molestiae aliquid inventore repellat maxime, magni natus beatae nemo ratione ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quaerat inventore assumenda recusandae sed ipsam molestias vero tempora minima dolorum quod, eius iure aliquam doloremque provident enim officiis. Minima voluptates autem excepturi assumenda impedit, alias veniam quibusdam nam, blanditiis fuga nesciunt voluptatum tenetur, sint distinctio officia tempora at illum magni voluptas quos officiis. Dolorem rem, maiores laboriosam animi nisi ipsa nemo nihil eligendi perferendis eveniet suscipit a et ut nulla, distinctio, saepe quibusdam maxime ipsum autem deleniti ea. Dolor cum, totam eius vero sit maxime neque illo repudiandae excepturi, aliquid eos? Est perferendis quidem debitis eius eum ex, eligendi, quaerat, quia enim tempore laudantium possimus ab sint tempora vel. Magnam, error. Officia, veniam! Tempora quaerat corrupti officiis iusto? Aliquam iure doloribus eos et dolores! Quo adipisci temporibus assumenda. Exercitationem eligendi esse veritatis libero aliquam alias labore! Ipsum consectetur illo temporibus dolorum. Ducimus dicta officiis nesciunt delectus dolores explicabo rerum voluptate. Delectus consectetur illo aperiam hic atque id ex alias aut, commodi praesentium blanditiis esse distinctio, sit corrupti voluptas inventore sequi repudiandae. Expedita inventore ratione fugiat assumenda facere in corporis excepturi, eos, vero voluptatibus, aliquid quisquam sapiente iste cupiditate praesentium. Illum asperiores ut nulla ea est a reiciendis! Quidem quos dolorum dolore harum necessitatibus asperiores iure eos saepe amet, veritatis possimus ipsum unde qui accusantium maiores soluta consequuntur dicta perferendis at perspiciatis dolorem doloremque. Quibusdam impedit, corrupti consequuntur, cumque soluta magni quod eligendi ad harum hic veritatis nesciunt molestiae nulla dolores. Aspernatur asperiores laboriosam, voluptas amet, eum nihil, sed maxime aliquam illum ad dolores quisquam placeat ipsa ducimus labore quis unde impedit doloremque quam odio iusto suscipit porro. Quidem quae voluptatem necessitatibus, nobis tempore similique, nam, libero perspiciatis doloremque in culpa et sunt hic minus qui accusamus quasi laudantium corporis obcaecati expedita optio rem? Eius, odio exercitationem. Provident eligendi dicta commodi itaque veniam nulla expedita delectus recusandae in impedit cum, facilis sed optio esse laborum veritatis necessitatibus quidem! Explicabo omnis earum iusto cum voluptatem iste veritatis blanditiis dolor similique? Quo culpa accusamus id sint pariatur commodi quia minus voluptatem asperiores quam, eligendi facere animi maiores soluta quod saepe doloribus in dolor! Nobis molestiae provident excepturi velit architecto harum illum enim iusto aliquid, ullam sed in hic quo voluptatem rem quia magnam eum? Officia quaerat cum perferendis dignissimos suscipit eaque enim nemo facere optio, modi consequuntur. Nobis, sapiente. Ducimus consequuntur excepturi, reprehenderit repellendus adipisci consectetur. Maiores quo provident incidunt sit nemo commodi.</div>}
                    areaName='first'
                />

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