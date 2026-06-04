export interface ConversationEntry {
  identifier: string;
  entryPayload: {
    abstractMessage: {
      staticContent: {
        formatType: string;
        text: string;
      };
    };
    entryType: string;
    sender: {
      role: string;
      appType?: string;
    };
  };
  transcriptedTimestamp: number;
}

export interface StaticContentMessageTextPayload {
  text: string;
  curation?: any;
  template?: { name: string }[];
  options?: { name: string }[];
}

export const ConversationEventTypes = {
  ON_EMBEDDED_MESSAGE_SENT: 'onEmbeddedMessageSent',
  ON_EMBEDDED_MESSAGING_TYPING_INDICATOR_STARTED: 'onEmbeddedMessagingTypingIndicatorStarted',
  ON_EMBEDDED_MESSAGING_TYPING_INDICATOR_STOPPED: 'onEmbeddedMessagingTypingIndicatorStopped',
  ON_EMBEDDED_MESSAGING_CONTENT_RECEIVED: 'onEmbeddedMessagingContentReceived',
  ON_EMBEDDED_MESSAGING_CONVERSATION_READY: 'onEmbeddedMessagingConversationReady',
  ON_EMBEDDED_MESSAGING_CONVERSATION_OPENED: 'onEmbeddedMessagingConversationOpened',
  ON_EMBEDDED_MESSAGING_CONVERSATION_STARTED: 'onEmbeddedMessagingConversationStarted',
  ON_EMBEDDED_MESSAGING_CONVERSATION_CLOSED: 'onEmbeddedMessagingConversationClosed',
  ON_EMBEDDED_MESSAGING_WINDOW_MINIMIZED: 'onEmbeddedMessagingWindowMinimized',
  ON_EMBEDDED_MESSAGING_WINDOW_MAXIMIZED: 'onEmbeddedMessagingWindowMaximized',
  ON_EMBEDDED_MESSAGING_LIST_CONVERSATION_ENTRIES: 'onEmbeddedMessagingListConversationEntries',
  ON_EMBEDDED_MESSAGING_DELIVERED: 'onEmbeddedMessagingDelivered',
  ON_EMBEDDED_MESSAGE_READ: 'onEmbeddedMessageRead',
  ON_EMBEDDED_MESSAGING_CONVERSATION_PARTICIPANT_CHANGED: 'onEmbeddedMessagingConversationParticipantChanged',
  ON_EMBEDDED_MESSAGING_CONVERSATION_ROUTED: 'onEmbeddedMessagingConversationRouted',
} as const;

const MOCK_RESPONSES: Record<string, StaticContentMessageTextPayload> = {
  default: {
    text: "Welcome to Dubai Holdings Real Estate. I can help you explore premium properties across our portfolio including Jumeirah Bay Island, Palm Jumeirah, and Dubai Hills. What are you looking for today?",
    options: [
      { name: "Show me luxury villas" },
      { name: "Waterfront apartments" },
      { name: "Investment opportunities" },
      { name: "Schedule a viewing" },
    ],
  },
  "show me luxury villas": {
    text: "Here are some of our most exclusive villa offerings across Dubai Holdings communities. Each property features world-class amenities and premium finishes.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "DH_Property_Recommendations",
            data: [
              {
                sku: "JBI-V-001",
                name: "Jumeirah Bay Island Villa",
                Image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop",
                price: 45000000,
                currency: "AED",
                productLabel: "Ultra Premium",
                description: "6 Bed, 7 Bath, 12500 sqm",
                longDescription: "An architectural masterpiece on Jumeirah Bay Island, this villa offers unobstructed views of the Dubai skyline and direct beach access. Features include a private infinity pool, home cinema, and smart home automation throughout.",
                category1: "Jumeirah Bay Island",
                category3: "Meraas",
                bedrooms: 6,
                bathrooms: 7,
                area: 12500,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/master-development/jumeriah-bay-island",
              },
              {
                sku: "PJ-V-002",
                name: "Palm Jumeirah Signature Villa",
                Image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
                price: 38000000,
                currency: "AED",
                productLabel: "Beachfront",
                description: "5 Bed, 6 Bath, 10800 sqm",
                longDescription: "Located on the prestigious Palm Jumeirah frond, this signature villa boasts private beach access, a rooftop terrace with panoramic sea views, and bespoke Italian marble interiors.",
                category1: "Palm Jumeirah",
                category3: "Nakheel",
                bedrooms: 5,
                bathrooms: 6,
                area: 10800,
                areaUnit: "sqft",
                productUrl: "https://www.nakheel.com/en/developments/nakheel-collections/palmjumeirah",
              },
              {
                sku: "DH-V-003",
                name: "Dubai Hills Estate Mansion",
                Image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",
                price: 28000000,
                currency: "AED",
                productLabel: "Golf Course View",
                description: "5 Bed, 5 Bath, 9200 sqm",
                longDescription: "A contemporary mansion overlooking the championship golf course at Dubai Hills Estate. Features include floor-to-ceiling windows, landscaped gardens, and a private wellness suite.",
                category1: "Dubai Hills Estate",
                category3: "Dubai Holding RE",
                bedrooms: 5,
                bathrooms: 5,
                area: 9200,
                areaUnit: "sqft",
                productUrl: "https://www.dubaiholding.com/en/our-business/our-companies/dubai-holding-real-estate",
              },
            ],
          },
        ],
      },
    ],
    template: [{ name: "Recs" }],
    options: [
      { name: "Jumeirah Bay Island" },
      { name: "Palm Jumeirah" },
      { name: "Dubai Hills" },
    ],
  },
  "waterfront apartments": {
    text: "Discover our premium waterfront residences offering stunning views and direct access to the water. These properties represent the finest in coastal living.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "DH_Property_Recommendations",
            data: [
              {
                sku: "JBI-A-001",
                name: "Jumeirah Bay Penthouse",
                Image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
                price: 22000000,
                currency: "AED",
                productLabel: "Penthouse",
                description: "4 Bed, 5 Bath, 7800 sqm",
                longDescription: "A full-floor penthouse at Jumeirah Bay Island with 360-degree views of the Arabian Gulf and Dubai skyline. Private elevator, rooftop pool, and concierge service.",
                category1: "Jumeirah Bay Island",
                category3: "Meraas",
                bedrooms: 4,
                bathrooms: 5,
                area: 7800,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/master-development/jumeriah-bay-island",
              },
              {
                sku: "DC-A-002",
                name: "Dubai Creek Harbour Residence",
                Image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
                price: 8500000,
                currency: "AED",
                productLabel: "Creek View",
                description: "3 Bed, 4 Bath, 3200 sqm",
                longDescription: "Elegant waterfront apartment at Dubai Creek Harbour with views of the historic creek. Modern open-plan design with premium finishes and smart home features.",
                category1: "Dubai Creek Harbour",
                category3: "Dubai Holding RE",
                bedrooms: 3,
                bathrooms: 4,
                area: 3200,
                areaUnit: "sqft",
                productUrl: "https://www.dubaiholding.com/en/our-business/our-companies/dubai-holding-real-estate",
              },
              {
                sku: "MBR-A-003",
                name: "Madinat Jumeirah Living",
                Image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
                price: 5200000,
                currency: "AED",
                productLabel: "Resort Living",
                description: "2 Bed, 3 Bath, 2100 sqm",
                longDescription: "Resort-style living in the heart of Madinat Jumeirah. Access to private beach, world-class dining, and the Souk Madinat lifestyle.",
                category1: "Madinat Jumeirah",
                category3: "Dubai Holding RE",
                bedrooms: 2,
                bathrooms: 3,
                area: 2100,
                areaUnit: "sqft",
                productUrl: "https://www.dubaiholding.com/en/our-business/our-companies/dubai-holding-real-estate",
              },
            ],
          },
        ],
      },
    ],
    template: [{ name: "Recs" }],
    options: [
      { name: "Jumeirah Bay Island" },
      { name: "Dubai Creek" },
      { name: "Madinat Jumeirah" },
    ],
  },
  "investment opportunities": {
    text: "Dubai's real estate market continues to deliver exceptional returns. Here are our top investment-grade properties with strong rental yields and capital appreciation potential.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "DH_Property_Recommendations",
            data: [
              {
                sku: "INV-001",
                name: "Business Bay Tower Suite",
                Image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
                price: 3200000,
                currency: "AED",
                productLabel: "High Yield",
                description: "2 Bed, 2 Bath, 1450 sqm",
                longDescription: "Premium furnished apartment in Business Bay with guaranteed 8% rental yield. Managed by Dubai Holding hospitality division with full hotel services.",
                category1: "Business Bay",
                category3: "Dubai Properties",
                bedrooms: 2,
                bathrooms: 2,
                area: 1450,
                areaUnit: "sqft",
                productUrl: "https://dp.ae",
              },
              {
                sku: "INV-002",
                name: "JBR Walk Residence",
                Image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
                price: 4800000,
                currency: "AED",
                productLabel: "Tourist Hotspot",
                description: "3 Bed, 3 Bath, 2200 sqm",
                longDescription: "Beachfront residence on JBR Walk, one of Dubai's most visited tourist destinations. Strong short-term rental performance with 9.2% average yield.",
                category1: "JBR",
                category3: "Dubai Properties",
                bedrooms: 3,
                bathrooms: 3,
                area: 2200,
                areaUnit: "sqft",
                productUrl: "https://dp.ae",
              },
              {
                sku: "INV-003",
                name: "Palm Jumeirah Studio Collection",
                Image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop",
                price: 1800000,
                currency: "AED",
                productLabel: "Entry Point",
                description: "Studio, 1 Bath, 650 sqm",
                longDescription: "Compact luxury studio on Palm Jumeirah — the most iconic address in Dubai. Pool, gym, and beach access. Ideal for holiday rentals with consistent 7.5% yield.",
                category1: "Palm Jumeirah",
                category3: "Nakheel",
                bedrooms: 0,
                bathrooms: 1,
                area: 650,
                areaUnit: "sqft",
                productUrl: "https://www.nakheel.com/en/developments/nakheel-collections/palmjumeirah",
              },
            ],
          },
        ],
      },
    ],
    template: [{ name: "Recs" }],
    options: [
      { name: "Tell me about payment plans" },
      { name: "Schedule a viewing" },
      { name: "Compare these properties" },
    ],
  },
  "schedule a viewing": {
    text: "I'd be happy to help you schedule a private viewing. Here are our Sales Center details.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "Schedule_Appointment",
            data: [
              {
                page_info: {
                  project_name: "Dubai Holdings Real Estate",
                  page_title: "Schedule a Private Viewing",
                  hero_image_url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop",
                  hero_label: "Experience Dubai Living",
                },
                sales_center: {
                  name: "Dubai Holdings Sales Centre",
                  address: {
                    line_1: "Dubai Hills Estate",
                    line_2: "Al Khail Road, Dubai",
                    region: "United Arab Emirates",
                  },
                  map_data: {
                    directions_url: "https://maps.app.goo.gl/dubai-hills",
                    iframe_embed_url: "",
                  },
                  operating_hours: [
                    { days: "Sunday – Thursday", hours: "9:00 AM – 7:00 PM", current_status: "Open" },
                    { days: "Friday", hours: "2:00 PM – 7:00 PM", current_status: "Open" },
                    { days: "Saturday", hours: "10:00 AM – 6:00 PM", current_status: "Open" },
                  ],
                  contact_methods: {
                    phone: "+971 4 888 3333",
                    phone_link: "tel:+97148883333",
                    email: "sales@dubaiholding.com",
                    email_link: "mailto:sales@dubaiholding.com",
                    whatsapp: "+971 50 888 3333",
                  },
                  visitor_notes: "Complimentary valet parking available. Property tours by appointment — walk-ins welcome during operating hours.",
                },
              },
            ],
          },
        ],
      },
    ],
    template: [{ name: "ScheduleAppointment" }],
  },
  "tell me about payment plans": {
    text: "Dubai Holdings offers flexible payment plans across our developments. Most properties feature a 60/40 or 80/20 structure with post-handover options available.",
    options: [
      { name: "Show me luxury villas" },
      { name: "Waterfront apartments" },
      { name: "Schedule a viewing" },
    ],
  },
  "compare these properties": {
    text: "Here's a detailed comparison of the investment properties to help you make an informed decision.",
    curation: {
      products: [
        {
          id: "INV-001",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
          name: "Business Bay Tower Suite",
          price: "AED 3,200,000",
          rating: 4.5,
          features: [
            { name: "Location", value: "Business Bay" },
            { name: "Rental Yield", value: "8.0%" },
            { name: "Size", value: "1,450 sqft" },
            { name: "Type", value: "2 Bed Apartment" },
          ],
        },
        {
          id: "INV-002",
          image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
          name: "JBR Walk Residence",
          price: "AED 4,800,000",
          rating: 4.7,
          features: [
            { name: "Location", value: "JBR" },
            { name: "Rental Yield", value: "9.2%" },
            { name: "Size", value: "2,200 sqft" },
            { name: "Type", value: "3 Bed Beachfront" },
          ],
        },
        {
          id: "INV-003",
          image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop",
          name: "Palm Jumeirah Studio",
          price: "AED 1,800,000",
          rating: 4.3,
          features: [
            { name: "Location", value: "Palm Jumeirah" },
            { name: "Rental Yield", value: "7.5%" },
            { name: "Size", value: "650 sqft" },
            { name: "Type", value: "Studio" },
          ],
        },
      ],
    },
    template: [{ name: "Comparison" }],
  },
  "jumeirah bay island": {
    text: "Jumeirah Bay Island by Meraas is one of Dubai's most exclusive addresses — a sculpted island in the shape of a seahorse offering ultra-premium residences and villas.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "DH_Property_Recommendations",
            data: [
              {
                sku: "JBI-V-001",
                name: "Jumeirah Bay Island Villa",
                Image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop",
                price: 45000000,
                currency: "AED",
                productLabel: "Ultra Premium",
                description: "6 Bed, 7 Bath, 12500 sqft",
                category1: "Jumeirah Bay Island",
                category3: "Meraas",
                bedrooms: 6,
                bathrooms: 7,
                area: 12500,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/master-development/jumeriah-bay-island",
              },
              {
                sku: "JBI-A-001",
                name: "Jumeirah Bay Penthouse",
                Image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
                price: 22000000,
                currency: "AED",
                productLabel: "Penthouse",
                description: "4 Bed, 5 Bath, 7800 sqft",
                category1: "Jumeirah Bay Island",
                category3: "Meraas",
                bedrooms: 4,
                bathrooms: 5,
                area: 7800,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/master-development/jumeriah-bay-island",
              },
            ],
          },
        ],
      },
    ],
    template: [{ name: "Recs" }],
    options: [
      { name: "Schedule a viewing" },
      { name: "Tell me about payment plans" },
    ],
  },
  "palm jumeirah": {
    text: "Palm Jumeirah by Nakheel — the world's most iconic man-made island. Offering beachfront villas and premium apartments with unmatched views of the Arabian Gulf.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "DH_Property_Recommendations",
            data: [
              {
                sku: "PJ-V-002",
                name: "Palm Jumeirah Signature Villa",
                Image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
                price: 38000000,
                currency: "AED",
                productLabel: "Beachfront",
                description: "5 Bed, 6 Bath, 10800 sqft",
                category1: "Palm Jumeirah",
                category3: "Nakheel",
                bedrooms: 5,
                bathrooms: 6,
                area: 10800,
                areaUnit: "sqft",
                productUrl: "https://www.nakheel.com/en/developments/nakheel-collections/palmjumeirah",
              },
              {
                sku: "INV-003",
                name: "Palm Jumeirah Studio Collection",
                Image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop",
                price: 1800000,
                currency: "AED",
                productLabel: "Entry Point",
                description: "Studio, 1 Bath, 650 sqft",
                category1: "Palm Jumeirah",
                category3: "Nakheel",
                bedrooms: 0,
                bathrooms: 1,
                area: 650,
                areaUnit: "sqft",
                productUrl: "https://www.nakheel.com/en/developments/nakheel-collections/palmjumeirah",
              },
            ],
          },
        ],
      },
    ],
    template: [{ name: "Recs" }],
    options: [
      { name: "Schedule a viewing" },
      { name: "Compare these properties" },
    ],
  },
  "dubai hills": {
    text: "Dubai Hills Estate — a premium master-planned community featuring an 18-hole championship golf course, parks, and world-class retail. The heart of new Dubai.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "DH_Property_Recommendations",
            data: [
              {
                sku: "DH-V-003",
                name: "Dubai Hills Estate Mansion",
                Image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",
                price: 28000000,
                currency: "AED",
                productLabel: "Golf Course View",
                description: "5 Bed, 5 Bath, 9200 sqft",
                category1: "Dubai Hills Estate",
                category3: "Dubai Holding RE",
                bedrooms: 5,
                bathrooms: 5,
                area: 9200,
                areaUnit: "sqft",
                productUrl: "https://www.dubaiholding.com/en/our-business/our-companies/dubai-holding-real-estate",
              },
            ],
          },
        ],
      },
    ],
    template: [{ name: "Recs" }],
    options: [
      { name: "Schedule a viewing" },
      { name: "Show me luxury villas" },
    ],
  },
};

function findResponse(userMessage: string): StaticContentMessageTextPayload {
  const normalised = userMessage.toLowerCase().trim();
  if (MOCK_RESPONSES[normalised]) return MOCK_RESPONSES[normalised];
  for (const key of Object.keys(MOCK_RESPONSES)) {
    if (normalised.includes(key) || key.includes(normalised)) {
      return MOCK_RESPONSES[key];
    }
  }
  return MOCK_RESPONSES['default'];
}

let messageIdCounter = 0;

function createEntry(text: string, isUser: boolean): ConversationEntry {
  messageIdCounter++;
  const payload: StaticContentMessageTextPayload = isUser
    ? { text }
    : findResponse(text);

  return {
    identifier: `msg-${messageIdCounter}`,
    entryPayload: {
      abstractMessage: {
        staticContent: {
          formatType: "Text",
          text: JSON.stringify(payload),
        },
      },
      entryType: "Message",
      sender: {
        role: isUser ? "EndUser" : "Agent",
        appType: isUser ? "custom" : "agent",
      },
    },
    transcriptedTimestamp: Date.now(),
  };
}

export function initMockController() {
  const Events = ConversationEventTypes;
  let conversationStarted = false;

  window.AdaptiveWebsite = {
    initialize: () => {},
    sendTextMessage: async (value: string) => {
      const userEntry = createEntry(value, true);
      window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGE_SENT, {
        detail: { conversationEntry: userEntry },
      }));

      window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_TYPING_INDICATOR_STARTED));

      setTimeout(() => {
        window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_TYPING_INDICATOR_STOPPED));

        const agentEntry = createEntry(value, false);
        window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGE_SENT, {
          detail: { conversationEntry: agentEntry },
        }));

        const response = findResponse(value);
        if (response.curation || response.template) {
          window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONTENT_RECEIVED, {
            detail: { content: response },
          }));
        }
      }, 1200 + Math.random() * 800);
    },
    minimize: () => {
      window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_WINDOW_MINIMIZED));
    },
    maximize: () => {
      window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_WINDOW_MAXIMIZED));
      if (!conversationStarted) {
        conversationStarted = true;
        window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONVERSATION_OPENED));
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGE_SENT, {
            detail: { conversationEntry: createEntry('default', false) },
          }));
          const defaultResp = MOCK_RESPONSES['default'];
          window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONTENT_RECEIVED, {
            detail: { content: defaultResp },
          }));
        }, 600);
      }
    },
    initializeConversation: async () => {
      conversationStarted = true;
      window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONVERSATION_OPENED));
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGE_SENT, {
          detail: { conversationEntry: createEntry('default', false) },
        }));
        const defaultResp = MOCK_RESPONSES['default'];
        window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONTENT_RECEIVED, {
          detail: { content: defaultResp },
        }));
      }, 600);
    },
    cleanupConversation: async () => {},
    startNewConversation: async () => {},
    endConversation: async () => {
      conversationStarted = false;
      window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONVERSATION_CLOSED));
    },
    sessionExists: () => false,
    Events,
    util: {
      isConversationEntryStaticContentMessage: (entry: ConversationEntry) => {
        return entry?.entryPayload?.entryType === "Message";
      },
      isMessageFromEndUser: (entry: ConversationEntry) => {
        return entry?.entryPayload?.sender?.role === "EndUser";
      },
      isTextMessage: (entry: ConversationEntry) => {
        return entry?.entryPayload?.entryType === "Message";
      },
      parseEntryPayload: (data: any): ConversationEntry => {
        return data as ConversationEntry;
      },
      parseJsonInAgentResponse: (content: string) => {
        try {
          return JSON.parse(content);
        } catch {
          return undefined;
        }
      },
      getTextMessageContent: (entry: ConversationEntry) => {
        return entry?.entryPayload?.abstractMessage?.staticContent?.text || '';
      },
    },
  };

  setTimeout(() => {
    window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONVERSATION_READY));
  }, 100);
}

declare global {
  interface Window {
    AdaptiveWebsite: any;
  }
  interface WindowEventMap {
    [key: string]: CustomEvent;
  }
}
