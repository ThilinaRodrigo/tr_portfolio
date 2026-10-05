export default function CertificateSkeleton() {
  return (
    <div className="bg-gray-900/60 border border-gray-800/80 rounded-2xl overflow-hidden animate-pulse flex flex-col justify-between h-[420px]">
      <div>
        {/* Image skeleton */}
        <div className="h-56 bg-gray-800/60 w-full relative overflow-hidden">
          <div className="absolute top-4 left-4 w-24 h-6 bg-gray-700/50 rounded-full" />
          <div className="absolute top-4 right-4 w-16 h-6 bg-gray-700/50 rounded-full" />
        </div>

        {/* Content skeleton */}
        <div className="p-6 space-y-3">
          <div className="h-6 bg-gray-800/80 rounded-md w-4/5" />
          <div className="h-4 bg-gray-800/50 rounded-md w-full" />
          <div className="flex flex-wrap gap-2 pt-2">
            <div className="h-5 w-14 bg-gray-800/60 rounded-full" />
            <div className="h-5 w-16 bg-gray-800/60 rounded-full" />
            <div className="h-5 w-12 bg-gray-800/60 rounded-full" />
          </div>
        </div>
      </div>

      {/* Footer skeleton */}
      <div className="px-6 py-4 border-t border-gray-800/60 flex justify-between">
        <div className="h-4 w-20 bg-gray-800/60 rounded-md" />
        <div className="h-4 w-16 bg-gray-800/60 rounded-md" />
      </div>
    </div>
  );
}
