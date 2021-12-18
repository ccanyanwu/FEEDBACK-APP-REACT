//import { Link } from "react-router-dom";
const Header = ({bgColor, color}) => {
    const headerStyles = {
        backgroundColor:bgColor,
        color
    }
    return (
      <header style={headerStyles}>
        <div className="container">
          <h1>
            {/* <Link to="/"> */}Feedback UI{/* </Link> */}
          </h1>
        </div>
      </header>
    );
}
 
Header.defaultProps = {
    bgColor: 'rgba(0,0,0,0.4)',
    color: '#4acfac'
}
export default Header;