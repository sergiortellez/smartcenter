/*<---------------------------------------------------------------------------->
<!--	ContactUs (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//Context
import useCampus from '@hooks/useCampus';

//styles
import styles from './ContactUs.module.css'

//cards
import TeamCard from '@components/TeamCard/TeamCard'

//data for person cards
import { CounselingData } from './ContactUsData'



export default function ContactUs() {

  // Retrieve the current campus from context
  const { campus } = useCampus();

  // Filter the team members that match the selected campus
  const filteredTeam = CounselingData.filter(teamMember => teamMember.campi === campus);



  return (
    <section id="contacto" className={styles.contactUs}>
      <h1 className={styles.title} >Contáctanos</h1>
      <div className={styles.grid}>
        {filteredTeam.map(person => (
          <TeamCard
            key={person.name.replace(/\s/g, '')} // Remove spaces from name to create a unique key 
            name={person.name}
            position={person.position}
            email={person.email}
            secondaryEmail={person.secondaryEmail}
            phoneExtension={person.phoneExtension}
            profilePicture={person.profilePicture}
          />
        ))}
      </div>
    </section >
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end ContactUs(Component)	-->
<!--------------------------------------------------------------------------->*/

