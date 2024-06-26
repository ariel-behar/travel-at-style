"use client"
import { useModalContext } from '@/context/modalContext';
import uniqid from 'uniqid';

import { ISteamer } from '@/model/Steamer';
import { IAccessory } from '@/model/Accessory';
import { ILuggage } from '@/model/Luggage';

import AddRemoveCartButtons from '@/components/Common/Buttons/AddRemoveCartButtons';
import IconChevronRight from "@/components/Icons/IconChevronRight";
import CustomButtonWithLink from "@/components/Common/Buttons/CustomButtonWithLink";

import Modal from 'react-bootstrap/Modal';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function ProductModal() {
    const { showModal, product, modalType, showModalHandler } = useModalContext()

    return (
        <Modal size='lg' centered show={showModal} onHide={() => showModalHandler(false, null, null)}>
            <Modal.Header closeButton className='py-4 px-2 p-sm-4 background-light-gradient'>
                <Modal.Title>
                    <h4 className='display-4 fw-semibold mb-0'>
                        <span>{product && product.name}</span>
                        <span>{`${(product as ISteamer).color ? ` (${(product as ISteamer).color})` : ''}`}</span>
                    </h4>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className='background-pattern-crossword rounded-3 p-0 p-md-2'>
                <Container>
                    <Row>
                        <Col xs={12} lg={5} className='mb-3 mb-lg-0 d-flex flex-column justify-content-between '>
                            <p className='mt-2'>
                                {product && product.description}
                            </p>

                            {
                                (product as ISteamer).packageIncludes?.length > 0 && (
                                    <>
                                        <p className="display-6 mb-1 mt-3 fw-semibold"> Package Includes:</p>
                                        <ol>
                                            {
                                                (product as ISteamer).packageIncludes.map((item) => {
                                                    return (
                                                        <li key={uniqid()}>{item}</li>
                                                    )
                                                })
                                            }
                                        </ol>
                                    </>
                                )}
                        </Col>
                        <Col xs={12} lg={7} className='overflow-hidden '>
                            {
                                product && (
                                    <img
                                        className='img-fluid'
                                        src={`/assets/img/${product.imgFolder}/${product.img}`}
                                        alt={`${product && product.name} (${(product as ISteamer).color})`}
                                    />
                                )
                            }
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>

            <Modal.Footer className='background-light-gradient  py-4 px-2 p-sm-4 d-flex flex-row justify-content-between align-items-center'>
                <p className='display-5 fw-semibold mb-0 mt-0'>
                    Price: {product && product.price}
                </p>

                {modalType === 'shop' && <AddRemoveCartButtons classesRemoveButton='me-1' product={(product as ILuggage | IAccessory | ISteamer)} />}

                {modalType === 'product' && (

                    <CustomButtonWithLink
                        onClick={() => showModalHandler(false, null, null)}
                        href={`/shop?tab=${(product as ILuggage | IAccessory | ISteamer).productCategory}`}
                        variant="primary"
                        size="sm"
                    >
                        GET YOURS NOW!
                        <IconChevronRight />
                    </CustomButtonWithLink>

                )
                }
            </Modal.Footer>
        </Modal>
    );
}

export default ProductModal