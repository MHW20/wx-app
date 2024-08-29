export const isArrayEmpty = (arr: any[] | undefined | null): boolean => {
  return !arr || arr.length === 0;
};
