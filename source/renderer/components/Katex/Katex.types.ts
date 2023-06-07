import { KatexOptions } from "katex";

export type KatexProperties = {
  children: string;
} & Omit<KatexOptions, "throwOnError" | "macros">;

export default KatexProperties;
