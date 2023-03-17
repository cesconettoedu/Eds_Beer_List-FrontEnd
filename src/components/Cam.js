import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam'


const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 1902,
  height: 1080,
  facingMode: 'user',
}



const Cam = (newFoto) => {
  const navigate = useNavigate();
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const refresh = () => window.location.reload(true)

  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
  })

  return (
    <div className='container text-light mt-4'>
      <h2 className="mb-5 text-center ">
        Beer Photo Capture 
      </h2>
      <div className='showLive'>
        {picture == '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            screenshotQuality={0.5}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div className='btnBtns'>
        {picture != '' ? (
          <>
          <div className='btnCapt'>
            <button
              onClick={() => {
                refresh()
              }}
              className="btn btn-primary "
            >
              Retake
            </button>
            <div>OR</div>
            <button type="button" className="btn btn-primary" onClick={() => newFoto.children.newFoto(picture)}>Save</button>

          </div>
          </>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="btn btn-primary"
          >
            Capture
          </button>
        )}
      <button type="button" className="btn btn-primary" onClick={() => navigate(-1)}>Cancel</button>
      </div>

    </div>
  )
}
export default Cam