import logo from "../../assets/logo_light.svg"


const commonBoxStyles = {
  display:"flex",
  alignItems:"center"
  
};

const imageStyles = {
  marginLeft:"10px",
  marginTop:"10px",
  
};


export const Logo = () => {

  return (
    <div style={{...commonBoxStyles}}>
      
      <img src={logo} alt="" width={180} style={{...imageStyles}}/>
      

    </div>
  );
};
