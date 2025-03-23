import React from 'react'
import "./Videoroom.css"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom'

function Videoroom() {
  const {roomId} = useParams()
  let myMeeting = async (element) => {
    const appID = 1686841252
    const serverSecret = "2956b7eefacf43c9b9d8bf51c63adf1c"
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, "1234",  "SOUVIK SAHA", 3600)

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'copy link',
          url: `http://localhost:5173/room/${roomId}`,
        },
      ],
      scenario: {
       mode: ZegoUIKitPrebuilt.VideoConference,
      },
    })
  }

  return (
    <div>
      <div ref={myMeeting}/>
    </div>
  )
}

export default Videoroom
