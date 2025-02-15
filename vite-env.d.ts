/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FACEBOOK_ACCESS_TOKEN: string;
  readonly VITE_FACEBOOK_AD_ACCOUNT_ID: string;
  // add more environment variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}