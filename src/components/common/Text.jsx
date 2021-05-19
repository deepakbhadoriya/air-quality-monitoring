import styled from 'styled-components';

const Text = styled.span`
  font-size: ${(props) => props.size || '18px'};
  color: ${(props) => props.color || '#363636'};
  font-weight: ${(props) => props.weight || '400'};
`;

export default Text;
