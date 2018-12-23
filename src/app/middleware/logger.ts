

export const logger = (type: string, payload: any[], next: Function) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log({ type, payload });
  }
  return next();
};
