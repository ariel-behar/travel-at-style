import NextLink from 'next/link'

import styles from './CallToAction.module.scss'

import CustomButton from '@/components/Common/Buttons/CustomButton'

function CallToAction() {
    return (
        <section className={`${styles.section} text-center px-3 py-3 py-lg-4 background-blue-radial-gradient position-relative`} >
            <h3 className="text-uppercase text-light">The steamer that has taken America by storm is now available for purchase online</h3>

            <NextLink href='/shop'>
                <CustomButton variant='primary' size='lg' classes='mt-1 mt-md-3'>
                    GET YOURS NOW!
                </CustomButton>
            </NextLink>

            <img src="/assets/img/logo/logo-gray.png" alt="logo" className={`z-0 ${styles['logo-img']}`}  />
        </section>
    )
}

export default CallToAction