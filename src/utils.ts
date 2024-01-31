export const formatList = (arr: string[]) => {
  return new Intl.ListFormat(undefined, {
    type: "conjunction",
  }).format(arr);
};
