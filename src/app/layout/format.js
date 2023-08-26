import Header from "../componets/header";
import Footer from '../componets/footer';

export default function format({children}){
    return(
        <>

        <Header/>
        <mai>{children}</mai>
       <Footer />
        </>
    )
}