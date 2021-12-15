import { Fireworks } from 'fireworks-js/dist/react';
import classes from './FireworksBackground.module.css';

function FireworksBackground(){
  // for confetti https://ulitcos.github.io/react-canvas-confetti/
    const options = {
      "delay": {
        "min": 50,
        "max": 100
      },
      "rocketsPoint": 50,
      "opacity": 0.5,
      "speed": 5,
      "acceleration": 1,
      "friction": 0.97,
      "gravity": 2.1,
      "particles": 200,
      "trace": 3,
      "explosion": 8,
      "autoresize": true,
      "brightness": {
          "min": 50,
          "max": 80,
          "decay": {
              "min": 0.015,
              "max": 0.03
          }
      },
    }
    
      const style = {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        background: 'transparent',
        zIndex: 10
      }
    
      return (
        <div className={classes.firework}>
          <Fireworks options={options} style={style} />
          </div> 
      )
}

export default FireworksBackground;