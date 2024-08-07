import imageUrlBuilder from '@sanity/image-url';
import { PortableText as PortableTextComponent } from '@portabletext/react';
import { definePreview } from 'next-sanity/preview';

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true
};

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}

export const usePreview = definePreview({ ...config, onPublicAccessOnly });

const builder = imageUrlBuilder(config);
export const urlFor = (source) => builder.image(source);

export const PortableText = (props) => <PortableTextComponent components={{}} {...props} />;
