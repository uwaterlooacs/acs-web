import styled from 'styled-components/macro';
import Box from 'components/Box';

export const Centered = styled(Box)({
  width: '100%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default Centered;
