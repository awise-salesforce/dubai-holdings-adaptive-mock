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
    text: "Welcome to Meraas. I can help you explore our residential projects across Dubai's most iconic communities — from beachfront living at La Mer to urban energy at City Walk and creative culture at d3. What interests you?",
    options: [
      { name: "Waterfront residences" },
      { name: "Urban apartments" },
      { name: "Luxury penthouses" },
      { name: "Schedule a viewing" },
    ],
  },
  "waterfront residences": {
    text: "Here are our premier waterfront residences — from the beachfront elegance of Solaya at La Mer to the gulf views at Bluewaters Bay. Each offers direct water access and resort-style living.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "Meraas_Property_Recommendations",
            data: [
              {
                sku: "SOLAYA-001",
                name: "Solaya at La Mer",
                Image: "https://meraas.com/sites/default/files/2026-04/Gallery-1.jpg",
                price: 13800000,
                currency: "AED",
                productLabel: "Beachfront",
                description: "4 Bed, Penthouse available",
                longDescription: "A private collection of 234 residences where thoughtfully crafted spaces exude quiet elegance. Nine beachfront buildings maximise sea, city, and beach views with open-plan layouts. Gated residences with direct beach access, minutes from Dubai's centre.",
                category1: "La Mer",
                category3: "Meraas",
                bedrooms: 4,
                bathrooms: 5,
                area: 5500,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/solaya",
              },
              {
                sku: "BWB-001",
                name: "Bluewaters Bay",
                Image: "https://meraas.com/sites/default/files/2024-05/BWB%20-%20TG%20-%201.png",
                price: 2850000,
                currency: "AED",
                productLabel: "Waterfront",
                description: "1 to 4 Bed, Gulf Views",
                longDescription: "Spectacular, light-flooded waterfront apartments rising from the Arabian Gulf. Contemporary open-plan layouts offer mesmerising views of Dubai city, Ain Dubai, and the yacht-dotted coastline. Elevated community garden, infinity pool with sea views, and tennis court.",
                category1: "Bluewaters",
                category3: "Meraas",
                bedrooms: 2,
                bathrooms: 3,
                area: 1800,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/bluewaters-bay",
              },
              {
                sku: "MJL-001",
                name: "Madinat Jumeirah Living",
                Image: "https://meraas.com/sites/default/files/2024-03/MJL%20-%20TG%20-%201.png",
                price: 1530000,
                currency: "AED",
                productLabel: "Seafront",
                description: "1 to 4 Bed, Burj Al Arab Views",
                longDescription: "A seafront residential community featuring contemporary apartments with traditional Arabesque architectural influences, set against the backdrop of the Burj Al Arab. 190+ berth marina, beach access, and 5-star hospitality experiences.",
                category1: "Madinat Jumeirah Living",
                category3: "Meraas",
                bedrooms: 2,
                bathrooms: 2,
                area: 1200,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/mjl-residences",
              },
            ],
          },
        ],
      },
    ],
    template: [{ name: "Recs" }],
    options: [
      { name: "Compare these properties" },
      { name: "Solaya at La Mer" },
      { name: "Schedule a viewing" },
    ],
  },
  "urban apartments": {
    text: "Explore our urban living collection — from the creative energy of Dubai Design District to the vibrant heart of City Walk. Modern apartments designed for contemporary lifestyles.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "Meraas_Property_Recommendations",
            data: [
              {
                sku: "CWC-001",
                name: "City Walk Crestlane",
                Image: "https://meraas.com/sites/default/files/2025-06/Top%20Gallery%201.jpg",
                price: 2700000,
                currency: "AED",
                productLabel: "New Launch",
                description: "1 to 4 Bed, Waterfront Urban",
                longDescription: "An exclusive collection of apartments and duplexes combining urban energy with waterfront living in central Dubai. Water is the essence — buildings surrounded by water features offering tranquil reflections. Sleek finishes, open layouts, and skyline views.",
                category1: "City Walk",
                category3: "Meraas",
                bedrooms: 2,
                bathrooms: 2,
                area: 1400,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/city-walk-crestlane",
              },
              {
                sku: "DQD3-001",
                name: "Design Quarter at d3",
                Image: "https://meraas.com/sites/default/files/2024-03/DQD3%20-%20TG%20-%201.png",
                price: 1870000,
                currency: "AED",
                productLabel: "Creative Living",
                description: "1 to 3 Bed, Canal Views",
                longDescription: "Located in Dubai Design District, home to Dubai Design Week and Fashion Week. City views, modern design, and Dubai Water Canal access. Where home meets hustle meets the creative bustle.",
                category1: "Dubai Design District",
                category3: "Meraas",
                bedrooms: 2,
                bathrooms: 2,
                area: 1100,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/designquarter-at-d3",
              },
              {
                sku: "JRET-001",
                name: "Jumeirah Residences Emirates Towers",
                Image: "https://meraas.com/sites/default/files/2025-05/Meraas-Website-Images-880x860-1.jpg",
                price: 3510000,
                currency: "AED",
                productLabel: "Iconic Skyline",
                description: "1 to 4 Bed, Sky Pools",
                longDescription: "A new architectural icon on Dubai's skyline. One- to four-bedroom apartments with no internal columns, creating open, fluid spaces. Sky terrace with infinity pool, private cinema, padel court, and Jumeirah Signature Services.",
                category1: "Trade Centre 2",
                category3: "Meraas",
                bedrooms: 3,
                bathrooms: 3,
                area: 2200,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/jumeirah-emirates-tower",
              },
            ],
          },
        ],
      },
    ],
    template: [{ name: "Recs" }],
    options: [
      { name: "Compare these properties" },
      { name: "City Walk Crestlane" },
      { name: "Schedule a viewing" },
    ],
  },
  "luxury penthouses": {
    text: "Discover our most exclusive residences — penthouses and ultra-premium apartments with panoramic views and bespoke finishes across Dubai's finest addresses.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "Meraas_Property_Recommendations",
            data: [
              {
                sku: "SOLAYA-PH",
                name: "Solaya Penthouse",
                Image: "https://meraas.com/sites/default/files/2026-04/Gallery-2.jpg",
                price: 13800000,
                currency: "AED",
                productLabel: "Penthouse",
                description: "5 Bed, Beachfront Penthouse",
                longDescription: "A cultered coastal penthouse at La Mer — 234 residences across nine beachfront buildings. Gated community with direct beach access, private cinema, spa, and curated gardens connecting to Beach Park. Minutes from J1 Beach with a Riviera-inspired lifestyle.",
                category1: "La Mer",
                category3: "Meraas",
                bedrooms: 5,
                bathrooms: 6,
                area: 8500,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/solaya",
              },
              {
                sku: "JRET-PH",
                name: "Emirates Towers Penthouse",
                Image: "https://meraas.com/sites/default/files/2025-05/Meraas-Website-Images-880x860-3.jpg",
                price: 15000000,
                currency: "AED",
                productLabel: "Sky Living",
                description: "4 Bed, Double Height, Sky Pool",
                longDescription: "The pinnacle of Emirates Towers — a 4-bedroom penthouse with double-height living spaces and no internal columns. Private sky terrace with infinity pool, lounge seating, and curated greenery offering unmatched skyline views.",
                category1: "Trade Centre 2",
                category3: "Meraas",
                bedrooms: 4,
                bathrooms: 5,
                area: 6800,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/jumeirah-emirates-tower",
              },
              {
                sku: "CWC-DPX",
                name: "City Walk Crestlane Duplex",
                Image: "https://meraas.com/sites/default/files/2025-06/Top%20Gallery%202.jpg",
                price: 8500000,
                currency: "AED",
                productLabel: "Duplex",
                description: "4 Bed Duplex, Water Views",
                longDescription: "A 4-bedroom duplex at City Walk Crestlane where urban energy meets waterfront calm. Panoramic water views, state-of-the-art fitness, infinity pools. 2 min walk from City Mall, 7 min from Jumeirah Beach.",
                category1: "City Walk",
                category3: "Meraas",
                bedrooms: 4,
                bathrooms: 4,
                area: 4200,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/city-walk-crestlane",
              },
            ],
          },
        ],
      },
    ],
    template: [{ name: "Recs" }],
    options: [
      { name: "Solaya at La Mer" },
      { name: "Emirates Towers" },
      { name: "Schedule a viewing" },
    ],
  },
  "schedule a viewing": {
    text: "I'd be happy to help you schedule a private viewing. Which project are you interested in visiting?",
    options: [
      { name: "City Walk Crestlane" },
      { name: "Bluewaters Bay" },
      { name: "Solaya at La Mer" },
      { name: "Design Quarter at d3" },
    ],
  },
  "schedule viewing crestlane": {
    text: "Great choice — City Walk Crestlane. Our sales team can arrange a private tour of the show apartments. What day works best for you?",
    curation: [{ personalizations: [{ personalizationPointName: "Schedule_Appointment", data: [{ page_info: { project_name: "City Walk Crestlane", page_title: "Schedule a Viewing", hero_image_url: "https://meraas.com/sites/default/files/2025-06/Top%20Gallery%201.jpg", hero_label: "City Walk Crestlane" }, sales_center: { name: "Meraas & Nakheel Head Office, Building 5", address: { line_1: "King Salman Bin Abdul Aziz Al Saud Street", line_2: "Al Sufouh 2 - Dubai", region: "UAE" }, map_data: { directions_url: "https://www.google.com/maps/place/Meraas+and+Nakheel+Sales+Center/@25.1028056,55.1559444,715m" }, operating_hours: [{ days: "Monday – Thursday", hours: "8:00 AM to 5:00 PM", current_status: "Open" }, { days: "Friday", hours: "8:00 AM to 12:00 PM and 2:00 PM to 5:00 PM", current_status: "Open" }], contact_methods: { phone: "800 MERAAS (800-637227)", email: "sales@meraas.com", whatsapp: "+971 4 871 3735" }, visitor_notes: "International Contact Number: +971 4 871 3735. Property tours by appointment." } }] }] }],
    template: [{ name: "ScheduleAppointment" }],
    options: [
      { name: "This Sunday" },
      { name: "Monday" },
      { name: "Tuesday" },
      { name: "Another day" },
    ],
  },
  "schedule viewing bluewaters": {
    text: "Bluewaters Bay — an excellent choice. We can arrange a site visit to see the construction progress and show units. What day works best for you?",
    curation: [{ personalizations: [{ personalizationPointName: "Schedule_Appointment", data: [{ page_info: { project_name: "Bluewaters Bay", page_title: "Schedule a Viewing", hero_image_url: "https://meraas.com/sites/default/files/2024-05/BWB%20-%20TG%20-%201.png", hero_label: "Bluewaters Bay" }, sales_center: { name: "Meraas & Nakheel Head Office, Building 5", address: { line_1: "King Salman Bin Abdul Aziz Al Saud Street", line_2: "Al Sufouh 2 - Dubai", region: "UAE" }, map_data: { directions_url: "https://www.google.com/maps/place/Meraas+and+Nakheel+Sales+Center/@25.1028056,55.1559444,715m" }, operating_hours: [{ days: "Monday – Thursday", hours: "8:00 AM to 5:00 PM", current_status: "Open" }, { days: "Friday", hours: "8:00 AM to 12:00 PM and 2:00 PM to 5:00 PM", current_status: "Open" }], contact_methods: { phone: "800 MERAAS (800-637227)", email: "sales@meraas.com", whatsapp: "+971 4 871 3735" }, visitor_notes: "International Contact Number: +971 4 871 3735. Property tours by appointment." } }] }] }],
    template: [{ name: "ScheduleAppointment" }],
    options: [
      { name: "This Sunday" },
      { name: "Monday" },
      { name: "Tuesday" },
      { name: "Another day" },
    ],
  },
  "schedule viewing solaya": {
    text: "Solaya at La Mer — our newest beachfront collection. We can arrange a private tour of the sales gallery and model units. What day works best for you?",
    curation: [{ personalizations: [{ personalizationPointName: "Schedule_Appointment", data: [{ page_info: { project_name: "Solaya at La Mer", page_title: "Schedule a Viewing", hero_image_url: "https://meraas.com/sites/default/files/2026-04/Gallery-1.jpg", hero_label: "Solaya at La Mer" }, sales_center: { name: "Meraas & Nakheel Head Office, Building 5", address: { line_1: "King Salman Bin Abdul Aziz Al Saud Street", line_2: "Al Sufouh 2 - Dubai", region: "UAE" }, map_data: { directions_url: "https://www.google.com/maps/place/Meraas+and+Nakheel+Sales+Center/@25.1028056,55.1559444,715m" }, operating_hours: [{ days: "Monday – Thursday", hours: "8:00 AM to 5:00 PM", current_status: "Open" }, { days: "Friday", hours: "8:00 AM to 12:00 PM and 2:00 PM to 5:00 PM", current_status: "Open" }], contact_methods: { phone: "800 MERAAS (800-637227)", email: "sales@meraas.com", whatsapp: "+971 4 871 3735" }, visitor_notes: "International Contact Number: +971 4 871 3735. Property tours by appointment." } }] }] }],
    template: [{ name: "ScheduleAppointment" }],
    options: [
      { name: "This Sunday" },
      { name: "Monday" },
      { name: "Tuesday" },
      { name: "Another day" },
    ],
  },
  "schedule viewing d3": {
    text: "Design Quarter at d3 — perfect for those who appreciate creative living. We can show you the show apartment and community amenities. What day works best for you?",
    curation: [{ personalizations: [{ personalizationPointName: "Schedule_Appointment", data: [{ page_info: { project_name: "Design Quarter at d3", page_title: "Schedule a Viewing", hero_image_url: "https://meraas.com/sites/default/files/2024-03/DQD3%20-%20TG%20-%201.png", hero_label: "Design Quarter at d3" }, sales_center: { name: "Meraas & Nakheel Head Office, Building 5", address: { line_1: "King Salman Bin Abdul Aziz Al Saud Street", line_2: "Al Sufouh 2 - Dubai", region: "UAE" }, map_data: { directions_url: "https://www.google.com/maps/place/Meraas+and+Nakheel+Sales+Center/@25.1028056,55.1559444,715m" }, operating_hours: [{ days: "Monday – Thursday", hours: "8:00 AM to 5:00 PM", current_status: "Open" }, { days: "Friday", hours: "8:00 AM to 12:00 PM and 2:00 PM to 5:00 PM", current_status: "Open" }], contact_methods: { phone: "800 MERAAS (800-637227)", email: "sales@meraas.com", whatsapp: "+971 4 871 3735" }, visitor_notes: "International Contact Number: +971 4 871 3735. Property tours by appointment." } }] }] }],
    template: [{ name: "ScheduleAppointment" }],
    options: [
      { name: "This Sunday" },
      { name: "Monday" },
      { name: "Tuesday" },
      { name: "Another day" },
    ],
  },
  "this sunday": {
    text: "Sunday works well. We have availability at these times — which would you prefer?",
    options: [
      { name: "10:00 AM" },
      { name: "12:00 PM" },
      { name: "2:00 PM" },
      { name: "4:00 PM" },
    ],
  },
  "monday": {
    text: "Monday is available. What time would suit you best?",
    options: [
      { name: "10:00 AM" },
      { name: "12:00 PM" },
      { name: "2:00 PM" },
      { name: "4:00 PM" },
    ],
  },
  "tuesday": {
    text: "Tuesday works. Here are the available slots — which do you prefer?",
    options: [
      { name: "10:00 AM" },
      { name: "12:00 PM" },
      { name: "2:00 PM" },
      { name: "4:00 PM" },
    ],
  },
  "another day": {
    text: "No problem. We're open Monday to Thursday 8 AM–5 PM and Friday 8 AM–12 PM & 2–5 PM. Just let me know which day and I'll check availability.",
    options: [
      { name: "Wednesday" },
      { name: "Thursday" },
    ],
  },
  "wednesday": {
    text: "Wednesday is available. What time works for you?",
    options: [
      { name: "10:00 AM" },
      { name: "12:00 PM" },
      { name: "2:00 PM" },
      { name: "4:00 PM" },
    ],
  },
  "thursday": {
    text: "Thursday works. What time would you prefer?",
    options: [
      { name: "10:00 AM" },
      { name: "12:00 PM" },
      { name: "2:00 PM" },
      { name: "4:00 PM" },
    ],
  },
  "10:00 am": {
    text: "10:00 AM — noted. To confirm your booking, could you share your preferred contact method? We'll send a confirmation with directions to the sales centre.",
    options: [
      { name: "I'll share my email" },
      { name: "Call me instead" },
      { name: "WhatsApp me" },
    ],
  },
  "12:00 pm": {
    text: "12:00 PM — perfect. To confirm your booking, could you share your preferred contact method? We'll send a confirmation with directions to the sales centre.",
    options: [
      { name: "I'll share my email" },
      { name: "Call me instead" },
      { name: "WhatsApp me" },
    ],
  },
  "2:00 pm": {
    text: "2:00 PM — great. To confirm your booking, could you share your preferred contact method? We'll send a confirmation with directions.",
    options: [
      { name: "I'll share my email" },
      { name: "Call me instead" },
      { name: "WhatsApp me" },
    ],
  },
  "4:00 pm": {
    text: "4:00 PM — noted. To confirm your booking, could you share your preferred contact method? We'll send a confirmation with directions.",
    options: [
      { name: "I'll share my email" },
      { name: "Call me instead" },
      { name: "WhatsApp me" },
    ],
  },
  "i'll share my email": {
    text: "Please type your email address and I'll send the confirmation details.",
  },
  "call me instead": {
    text: "Of course. Please share your phone number and our team will call you to confirm.",
  },
  "whatsapp me": {
    text: "Perfect. Please share your WhatsApp number and we'll send the confirmation there.",
  },
  "confirm viewing": {
    text: "Your viewing is confirmed! Here are the details for your visit.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "Schedule_Appointment",
            data: [
              {
                page_info: {
                  project_name: "Meraas",
                  page_title: "Viewing Confirmed",
                  hero_image_url: "https://meraas.com/sites/default/files/2026-04/Gallery-3.jpg",
                  hero_label: "See You Soon",
                },
                sales_center: {
                  name: "Meraas & Nakheel Head Office, Building 5",
                  address: {
                    line_1: "King Salman Bin Abdul Aziz Al Saud Street",
                    line_2: "Al Sufouh 2 - Dubai",
                    region: "UAE",
                  },
                  map_data: {
                    directions_url: "https://www.google.com/maps/place/Meraas+and+Nakheel+Sales+Center/@25.1028056,55.1559444,715m",
                    iframe_embed_url: "",
                  },
                  operating_hours: [
                    { days: "Monday – Thursday", hours: "8:00 AM to 5:00 PM", current_status: "Open" },
                    { days: "Friday", hours: "8:00 AM to 12:00 PM and 2:00 PM to 5:00 PM", current_status: "Open" },
                  ],
                  contact_methods: {
                    phone: "800 MERAAS (800-637227)",
                    phone_link: "tel:800637227",
                    email: "sales@meraas.com",
                    email_link: "mailto:sales@meraas.com",
                    whatsapp: "+971 4 871 3735",
                  },
                  visitor_notes: "International Contact Number: +971 4 871 3735. Property tours by appointment.",
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
    text: "Meraas offers flexible payment plans across our developments. City Walk Crestlane starts at AED 2.7M, Design Quarter at d3 from AED 1.87M, and Bluewaters Bay from AED 2.85M. Most projects offer construction-linked installment plans — download the detailed PDF from each project page for full terms.",
    options: [
      { name: "Waterfront residences" },
      { name: "Urban apartments" },
      { name: "Schedule a viewing" },
    ],
  },
  "compare these properties": {
    text: "Here's a comparison of our featured available residences to help you find the right fit.",
    curation: {
      products: [
        {
          id: "CWC-001",
          image: "https://meraas.com/sites/default/files/2025-06/Top%20Gallery%201.jpg",
          name: "City Walk Crestlane",
          price: "From AED 2.70M",
          rating: 4.7,
          features: [
            { name: "Location", value: "City Walk" },
            { name: "Type", value: "1-4 Bed Apartments" },
            { name: "Proximity", value: "2 min to City Mall" },
            { name: "Highlight", value: "Waterfront Urban" },
          ],
        },
        {
          id: "BWB-001",
          image: "https://meraas.com/sites/default/files/2024-05/BWB%20-%20TG%20-%201.png",
          name: "Bluewaters Bay",
          price: "From AED 2.85M",
          rating: 4.6,
          features: [
            { name: "Location", value: "Bluewaters Island" },
            { name: "Type", value: "1-4 Bed Waterfront" },
            { name: "Proximity", value: "5 min walk to Ain Dubai" },
            { name: "Highlight", value: "Arabian Gulf Views" },
          ],
        },
        {
          id: "DQD3-001",
          image: "https://meraas.com/sites/default/files/2024-03/DQD3%20-%20TG%20-%201.png",
          name: "Design Quarter at d3",
          price: "From AED 1.87M",
          rating: 4.5,
          features: [
            { name: "Location", value: "Dubai Design District" },
            { name: "Type", value: "1-3 Bed Apartments" },
            { name: "Proximity", value: "10 min to Downtown" },
            { name: "Highlight", value: "Canal & Creative Hub" },
          ],
        },
      ],
    },
    template: [{ name: "Comparison" }],
  },
  "solaya at la mer": {
    text: "Solaya — a cultured coastal community by Meraas & Brookfield Properties. 234 residences across nine beachfront buildings at La Mer, Jumeirah 1. Direct beach access, surrounded by renowned hotels, beach clubs, and restaurants.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "Meraas_Property_Recommendations",
            data: [
              {
                sku: "SOLAYA-2BR",
                name: "Solaya 2 Bedroom",
                Image: "https://meraas.com/sites/default/files/2026-04/Gallery-1.jpg",
                price: 13800000,
                currency: "AED",
                productLabel: "Beachfront",
                description: "2 Bed, Sea Views",
                category1: "La Mer",
                category3: "Meraas",
                bedrooms: 2,
                bathrooms: 3,
                area: 2800,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/solaya",
              },
              {
                sku: "SOLAYA-4BR",
                name: "Solaya 4 Bedroom",
                Image: "https://meraas.com/sites/default/files/2026-04/Gallery-2.jpg",
                price: 22000000,
                currency: "AED",
                productLabel: "Premium",
                description: "4 Bed, Beach Access",
                category1: "La Mer",
                category3: "Meraas",
                bedrooms: 4,
                bathrooms: 5,
                area: 5500,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/solaya",
              },
              {
                sku: "SOLAYA-PH",
                name: "Solaya Penthouse",
                Image: "https://meraas.com/sites/default/files/2026-04/Gallery-3.jpg",
                price: 35000000,
                currency: "AED",
                productLabel: "Penthouse",
                description: "5 Bed, Full Floor",
                category1: "La Mer",
                category3: "Meraas",
                bedrooms: 5,
                bathrooms: 6,
                area: 8500,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/solaya",
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
  "bluewaters bay": {
    text: "Bluewaters Bay — spectacular waterfront apartments rising from the Arabian Gulf. Contemporary 1 to 4-bedroom apartments with views of Ain Dubai, the city skyline, and the yacht-dotted coastline. Construction at 23% with Tower 1 at Level 27.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "Meraas_Property_Recommendations",
            data: [
              {
                sku: "BWB-1BR",
                name: "Bluewaters Bay 1 Bedroom",
                Image: "https://meraas.com/sites/default/files/2024-05/BWB%20-%20TG%20-%201.png",
                price: 2850000,
                currency: "AED",
                productLabel: "Gulf Views",
                description: "1 Bed, Ain Dubai Views",
                category1: "Bluewaters",
                category3: "Meraas",
                bedrooms: 1,
                bathrooms: 2,
                area: 900,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/bluewaters-bay",
              },
              {
                sku: "BWB-2BR",
                name: "Bluewaters Bay 2 Bedroom",
                Image: "https://meraas.com/sites/default/files/2024-05/BWB%20-%20TG%20%E2%80%93%202.png",
                price: 4200000,
                currency: "AED",
                productLabel: "Sea View",
                description: "2 Bed, Infinity Pool",
                category1: "Bluewaters",
                category3: "Meraas",
                bedrooms: 2,
                bathrooms: 3,
                area: 1400,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/bluewaters-bay",
              },
              {
                sku: "BWB-3BR",
                name: "Bluewaters Bay 3 Bedroom",
                Image: "https://meraas.com/sites/default/files/2024-05/BWB%20-%20TG%20%E2%80%93%203.png",
                price: 6500000,
                currency: "AED",
                productLabel: "Premium",
                description: "3 Bed, Panoramic Views",
                category1: "Bluewaters",
                category3: "Meraas",
                bedrooms: 3,
                bathrooms: 4,
                area: 2100,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/bluewaters-bay",
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
  "madinat jumeirah living": {
    text: "Madinat Jumeirah Living — Dubai's most prestigious seafront neighbourhood. Contemporary apartments with Arabesque influences, set against the Burj Al Arab backdrop. 190+ berth marina, beach access, and 5-star hospitality.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "Meraas_Property_Recommendations",
            data: [
              {
                sku: "MJL-1BR",
                name: "MJL Residences 1 Bed",
                Image: "https://meraas.com/sites/default/files/2024-03/MJL%20-%20TG%20-%201.png",
                price: 1530000,
                currency: "AED",
                productLabel: "From 1.53M",
                description: "1 Bed, Burj Al Arab View",
                category1: "Madinat Jumeirah Living",
                category3: "Meraas",
                bedrooms: 1,
                bathrooms: 1,
                area: 750,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/mjl-residences",
              },
              {
                sku: "MJL-2BR",
                name: "MJL Residences 2 Bed",
                Image: "https://meraas.com/sites/default/files/2024-03/MJL%20-%20TG%20%E2%80%93%202.png",
                price: 2500000,
                currency: "AED",
                productLabel: "Marina View",
                description: "2 Bed, Marina & Beach",
                category1: "Madinat Jumeirah Living",
                category3: "Meraas",
                bedrooms: 2,
                bathrooms: 2,
                area: 1200,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/mjl-residences",
              },
              {
                sku: "MJL-3BR",
                name: "MJL Residences 3 Bed",
                Image: "https://meraas.com/sites/default/files/2024-03/MJL%20-%20TG%20%E2%80%93%203.png",
                price: 3800000,
                currency: "AED",
                productLabel: "Premium",
                description: "3 Bed, Seafront Living",
                category1: "Madinat Jumeirah Living",
                category3: "Meraas",
                bedrooms: 3,
                bathrooms: 3,
                area: 1800,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/mjl-residences",
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
  "city walk crestlane": {
    text: "City Walk Crestlane — an exclusive collection of apartments and duplexes combining urban energy with waterfront living. Water isn't just a feature — it's the essence. 2 min walk to City Mall, 7 min from Jumeirah Beach.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "Meraas_Property_Recommendations",
            data: [
              {
                sku: "CWC-1BR",
                name: "Crestlane 1 Bedroom",
                Image: "https://meraas.com/sites/default/files/2025-06/Top%20Gallery%201.jpg",
                price: 2700000,
                currency: "AED",
                productLabel: "From 2.7M",
                description: "1 Bed, Water Features",
                category1: "City Walk",
                category3: "Meraas",
                bedrooms: 1,
                bathrooms: 1,
                area: 850,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/city-walk-crestlane",
              },
              {
                sku: "CWC-2BR",
                name: "Crestlane 2 Bedroom",
                Image: "https://meraas.com/sites/default/files/2025-06/Top%20Gallery%202.jpg",
                price: 4200000,
                currency: "AED",
                productLabel: "Skyline Views",
                description: "2 Bed, Open Layout",
                category1: "City Walk",
                category3: "Meraas",
                bedrooms: 2,
                bathrooms: 2,
                area: 1400,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/city-walk-crestlane",
              },
              {
                sku: "CWC-DPX",
                name: "Crestlane 4 Bed Duplex",
                Image: "https://meraas.com/sites/default/files/2025-11/880x860.jpg",
                price: 8500000,
                currency: "AED",
                productLabel: "Duplex",
                description: "4 Bed Duplex, Premium",
                category1: "City Walk",
                category3: "Meraas",
                bedrooms: 4,
                bathrooms: 4,
                area: 3600,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/city-walk-crestlane",
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
  "design quarter at d3": {
    text: "Design Quarter at d3 — where home meets hustle meets the creative bustle. Located in Dubai Design District alongside Dubai Design Week, Fashion Week, and Sole DXB. City views, canal access, and modern community living from AED 1.87M.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "Meraas_Property_Recommendations",
            data: [
              {
                sku: "DQD3-1BR",
                name: "Design Quarter 1 Bed",
                Image: "https://meraas.com/sites/default/files/2024-03/DQD3%20-%20TG%20-%201.png",
                price: 1870000,
                currency: "AED",
                productLabel: "From 1.87M",
                description: "1 Bed, Canal View",
                category1: "Dubai Design District",
                category3: "Meraas",
                bedrooms: 1,
                bathrooms: 1,
                area: 750,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/designquarter-at-d3",
              },
              {
                sku: "DQD3-2BR",
                name: "Design Quarter 2 Bed",
                Image: "https://meraas.com/sites/default/files/2024-03/DQD3%20-%20TG%20-%202.png",
                price: 2600000,
                currency: "AED",
                productLabel: "City View",
                description: "2 Bed, Creative Hub",
                category1: "Dubai Design District",
                category3: "Meraas",
                bedrooms: 2,
                bathrooms: 2,
                area: 1100,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/designquarter-at-d3",
              },
              {
                sku: "DQD3-3BR",
                name: "Design Quarter 3 Bed",
                Image: "https://meraas.com/sites/default/files/2024-03/DQD3%20-%20TG%20-%203.png",
                price: 3400000,
                currency: "AED",
                productLabel: "Premium",
                description: "3 Bed, Panoramic Views",
                category1: "Dubai Design District",
                category3: "Meraas",
                bedrooms: 3,
                bathrooms: 3,
                area: 1600,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/designquarter-at-d3",
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
  "emirates towers": {
    text: "Jumeirah Residences Emirates Towers — a new architectural icon. Apartments with no internal columns creating open, fluid spaces. Sky terrace with infinity pool, private cinema, padel court, and Jumeirah Signature Services. From AED 3.51M.",
    curation: [
      {
        personalizations: [
          {
            personalizationPointName: "Meraas_Property_Recommendations",
            data: [
              {
                sku: "JRET-1BR",
                name: "Emirates Towers 1 Bed",
                Image: "https://meraas.com/sites/default/files/2025-05/Meraas-Website-Images-880x860-1.jpg",
                price: 3510000,
                currency: "AED",
                productLabel: "From 3.51M",
                description: "1 Bed, Skyline Views",
                category1: "Trade Centre 2",
                category3: "Meraas",
                bedrooms: 1,
                bathrooms: 1,
                area: 1000,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/jumeirah-emirates-tower",
              },
              {
                sku: "JRET-3BR",
                name: "Emirates Towers 3 Bed",
                Image: "https://meraas.com/sites/default/files/2025-05/Meraas-Website-Images-880x860-2.jpg",
                price: 8200000,
                currency: "AED",
                productLabel: "Double Height",
                description: "3 Bed, Double Height Living",
                category1: "Trade Centre 2",
                category3: "Meraas",
                bedrooms: 3,
                bathrooms: 3,
                area: 2800,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/jumeirah-emirates-tower",
              },
              {
                sku: "JRET-4BR",
                name: "Emirates Towers 4 Bed",
                Image: "https://meraas.com/sites/default/files/2025-05/Meraas-Website-Images-880x860-3.jpg",
                price: 15000000,
                currency: "AED",
                productLabel: "Sky Pool",
                description: "4 Bed, Private Sky Terrace",
                category1: "Trade Centre 2",
                category3: "Meraas",
                bedrooms: 4,
                bathrooms: 5,
                area: 4500,
                areaUnit: "sqft",
                productUrl: "https://meraas.com/en/project/jumeirah-emirates-tower",
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
};

const ALIASES: Record<string, string> = {
  'waterfront': 'waterfront residences',
  'beach': 'waterfront residences',
  'beachfront': 'waterfront residences',
  'sea view': 'waterfront residences',
  'ocean': 'waterfront residences',
  'apartment': 'urban apartments',
  'apartments': 'urban apartments',
  'urban': 'urban apartments',
  'penthouse': 'luxury penthouses',
  'penthouses': 'luxury penthouses',
  'luxury': 'luxury penthouses',
  'solaya': 'solaya at la mer',
  'la mer': 'solaya at la mer',
  'bluewaters': 'bluewaters bay',
  'ain dubai': 'bluewaters bay',
  'madinat': 'madinat jumeirah living',
  'mjl': 'madinat jumeirah living',
  'jumeirah living': 'madinat jumeirah living',
  'city walk': 'city walk crestlane',
  'crestlane': 'city walk crestlane',
  'design quarter': 'design quarter at d3',
  'd3': 'design quarter at d3',
  'design district': 'design quarter at d3',
  'emirates towers': 'emirates towers',
  'emirates tower': 'emirates towers',
  'trade centre': 'emirates towers',
};

// Action intents take priority over project names
const INTENT_KEYWORDS = ['compare', 'comparison', 'versus', 'vs'];
const SCHEDULE_KEYWORDS = ['viewing', 'visit', 'appointment', 'book', 'schedule'];
const PAYMENT_KEYWORDS = ['payment', 'plans', 'installment', 'price', 'cost'];

// Map project keywords to their schedule-specific response key
const SCHEDULE_PROJECT_MAP: Record<string, string> = {
  'city walk': 'schedule viewing crestlane',
  'crestlane': 'schedule viewing crestlane',
  'bluewaters': 'schedule viewing bluewaters',
  'ain dubai': 'schedule viewing bluewaters',
  'solaya': 'schedule viewing solaya',
  'la mer': 'schedule viewing solaya',
  'd3': 'schedule viewing d3',
  'design quarter': 'schedule viewing d3',
  'design district': 'schedule viewing d3',
};

// Detect if user typed something that looks like an email or phone (triggers confirmation)
function looksLikeContactInfo(msg: string): boolean {
  return /[@]/.test(msg) || /\+?\d[\d\s\-]{7,}/.test(msg);
}

function findResponse(userMessage: string): StaticContentMessageTextPayload {
  const normalised = userMessage.toLowerCase().trim();
  if (MOCK_RESPONSES[normalised]) return MOCK_RESPONSES[normalised];

  // If user provides contact info (email/phone), confirm the viewing
  if (looksLikeContactInfo(normalised)) {
    return MOCK_RESPONSES['confirm viewing'];
  }

  // Schedule intent — check if a project is also mentioned
  const isScheduleIntent = SCHEDULE_KEYWORDS.some(k => normalised.includes(k));
  if (isScheduleIntent) {
    const projectKeys = Object.keys(SCHEDULE_PROJECT_MAP).sort((a, b) => b.length - a.length);
    for (const proj of projectKeys) {
      if (normalised.includes(proj)) {
        return MOCK_RESPONSES[SCHEDULE_PROJECT_MAP[proj]];
      }
    }
    return MOCK_RESPONSES['schedule a viewing'];
  }

  // Compare intent
  if (INTENT_KEYWORDS.some(k => normalised.includes(k))) {
    return MOCK_RESPONSES['compare these properties'];
  }

  // Payment intent
  if (PAYMENT_KEYWORDS.some(k => normalised.includes(k))) {
    return MOCK_RESPONSES['tell me about payment plans'];
  }

  // Then check project/location aliases (longest match wins)
  const aliasKeys = Object.keys(ALIASES).sort((a, b) => b.length - a.length);
  for (const alias of aliasKeys) {
    if (normalised.includes(alias)) {
      return MOCK_RESPONSES[ALIASES[alias]];
    }
  }

  // Score each key by how many of its words appear in the user message
  let bestKey = '';
  let bestScore = 0;
  for (const key of Object.keys(MOCK_RESPONSES)) {
    if (key === 'default') continue;
    const keyWords = key.split(/\s+/);
    const matchedWords = keyWords.filter(w => normalised.includes(w));
    const score = matchedWords.length / keyWords.length;
    if (score > bestScore) {
      bestScore = score;
      bestKey = key;
    }
  }

  if (bestScore >= 0.5 && bestKey) return MOCK_RESPONSES[bestKey];
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
        window.dispatchEvent(new CustomEvent(Events.ON_EMBEDDED_MESSAGING_CONTENT_RECEIVED, {
          detail: { content: response.curation || response.template ? response : null },
        }));
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
