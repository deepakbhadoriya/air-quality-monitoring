import styled from 'styled-components';

const Text = styled.span`
  font-size: ${(props) => props.size || '18'}px;
  color: ${(props) => props.color || '#363636'};
  font-weight: ${(props) => props.weight || '400'};

  @media (max-width: 768px) {
    font-size: ${(props) => props.mSize || props.size - 2 || '16'}px;
  }
`;

export default Text;
