import { SvgIcon } from "@mui/material";
import logo from "../../../assets/logo_light.svg"


const commonBoxStyles = {
  display:"flex",
  alignItems:"center"
  
};

const imageStyles = {
  marginLeft:"10px",
  marginTop:"5px"
  
};



const OpenSideBarMobileButton = () => {
  return (
    <div style={{...commonBoxStyles}}>
      <img src={logo} alt="" width={170} style={{...imageStyles}}/>
      

    </div>
  );
};

export { OpenSideBarMobileButton };
