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
import SmartTips from './SmartTips/SmartTips';




export default function Home() {

    return (
        <>
            {/* Hero section */}
            <Hero />
            {/* Our experiences section */}
            <Experiences />
            {/* About us section */}
            <WhoAreWe />
            {/* SMART Tips section */}
            <SmartTips />
            {/* Contact section */}
            <ContactUs />
        </>
    )
}
/*<!------------------------------------------------->
<!--	end homePage(page)	-->
<!------------------------------------------------->*/





