/*<---------------------------------------------------------------------------->
<!--	DPI/reporte(page)	-->
<!----------------------------------------------------------------------------->
* Description: This page is responsible for rendering the DPI report for a specific student. It uses the 'id' parameter from the URL to fetch the report from the backend. The report is displayed in an iframe. The URL for the iframe is built using the 'id' parameter and the campus context. This page is campus sensitive, meaning that the URL for the iframe is different for each campus.
     
* Parameters:
    - none
* Dependencies:
    - useParams: to extract the 'id' parameter from the URL
    - useEffect: to run side effects
    - useState: to manage state
    - useCampus: to get the campus from the context
    - styles: to style the page

* Returns/results: Renders the page itself with the student's report.
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//React
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
//context
import useCampus from '@hooks/useCampus';
//styles
import styles from './Reporte.module.css'



export default function Reporte() {

    // Get the campus from the context
    const { campus } = useCampus();

    // Extract the 'id' parameter from the URL
    const { id } = useParams();

    // State to hold the frame URL
    const [frameURL, setFrameURL] = useState("");

    // State to keep track of the iframe height
    const [iframeHeight, setIframeHeight] = useState("3300px"); // fallback or default


    /*<------------------------------------------------->
    <!--	build the URL for iframe	-->
    <!------------------------------------------------->*/
    //id of the current implementation in the backend google script, should change each time a new implementation is created, campi sensitive. 

    const implementationId = (() => {
        switch (campus) {
            case 'AGS':
                return 'AKfycbznd-h2Ef_YfWngHuNZUhnrtvxNUtmwiYSawnIoaVZwmOCVj9ZcLdt3BeSkg6uTptLJ'
            case 'GDL':
                return 'AKfycbz6OuZU2s2piOSsp3bbdap6K7uxAUDXAIpVEn9b6ic4lzT482lT4dGYl0fkd_cxzUxlZw'
            case 'CDMX':
                return 'AKfycbyfV__0Aa3RTAKyJ3S1mY1M2KVbGkgIIOHndm4ogJz2l5EZrga_meslMCNTAi89js6nHA';
            default:
                return null
        }
    })(); //immediately invoked function

    useEffect(() => {


        //build the new url
        const newFrameURL = `https://script.google.com/a/up.edu.mx/macros/s/${implementationId}/exec?id=${id}`;
        setFrameURL(newFrameURL);

        // Optional cleanup function (if needed)
        return () => {
            console.log('Reloading DPI...');
        };
    }, [implementationId, campus]);
    /*<!------------------------------------------------->
    <!--	end build the URL for iframe	-->
    <!------------------------------------------------->*/

    /*<------------------------------------------------->
    <!--	rendering logic	-->
    <!------------------------------------------------->*/
    return (
        <section className={styles.dpi} >

            {frameURL &&
                (<iframe
                    className={styles.dpiIframe}
                    src={frameURL}
                    style={{ height: iframeHeight }}
                    scrolling="no"></iframe>)}

        </section>
    )
    /*<!------------------------------------------------->
    <!--	end rendering logic	-->
    <!------------------------------------------------->*/
}

/*<!--------------------------------------------------------------------------->
<!--	end DPI/reporte(page)	-->
<!--------------------------------------------------------------------------->*/