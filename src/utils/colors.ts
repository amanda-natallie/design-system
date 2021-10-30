export const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};

export const rgbaToHex = (rgba: string): string => {
  const r = parseInt(rgba.slice(5, 7), 10);
  const g = parseInt(rgba.slice(9, 11), 10);
  const b = parseInt(rgba.slice(13, 15), 10);
  const a = parseInt(rgba.slice(17, 19), 10);

  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}${a.toString(
    16
  )}`;
};
