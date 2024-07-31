import logo from "../../../assets/logo.svg"


const commonBoxStyles = {
  display:"flex",
  alignItems:"center"
  
};

const imageStyles = {
  marginRight:"10px",
  
};



const OpenSideBarMobileButton = () => {
  return (
    <div style={{...commonBoxStyles}}>
      
      <img src={logo} alt="" width={40} style={{...imageStyles}}/>
      <p>yamamah</p>

    </div>
  );
};

export { OpenSideBarMobileButton };
