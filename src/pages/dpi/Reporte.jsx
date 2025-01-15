
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
    const [iframeHeight, setIframeHeight] = useState("500px"); // fallback or default

    useEffect(() => {
        const handleMessage = (event) => {
            /* 
         We'll do a simple "endsWith" check to allow messages
         from script.googleusercontent.com. 
         (You may also add more domains to handle dev or other variants.)
      */
            if (!event.origin.endsWith("script.googleusercontent.com")) {
                console.warn("Message from unexpected origin:", event.origin);
                return;
            }

            // If the data contains a frameHeight property, update local state
            if (event.data && typeof event.data.frameHeight === "number") {
                setIframeHeight(event.data.frameHeight + "px");
            }
        };

        // Add the event listener on mount
        window.addEventListener("message", handleMessage);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);




    //id of the current implementation in the backend google script, should change each time a new implementation is created, campi sensitive. 
    //TODO: add the ID of the implementation for each campus
    const implementationId = (() => {
        switch (campus) {
            case 'AGS':
                return null
            case 'GDL':
                return null
            case 'CDMX':
                return 'AKfycby9kqV7SKmyBpUOFEXcaXMCM3WIGhmTtWJl7DGGndnQhXo1yMUgeswnNI-SPpOGolDTvA';
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
            console.log('Component is unmounting');
        };
    }, [id]);
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
}
