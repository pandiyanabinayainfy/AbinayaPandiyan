import React, { Suspense } from 'react'
const RewardPoints = React.lazy(() => import ('./components/rewardPoints'))

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Reward board</h1>
      <Suspense fallback={<>Calculating reward points...</>}>
        <RewardPoints />
      </Suspense>
      
    </div>
  );
}

export default App
