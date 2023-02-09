declare global {
  interface Window {
    Tawk_API: any;
    gtag: (...args: any[]) => void;
  }
}

window.Tawk_API = "Tawk_API";
declare module "react-animated-cursor";
