import { useEffect, useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const ChatInterface = ({ initialMessages = [], botName = "AI Assistant", botStatus = "Online" }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);


  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }



  const handleSendMessage = (text) => {
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
      SpeechRecognition.startListening();
      setIsListening(true);
      console.log('Started listening...');
      
    } else {
      // Stop listening
      SpeechRecognition.stopListening()
      setIsListening(false);
      console.log('Stopped listening...');
      handleSendMessage(transcript);
      // stop listening 

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
        isListening = {isListening}
        transcript = {transcript}
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