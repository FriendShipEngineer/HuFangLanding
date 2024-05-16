"use client";
import CursorTrailCanvas from "components/cursor-trail-canvas";
import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection } from "app/sections";

export default function Page() {
	return (
		<div className="container-md">
			<CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
			<WelcomeSection />
			<AboutSection />
			<ProjectsSection />
			<TechnologiesSection />
		</div>
	);
}
