
import { useModalContext } from "@/context/modalContext"

import { Accessory } from "@/model/Accessory"
import { Luggage } from "@/model/Luggage"
import { Steamer } from "@/model/Steamer"

import GreenButton from "@/components/GreenButton"
import IconPlus from "@/components/Icons/IconPlus"

import Button from "react-bootstrap/Button"

interface Props {
    product: Steamer | Luggage | Accessory,
}

function ShopProductCardButtons({
    product,
}: Props) {
    const { showModalHandler } = useModalContext()
    return (
        <div className="d-flex justify-content-between align-items-center px-2 py-4 position-relative overflow-hidden">
            <Button variant='text' onClick={() => showModalHandler(true, product)} className="text-custom-dark fw-bold h5 mb-0">
                {product.name} {(product as Steamer).color ? `(${(product as Steamer).color})` : ''}
            </Button>
            <GreenButton size='sm' classes="me-2">Add to cart <IconPlus /></GreenButton>
        </div>
    )
}

export default ShopProductCardButtons