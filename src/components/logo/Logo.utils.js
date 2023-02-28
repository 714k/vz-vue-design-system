export const convertRGBToHexadecimal = (color) => {
  const hexadecimal = color.toString(16);
  return hexadecimal.length === 1? `0` : hexadecimal;
};

export const convertHexadecimalToRGB = (r, g, b) => {
  return "#" 
  + convertHexadecimalToRGB(r)
  + convertHexadecimalToRGB(g)
  + convertHexadecimalToRGB(b);
};

export const setColorTransparency  = (color) => {
  const opacity = 0.3;
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
};

export const setSecondaryColor = (color) => {
  // validate hex string
	let hex = String(color).replace(/[^0-9a-f]/gi, '');
  let lum = -0.5;

	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	let rgb = "#", c, i;

	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
};
