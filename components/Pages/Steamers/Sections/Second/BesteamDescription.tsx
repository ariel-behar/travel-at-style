import IconCheckCircle from "@/components/Icons/IconCheckCircle"
import AnimatedSteamerImg from "@/components/Pages/Steamers/Sections/Second/AnimatedSteamerImg"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

const steamerBulletPoints = [
	"Suitable for travel and home use",
	"Light and small - weighs only 0.6lbs (270g)",
	"Easy to use - no complicated settings",

	"Can be used on all fabrics",
	"World wide compatibility - 110V & 220V ",
	"Can be taken as a carry-on on an airplane"
]

function BesteamDescription() {
	return (
		<Container fluid as='section' className="pt-4 pt-md-0 pt-xl-4 pb-4 background-pattern-crossword">
			<Row>
				<Col xs={12} lg={4} className="mx-auto px-4 px-lg-5 pt-1 pt-md-4 pt-xl-2">
					<h3 className="display-3 text-center fw-bold">Besteam</h3>
					<p className="mt-3 " style={{ textAlign: 'justify' }}>BeSteam is the ultimate user-friendly steam iron. Small and light, it is built using cutting-edge technology and top-quality materials.</p>

					<p style={{ textAlign: 'justify' }}>BeSteam is not only designed for ease of use, but also prioritizes safety. Equipped with advanced temperature control mechanisms and automatic shut-off features, it ensures worry-free ironing sessions, even for beginners.</p>
				</Col>

				<Col xs={12} sm={5} lg={4} className="mt-sm-5 mt-md-2 mt-lg-5 mt-xl-0 d-flex justify-content-center align-items-center">
					<div style={{maxWidth: '480px'}}>
						<AnimatedSteamerImg />
					</div>
				</Col>

				<Col xs={12} sm={7} lg={4} className="px-md-4 mt-md-2 mt-lg-0 pt-lg-4 d-flex flex-column align-items-center">
					<ul className="list-unstyled">
						{
							steamerBulletPoints.map((bulletPoint, index) => {
								return (
									<li key={index} className=" my-2">
										<IconCheckCircle stroke="green" width="30px" height="30px" classes="me-2" />
										{bulletPoint}
									</li>
								)
							})

						}
					</ul>
				</Col>
			</Row>
		</Container>
	)
}

export default BesteamDescription