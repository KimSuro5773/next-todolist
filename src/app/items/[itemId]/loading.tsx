import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col px-4 md:px-6 lg:px-25.5 gap-6">
      <Skeleton className="h-13 rounded-3xl w-full mt-4" />

      <div className="flex flex-col lg:flex-row gap-6">
        <Skeleton className="min-h-70 lg:w-[384px] rounded-3xl" />
        <Skeleton className="lg:flex-1 h-70 rounded-3xl" />
      </div>

      <div className="flex justify-center gap-4 lg:justify-end">
        <Skeleton className="h-13 w-41 rounded-3xl" />
        <Skeleton className="h-13 w-41 rounded-3xl" />
      </div>
    </div>
  );
}
