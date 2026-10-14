import { ContactIntent } from '../types/landing';

export const OFFICIAL_WHATSAPP_NUMBER = '6287729727309';
export const DISPLAY_WHATSAPP_NUMBER = '0877-2972-7309';

export interface WhatsAppLinkOptions {
  serviceTitle?: string;
  serviceId?: string;
  packageName?: string;
  customMessage?: string;
  senderName?: string;
}

/**
 * Menghasilkan teks template pesan WhatsApp berdasarkan niat/tujuan pengguna (ContactIntent)
 */
export function getWhatsAppMessageTemplate(intent: ContactIntent, options: WhatsAppLinkOptions = {}): string {
  const { serviceTitle, packageName, customMessage, senderName } = options;
  const greeting = senderName ? `Halo Kang Iky, saya ${senderName}.` : 'Halo Kang Iky,';

  switch (intent) {
    case 'consult':
      if (serviceTitle) {
        return `${greeting} Saya tertarik untuk berkonsultasi mengenai layanan *${serviceTitle}* bersama Insinyur Peternakan Kandang Kang Iky. Mohon informasi ketersediaan jadwal konsultasi dan mekanismenya. Terima kasih!`;
      }
      return `${greeting} Saya ingin berkonsultasi mengenai peternakan domba modern (tata kelola kandang/formulasi pakan) bersama Kang Iky (Ir. Rizky Ayuna Budiman, S.Pt). Mohon arahan jadwal dan prosedur konsultasinya. Terima kasih!`;

    case 'social':
      return `${greeting} Saya tertarik untuk berdiskusi mengenai *Kolaborasi Sosial / Program CSR / Kemitraan Sirkular Peternakan* bersama Kandang Kang Iky. Mohon info lebih lanjut perihal peluang kerja sama ini. Terima kasih!`;

    case 'buy':
    default:
      if (packageName) {
        return `${greeting} Saya tertarik memesan/berkonsultasi mengenai paket domba *${packageName}* di Kandang Kang Iky. Mohon info ketersediaan stok dan prosedur booking-nya ya. Terima kasih!`;
      }
      return `${greeting} Saya tertarik dengan hewan qurban dan aqiqah berkualitas di Kandang Kang Iky. Boleh minta informasi katalog terbaru dan panduan pemesanannya? Terima kasih!`;
  }
}

/**
 * Menghasilkan URL langsung ke WhatsApp API dengan teks pesan ter-encode rapi
 */
export function createWhatsAppLink(intent: ContactIntent, options: WhatsAppLinkOptions = {}): string {
  const message = options.customMessage || getWhatsAppMessageTemplate(intent, options);
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodedText}`;
}

export const getWhatsappUrl = createWhatsAppLink;

/**
 * Shortcut khusus untuk link konsultasi per layanan
 */
export function createConsultationWALink(serviceTitle: string): string {
  return createWhatsAppLink('consult', { serviceTitle });
}

/**
 * Shortcut khusus untuk link kolaborasi sosial / CSR
 */
export function createSocialImpactWALink(programTitle?: string): string {
  return createWhatsAppLink('social', { serviceTitle: programTitle });
}

/**
 * Shortcut khusus untuk link pemesanan domba / tabungan
 */
export function createPurchaseWALink(packageName?: string): string {
  return createWhatsAppLink('buy', { packageName });
}
