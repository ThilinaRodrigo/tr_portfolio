import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let lastTime = performance.now();

    const fontSize = 16;

    // "Thilina Rodrigo" encoded in 8-bit ASCII binary
    const binaryText =
      "01010100 01101000 01101001 01101100 01101001 01101110 01100001 " +
      "00100000 " +
      "01010010 01101111 01100100 01110010 01101001 01100111 01101111";

    const binaryChars = binaryText.replace(/ /g, "");

    let width = 0;
    let height = 0;
    let columns = 0;

    interface StreamDrop {
      y: number;
      speed: number;
      opacity: number;
      trailLength: number;
      startIndex: number;
    }

    let drops: StreamDrop[] = [];

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.ceil(width / fontSize);

      drops = Array.from({ length: columns }, (_, index) => ({
        y: Math.random() * -height * 1.5,
        speed: 40 + Math.random() * 45, // Smooth elegant speed (pixels / sec)
        opacity: 0.5 + Math.random() * 0.45,
        trailLength: 10 + Math.floor(Math.random() * 10), // Column trail depth
        startIndex: (index * 7) % binaryChars.length,
      }));
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = (currentTime: number) => {
      const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.05);
      lastTime = currentTime;

      // Clear frame completely for crisp non-smearing rendering
      ctx.clearRect(0, 0, width, height);

      ctx.font = `600 ${fontSize}px monospace`;
      ctx.textBaseline = "top";

      drops.forEach((drop, index) => {
        const x = index * fontSize;
        const headStep = Math.floor(drop.y / fontSize);

        // Render vertical binary stream trail for this column
        for (let k = 0; k < drop.trailLength; k++) {
          const charY = (headStep - k) * fontSize;

          // Skip characters outside visible canvas bounds
          if (charY < -fontSize || charY > height + fontSize) continue;

          // Calculate character index from binary sequence
          const charPos = (drop.startIndex + headStep - k + binaryChars.length * 100) % binaryChars.length;
          const char = binaryChars[charPos];

          // Fade opacity down the trail tail
          const fadeRatio = 1 - k / drop.trailLength;
          const currentOpacity = Math.max(0, fadeRatio * drop.opacity);

          if (k === 0) {
            // Bright glowing Cyan Lead Head
            ctx.fillStyle = `rgba(224, 242, 254, ${Math.min(1, currentOpacity + 0.3)})`;
            ctx.shadowColor = "#38bdf8";
            ctx.shadowBlur = 8;
          } else {
            // Smooth fading Electric Blue Body Trail
            ctx.fillStyle = `rgba(59, 130, 246, ${currentOpacity * 0.85})`;
            ctx.shadowBlur = 0;
          }

          ctx.fillText(char, x, charY);
        }

        // Advance drop position smoothly based on frame elapsed time
        drop.y += drop.speed * deltaTime;

        // Reset column stream when tail completely exits bottom of screen
        const maxTailHeight = drop.y - drop.trailLength * fontSize;
        if (maxTailHeight > height) {
          drop.y = Math.random() * -150 - 50;
          drop.speed = 40 + Math.random() * 45;
          drop.opacity = 0.5 + Math.random() * 0.45;
          drop.trailLength = 10 + Math.floor(Math.random() * 10);
          drop.startIndex = Math.floor(Math.random() * binaryChars.length);
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gray-950">
      {/* Binary Rain Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-70"
      />

      {/* Cyber Grid Overlay */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          opacity-60
          bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),
              linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)]
          bg-[size:4rem_4rem]
        "
      />

      {/* Subtle Vignette Overlay */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,7,18,0.7)_100%)]
        "
      />
    </div>
  );
}