import { Container } from "react-bootstrap";

const Banner = () => {
    return (
       <section className="bg-success">
           <Container className="py-4 text-white">
               <h3>Products</h3>
               <p className="text-light mt-3 fw-light fs-6">HOME / PRODUCTS</p>

           </Container>
       </section>
    );
}

export default Banner;