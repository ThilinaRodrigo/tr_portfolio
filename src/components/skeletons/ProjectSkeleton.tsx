export default function ProjectSkeleton() {
  return (
    <div className="bg-gray-900/60 border border-gray-800/80 rounded-2xl overflow-hidden animate-pulse flex flex-col justify-between h-[450px]">
      <div>
        {/* Image skeleton */}
        <div className="h-56 bg-gray-800/60 w-full relative overflow-hidden">
          <div className="absolute top-3.5 left-3.5 w-20 h-6 bg-gray-700/50 rounded-full" />
          <div className="absolute top-3.5 right-3.5 w-24 h-6 bg-gray-700/50 rounded-full" />
        </div>

        {/* Content skeleton */}
        <div className="p-6 space-y-3">
          {/* Title */}
          <div className="h-6 bg-gray-800/80 rounded-md w-3/4" />

          {/* Description lines */}
          <div className="space-y-2 pt-1">
            <div className="h-4 bg-gray-800/50 rounded-md w-full" />
            <div className="h-4 bg-gray-800/50 rounded-md w-5/6" />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-3">
            <div className="h-6 w-16 bg-gray-800/60 rounded-md" />
            <div className="h-6 w-20 bg-gray-800/60 rounded-md" />
            <div className="h-6 w-14 bg-gray-800/60 rounded-md" />
          </div>
        </div>
      </div>

      {/* Footer skeleton */}
      <div className="px-6 py-4 border-t border-gray-800/60 flex items-center justify-between">
        <div className="h-4 w-24 bg-gray-800/60 rounded-md" />
        <div className="flex gap-2">
          <div className="h-4 w-4 bg-gray-800/60 rounded-md" />
          <div className="h-4 w-4 bg-gray-800/60 rounded-md" />
        </div>
      </div>
    </div>
  );
}
