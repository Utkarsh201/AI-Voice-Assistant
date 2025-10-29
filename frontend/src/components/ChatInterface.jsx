import { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ChatInterface = ({ initialMessages = [], botName = "AI Assistant", botStatus = "Online" }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (text) => {
    // Add user message
    const userMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot response (placeholder - no actual logic)
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: 'This is a placeholder response. Actual AI logic would go here.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleVoiceToggle = () => {
    if (!isListening) {
      // Start listening (UI only)
      setIsListening(true);
      console.log('Started listening...');
      
      // Simulate voice input after 3 seconds (placeholder)
      setTimeout(() => {
        console.log('Voice input captured (placeholder)');
        setIsListening(false);
      }, 3000);
    } else {
      // Stop listening
      setIsListening(false);
      console.log('Stopped listening...');
    }
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked - placeholder for settings modal');
    alert('Settings functionality would be implemented here');
  };

  return (
    <div className="chat-container">
      <ChatHeader 
        botName={botName}
        botStatus={botStatus}
        onSettingsClick={handleSettingsClick}
      />
      
      <ChatMessages 
        messages={messages}
        isTyping={isTyping}
        showWelcome={messages.length === 0}
      />
      
      <ChatInput 
        onSendMessage={handleSendMessage}
        onVoiceToggle={handleVoiceToggle}
        isListening={isListening}
      />
    </div>
  );
};

export default ChatInterface;