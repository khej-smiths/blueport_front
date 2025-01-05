import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

// 선택사항: 커스텀 테마 설정
const theme = create({
  base: "light", // or 'dark'
  brandTitle: "P.log",
});

addons.setConfig({
  enableShortcuts: true, // 키보드 단축키 활성화
  sidebar: {
    showRoots: true, // 루트 레벨 항목 표시
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
