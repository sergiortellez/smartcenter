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

//images
import popcorn from '@assets/intercampi/tips/popcorn.webp'
import map from '@assets/intercampi/tips/map.webp'
import knife from '@assets/intercampi/tips/knife.webp'
import apps from '@assets/intercampi/tips/apps.webp'

export const Playlists = [

    /*<------------------------------------------------->
    <!-- Up Explorer CDMX 	-->
    <!------------------------------------------------->*/
    {
        playListId: 'PLhMMXwN8RXkz3zpbF_nBQc_WID0ntJGfH',
        title: 'Up Explorer',
        icon: map,
        campi: ['CDMX']
    },
    /*<!------------------------------------------------->
    <!--	Competencias en el cine	-->
    <!------------------------------------------------->*/
    {
        playListId: 'PLhMMXwN8RXkwR_OmEenjMmJi3Lr07vAtO',
        title: 'Competencias en el cine',
        icon: popcorn,
        campi: ['AGS', 'CDMX', 'GDL']
    },
    /*<!------------------------------------------------->
    <!--	Cómo sobreviví a...	-->
    <!------------------------------------------------->*/
    {
        playListId: 'PLhMMXwN8RXkzQXdiitwc1VMqMZNIh0Xy5',
        title: 'Cómo sobreviví a...',
        icon: knife,
        campi: ['AGS', 'CDMX', 'GDL']
    },
    /*<!------------------------------------------------->
    <!--	Cómo sobreviví a...	-->
    <!------------------------------------------------->*/
    {
        playListId: 'PLhMMXwN8RXkwqQ7JMSyWl2JYt2B4_sU5O',
        title: 'Apps para ti',
        icon: apps,
        campi: ['AGS', 'CDMX', 'GDL']
    },


];

/*<!--------------------------------------------------------------------------->
<!--	end SmartTips(Data)	-->
<!--------------------------------------------------------------------------->*/

