import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from ".";
import { Button } from "../Button";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/Common/Dialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
};

export default meta;
export type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: () => {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>열기</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>타이틀</AlertDialogTitle>
            <AlertDialogDescription>
              다이얼로그 내용입니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction>확인</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};
