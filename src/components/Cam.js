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
  const retake = () => setPicture("") 

  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });

  return (
    <div className="container allFrame text-light">
      
      <div className="showLive ">
        {picture == "" ? (
          <>
            <div className="btnCancel mb-4">
              {/* Button Cancel */}
              <button type="button" className="btn btn-danger btn-lg bi  bi-x-square" onClick={() => {refresh()}} >
              </button>
            </div>
            <Webcam
              audio={false}
              height={350}
              ref={webcamRef}
              width={350}
              screenshotFormat="image/jpeg"
              screenshotQuality={0.7}
              videoConstraints={videoConstraints}
            />
          </>
        ) : (
          <img src={picture} className="borderFoto" />
        )}
      </div>

      <div className="btnBtns">
        {picture != "" ? (
          
            <div className="row ">
                {/* Button confirm picture */}
              <div className="col-6">
                <button type="button" className="btn btn-success btn-lg bi-hand-thumbs-up  m-2" 
                  data-bs-toggle="tooltip" data-bs-placement="top" title="Save ?"
                  onClick={() => newFoto.children.newFoto(picture)} ></button>
              </div>
              <div className="col-6">
                {/* Button Re take */}
                <button type="button" className="btn btn-warning btn-lg bi-arrow-repeat  m-2"  
                  data-bs-toggle="tooltip" data-bs-placement="top" title="Retake photo ?"
                  onClick={() => {retake()}} ></button>
              </div>

            </div>
          
        ) : (
          // Button Take Picture
          <div className="snap">
            <button type="button" className="btn btn-circle bi bi-record-circle " onClick={(e) => { e.preventDefault(); capture(); }}></button>        
          </div>

        )}
      </div>
    </div>
  );
};
export default Cam;

