import type { TypographyProps } from '@mui/material';

export type TypographyVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

export const MUI_TYPOGRAPHY_VARIANTS: Record<
  TypographyVariant,
  TypographyProps['variant']
> = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  heading6: 'h6',
  body1: 'body1',
  body2: 'body2',
  caption: 'caption',
  overline: 'overline',
};
