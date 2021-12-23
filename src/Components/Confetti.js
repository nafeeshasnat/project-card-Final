import React, { useCallback, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import classes from './Confetti.module.css';

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

export default function Realistic() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot1 = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { x:0, y: 1 },
        particleCount: Math.floor(400 * particleRatio)
      });
  }, []);

  const makeShot2 = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { x:1, y: 1 },
        particleCount: Math.floor(400 * particleRatio)
      });
  }, []);

  const fire1 = useCallback(() => {
    makeShot1(0.25, {
      spread: 26,
      startVelocity: 155
    });

    makeShot1(0.2, {
      spread: 160
    });

    makeShot1(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot1(0.1, {
      spread: 220,
      startVelocity: 125,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot1(0.1, {
      spread: 220,
      startVelocity: 145
    });
  }, [makeShot1]);

  const fire2 = useCallback(() => {
    makeShot2(0.25, {
      spread: 26,
      startVelocity: 155
    });

    makeShot2(0.2, {
      spread: 160
    });

    makeShot2(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot2(0.1, {
      spread: 220,
      startVelocity: 125,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot2(0.1, {
      spread: 220,
      startVelocity: 145
    });
  }, [makeShot2]);

  return (
    <>
      <button className={classes.fire} id="fire1" onClick={fire1}>Fire</button>
      <button className={classes.fire} id="fire2" onClick={fire2}>Fire</button>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}
