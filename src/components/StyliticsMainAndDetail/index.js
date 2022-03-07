import React, { useRef } from 'react'
import { useScript } from './useScript'
import { useWidget } from './useWidget'
import './index.css'


export default function StyliticsMainAndDetail({ client, options }) {
  const widgetContainer = useRef(null)
  const dist = `https://web-assets.stylitics.com/v3-main-and-detail/latest/main-and-detail.release.js`

  useScript(dist, 'stylitics-script');
  useWidget(client, 'stylitics-widget-container', options);

  return ( <div id="stylitics-widget-container" ref={widgetContainer}></div> );
}
