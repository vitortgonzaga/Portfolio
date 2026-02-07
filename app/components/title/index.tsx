import { clashDisplay } from '../../utils/fonts';

export function Title() {
  return (
    <h1 className={`${clashDisplay.className} font-semibold text-5xl text-white transition-colors`}>
      Vitor Gonzaga
    </h1>
  );
}