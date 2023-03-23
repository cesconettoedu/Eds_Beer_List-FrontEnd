import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 1060,
  height: 1440,
  facingMode: "user",
};

const Cam = (newFoto) => {
  const navigate = useNavigate();
  const [picture, setPicture] = useState("");
  const webcamRef = React.useRef(null);
  const refresh = () => window.location.reload(true);

  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });

  return (
    <div className="container text-light mt-4">
      <h2 className="mb-5 text-center ">Beer Photo Capture</h2>
      <div className="showLive ">
        {picture == "" ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            screenshotQuality={0.7}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} className="borderFoto" />
        )}
      </div>

      <div className="btnBtns">
        {picture != "" ? (
          
            <div className="btnCapt ">
              
              <button type="button" className="btn3d btn btn-success btn-lg" onClick={() => newFoto.children.newFoto(picture)} >
                <i class="bi bi-file-earmark-arrow-down"></i> Save
              </button>
              
              <button type="button" className="btn3d btn btn-warning btn-lg" onClick={() => {refresh()}} >
                <i class="bi bi-camera"></i> Retake
              </button>

              <button type="button" className="btn3d btn btn-danger btn-lg" onClick={() => navigate(-1)} >
                <i class="bi  bi-x-square"></i> Cancel
              </button>

            </div>
          
        ) : (

          <div className="">

            <button type="button" className="btn3d btn btn-default btn-lg " onClick={(e) => { e.preventDefault(); capture(); }} >
              <i class="bi bi-record-circle"></i> 
            </button>

            <button type="button" className="btn3d btn btn-danger btn-lg" onClick={() => navigate(-1)} >
              <i class="bi  bi-x-square"></i>
            </button>

          </div>

        )}
      </div>
    </div>
  );
};
export default Cam;

// https://codepen.io/bepctak/pen/ojXjzR
// 	<button type="button" class="btn btn-danger btn-lg btn3d"><span class="glyphicon glyphicon-off"></span></button>
