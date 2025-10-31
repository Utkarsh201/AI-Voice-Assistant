import { useState } from 'react';
import { Mic, MicOff, SendHorizontal } from 'lucide-react';
import VoiceStatus from './VoiceStatus';


const ChatInput = ({ onSendMessage, onVoiceToggle, isListening }) => {
  const [message, setMessage] = useState('');


  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-input-container">
      <div className="input-wrapper">
        <button 
          className={`voice-btn ${isListening ? 'active' : ''}`}
          onClick={onVoiceToggle}
          aria-label="Voice input"
        >
          {isListening ? <MicOff size={20} /> : <Mic size={20} />}
        </button>
        
        <input 
          type="text" 
          className="message-input"
          placeholder="Type your message or use voice..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          autoComplete="off"
        />
        
        <button 
          className="send-btn"
          onClick={handleSend}
          aria-label="Send message"
        >
          <SendHorizontal size={20} />
        </button>
      </div>
      
      {isListening && <VoiceStatus />}
    </div>
  );
};

export default ChatInput;