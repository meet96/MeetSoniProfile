"use client";

import Lottie from "lottie-react";

export function LottiePlayer({
  animationData,
  className
}: {
  animationData: object;
  className?: string;
}) {
  return <Lottie animationData={animationData} loop className={className} />;
}
