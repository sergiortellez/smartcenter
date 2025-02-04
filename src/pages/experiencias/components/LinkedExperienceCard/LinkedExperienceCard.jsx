/*<---------------------------------------------------------------------------->
<!--	LinkedExperienceCard (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     This component is a wrapper for the SelfContainedExpandableCard component. It is used to display a card with a cover and content. The cover is a CardCover component and the content is a CardContent component.
* Parameters:
    - cardId: a unique identifier for each card.
    - cardLogo: requires an imported image.
    - cardTitle: a string.
    - details: an array of objects with two properties: icon and text.
    - whatIsIt: a string or JSX.
    - whatToExpect: an array of strings.
    - certificateBool: a boolean.
    - certificateUrl: a string.
    - experienceUrl: a string.
    - campi: an array of strings to filter the cards by campus.

* Dependencies:
    - SelfContainedExpandableCard
    - CardCover
    - CardContent
* Returns/results: A card that can expand and collapse within a grid layout. In its default (collapsed) state, it behaves like a button. When clicked, it occupies the entire row (spanning all columns) and reveals additional content. Is meant to be used in a grid layout.
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//imports

//components
import SelfContainedExpandableCard from '@components/SelfContainedExpandableCard/SelfContainedExpandableCard'
import CardCover from '../CardCover/CardCover'
import CardContent from '../CardContent/CardContent'



export default function LinkedExperienceCard({ cardId, cardLogo, cardTitle, details = [], whatIsIt, whatToExpect = [], instructions = [], certificateBool = false, certificateUrl, experienceUrl, campi = [] }) {


  const cover = (

    <CardCover
      cardId={cardId}
      cardLogo={cardLogo}
      cardTitle={cardTitle}
      details={details}
    />
  )

  const content = (
    <CardContent
      cardId={cardId}
      cardLogo={cardLogo}
      cardTitle={cardTitle}
      details={details}
      whatIsIt={whatIsIt}
      whatToExpect={whatToExpect}
      instructions={instructions}
      certificateBool={certificateBool}
      certificateUrl={certificateUrl}
      experienceUrl={experienceUrl}
    />

  )


  /*<------------------------------------------------->
  <!--	render logic	-->
  <!------------------------------------------------->*/
  return (

    <SelfContainedExpandableCard cardId={cardId} cardCover={cover} cardContent={content} />

  )
  /*<!------------------------------------------------->
  <!--	end render logic	-->
  <!------------------------------------------------->*/

}

/*<!--------------------------------------------------------------------------->
<!--	end LinkedExperienceCard(Component)	-->
<!--------------------------------------------------------------------------->*/

