import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mt-6 px-6 lg:px-4 flex flex-col gap-11">
      <div className="flex gap-2">
        <Skeleton className="h-13 rounded-3xl w-full" />
        <Skeleton className="h-13 w-13 rounded-full md:rounded-[24px] md:w-41" />
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col lg:flex-1 gap-4">
          <Skeleton className="w-25 h-10 rounded-3xl" />
          <Skeleton className="h-50" />
        </div>

        <div className="flex flex-col lg:flex-1 gap-4">
          <Skeleton className="w-25 h-10 rounded-3xl" />
          <Skeleton className="h-50" />
        </div>
      </div>
    </div>
  );
}
