/*<---------------------------------------------------------------------------->
<!--	LazyImages (Component helper)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//react
import React, { useState, useEffect, useRef } from 'react';


const LazyImage = ({ src, alt, className, style, ...props }) => {
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const ref = useRef(null);

    /*<------------------------------------------------->
    <!--	Create an observer for all the images	-->
    <!------------------------------------------------->*/
    useEffect(() => {
        //Create a new observer it will recibe a set of images
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            });
        });
        //If the image is in the viewport, the observer will observe it
        if (ref.current) {
            observer.observe(ref.current);
        }
        //Cleanup: When the component is unmounted, the observer will disconnect
        return () => {
            observer.disconnect();
        };
    }, []);

    /*<!------------------------------------------------->
    <!--	end Create an observer for all the images	-->
    <!------------------------------------------------->*/

    /*<------------------------------------------------->
    <!--	rendering logic	-->
    <!------------------------------------------------->*/
    return (
        //this is the container for the image
        //it will display a placeholder before the image loads
        <div
            ref={ref}
            style={{
                ...style,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* if the image is in view it will populate it */}
            {isInView ? (
                <img
                    src={src}
                    alt={alt}
                    className={className}
                    onError={() => setHasError(true)}
                    {...props}
                    style={
                        hasError
                            ? { ...style, objectFit: 'contain', background: '#ccc' }
                            : style
                    }
                />
            ) : (
                // Placeholder before the image loads
                <div style={{ width: '100%', height: '100%', background: '#eee' }} />
            )}
        </div>
    );

    /*<!------------------------------------------------->
    <!--	end rendering logic	-->
    <!------------------------------------------------->*/
};

export default LazyImage;

/*<!--------------------------------------------------------------------------->
<!--	end LazyImages(Component helper)	-->
<!--------------------------------------------------------------------------->*/

