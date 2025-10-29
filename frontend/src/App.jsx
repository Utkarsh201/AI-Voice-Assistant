import ChatInterface from './components/ChatInterface';
import { mockRootProps } from './data/chatMockData';

function App() {
  return (
    <ChatInterface 
      initialMessages={mockRootProps.initialMessages}
      botName={mockRootProps.botName}
      botStatus={mockRootProps.botStatus}
    />
  );
}

export default App;