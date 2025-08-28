"use client";
import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("./BackgroundStar"), {
  ssr: false,
});

const NebulaEffect = dynamic(
  () =>
    import("./NebulaEffect").then((mod) => ({
      default: mod.NebulaEffect,
    })),
  {
    ssr: false,
  }
);

export default function ClientEffects() {
  return (
    <>
      <StarsCanvas />
      <NebulaEffect />
    </>
  );
}
