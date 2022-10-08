export declare global {
  type AnyObject = Record<string, unknown>;

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: string;

      APP_NAME: string;
    }
  }

  namespace Express {
    interface Request {
      id: string;
    }
  }
}