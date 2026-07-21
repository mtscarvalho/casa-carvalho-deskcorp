import { Logo, LogoGroup } from "@/payload-types";

export function getLogosFromGroups(logoGroups: LogoGroup[]): Logo[] {
  const logos = logoGroups.flatMap((group) => (group.logos as Logo[]) ?? []);
  return logos;
}
