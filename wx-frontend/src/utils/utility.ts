export const isArrayEmpty = (arr: any[] | undefined | null): boolean => {
  return !arr || arr.length === 0;
};

export const isUndefinedOrEmpty = (str: string | undefined | null): boolean => {
  return str === undefined || str === null || str.trim().length === 0;
};
