// Mock data for the AI chatbot interface

// Sample messages for initial display
export const mockRootProps = {
  initialMessages: [
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(Date.now() - 60000)
    },
    {
      id: 2,
      text: "Tell me about the weather",
      sender: "user",
      timestamp: new Date(Date.now() - 30000)
    }
  ],
  botName: "AI Assistant",
  botStatus: "Online"
};