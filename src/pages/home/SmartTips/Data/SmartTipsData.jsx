/*<---------------------------------------------------------------------------->
<!--	SmartTips(Data)	-->
<!----------------------------------------------------------------------------->
* Description: Data for the existing playlists in the SmartTips section.

* Parameters:
    - none
* Dependencies:
    - none
* Returns/results: Exported array with the objects containing the data of each playlist.
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//icons
import { faMapPin, faPopcorn, faMountainSun } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'
import { faAppStoreIos } from '@awesome.me/kit-c09e05c963/icons/classic/brands';

export const Playlists = [

    /*<------------------------------------------------->
    <!-- Up Explorer CDMX 	-->
    <!------------------------------------------------->*/
    {
        playListId: 'PLhMMXwN8RXkz3zpbF_nBQc_WID0ntJGfH',
        title: 'Up Explorer',
        icon: faMapPin,
        campi: ['CDMX']
    },
    /*<!------------------------------------------------->
    <!--	Competencias en el cine	-->
    <!------------------------------------------------->*/
    {
        playListId: 'PLhMMXwN8RXkwR_OmEenjMmJi3Lr07vAtO',
        title: 'Competencias en el cine',
        icon: faPopcorn,
        campi: ['AGS', 'CDMX', 'GDL']
    },
    /*<!------------------------------------------------->
    <!--	Cómo sobreviví a...	-->
    <!------------------------------------------------->*/
    {
        playListId: 'PLhMMXwN8RXkzQXdiitwc1VMqMZNIh0Xy5',
        title: 'Cómo sobreviví a...',
        icon: faMountainSun,
        campi: ['AGS', 'CDMX', 'GDL']
    },
    /*<!------------------------------------------------->
    <!--	Cómo sobreviví a...	-->
    <!------------------------------------------------->*/
    {
        playListId: 'PLhMMXwN8RXkwqQ7JMSyWl2JYt2B4_sU5O',
        title: 'Apps para ti',
        icon: faAppStoreIos,
        campi: ['AGS', 'CDMX', 'GDL']
    },


];

/*<!--------------------------------------------------------------------------->
<!--	end SmartTips(Data)	-->
<!--------------------------------------------------------------------------->*/

