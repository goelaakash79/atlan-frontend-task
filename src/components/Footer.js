import React from "react";
import atlan from "../media/atlan.svg";

const Footer = () => {
	return (
		<section class="text-gray-700 body-font">
			<div class="container px-5 py-24 mx-auto flex flex-col">
				<div class="lg:w-4/6 mx-auto">
					{/* <div class="rounded-lg h-64 overflow-hidden">
						<img
							alt="content"
							class="object-cover object-center h-full w-full"
							src="https://dummyimage.com/1200x500"
						/>
					</div> */}
					<div class="flex flex-col sm:flex-row mt-10">
						<div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
							<div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
								<img
									src={atlan}
									className="absolute w-24"
									alt=""
								/>
							</div>

							<div class="flex flex-col items-center text-center justify-center">
								<div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
								<h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
									atlan task
								</h2>
							</div>
						</div>
						<div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
							<p class="leading-relaxed text-md mb-4">
								With the given stats, I have represented the
								data to prove that Sachin Tendulkar was one of
								best cricket player of his time. But, i would
								still place my bet on MS Dhoni. He is the
								"best".
								<br />
								<br />
								Click the button below to open the code and
								README
							</p>
							<a
								href="https://github.com/goelaakash79/atlan-frontend-task"
								class="bg-blue-700 mt-2 font-bold py-2 px-4 border-b-4 border-blue-800 rounded text-white hover:border-blue-lighter hover:bg-blue-500"
							>
								Click this button
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
