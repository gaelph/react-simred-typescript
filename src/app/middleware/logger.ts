

export const logger = () => (next: Function) => (type: string, payload: any[]) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log({ type, payload });
  }
  return next();
};
