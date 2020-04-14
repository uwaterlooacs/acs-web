import styled, { StyledComponentProps } from 'styled-components/macro';
import ReactTooltip, { Props as ReactTooltipProps } from 'react-tooltip';
import { variant } from 'styled-system';

type StyledTooltipProp = StyledComponentProps<
  'div',
  any,
  ReactTooltipProps & { variant: 'stayOnHover' },
  never
>;
const StyledTooltip = styled(ReactTooltip)<StyledTooltipProp>(
  variant({
    variants: {
      stayOnHover: {
        pointerEvents: 'auto !important',
        '&:hover': {
          visibility: 'visible !important',
          opacity: '1 !important',
        },
      },
    },
  }),
);

export default StyledTooltip;
