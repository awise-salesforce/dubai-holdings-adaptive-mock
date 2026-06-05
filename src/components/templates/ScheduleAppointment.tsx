import type { StaticContentMessageTextPayload } from '../../mockController';
import './ScheduleAppointment.css';

interface ScheduleAppointmentProps {
  content: StaticContentMessageTextPayload;
  onBack?: () => void;
}

interface ScheduleData {
  page_info?: { project_name?: string; page_title?: string; hero_image_url?: string; hero_label?: string };
  sales_center?: {
    name?: string;
    address?: { line_1?: string; line_2?: string; region?: string };
    map_data?: { directions_url?: string };
    operating_hours?: Array<{ days?: string; hours?: string; current_status?: string }>;
    contact_methods?: { phone?: string; email?: string; whatsapp?: string };
    visitor_notes?: string;
  };
}

const ScheduleAppointment: React.FC<ScheduleAppointmentProps> = ({ content, onBack }) => {
  const curation = content?.curation;
  let data: ScheduleData | null = null;

  if (Array.isArray(curation) && curation[0]?.personalizations?.[0]?.data?.[0]) {
    data = curation[0].personalizations[0].data[0] as ScheduleData;
  }

  if (!data) return null;

  const page = data.page_info || {};
  const center = data.sales_center || {};
  const address = center.address || {};
  const hours = center.operating_hours || [];
  const contact = center.contact_methods || {};

  return (
    <div className="schedule-template">
      <div className="schedule-hero">
        {page.hero_image_url && <img src={page.hero_image_url} alt={page.page_title || ''} />}
        <div className="schedule-hero-overlay">
          <div className="schedule-hero-label">{page.hero_label || 'Book Your Experience'}</div>
          <h1>Schedule a <em>Visit</em></h1>
        </div>
      </div>

      <div className="schedule-content">
        <div className="schedule-info">
          <div className="info-block">
            <h3>Find Us</h3>
            <div className="address-card">
              <div className="address-name">{center.name || 'Sales Centre'}</div>
              {address.line_1 && <span>{address.line_1}</span>}
              {address.line_2 && <span>{address.line_2}</span>}
              {address.region && <span>{address.region}</span>}
            </div>
          </div>

          {hours.length > 0 && (
            <div className="info-block">
              <h3>Operating Hours</h3>
              {hours.map((h, i) => (
                <div key={i} className="hours-row">
                  <span className="hours-days">{h.days}</span>
                  <span className="hours-time">{h.hours}</span>
                  <span className={`hours-status ${h.current_status?.toLowerCase() === 'open' ? 'open' : 'closed'}`}>
                    {h.current_status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {(contact.phone || contact.email || contact.whatsapp) && (
            <div className="info-block">
              <h3>Contact Us</h3>
              {contact.phone && (
                <div className="contact-row">
                  <span className="contact-label">Phone</span>
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                </div>
              )}
              {contact.email && (
                <div className="contact-row">
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              )}
              {contact.whatsapp && (
                <div className="contact-row">
                  <span className="contact-label">WhatsApp</span>
                  <a href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}>{contact.whatsapp}</a>
                </div>
              )}
            </div>
          )}

          {center.visitor_notes && (
            <div className="visitor-note">{center.visitor_notes}</div>
          )}
        </div>

        <div className="schedule-map">
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860!2d55.1559444!3d25.1028056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b4084d56593%3A0x2642cd85f3bd64c7!2sMeraas%20and%20Nakheel%20Sales%20Center!5e0!3m2!1sen!2sae!4v1717500000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Meraas Sales Centre Location"
            />
          </div>
          <div className="map-info-card">
            <p className="map-info-name">{center.name}</p>
            <p className="map-info-address">{address.line_1}, {address.line_2}</p>
            <a
              href="https://maps.app.goo.gl/vpLHnTWMGPVCHBuu5"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {onBack && (
        <button type="button" className="back-button" onClick={onBack}>← Back</button>
      )}
    </div>
  );
};

export default ScheduleAppointment;
