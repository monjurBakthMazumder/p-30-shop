import { useState } from 'react';
import './App.css'
import Phones from './Component/Phones/Phones'
import { SpinnerCircular, SpinnerCircularFixed, SpinnerCircularSplit, SpinnerDiamond, SpinnerDotted, SpinnerInfinity, SpinnerRound, SpinnerRoundFilled, SpinnerRoundOutlined } from 'spinners-react';

function App() {

  const [loading, setLoading] = useState('flex')

  return (
    <>
      <div className={`${loading} gap-5 justify-center items-center fixed h-screen w-full bg-white z-50`}>
        <div className="flex flex-col gap-5">
          <SpinnerCircular size={90} thickness={180} speed={180} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
          <SpinnerDiamond size={90} thickness={180} speed={180} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
          <SpinnerRoundOutlined size={90} thickness={180} speed={180} color="#36ad47" />
        </div>
        <div className="flex flex-col gap-5">
          <SpinnerCircularFixed size={90} thickness={180} speed={180} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
          <SpinnerInfinity size={90} thickness={180} speed={180} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" className='my-7'/>
          <SpinnerRound size={90} thickness={180} speed={180} color="#36ad47" />
        </div>
        <div className="flex flex-col gap-5">
          <SpinnerCircularSplit size={90} thickness={180} speed={180} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
          <SpinnerDotted size={90} thickness={180} speed={180} color="#36ad47" />
          <SpinnerRoundFilled size={90} thickness={180} speed={180} color="#36ad47" />
        </div>
      </div>
      <Phones setLoading={setLoading}/>
    </>
  )
}

export default App
