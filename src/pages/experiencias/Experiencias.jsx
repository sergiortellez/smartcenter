/*<------------------------------------------------->
<!--	Experiencias(page)	-->
<!-------------------------------------------------->
* Description:

* Parameters:
    -
* Dependencies:
* Returns/results:
<!------------------------------------------------->*/

//imports

//components
import SelfContainedExpandableCard from '@components/SelfContainedExpandableCard/SelfContainedExpandableCard'

//styles
import styles from './Experiencias.module.css'


export default function Experiencias() {


    /*<------------------------------------------------->
        <!--	render logic	-->
        <!------------------------------------------------->*/
    return (
        <section className={styles.experiences} >

            <h1 className={styles.title} >Nuestras experiencias</h1>

            <div className={styles.grid} >
                <SelfContainedExpandableCard cardId='first' />
                <SelfContainedExpandableCard cardId='second' />
                <SelfContainedExpandableCard cardId='third' />
                <SelfContainedExpandableCard cardId='fourth' />
                <SelfContainedExpandableCard cardId='fifth' />
                <SelfContainedExpandableCard cardId='sixth' />


            </div>
        </section>
    )
    /*<!------------------------------------------------->
    <!--	end render logic	-->
    <!------------------------------------------------->*/

}


/*<!------------------------------------------------->
<!--	end Experiencias(page)	-->
<!------------------------------------------------->*/