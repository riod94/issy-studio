export default function DefaultSection({
	className,
	children,
}: {
	className?: React.ClassAttributes<HTMLDivElement>;
	children: React.ReactNode;
}) {
	return (
		<main
			className={`flex-1 pt-16 bg-gradient-to-b from-primary via-secondary to-white from-10% via-30% ${className}`}
		>
			{children}
		</main>
	);
}
