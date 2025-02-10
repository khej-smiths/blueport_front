import type { Meta, StoryObj } from "@storybook/react";
import { Container } from ".";
import H1 from "@/components/section/Preview/H1";
import Blockquote from "@/components/section/Preview/Blockquote";

const meta: Meta<typeof Container> = {
  title: "Components/Common/Container",
  component: () => (
    <Container className="gap-4">
      <H1>이것은 컨테이너입니다</H1>
      <Blockquote>왜 이런걸 만든건가요?</Blockquote>
      <p className="text-sm italic text-gray-200">저도잘 몰라요</p>
    </Container>
  ),
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {};
