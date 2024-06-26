"use client"
import { createContext, useContext, useState } from "react";

import { IAccessory } from "@/model/Accessory";
import { ILuggage } from "@/model/Luggage";
import { ISteamer } from "@/model/Steamer";

interface IModalContext {
    showModal: boolean,
    product: ISteamer | IAccessory | ILuggage | null,
    modalType: 'product' | 'shop' | null,
    showModalHandler: (showModal: boolean, product: IModalContext['product'], modalType: IModalContext['modalType'] ) => void
}

export const ModalContext = createContext<IModalContext>({
    showModal: false,
    product: null,
    modalType: 'product',
    showModalHandler: () => {}
});

interface Props {
    children: React.ReactNode
}

export const ModalContextProvider = ({ children }:Props) => {
    const [showModal, setShowModal] = useState<IModalContext['showModal']>(false);
	const [product, setProduct] = useState<IModalContext['product']>(null);
    const [modalType, setModalType] = useState<IModalContext['modalType']>('product');

	const showModalHandler = (showModal: boolean, product: IModalContext['product'], modalType: IModalContext['modalType']) => {
        if(showModal) {
            if (product) {
                setProduct(product)
                setModalType(modalType)
                setShowModal(true)
            } else {
                setShowModal(false)
            }
        } else {
            setShowModal(false)
        }
	}

    return (
        <ModalContext.Provider value={{showModal, product, modalType, showModalHandler}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    return useContext(ModalContext);
}