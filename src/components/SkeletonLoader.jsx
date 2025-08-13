export default function SkeletonLoader() {
  return (
    <div className="p-6 space-y-4 animate-pulse">
      {/* Title */}
      <div className="h-6 bg-gray-300 rounded w-1/3"></div>

      {/* Image */}
      <div className="h-48 bg-gray-300 rounded-lg"></div>

      {/* Text lines */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>
    </div>
  );
}
