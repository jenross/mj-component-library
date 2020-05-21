import { primary, primaryDark, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
    primaryPurple: primary[100],
    primaryPurpleHover: primaryDark[100], 
    primaryPurpleActive: primaryDark[100],
    secondaryCream: primary[400],
    secondaryCreamHover: primaryDark[400],
    secondaryCreamActive: primaryDark[400],
    tertiaryNeutral: neutral[100],
    textColorOnPrimary: primary[400],
    textColorOnSecondary: primary[100], 
    textColorOnTertiary: primary[100],
    primaryFont
}