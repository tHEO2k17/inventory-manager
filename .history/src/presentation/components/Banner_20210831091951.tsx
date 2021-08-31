import { Container } from "react-bootstrap";

const Banner = () => {
    return (
       <section className="bg-success">
           <Container className="py-4 text-white">
               <h3>Products</h3>
               <h6 className="text-light mt-3">HOME / PRODUCTS</h6>

           </Container>
       </section>
    );
}

export default Banner;