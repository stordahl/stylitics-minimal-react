import { useEffect } from "react";

export const useWidget = (client, target, options) => {
  useEffect(() => {
    if(window.StyliticsMainAndDetailWidget){
      const StyliticsMainAndDetail = window.StyliticsMainAndDetailWidget;
      const widgetInstance = new StyliticsMainAndDetail(client, target, options);
      widgetInstance.start();
    }

    return () => {
      const elem = document.getElementById(target)
      elem.remove()
    }
  }, [client, options])
  return null
}