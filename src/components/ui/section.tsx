import { Tech } from "./tech";
import { Areas } from "./areas";
import { Portfolio } from "./portfolio";

export function Section() {
  return (
    <div className="bg-black flex flex-col items-center justify-center font-Inter">
      <Tech />
      <Areas />
      <Portfolio />
    </div>
  );
}
