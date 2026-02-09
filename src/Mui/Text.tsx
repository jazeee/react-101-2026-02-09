import { Typography, type TypographyProps } from '@mui/material';
import {
  MUI_TYPOGRAPHY_VARIANTS,
  type TypographyVariant,
} from './Typography/constants';

export interface TextProps extends Omit<
  TypographyProps<'p'>,
  'component' | 'as' | 'variant'
> {
  variant?: TypographyVariant;
  component?: 'span' | 'p';
}

export function Text(props: TextProps) {
  const { variant = 'body1', component = 'p', ...rest } = props;
  return (
    <Typography
      {...rest}
      component={component}
      variant={MUI_TYPOGRAPHY_VARIANTS[variant]}
    />
  );
}
