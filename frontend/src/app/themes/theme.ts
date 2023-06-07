import { createTheme } from '@mui/material';
import { COLORS } from '@/app/constants/COLORS';

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY,
      light: COLORS.PRIMARY_LIGHT,
    },
    black: {
      main: COLORS.BLACK,
    },
  },
  typography: {
    htmlFontSize: 10,
    'text-xs': {
      font: '12px Inter',
    },
    'text-sm': {
      font: '14px Inter',
    },
    'text-default': {
      font: '16px Inter',
    },
    'text-md': {
      font: '20px Inter',
    },
    'text-lg': {
      font: '24px Inter',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          font: '14px Inter',
          color: COLORS.TEXT_GRAY,
          marginBottom: '8px',
        },
        asterisk: {
          color: '#FF4B4B',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          borderRadius: '4px',
          padding: '0 16px',
          height: '38px',
        },
        root: {
          border: `1px solid ${COLORS.BORDER_1}`,
          color: COLORS.WHITE,
          font: '14px Inter',
          padding: '0',
          borderRadius: '5px',
          '&.Mui-error': {
            borderColor: COLORS.DANGER,
          },
          '&.Mui-disabled': {
            background: COLORS.LIGHT,
            borderColor: COLORS.DARK_GRAY,
          },
        },
        inputAdornedEnd: {
          '& ~ svg': {
            marginRight: '12px',
          },
        },
        notchedOutline: {
          border: 'none',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          font: '12px Inter',
          color: COLORS.DANGER,
          padding: 0,
          marginTop: '6px',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          minWidth: '150px',
          '& .MuiInputBase-root': {
            height: '38px',
            padding: '0 !important',
          },
          '& .MuiInputBase-input': {
            height: '38px',
            padding: '0 20px !important',
            fontSize: '14px',
            color: COLORS.TEXT_GRAY,
          },
          '& .MuiButtonBase-root svg': {
            width: '24px',
            height: '24px',
            fill: COLORS.BORDER_1,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          background: 'transparent',
          '& .MuiAutocomplete-listbox': {
            color: COLORS.TEXT_GRAY,
            marginTop: '5px',
            borderRadius: '4px',
            background: COLORS.BLACK,
            border: 0,
            '& li': {
              fontSize: '14px',
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: '38px',
        },
      },
    },
  },
});
