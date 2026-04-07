export default function Container({ children }: any) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
      {children}
    </div>
  );
}