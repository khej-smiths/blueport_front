import { ImageUp } from "lucide-react";

export default function FileUpload() {
  return (
    <div
      className="h-full w-full rounded-lg border-2 border-dashed p-2"
      role="button"
    >
      <input
        className="hidden"
        id="file-upload"
        type="file"
        accept="image/jpg, image/jpeg, image/png"
      />
      <label
        className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg p-4 transition-colors hover:bg-gray-100"
        htmlFor="file-upload"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <ImageUp size={72} />
          <p className="text-sm">이미지를 업로드 해주세요</p>
        </div>
      </label>
    </div>
  );
}
