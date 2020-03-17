import styled from 'styled-components/macro';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
} from 'styled-system';

type DividerProps = SpaceProps & LayoutProps & BorderProps;
const Divider = styled.hr<DividerProps>`
  ${space}
  ${layout}
  ${border}
`;

Divider.defaultProps = {
  width: 0.5,
  borderColor: 'black',
};

export default Divider;
