import ContactForm from "@/components/ContactForm"

function ContactPage() {
	return (
		<div style={{ minHeight: '83vh' }} className="d-flex justify-content-center align-items-center">
			<section className="container p-5 rounded-4" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
				<div className="row">
					<div className="col-12 col-md-5">
						<h3 className="text-center display-5 d-inline-block">Contact US</h3>
						<p>Our main company objective is to provide liable, continuous, and excellent customer service for our consumers. We look forward to your suggestions, comments and questions regarding our product.</p>

						<div className="w-50 mx-auto">
							<img src="/assets/img/logo/logo-transparent.png" className="img-fluid" alt="Contact us" />
						</div>
					</div>
					<div className="col-12 col-md-7">
						<ContactForm />
					</div>
				</div>
			</section>
		</div>
	)
}

export default ContactPage