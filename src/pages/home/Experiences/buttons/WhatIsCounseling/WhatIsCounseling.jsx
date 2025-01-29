/*<---------------------------------------------------------------------------->
<!--	WhatIsCounseling (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     This component displays a card with a title and an icon for explaining what is Counseling. When the user clicks on the card, it expands to show a definition and an image.
     It is used in the Experiences component.
     It uses the ExpandableCard component.
     It's a data-driven component, meaning that the content is defined in a separate file.  
* Parameters:
    - none
* Dependencies:
    - ExpandableCard component
    - IconTextTitle component
    - WhatIsCounselingData data file
    - useCampus custom hook
    - styles from './WhatIsCounseling.module.css'
    - Font Awesome icons
* Returns/results:
    - A card with a title and an icon for explaining what is Counseling. When the user clicks on the card, it expands to show a definition and an image.
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './WhatIsCounseling.module.css'
//Context
import useCampus from '@hooks/useCampus'
//components
import ExpandableCard from '@components/ExpandableCard/ExpandableCard'
import IconTextTitle from '@components/IconTextTitle/IconTextTitle'
//Font Awesome
import { faCommentsQuestionCheck } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid';
// data
import { WhatIsCounselingData } from './WhatIsCounselingData'



export default function WhatIsCounseling({ className }) {

  const { campus } = useCampus()
  const campusObj = WhatIsCounselingData[campus] || WhatIsCounselingData.FALLBACK

  // Build the expanded content
  let expandedContent = null
  if (campusObj.content) {
    expandedContent = (
      <>
        <div className={styles.title}>
          <span>Un servicio de SMART que no te puedes perder...</span>
        </div>
        <div className={styles.container}>
          <div className={styles.definition}>
            {campusObj.content}
          </div>
          <div className={styles.image}>
            <img
              src={campusObj.img}
              alt="Person counseling student"
            />
          </div>
        </div>
      </>

    )
  }

  // Title and icon
  const buttonContent = (
    <IconTextTitle
      icon={faCommentsQuestionCheck}
      title={campusObj.title}
    />
  )



  return (
    <>
      <ExpandableCard
        buttonContent={buttonContent}
        expandedContent={expandedContent}
        areaName='WhatIsCounseling'
        className={className}
      />
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end WhatIsCounseling(Component)	-->
<!--------------------------------------------------------------------------->*/

