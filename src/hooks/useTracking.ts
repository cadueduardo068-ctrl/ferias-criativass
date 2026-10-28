import { useEffect } from 'react';
import { product } from '../config/product';
declare global { interface Window { fbq?: ((...args: unknown[]) => void) & {queue?:unknown[][]; loaded?:boolean; version?:string; push?:unknown; callMethod?:(...args:unknown[])=>void}; _fbq?:unknown } }
const pixel = import.meta.env.VITE_META_PIXEL_ID?.trim();
let initialized = false;
export function trackCheckout() { if (localStorage.getItem('mck-consent') === 'accepted' && initialized) window.fbq?.('track','InitiateCheckout',{content_name:product.name,value:product.price,currency:product.currency}); }
export function useTracking(consent:string|null) { useEffect(()=>{
 if (consent !== 'accepted' || !pixel || !/^\d+$/.test(pixel)) { window.fbq?.('consent','revoke'); return; }
 if (initialized) { window.fbq?.('consent','grant'); return; }
 const f = function(...args:unknown[]) { if (f.callMethod) f.callMethod(...args); else f.queue.push(args); } as NonNullable<Window['fbq']> & {queue:unknown[][]};
 f.queue=[]; f.loaded=true; f.version='2.0'; f.push=f; window.fbq=f; window._fbq=f;
 f('consent','grant'); f('init',pixel); f('track','PageView'); f('track','ViewContent',{content_name:product.name,content_type:'product',value:product.price,currency:product.currency});
 const script=document.createElement('script');script.async=true;script.src='https://connect.facebook.net/en_US/fbevents.js';document.head.appendChild(script);initialized=true;
 },[consent]); }
