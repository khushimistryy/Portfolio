import { useNavigate } from "react-router-dom";
import img1 from '../../../assets/sketchbook/sketchbook 1.webp'
import cross from "../../../assets/cross.svg"

const sketchbook1 = () => {


   return (
      <div style={{ display: 'flex', height: "100vh" }}>
         <div style={{ paddingLeft: "4vw", display: "flex", height: "auto", marginTop: "auto", marginBottom: "auto" }} ><img style={{ maxHeight: "80vh" }} src={img1} width={"auto"} height={"auto"} alt="" /><div style={{ marginTop: "auto", paddingLeft: "1rem" }}>Untitiled<br />ink on tissue paper.</div> </div>
         <div style={{ position: "absolute", top: "8vh", right: "8vw", cursor: "pointer" }} onClick={() => { window.history.back() }}> <img style={{ width: "20px", height: "20px" }} src={cross} alt="" /> </div>
      </div>
   )
}

export default sketchbook1