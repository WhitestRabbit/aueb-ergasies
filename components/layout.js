import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Layout = (props) => {
    return (
        <div className="content">
            <Navbar />
                {props.children}
            <Footer />
        </div>
     );
}
 
export default Layout;