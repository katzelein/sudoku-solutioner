export const reformatInput = (inputVal: string) => {
  const shouldUseFirstVal = !Number(inputVal) && inputVal.length > 1;
  const shouldRemoveVal = !Number(inputVal) || inputVal.length === 0;
  const shouldUseEndVal = inputVal.length > 1;

  if (shouldUseFirstVal) return Number(inputVal.slice(0, 1));
  if (shouldRemoveVal) return 0;
  if (shouldUseEndVal) return Number(inputVal.slice(-1));
  return Number(inputVal);
};
