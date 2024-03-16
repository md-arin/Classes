import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'

function App() {
  return(
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp(){
  
const networkNotificationCount = useRecoilValue(networkAtom);
const jobsAtomCount = useRecoilValue(jobAtom);
const messagingAtomCount = useRecoilValue(messageAtom);
const notificationAtomCount= useRecoilValue(notificationAtom);
const totalNotificationCount = useRecoilValue(totalNotificationSelector)

return (
  <>
   <button>Home</button>

   <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
   <button>Jobs ({jobsAtomCount})</button>
   <button>Messaging ({messagingAtomCount})</button>
   <button>Notification ({notificationAtomCount})</button>

   {/* <ButtonUpdater/> */}
   <button>me {totalNotificationCount}</button>
  </>
)
}

// function ButtonUpdater(){
//   const setNotificationAtomCount = useSetRecoilState(notificationAtom);
//   return <button onClick={()=>{
//     setNotificationAtomCount(c => c+1)
//   }}>
//     me
//   </button>
// }

export default App
