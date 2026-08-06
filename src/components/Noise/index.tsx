"use client";

import { cn } from "@/utilities/cn";
import { useEffect, useMemo, useRef } from "react";

export interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  /** Ignorado na versão estática (mantido por compatibilidade) */
  patternRefreshInterval?: number;
  patternAlpha?: number;
  className?: string;
}

/**
 * Versão estática: gera o ruído UMA VEZ e reutiliza o mesmo pattern para sempre.
 * - Não regenera no resize
 * - Não responde a mudanças de devicePixelRatio (zoom)
 */
export function Noise({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval, // ignorado
  patternAlpha = 15,
  className,
}: NoiseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Captura o DPR inicial apenas uma vez (não muda com zoom posterior)
  const initialDpr = useMemo(() => {
    if (typeof window === "undefined") return 1;
    return window.devicePixelRatio || 1;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Offscreen para gerar o pattern uma única vez
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    const pctx = patternCanvas.getContext("2d");
    if (!pctx) return;

    // Gera o ruído estático (uma vez só)
    const imageData = pctx.createImageData(patternSize, patternSize);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255;
      data[i] = v; // R
      data[i + 1] = v; // G
      data[i + 2] = v; // B
      data[i + 3] = patternAlpha; // A
    }
    pctx.putImageData(imageData, 0, 0);

    // Cria o pattern estático
    const pattern = ctx.createPattern(patternCanvas, "repeat");

    const draw = () => {
      if (!pattern) return;
      // Redefine transform para evitar acúmulos entre chamadas
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      // Aplica escala fixa do usuário
      ctx.scale(patternScaleX, patternScaleY);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Define o tamanho do canvas com base no DPR inicial e desenha
    const setSizeAndDraw = () => {
      // Usamos o DPR inicial (congelado) para não variar com zoom
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width * initialDpr));
      const h = Math.max(1, Math.round(rect.height * initialDpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      draw();
    };

    // Primeira pintura
    setSizeAndDraw();

    // Em resize, só reajusta a área e repinta com o MESMO pattern (não regenera)
    const onResize = () => setSizeAndDraw();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternAlpha, initialDpr]);

  return <canvas ref={canvasRef} className={cn("pointer-events-none absolute inset-0 h-full w-full select-none", className)} />;
}
