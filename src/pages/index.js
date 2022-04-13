import React from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

class Indexpage extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }
  componentDidMount() {
    // 3. listen for player load. see lottie player repo for other events
    this.myRef.current.addEventListener('load', function (e) {
      // 4. configure the interactivity library
      create({      
        player: '#firstLottie',
        mode:"scroll",
        actions: [
          {
            visibility:[0, 1],
            type: "loop",
            frames: [1, 90]
          }
        ]
    });
    });
  }
  render() {
    return (
      <div className="Indexpage" style={{ height: '400vh' }}>
        <div style={{ height: '300vh',width:"300" , marginTop:"0", zIndex:-1  }}>
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="firstLottie"
          mode="normal"
          src="https://assets5.lottiefiles.com/packages/lf20_rk7qungy.json"
          style={{ width: '200vh', height:"200vh",marginTop:"-350px" }}
        ></lottie-player>
        </div>
      </div>
    );
  }
}

export default Indexpage;