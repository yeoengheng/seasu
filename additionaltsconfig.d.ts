declare namespace NodeJS {
    export interface ProcessEnv {
      DB_URL: string;
      DB_KEY: string;
      SERVICE_ID: string;
      TEMPLATE_ID: string;
      EMAIL_KEY: string;
    }
  }