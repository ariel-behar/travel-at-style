import ParallaxContainer from './ParallaxContainer'

import styles from './BesteamVideo.module.scss'

function BesteamVideo() {
    return (
        <div className='background-ny-skyline'>
            <ParallaxContainer>
                <div className={`${styles['container-div']} text-center rounded py-5 py-lg-5 px-3 position-relative `}>
                    <h3
                        className="d-none d-lg-block text-light fw-semibold text-uppercase display-3 position-absolute"
                        style={{ transform: 'rotate(-90deg) translateY(-50%)', left: '-100px', top: "45%" }}
                    >
                        Besteam in action!
                    </h3>

                    <iframe
                        className={`${styles.iframe} rounded-4`}
                        src="https://www.youtube.com/embed/_z4EY7BYz6M?si=VBu5hRD1S49iXrnf&amp;controls=0&showinfo=0&rel=0"
                        title="Besteam Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />

                </div>
            </ParallaxContainer>
        </div>
    )
}

export default BesteamVideo