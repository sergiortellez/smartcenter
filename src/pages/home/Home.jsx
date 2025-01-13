/*<------------------------------------------------->
<!--	homePage(page)	-->
<!-------------------------------------------------->
* Description:
    
* Parameters:
    -
* Dependencies:
* Returns/results:
<!------------------------------------------------->*/

//imports

//sections
import Hero from './Hero/Hero';
import Experiences from './Experiences/Experiences';
import WhoAreWe from './WhoAreWe/WhoAreWe';
import ContactUs from './ContactUs/ContactUs';




export default function Home() {

    return (
        <>
            {/* Hero section */}
            <Hero />
            {/* Our experiences section */}
            <Experiences />
            {/* About us section */}
            <WhoAreWe />
            {/* Contact section */}
            <ContactUs />
        </ >
    )
}
/*<!------------------------------------------------->
<!--	end homePage(page)	-->
<!------------------------------------------------->*/





