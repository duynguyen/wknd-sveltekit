/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 */

import AEMHeadless from '@adobe/aem-headless-client-js';
import { PUBLIC_AEM_HOST, PUBLIC_GRAPHQL_ENDPOINT } from '$env/static/public';
import { AEM_AUTH } from '$env/static/private';

export class AdventureClient {
  static fromEnv() {
    if (!this.__envClient) {
      this.__envClient = new AdventureClient({
        serviceURL: PUBLIC_AEM_HOST,
        endpoint: PUBLIC_GRAPHQL_ENDPOINT,
        auth: AEM_AUTH,
      });
    }
    return this.__envClient;
  }
  constructor({ serviceURL, endpoint, auth }) {
    this.aemHeadlessClient = new AEMHeadless({
      serviceURL,
      endpoint,
      auth,
      fetch
    });
  }

  async getAllAdventures() {
    // const queryAdventuresAll = 'aem-demo-assets/adventures-all';
    // const res = await this.aemHeadlessClient.runPersistedQuery(queryAdventuresAll);
    const query = `{
      adventureList {
        items {
          _path
            title
            activity
            adventureType
            price
            tripLength
            groupSize
            difficulty
            primaryImage {
              ... on ImageRef {
                _path
                mimeType
                width
                height
              }
            }
            description {
                html
            }
            itinerary {
              html
            }
        }
      }
    }
    `;
    const res = await this.aemHeadlessClient.runQuery(query);
    return res;
  }

  async getAdventurePaths() {
    const res = await this.getAllAdventures();
    const adventures = res?.data?.adventureList?.items || [];
    const paths = adventures.map((item) => ({
      params: {
        path: [item.slug],
      }
    }));
    return paths;
  }

  async getAdventureByPath(path) {
    const query = `{
      adventureByPath (_path: "${path}") {
        item {
          _path
            title
            activity
            adventureType
            price
            tripLength
            groupSize
            difficulty
            primaryImage {
              ... on ImageRef {
                _path
                mimeType
                width
                height
              }
            }
            description {
              html
            }
            itinerary {
              html
            }
        }
      }
    }
    `;
    const res = await this.aemHeadlessClient.runQuery(query);
    return res;
  }
}
