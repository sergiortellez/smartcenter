/*<---------------------------------------------------------------------------->
<!--	SimplyBookMe (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------

import React, { useEffect, useRef } from 'react';

function BookingWidget({ location = '1' }) {
  const widgetContainerRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    if (scriptRef.current) {
      // Remove the previous script before adding a new one
      document.head.removeChild(scriptRef.current);
      scriptRef.current = null;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = "//widget.simplybook.me/v2/widget/widget.js";
    script.onload = () => {
      // Clear previous widget instance before creating a new one
      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = '';
      }

      new SimplybookWidget({
        "widget_type": "iframe",
        "url": "https://reloadtalent.simplybook.me",
        "theme": "space",
        "theme_settings": {
          "timeline_hide_unavailable": "1",
          "sb_base_color": "#ac8a54",
          "hide_past_days": "0",
          "timeline_show_end_time": "0",
          "timeline_modern_display": "as_slots",
          "display_item_mode": "block",
          "body_bg_color": "#f5f5f5",
          "sb_review_image": "",
          "dark_font_color": "#000000",
          "light_font_color": "#ffffff",
          "btn_color_1": "#122e5b",
          "sb_company_label_color": "#ffffff",
          "hide_img_mode": "0",
          "show_sidebar": "1",
          "sb_busy": "#000",
          "sb_available": "#ddd4c2",
          "service-item": "#000"
        },
        "timeline": "flexible_provider",
        "datepicker": "top_calendar",
        "is_rtl": false,
        "app_config": {
          "clear_session": 0,
          "allow_switch_to_ada": 0,
          "predefined": { "location": location }
        },
        "container_id": "sbw_406w10"
      });
    };

    scriptRef.current = script;
    document.head.appendChild(script);

    return () => {
      if (scriptRef.current) {
        document.head.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, [location]);

  return <div id="sbw_406w10" ref={widgetContainerRef}></div>;
}

export default BookingWidget;




/*<!--------------------------------------------------------------------------->
<!--	end SimplyBookMe(Component)	-->
<!--------------------------------------------------------------------------->*/

