import Link from "next/link";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "filled" | "outline";
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  href,
  onClick,
  variant = "filled",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors";
  const styles =
    variant === "filled"
      ? "bg-gold-light text-brown border border-gold hover:bg-gold hover:text-white"
      : "border border-brown text-brown hover:border-gold hover:text-gold";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
