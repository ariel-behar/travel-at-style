import NextLink from "next/link"

import CustomButton from "@/components/CustomButton"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function FifthSectionCallToActionDiscounts() {
    return (
        <section className="background-pattern-wool px-2 py-5">
            <Container className="background-gray-radial-gradient px-3 py-3">
                <Row className="gx-md-0">

                    <Col xs={{span: 4, order: 2}} md={{span:3, order: 1}} lg={{span: 2, order: 1}} className="d-flex justify-content-center align-items-center">
                        <img src="/assets/img/lifetime-warranty.png" alt="Lifetime Warranty" className="img-fluid" />
                    </Col>

                    <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}} lg={{span: 7, order: 2}}  className="text-center d-flex flex-column justify-content-center align-items-center">
                        <h3 className="text-uppercase text-custom-light mb-0">Over the top quantity-based discounts</h3>

                        <NextLink href="/shop" className="my-3 ">
                            <CustomButton variant="primary" size="lg" classes="">GET YOUR STEAMER NOW!</CustomButton>
                        </NextLink>

                        <h3 className="text-uppercase text-custom-light">Lifetime Warranty</h3>
                    </Col>

                    <Col xs={{span: 8, order: 3}} md={3} className="d-flex justify-content-center align-items-center ">
                        <img src="/assets/img/multiple-steamers.png" className="img-fluid" alt="Multiple Steamers" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FifthSectionCallToActionDiscounts