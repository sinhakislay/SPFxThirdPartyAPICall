import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  HttpClient,
  HttpClientResponse
} from '@microsoft/sp-http';

import * as strings from 'SpfxThirdPartyApiCallsWebPartStrings';
import SpfxThirdPartyApiCalls from './components/SpfxThirdPartyApiCalls';
import { ISpfxThirdPartyApiCallsProps } from './components/ISpfxThirdPartyApiCallsProps';

export interface ISpfxThirdPartyApiCallsWebPartProps {
  description: string;
}

export default class SpfxThirdPartyApiCallsWebPart extends BaseClientSideWebPart<ISpfxThirdPartyApiCallsWebPartProps> {

  public render(): void {
    if (!this.renderedOnce) {
      this._getJoke()
        .then(response => {
          const element: React.ReactElement<ISpfxThirdPartyApiCallsProps > = React.createElement(
            SpfxThirdPartyApiCalls,
            {
              JokeText : response
            }
          );
  
          ReactDom.render(element, this.domElement);
        });
    }
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  private _getJoke(): Promise<any> {
    return this.context.httpClient.get(
      `https://geek-jokes.sameerkumar.website/api`,
      HttpClient.configurations.v1
    )
    .then((response: HttpClientResponse) => {
      return response.text();
    })
    .then(textResponse => {
      return textResponse;
    }) as Promise<any>;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
