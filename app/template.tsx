"use client";

import { motion } from "motion/react";

/** Framer-Motion을 Next.js에서 사용하기위한 더 나은 접근방식
 * layout과는 다르게 클라이언트 컴포넌트 탐색 시 상태를 초기화 시킴
 * @link https://stackoverflow.com/questions/77603249/how-to-make-a-page-transition-with-framer-motion-and-next-js-14
 */

export default function RootTemplate({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.5,
  };

  return (
    <motion.div
      className="min-h-dvh"
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
