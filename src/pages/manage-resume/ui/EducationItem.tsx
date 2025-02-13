"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { EducationDto } from ".";
import {
  Button,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  useDialogStore,
} from "@/shared";

interface EducationItemProps {
  key: React.Key;
  item: EducationDto;
  setEducationList: Dispatch<SetStateAction<EducationDto[]>>;
}

type EducationStatus = "graduate" | "attend" | "expected";

export function EducationItem({ item, setEducationList }: EducationItemProps) {
  const [status, setStatus] = useState<EducationStatus>("graduate");
  const [isEdit, setIsEdit] = useState(false);
  const { setDialog } = useDialogStore();

  const handleOpenSearchSchool = () => {
    setDialog(true, {
      onConfirm: () => console.log("confirm"),
      onClose: () => setDialog(false, undefined),
    });
  };

  return (
    <div className="flex flex-col gap-2 rounded-lg border p-6">
      <div className="flex flex-row justify-between">
        <div className="flex min-w-[330px] flex-row gap-2">
          <Input
            className="focus-visible:none hover:border-primary"
            variant="underline"
            readOnly
            value="test"
          />
          <AnimatePresence>
            {isEdit && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Button onClick={handleOpenSearchSchool}>학교 찾아보기</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-row gap-1">
          <Button
            className="size-8 rounded-sm p-0"
            variant="ghost"
            onClick={() => setIsEdit((prev) => !prev)}
          >
            <Pencil className="size-4 text-gray-400" />
          </Button>
          <Button
            className="size-8 rounded-sm p-0"
            variant="ghost"
            onClick={() =>
              setEducationList((prev) =>
                prev.filter((edu) => edu.id !== item.id)
              )
            }
          >
            <Trash2 className="size-4 text-gray-400" />
          </Button>
        </div>
      </div>
      <>기간</>
      <RadioGroup
        className="flex"
        defaultValue="graduate"
        value={status}
        onValueChange={(value) => setStatus(value as EducationStatus)}
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem value="graduate" />
          <Label htmlFor="graduate">졸업</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="attend" />
          <Label htmlFor="attend">재학중</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="expected" />
          <Label htmlFor="expected">졸업예정</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
