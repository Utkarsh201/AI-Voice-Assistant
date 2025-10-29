import { Bot } from 'lucide-react';

const TypingIndicator = () => {
  return (
    <div className="message bot-message typing-indicator">
      <div className="message-avatar">
        <Bot size={24} />
      </div>
      <div className="message-content">
        <div className="message-bubble">
          <div className="typing-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;