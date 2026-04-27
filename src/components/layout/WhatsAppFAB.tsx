import { site } from '../../config/site'

export default function WhatsAppFAB() {
  return (
    <a
      href={site.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab group fixed bottom-6 right-6 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <span className="pointer-events-none absolute bottom-[72px] right-0 hidden whitespace-nowrap rounded-full bg-[#25D366] px-4 py-2 text-[13px] font-medium text-white opacity-0 transition group-hover:opacity-100 lg:block">
        Chat on WhatsApp
      </span>
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.119 1.523 5.847L0 24l6.335-1.499A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    </a>
  )
}
