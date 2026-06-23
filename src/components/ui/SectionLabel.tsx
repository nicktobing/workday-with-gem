export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-gold font-medium mb-2">
      {children}
    </p>
  );
}
