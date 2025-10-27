"use client";
import LiquidGlass from "liquid-glass-react";
import type { CSSProperties, PropsWithChildren } from "react";

type GlassProps = PropsWithChildren<{
  style?: CSSProperties;
  padding?: string;
  overLight?: boolean;
  displacementScale?: number;
  blurAmount?: number;
  saturation?: number;
  aberrationIntensity?: number;
  elasticity?: number;
  cornerRadius?: number;
}>;

export function Glass({
  children,
  style,
  padding = "20px",
  overLight = false,
  displacementScale = 80,
  blurAmount = 0.4,
  saturation = 150,
  aberrationIntensity = 1.2,
  elasticity = 0.15,
  cornerRadius = 16,
}: GlassProps) {
  return (
    <LiquidGlass
      padding={padding}
      overLight={overLight}
      displacementScale={displacementScale}
      blurAmount={blurAmount}
      saturation={saturation}
      aberrationIntensity={aberrationIntensity}
      elasticity={elasticity}
      cornerRadius={cornerRadius}
      style={style}
    >
      {children}
    </LiquidGlass>
  );
}
