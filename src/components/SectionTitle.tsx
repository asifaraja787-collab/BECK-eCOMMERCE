export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
      {title}
    </h2>
  );
}