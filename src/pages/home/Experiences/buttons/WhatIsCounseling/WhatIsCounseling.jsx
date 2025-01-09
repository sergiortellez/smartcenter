/*<---------------------------------------------------------------------------->
<!--	WhatIsCounseling (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
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
import { WhatIsCounselingData } from './WhatIsCounselingData' // the file we just created



export default function WhatIsCounseling() {

  const { campus } = useCampus()
  const campusObj = WhatIsCounselingData[campus] || WhatIsCounselingData.FALLBACK
  // Build the expanded content
  let expandedContent = null
  if (campusObj.content) {
    expandedContent = (
      <div className={styles.container}>
        <div className={styles.definition}>
          {campusObj.content}
        </div>
        <div className={styles.image}>
          <img
            src={campusObj.img}
            alt="Person counseling student"
          // onError={(e) => {
          //   // If the image fails, use the fallback
          //   e.currentTarget.src = campusData.FALLBACK.img
          // }}
          />
        </div>
      </div>
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
        className='WhatIsCounseling'
      />
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end WhatIsCounseling(Component)	-->
<!--------------------------------------------------------------------------->*/

