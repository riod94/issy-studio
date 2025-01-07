import { ClassesPreview } from "@/components/classes-preview";
import { ComingSoon } from "@/components/coming-soon";
import { FacilitiesSection } from "@/components/facilities-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { PackagesSection } from "@/components/packages-section";
import { StudioSection } from "@/components/studio-section";
import { VideoSection } from "@/components/video-section";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<HeroSection />
			<StudioSection />
			<VideoSection />
			<FacilitiesSection />
			<ClassesPreview />
			<PackagesSection />
			<FaqSection />
			<ComingSoon />
		</main>
	);
}
