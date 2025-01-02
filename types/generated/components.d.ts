import type { Schema, Attribute } from '@strapi/strapi';

export interface MediacomponentsVideoEmbed extends Schema.Component {
  collectionName: 'components_mediacomponents_video_embeds';
  info: {
    displayName: 'VideoEmbed';
    icon: 'medium';
    description: '';
  };
  attributes: {
    Width: Attribute.Float;
    Height: Attribute.Float;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'mediacomponents.video-embed': MediacomponentsVideoEmbed;
    }
  }
}
