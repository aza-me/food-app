declare global {
  declare module '@mui/material/styles' {
    interface TypographyVariants {
      'text-xs': React.CSSProperties;
      'text-sm': React.CSSProperties;
      'text-default': React.CSSProperties;
      'text-md': React.CSSProperties;
    }

    interface TypographyVariantsOptions {
      'text-xs': React.CSSProperties;
      'text-sm': React.CSSProperties;
      'text-default': React.CSSProperties;
      'text-md': React.CSSProperties;
    }

    interface Palette {
      primary: Palette['primary'];
      black: Palette['black'];
    }

    interface PaletteOptions {
      primary: PaletteOptions['primary'];
      black: PaletteOptions['black'];
    }

    interface PaletteColor {
      dark?: string;
      light?: string;
      main: string;
    }

    interface SimplePaletteColorOptions {
      dark?: string;
      light?: string;
      main: string;
    }
  }

  // Update the Typography's variant prop options
  declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      'text-xs': true;
      'text-sm': true;
      'text-default': true;
      'text-md': true;
    }
  }
}
