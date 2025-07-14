'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import * as React from 'react';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-16 text-center text-gray-900"
				>
					Full Stack Projects
				</motion.h2>

				<div className="space-y-16">
					{/* E-commerce Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900">Enterprise Pet Profile Platform</h3>
										<p className="text-gray-600">
											A modern, cloud-native solution for managing pet profiles, featuring secure API access, image uploads, and seamless cross-platform experiences.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 mb-3">Frontend Architecture</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• .NET MAUI Cross-Platform App</li>
												<li>• MVVM Pattern with XAML UI</li>
												<li>• Seamless Data Sync with Azure API</li>
												<li>• Dark/Light Theme Support</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• ASP.NET Core (.NET 9) REST API</li>
												<li>• Entity Framework Core with Azure SQL</li>
												<li>• Azure Blob Storage</li>
												<li>• Serilog Logging & Application Insights</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• 99.9% Uptime with Azure Deployments</li>
											<li>• Fast API Response Times</li>
											<li>• End-to-End CI/CD with GitHub Actions</li>
											<li>• Secure API Key Authentication</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-600 mb-4">App Screenshots</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner flex items-center justify-center">
										{/* Simple Carousel */}
										<Carousel />
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Real-time Analytics Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900">Real-time Analytics Platform</h3>
										<p className="text-gray-600">
											A scalable analytics platform processing 1M+ events per minute with real-time dashboards and ML-powered insights.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Real-time Data Visualization</li>
												<li>• Interactive Dashboards</li>
												<li>• Custom Chart Components</li>
												<li>• Data Export Tools</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 mb-3">Backend Pipeline</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Apache Kafka Streams</li>
												<li>• ClickHouse Analytics DB</li>
												<li>• Python Data Processing</li>
												<li>• Redis Time Series</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600">Performance Metrics</h4>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• 1M+ Events/Minute Processing</li>
											<li>• Sub-second Query Response</li>
											<li>• 99.99% Data Accuracy</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-600 mb-4">Data Flow Architecture</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Data Sources */}
											<g>
												<rect x="20" y="20" width="110" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<rect x="145" y="20" width="110" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<rect x="270" y="20" width="110" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="75" y="40" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Web Events
												</text>
												<text x="200" y="40" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Mobile Events
												</text>
												<text x="325" y="40" textAnchor="middle" className="fill-gray-600 text-[12px]">
													API Events
												</text>
											</g>

											{/* Event Processing */}
											<g>
												<rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="200" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Kafka Event Streaming
												</text>
											</g>

											{/* Processing Layer */}
											<g>
												<rect x="20" y="150" width="170" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<rect x="210" y="150" width="170" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="105" y="175" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Stream Processing
												</text>
												<text x="295" y="175" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Batch Processing
												</text>
											</g>

											{/* Storage Layer */}
											<g>
												<rect x="20" y="220" width="170" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<rect x="210" y="220" width="170" height="30" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="105" y="240" textAnchor="middle" className="fill-gray-600 text-[12px]">
													ClickHouse
												</text>
												<text x="295" y="240" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Redis Time Series
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="270" width="360" height="30" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="200" y="290" textAnchor="middle" className="fill-gray-600 text-[12px]">
													GraphQL API Layer
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-400" strokeWidth="1">
												<line x1="75" y1="50" x2="75" y2="80" />
												<line x1="200" y1="50" x2="200" y2="80" />
												<line x1="325" y1="50" x2="325" y2="80" />
												<line x1="200" y1="120" x2="200" y2="150" />
												<line x1="105" y1="190" x2="105" y2="220" />
												<line x1="295" y1="190" x2="295" y2="220" />
												<line x1="200" y1="250" x2="200" y2="270" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

function Carousel() {
	const images = [
		'/code.jpg', // Use your own images later
		'/laptop.jpg',
		'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
	];
	const [current, setCurrent] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);
	const prev = () => setCurrent((current - 1 + images.length) % images.length);
	const next = () => setCurrent((current + 1) % images.length);

	// Auto-slide every 3 seconds, but only when modal is closed
	React.useEffect(() => {
		if (modalOpen) return; // Pause auto-advance when modal is open
		const timer = setInterval(() => {
			setCurrent((c) => (c + 1) % images.length);
		}, 3000);
		return () => clearInterval(timer);
	}, [modalOpen, images.length]);

	// Modal close on ESC
	React.useEffect(() => {
		if (!modalOpen) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setModalOpen(false);
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [modalOpen]);

	return (
		<div className="relative w-full h-full flex items-center justify-center">
			<button
				onClick={prev}
				className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow"
				aria-label="Previous"
			>
				<span className="text-xl">&#8592;</span>
			</button>
			<img
				src={images[current]}
				alt={`Screenshot ${current + 1}`}
				className="rounded-lg object-contain max-h-[250px] max-w-full mx-auto cursor-pointer"
				style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
				onClick={() => setModalOpen(true)}
			/>
			<button
				onClick={next}
				className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow"
				aria-label="Next"
			>
				<span className="text-xl">&#8594;</span>
			</button>
			<div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
				{images.map((_, idx) => (
					<button
						key={idx}
						onClick={() => setCurrent(idx)}
						className={`w-2.5 h-2.5 rounded-full ${current === idx ? 'bg-blue-500' : 'bg-gray-300'}`}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>
			{/* Modal for larger image */}
			{modalOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
					onClick={() => setModalOpen(false)}
				>
					<button
						className="absolute top-6 right-8 text-white hover:text-gray-300 text-3xl font-bold z-10"
						onClick={() => setModalOpen(false)}
						aria-label="Close"
					>
						&times;
					</button>
					<img
						src={images[current]}
						alt={`Screenshot ${current + 1}`}
						className="object-contain max-h-[80vh] max-w-[90vw] rounded shadow-lg"
						onClick={e => e.stopPropagation()}
					/>
				</div>
			)}
		</div>
	);
}
