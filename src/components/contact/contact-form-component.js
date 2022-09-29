import React from "react";

const ContactForm = () => {
	return(


		<section className="py-20 bg-white" style={{backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')", backgroundPosition: "center"
		}}>
			<div className="w-full lg:w-1/2 px-4">
				<div className="px-4 py-8 md:p-10 bg-coolGray-50 rounded-md">
					<form>
						<div className="mb-6">
							<label className="block mb-2 text-coolGray-800 font-medium leading-6" htmlFor="">Email</label>
							<input className="block w-full py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="email" placeholder="dev@shuffle.dev"/>
						</div>
						<div className="mb-6">
							<label className="block mb-2 text-coolGray-800 font-medium leading-6" htmlFor="">Message</label>
							<textarea className="block h-32 md:h-52 w-full py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 placeholder-coolGray-200 resize-none" type="text" placeholder="Your message..."></textarea>
						</div>
						<button className="block w-full py-4 px-6 text-lg leading-6 text-coolGray-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm">Send</button>
					</form>
				</div>
			</div>

		</section>
	);
};
        


    
    
    
export default ContactForm;