/*<---------------------------------------------------------------------------->
<!--	ContactUs (Component)	-->
<!----------------------------------------------------------------------------->
* Description: This component is responsible for rendering the contact directory section of the contact Us part of the home page.
It imports the TeamCard component and the data for the cards. It's campus sensitive so it will just render the team members that match the selected campus.
Data driven approach.
     
* Parameters:
    - none 

* Dependencies:
    - useCampus (context)
    - TeamCard (Component)
    - ContactUsData (data)
    - styles (css)
    
* Returns/results: Renders a grid with the team members cards that match the selected campus.
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//Context
import useCampus from '@hooks/useCampus';

//styles
import styles from './ContactUs.module.css'

//cards
import TeamCard from '@components/TeamCard/TeamCard'

//data for person cards
import { ContactUsData } from './ContactUsData'



export default function ContactUs() {

  // Retrieve the current campus from context
  const { campus } = useCampus();

  // Filter the team members that match the selected campus
  const filteredTeam = ContactUsData.filter(teamMember => teamMember.campi === campus);



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

