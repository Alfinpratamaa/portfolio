export const NebulaEffect = () => {
  return (
    <>
      <div className="fixed inset-0 z-[0]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_25%_40%,rgba(59,130,246,0.6),transparent_70%)] blur-3xl"></div>
      </div>
      <div className="fixed inset-0 z-[0]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_65%_50%,rgba(175,170,224,0.6),transparent_70%)] blur-3xl"></div>
      </div>
      <div className="fixed inset-0 z-[0]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.35),transparent_60%)] blur-2xl"></div>
      </div>
    </>
  );
};
