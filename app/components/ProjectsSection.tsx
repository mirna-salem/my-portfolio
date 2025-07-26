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
					className="text-3xl font-bold mb-16 text-center text-gray-900 dark:text-gray-100"
				>
					Full Stack Projects
				</motion.h2>

				<div className="space-y-16">
					{/* Recipe Application - now first */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2">Meal Planning & Recipe Application</h3>
										<p className="text-gray-600 dark:text-gray-300">
											A full-featured recipe and meal planning web application where users can search for recipes, generate and customize meal plans, save favorites, and track nutrition. Built with ASP.NET Core MVC, Entity Framework, and the Spoonacular API, it offers a modern, interactive experience for healthy meal planning.
										</p>
									</div>
									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">Frontend Architecture</h4>
											<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
												<li>• Modern ASP.NET Core MVC with Razor Views for dynamic UI</li>
												<li>• Responsive, mobile-friendly design using Bootstrap</li>
												<li>• Intuitive recipe and ingredient search interface</li>
												<li>• Interactive meal plan generator with dietary filters</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
												<li>• Robust ASP.NET Core (.NET 8) backend with Entity Framework Core</li>
												<li>• Secure user authentication and authorization with ASP.NET Core Identity</li>
												<li>• Persistent data storage using Azure SQL Database</li>
												<li>• Real-time integration with Spoonacular API for up-to-date recipes</li>
											</ul>
										</div>
									</div>
									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
											<li>• Full-stack app with secure user accounts</li>
											<li>• Real-time recipe & meal plan integration</li>
											<li>• Azure cloud deployment with SQL Database</li>
											<li>• Intuitive, responsive UI for meal planning</li>
										</ul>
									</div>
								</div>
								<div className="lg:col-span-1">
									<div
										className="rounded-lg flex items-center justify-center w-full"
										style={{ background: 'none', padding: 0, height: 500, maxWidth: 800, minWidth: 320 }}
									>
										<RecipeCarousel />
									</div>
								</div>
							</div>
						</div>
					</motion.div>
					{/* Pet Profile Application - now second */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2">Pet Profile Application</h3>
										<p className="text-gray-600 dark:text-gray-300">
											A modern, cloud-native solution for managing pet profiles, featuring secure API access, image uploads, and seamless cross-platform experiences.
										</p>
									</div>
									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">Frontend Architecture</h4>
											<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
												<li>• .NET MAUI Cross-Platform App</li>
												<li>• MVVM Pattern with XAML UI</li>
												<li>• Seamless Data Sync with Azure API</li>
												<li>• Dark/Light Theme Support</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
												<li>• ASP.NET Core (.NET 9) REST API</li>
												<li>• Entity Framework Core with Azure SQL</li>
												<li>• Azure Blob Storage</li>
												<li>• Comprehensive API documentation with Swagger/OpenAPI</li>
											</ul>
										</div>
									</div>
									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
											<li>• Reliable Production Deployment on Azure</li>
											<li>• Optimized API Performance</li>
											<li>• Automated CI/CD Pipeline with GitHub Actions</li>
											<li>• Secure API Key Authentication</li>
										</ul>
									</div>
								</div>
								<div className="lg:col-span-1">
									<div
										className="rounded-lg flex items-center justify-center w-full py-12"
										style={{ background: 'none', height: 600, maxWidth: 800, minWidth: 320 }}
									>
										<PetProfilesCarousel />
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

type GenericCarouselProps = {
	images: string[];
	captions: string[];
};

function GenericCarousel({ images, captions }: GenericCarouselProps) {
	const [current, setCurrent] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);
	const prev = () => setCurrent((current - 1 + images.length) % images.length);
	const next = () => setCurrent((current + 1) % images.length);

	React.useEffect(() => {
		if (modalOpen) return;
		const timer = setInterval(() => {
			setCurrent((c) => (c + 1) % images.length);
		}, 3000);
		return () => clearInterval(timer);
	}, [modalOpen, images.length]);

	React.useEffect(() => {
		if (!modalOpen) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setModalOpen(false);
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [modalOpen]);

	return (
		<div className="relative w-full h-full flex flex-col items-center justify-center">
			<div className="w-full flex items-center justify-center relative px-16">
			<button
				onClick={prev}
				className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-600 z-10 transition-colors"
				aria-label="Previous"
			>
				<span className="text-xl text-gray-700 dark:text-gray-300">&#8592;</span>
			</button>
			<img
				src={images[current]}
					alt={captions[current]}
					className="rounded-lg object-contain max-h-[500px] max-w-full mx-auto cursor-pointer"
				style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
				onClick={() => setModalOpen(true)}
			/>
			<button
				onClick={next}
				className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-600 z-10 transition-colors"
				aria-label="Next"
			>
				<span className="text-xl text-gray-700 dark:text-gray-300">&#8594;</span>
			</button>
			</div>
			<div className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
				{captions[current]}
			</div>
			<div className="mt-4 flex justify-center gap-2">
											{images.map((_, idx) => (
								<button
									key={idx}
									onClick={() => setCurrent(idx)}
									className={`w-2.5 h-2.5 rounded-full ${current === idx ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
									aria-label={`Go to slide ${idx + 1}`}
								/>
							))}
			</div>
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
					<div className="flex flex-col items-center justify-center">
					<img
						src={images[current]}
							alt={captions[current]}
						className="object-contain max-h-[80vh] max-w-[90vw] rounded shadow-lg"
						onClick={e => e.stopPropagation()}
					/>
						<div className="mt-4 text-center text-lg text-white font-semibold">
							{captions[current]}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

function PetProfilesCarousel() {
	const images = [
		'/Pet Profile Application Pictures/Light Mode - AndroidListView.png',
		'/Pet Profile Application Pictures/Night Mode - AndroidListView.png',
		'/Pet Profile Application Pictures/Light Mode - WindowsListView.png',
		'/Pet Profile Application Pictures/Dark Mode - WindowsListView.png',
		'/Pet Profile Application Pictures/AddPetProfile.png',
		'/Pet Profile Application Pictures/EditPetProfile.png',
		'/Pet Profile Application Pictures/DeletePetProfile.png',
		'/Pet Profile Application Pictures/Swagger.png',
	];
	const captions = [
		'Android List View – Light mode on Android',
		'Android List View – Night mode on Android',
		'Windows List View – Light mode on Windows',
		'Windows List View – Dark mode on Windows',
		'Add Pet Profile – Add a new pet with image upload',
		'Edit Pet Profile – Edit existing pet details',
		'Delete Pet Profile – Delete confirmation dialog',
		'Swagger API – RESTful API documentation',
	];
	return <GenericCarousel images={images} captions={captions} />;
}

function RecipeCarousel() {
	const images = [
		'/Recipe Application Pictures/Home.png',
		'/Recipe Application Pictures/Search.png',
		'/Recipe Application Pictures/MealPlan.png',
		'/Recipe Application Pictures/Explore1.png',
		'/Recipe Application Pictures/Explore2.png',
		'/Recipe Application Pictures/SignInPage.png',
		'/Recipe Application Pictures/MealPlanSideBar.png',
	];
	const captions = [
		'Home – Main dashboard for recipes and meal plans',
		'Search – Find recipes by ingredients or name',
		'Meal Plan – View your planned meals',
		'Explore – Browse featured recipes (1)',
		'Explore – Browse featured recipes (2)',
		'Sign In Page – User authentication',
		'Meal Plan Sidebar – Quick access to meal plan',
	];
	return <GenericCarousel images={images} captions={captions} />;
}
