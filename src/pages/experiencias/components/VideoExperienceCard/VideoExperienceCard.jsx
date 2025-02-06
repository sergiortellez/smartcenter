/*<---------------------------------------------------------------------------->
<!--	VideoExperienceCard (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//components
import SelfContainedExpandableCard from '@components/SelfContainedExpandableCard/SelfContainedExpandableCard'
import CardCover from '../CardCover/CardCover'
import VideoCardContent from '../VideoCardContent/VideoCardContent';



export default function VideoExperienceCard({
  cardId,
  cardLogo,
  cardTitle,
  details = [],
  whatIsIt,
  whatToExpect = [],
  instructions = [],
  appointmentBool = false,
  certificateBool = false,
  certificateUrl,
  playList = []
}) {

  const cover = (

    <CardCover
      cardId={cardId}
      cardLogo={cardLogo}
      cardTitle={cardTitle}
      details={details}
    />
  )

  const content = (
    <VideoCardContent
      cardId={cardId}
      cardLogo={cardLogo}
      cardTitle={cardTitle}
      details={details}
      whatIsIt={whatIsIt}
      whatToExpect={whatToExpect}
      instructions={instructions}
      appointmentBool={appointmentBool}
      certificateBool={certificateBool}
      certificateUrl={certificateUrl}
      playList={playList}
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
<!--	end VideoExperienceCard(Component)	-->
<!--------------------------------------------------------------------------->*/

