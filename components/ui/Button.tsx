import Link, { LinkProps as InternalLinkProps } from "next/link";
import React from "react";

enum Variant {
	solid = "solid",
	outline = "outline",
	ghost = "ghost",
}

interface ButtonProps extends InternalLinkProps {
	children: React.ReactNode;
	className?: string;
	variant?: keyof typeof Variant;
}

const Button: React.FC<ButtonProps> = ({
	children,
	className,
	variant = "solid",
	...props
}) => {
	const defVariant =
		variant === Variant.solid
			? "bg-primary text-white rounded-md hover:bg-accent hover:text-secondary"
			: variant === Variant.outline
			? "border border-primary text-primary rounded-md hover:bg-primary hover:text-white"
			: "text-primary rounded-md hover:bg-primary hover:text-white";

	const defClassName = `inline-block px-4 py-2 text-lg font-bold ${defVariant} transition-colors duration-300 ${className}`;

	return (
		<Link {...props} className={defClassName}>
			{children}
		</Link>
	);
};

export default Button;
