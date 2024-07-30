import logo from "../../assets/logo.svg"


const commonBoxStyles = {
  display:"flex",
  alignItems:"center"
  
};

const imageStyles = {
  marginRight:"10px",
  
};


export const Logo = () => {

  return (
    <div style={{...commonBoxStyles}}>
      
      <img src={logo} alt="" width={50} style={{...imageStyles}}/>
      <p>yamamah</p>

    </div>
  );
};
