export default function Global3DBackground() {
  return (
    <div className="global-3d-background" aria-hidden="true">
      <video
        className="global-3d-video"
        src="/ashiq-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      <div className="global-3d-overlay" />

      <div className="global-3d-glow global-3d-glow-orange" />

      <div className="global-3d-glow global-3d-glow-blue" />
    </div>
  );
}