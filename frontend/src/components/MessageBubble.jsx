import { Bot, SquareUser } from 'lucide-react';
import { formatMessageTime } from '../utils/formatters';

const MessageBubble = ({ message }) => {
  const { text, sender, timestamp } = message;
  const isBot = sender === 'bot';

  return (
    <div className={`message ${isBot ? 'bot-message' : 'user-message'}`}>
      {isBot && (
        <div className="message-avatar">
          <Bot size={24} />
        </div>
      )}
      <div className="message-content">
        <div className="message-bubble">{text}</div>
        <span className="message-time">{formatMessageTime(timestamp)}</span>
      </div>
      {!isBot && (
        <div className="message-avatar user-avatar">
          <SquareUser size={24} />
        </div>
      )}
    </div>
  );
};

export default MessageBubble;