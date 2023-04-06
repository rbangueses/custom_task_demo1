import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';
import DialButtonComponent from './components/DialButtonComponent';
import DataOnCanvasComponent from './components/DataOnCanvasComponent';


const PLUGIN_NAME = 'CustomObdDialPlugin';

export default class CustomObdDialPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    const options = { sortOrder: -1 };

    flex.TaskCanvasHeader.Content.add(<DialButtonComponent key="call" buttonName="Call now" flex={flex} />,);
    flex.TaskCanvasHeader.Content.add(<DialButtonComponent key="wa" buttonName="WhatsApp" flex={flex} />,);
    flex.TaskCanvasHeader.Content.add(<DialButtonComponent key="tg" buttonName="Telegram" flex={flex} />,);

    flex.TaskCanvasTabs.Content.add(<DataOnCanvasComponent key="data-on-canvas-comp" flex={flex} label="External Data"/>);
  }
}
