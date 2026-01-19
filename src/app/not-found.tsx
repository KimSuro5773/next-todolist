import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Image
        src={"/todo/Large_doneEmpty.svg"}
        alt="not found image"
        width={240}
        height={240}
        color="red"
      />
      <div className="flex flex-col gap-5">
        <p>존재하지 않은 페이지입니다.</p>
        <Link
          href={"/"}
          replace
          className="px-4 py-2 border rounded-full text-center bg-slate-600 text-white"
        >
          홈으로
        </Link>
      </div>
    </div>
  );
}
