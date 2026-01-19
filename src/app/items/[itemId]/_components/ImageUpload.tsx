"use client";

import { uploadImage } from "@/actions/todo";
import Button from "@/components/ui/Button";
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";
import { useRef, useState } from "react";

interface ImageUploadProps {
  imageUrl: string;
  onImageChange: (imageUrl: string) => void;
}

export default function ImageUpload({ imageUrl, onImageChange }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    setIsUploading(true);
    try {
      const url = await uploadImage(formData);
      onImageChange(url);
    } catch (error) {
      alert(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex justify-center items-center border-dashed border-2 border-slate-300 rounded-3xl bg-slate-50 min-h-77.75 lg:w-[384px] relative overflow-hidden">
      {imageUrl ? (
        <Image src={encodeURI(imageUrl)} alt="upload image" fill className="object-cover" />
      ) : (
        <Image src={"/todo/imgUpload.svg"} alt="none image" width={64} height={64} />
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {isUploading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <Spinner className="size-10 text-white" />
        </div>
      )}

      <div className="absolute bottom-4 right-4">
        <Button preset={imageUrl ? "iconEdit" : "iconAdd"} onClick={handleButtonClick} />
      </div>
    </div>
  );
}
