import React, { FC, MouseEvent, useState, useRef, useEffect } from 'react';
import { Button } from '../Button/Button';
import * as style from './style';

type ButtonClick = MouseEvent<HTMLButtonElement>;

export const ModalCamera: FC = () => {
  const [showTakePicture, setShowTakePicture] = useState<Boolean>(true);
  const videoStream = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  const getBrowserVideo = async () => {
    try {
      const mediaConfig = { video: true, facingMode: { exact: 'user' } };
      const stream = await navigator?.mediaDevices?.getUserMedia(mediaConfig);
      if (null !== videoStream.current) {
        videoStream.current.srcObject = stream;
        videoStream.current.play();
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBrowserVideo();
  }, []);

  const takePicture = (e: ButtonClick) => {
    e.preventDefault();
    if (null !== videoStream.current) {
      const context = canvas?.current?.getContext('2d');
      context?.drawImage(videoStream.current, 0, 0, 640, 480);
      setShowTakePicture(false);
    }
  };

  const generateImageData = (e: ButtonClick) => {
    e.preventDefault();
    const image = canvas?.current?.toDataURL('image/jpeg', 1.0);
    console.log('Base64 image');
    console.log(image);
    return image;
  };

  return (
    <style.ModalOverlay>
      <style.ModalContainer>
        <video
          ref={videoStream}
          width="640"
          height="480"
          style={{ display: !showTakePicture ? 'none' : 'block' }}
        ></video>
        <canvas
          ref={canvas}
          width="640"
          height="480"
          style={{ display: showTakePicture ? 'none' : 'block' }}
        ></canvas>
        <style.ModalButtonContainer>
          {showTakePicture && (
            <Button title="take a picture" action={takePicture} />
          )}
          {!showTakePicture && (
            <>
              <Button
                title="take another"
                action={() => setShowTakePicture(true)}
              />
              <Button title="it`s ok" action={generateImageData} />
            </>
          )}
        </style.ModalButtonContainer>
      </style.ModalContainer>
    </style.ModalOverlay>
  );
};
