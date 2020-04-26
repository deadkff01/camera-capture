import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  background: rgba(000, 000, 000, 0.8);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 640px;
  height: 480px;
  background: #f1f1f1;
  canvas,
  video {
    position: absolute;
    z-index: 7;
  }
`;

export const ModalButtonContainer = styled.div`
  background: rgba(000, 000, 000, 0.8);
  position: absolute;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 80px;
  bottom: 0px;
`;
