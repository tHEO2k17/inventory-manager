import { Container } from "react-bootstrap";

const Banner = () => {
    return (
       <section className="bg-success">
           <Container className="py-4 text-white">
               <h3>Products</h3>
               <p className="text-light mt-3 font-weight-lighter">HOME / PRODUCTS</p>

           </Container>
       </section>
    );
}

export default Banner;