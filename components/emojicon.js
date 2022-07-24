import styled from '@emotion/styled'

const Emojicon = styled.span`
  display: inline-block;
  font-size: 1em;
  cursor: pointer;
  filter: grayscale(1);
  transform: scale(1);
  transition: all 0.2s;

  &:hover {
    filter: grayscale(0);
    transform: scale(2);
  }
`

export default Emojicon
