/**
  Main application configuration file.

  HP_HOST: Add your production domain here.
  WP_REST_API_HOST: Add the production wp-rest api domain here.
  WP_REST_PATH: Defaults to latest wp-rest api path. Should be updated if changed.
  CDN_HOST_URL: Add the CDN domain assigned to your by your provider. Set to HP_HOST if none.

  Import this file on all all elements that use absolute urls to
  external providers. Best if setup for your own needs if any.
*/

export const HP_HOST = 'https://localhost:6443';
export const WP_HOST = 'https://litpress.dev';
export const WP_REST_HOST = 'https://demo.wp-api.org/';
export const WP_REST_PATH = 'wp-json/wp/v2';
export const CDN_HOST_URL = 'https://storage.googleapis.com/';
export const CDN_BUCKET_NAME = '';
