// WebMCP: exposes the site's actions to in-browser AI agents (navigator.modelContext).
const BOOKING_URL = "https://calendly.com/marwan-coteloai/30-minute-meeting?month=2026-09";

if (navigator.modelContext && navigator.modelContext.registerTool) {
  const text = s => ({ content: [{ type: "text", text: s }] });

  navigator.modelContext.registerTool({
    name: "get_booking_link",
    description: "Get the link to book a 30-minute call with Cotelo to see AI search demoed on your own website.",
    inputSchema: { type: "object", properties: {} },
    annotations: { readOnlyHint: true },
    async execute() { return text(BOOKING_URL); },
  });

  navigator.modelContext.registerTool({
    name: "get_contact_email",
    description: "Get Cotelo's contact email address.",
    inputSchema: { type: "object", properties: {} },
    annotations: { readOnlyHint: true },
    async execute() { return text("marwan@coteloai.com"); },
  });

  navigator.modelContext.registerTool({
    name: "go_to_section",
    description: "Scroll the Cotelo page to a section: how, features, why-now, demos or contact.",
    inputSchema: {
      type: "object",
      properties: { section: { type: "string", enum: ["how", "features", "why-now", "demos", "contact"] } },
      required: ["section"],
    },
    async execute({ section }) {
      const el = document.getElementById(section);
      if (!el) return text("Unknown section: " + section);
      el.scrollIntoView({ behavior: "smooth" });
      return text("Scrolled to " + section);
    },
  });
}
