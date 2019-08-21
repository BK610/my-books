import {DefaultTheme} from 'atomize';

export const theme = {
    ...DefaultTheme,
    fontFamily: {
        ...DefaultTheme.fontFamily,
        //TODO: Pick a new primary font. Again, terrible.
        primary: "Montserrat",
        secondary: "Alegreya"
    },
    colors: {
        ...DefaultTheme.colors,
        brandLight: "#EFEEED",
        brandLightAccent: "#98898C",
        brandMain: "#5213AF",
        brandDark: "#252434",
        brandDarkAccent: "#FB7373"
    }
};