// components/Logo.tsx
import { clashDisplay } from '../../utils/fonts';

export function Logo() {
  return (
    <h1 className={`${clashDisplay.className} font-semibold text-4xl text-sky-500 hover:text-sky-400 transition-colors`}>
      &#123; V_ &#125;
    </h1>
  );
}