export const flexPosition = (
  align?: string | false,
  justify?: string | false,
  direction?: string
): string => `
  display: flex;
  ${align && `align-items: ${align};`}
  ${justify && `justify-content: ${justify};`};
  ${direction && `flex-direction: ${direction};`};
`;
