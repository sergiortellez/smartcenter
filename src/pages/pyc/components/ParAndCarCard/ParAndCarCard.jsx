/*<---------------------------------------------------------------------------->
<!--	ParAndCarCard (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
  This component is the assembly of the ParAndCarCardCover and ParAndCarCardContent components into a single card for displaying a Par And Car Card.
     
* Parameters:
    - 
* Dependencies:
    -
* Returns/results: Returns the assembled card. 
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//components
import SelfContainedExpandableCard from '@components/SelfContainedExpandableCard/SelfContainedExpandableCard'
import ParAndCarCardCover from '../ParAndCarCardCover/ParAndCarCardCover'
import ParAndCarCardContent from '../ParAndCarCardContent/ParAndCarCardContent';



export default function ParAndCarCard({
  cardId,
  cardLogo,
  cardTitle,
  details = [],
  whatIsIt,
  whatToExpect = [],
  hasInstagramBool = false,
  instagramUser = '',
  contactEmail = ''
}) {

  const cover = (

    <ParAndCarCardCover
      cardId={cardId}
      cardLogo={cardLogo}
      cardTitle={cardTitle}
      details={details}
    />
  )

  const content = (
    <ParAndCarCardContent
      cardId={cardId}
      cardLogo={cardLogo}
      cardTitle={cardTitle}
      details={details}
      whatIsIt={whatIsIt}
      whatToExpect={whatToExpect}
      hasInstagramBool={hasInstagramBool}
      instagramUser={instagramUser}
      contactEmail={contactEmail}
    />

  )

  /*<------------------------------------------------->
  <!--	render Logic	-->
  <!------------------------------------------------->*/
  return (
    <SelfContainedExpandableCard cardId={cardId} cardCover={cover} cardContent={content} />
  );
  /*<!------------------------------------------------->
  <!--	end render Logic	-->
  <!------------------------------------------------->*/


}

/*<!--------------------------------------------------------------------------->
<!--	end ParAndCarCard(Component)	-->
<!--------------------------------------------------------------------------->*/

