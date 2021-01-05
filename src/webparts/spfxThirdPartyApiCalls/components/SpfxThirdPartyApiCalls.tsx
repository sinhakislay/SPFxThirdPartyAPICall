import * as React from 'react';
import styles from './SpfxThirdPartyApiCalls.module.scss';
import { ISpfxThirdPartyApiCallsProps } from './ISpfxThirdPartyApiCallsProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpfxThirdPartyApiCalls extends React.Component<ISpfxThirdPartyApiCallsProps, {}> {
  public render(): React.ReactElement<ISpfxThirdPartyApiCallsProps> {
    return (
      <div className={ styles.spfxThirdPartyApiCalls }>
  <div className={ styles.container }>
    <div className={ styles.row }>
    <span className={ styles.title }>A demo by SYNK Ventures - Let's talk Microsoft 365</span>
      <div className={ styles.column }>
        <span className={ styles.title }>SPFX Third Party API Call</span>
        
      </div>
    </div>

    <div className={ styles.row }>
      
      <div><strong>Chuck Norris Joke:</strong> { this.props.JokeText }</div>
     
      
    </div>

  </div>
</div>
    );
  }
}
