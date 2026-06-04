import { useEffect, useState } from 'react';
import type { StaticContentMessageTextPayload } from '../mockController';
import PropertyCard from './shared/PropertyCard';
import type { PropertyItem } from './shared/PropertyCard';
import Comparison from './templates/Comparison';
import ScheduleAppointment from './templates/ScheduleAppointment';
import PropertyDetails from './templates/PropertyDetails';
import './ContentZone.css';

const ContentZone: React.FC<{ show: boolean }> = ({ show }) => {
  const [content, setContent] = useState<StaticContentMessageTextPayload | null>(null);
  const [previousContent, setPreviousContent] = useState<StaticContentMessageTextPayload | null>(null);

  useEffect(() => {
    const Events = window.AdaptiveWebsite.Events;
    const onContent = (e: CustomEvent) => {
      if (e.detail.content) {
        setContent(e.detail.content);
      }
    };
    window.addEventListener(Events.ON_EMBEDDED_MESSAGING_CONTENT_RECEIVED, onContent as EventListener);
    return () => {
      window.removeEventListener(Events.ON_EMBEDDED_MESSAGING_CONTENT_RECEIVED, onContent as EventListener);
    };
  }, []);

  const handlePropertyClick = (property: PropertyItem) => {
    setPreviousContent(content);
    setContent({
      text: '',
      template: [{ name: 'PropertyDetails' }],
      curation: { property },
    });
  };

  const handleBack = () => {
    setContent(previousContent);
    setPreviousContent(null);
  };

  if (!show) return null;

  const curation = content?.curation;
  const templateName = content?.template?.[0]?.name;

  // Determine personalization point name
  const hasPersonalizations = Array.isArray(curation) && curation.length > 0 && 'personalizations' in curation[0];
  const firstPersonalization = hasPersonalizations ? curation[0].personalizations?.[0] : null;
  const pointName = firstPersonalization?.personalizationPointName;

  // Schedule Appointment
  if (templateName === 'ScheduleAppointment' || pointName === 'Schedule_Appointment') {
    return (
      <div className="content-zone-container">
        <div className="content-zone-content">
          <ScheduleAppointment content={content!} onBack={handleBack} />
        </div>
      </div>
    );
  }

  // Property Details
  if (templateName === 'PropertyDetails') {
    return (
      <div className="content-zone-container">
        <div className="content-zone-content">
          <PropertyDetails content={content!} onBack={handleBack} />
        </div>
      </div>
    );
  }

  // Comparison
  if (templateName === 'Comparison') {
    return (
      <div className="content-zone-container">
        <div className="content-zone-content">
          <Comparison content={content!} />
        </div>
      </div>
    );
  }

  // Recs / Property Grid
  if (hasPersonalizations && firstPersonalization?.data) {
    const properties: PropertyItem[] = firstPersonalization.data;
    const options = (content as any)?.options ?? [];

    return (
      <div className="content-zone-container">
        <div className="content-zone-content">
          <div className="recs-template">
            <div className="recs-banner">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
                alt="Dubai skyline"
              />
              {options.length > 0 && (
                <div className="recs-banner-overlay">
                  <p className="recs-banner-title">Featured Communities</p>
                  <div className="recs-banner-options">
                    {options.map((opt: { name: string }) => (
                      <span
                        key={opt.name}
                        className="recs-banner-option"
                        onClick={() => window.AdaptiveWebsite.sendTextMessage(opt.name)}
                      >
                        {opt.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="recs-grid">
              {properties.map((property: PropertyItem) => (
                <PropertyCard
                  key={property.sku}
                  property={property}
                  onViewMore={handlePropertyClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Placeholder / loading
  return (
    <div className="content-zone-container">
      <div className="content-zone-content">
        <div className="blank-content">
          <div className="typing-indicator">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentZone;
