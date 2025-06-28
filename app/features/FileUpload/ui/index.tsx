import { ImageUp } from "lucide-react";
import { Dispatch, DragEvent, SetStateAction } from "react";
import { UseFormSetValue } from "react-hook-form";
import { toast } from "sonner";

import { BlogFormDto, useResponsive } from "@/shared";

interface Props {
  setValue: UseFormSetValue<BlogFormDto>;
  setPreview: Dispatch<SetStateAction<string>>;
}

export function FileUpload({ setValue, setPreview }: Props) {
  const { isMobile } = useResponsive();

  const handleDropFiles = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const fileList = event.dataTransfer.files;

    if (fileList.length > 1) {
      toast("프로필 사진은 1개만 업로드 가능합니다");
      return;
    }

    const file = fileList[0];

    if (!file) {
      toast("프로필 사진을 가져오는데 실패했습니다");
      return;
    }

    const image = URL.createObjectURL(file);

    setValue("photo", file);
    setPreview(image);
  };

  return (
    <div
      className="h-full w-full rounded-lg border-2 border-dashed p-2 not-xl:h-12 not-xl:border-solid"
      role="button"
      onDrop={handleDropFiles}
      onDragOver={(e) => e.preventDefault()}
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
        <div className="flex flex-col items-center gap-2 text-gray-400 not-xl:flex-row not-xl:text-sm">
          <ImageUp size={isMobile ? 32 : 72} />
          <p className="text-sm">이미지를 업로드 해주세요</p>
        </div>
      </label>
    </div>
  );
}
