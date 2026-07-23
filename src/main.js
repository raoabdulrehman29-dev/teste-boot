import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");

// EmilJS user_id: service_32kcqhd
// template_id : template_u63iqe9
// Public Key: z7tqLA6Mu74RYhcWP
// Add this to your main JavaScript file
if (navigator.modelContext) {
  navigator.modelContext.registerTool({
    name: "get-company-info",
    title: "Get Company Information",
    description: "Get information about Invictus Hub, its services, and expertise",
    inputSchema: {
      type: "object",
      properties: {
        topic: {
          type: "string",
          description: "The topic to get information about (e.g., 'services', 'about', 'contact')"
        }
      }
    },
    execute: async ({ topic }) => {
      const info = {
        "services": "We offer AI, Data Analytics, Web Development, Mobile Apps, E-Commerce, UI/UX, Cloud, ERP/CRM, and Digital Transformation.",
        "about": "Invictus Hub is a software development and digital transformation company.",
        "contact": "Visit https://invictushub.com/contact or call us."
      };
      return info[topic] || "Please visit our website for more information.";
    }
  });
  
  console.log('✅ WebMCP tools registered successfully');
}