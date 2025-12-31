const breaks = {
  small: 0,
  medium: 720,
  large: 1023,
};

export const breakPoints = {
  small: `${breaks.small}px`,
  medium: `${breaks.medium}px`,
  large: `${breaks.large}px`,
};

export const gutters = {
  none: "0rem",
  close: "0.125rem",
  default: "0.5rem",
  open: "1.5rem",
};

export const cellPadding = "0.5rem";
export const documentWidth = "80rem";

export const smallOnly = `"(max-width: ${breaks.medium}px)"`;
export const mediumOnly = `"(min-width: ${breaks.medium + 1}px) and (max-width: ${breaks.large - 1}px )"`;
export const largeOnly = `"(min-width: ${breaks.large})"`;
