import { MiddlewareFunction } from 'simred';

export const logger: MiddlewareFunction = (type, payload, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log({ type, payload });
  }
  return next();
};
