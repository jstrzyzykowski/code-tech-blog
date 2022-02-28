import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height: 80vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: whitesmoke;
`;
