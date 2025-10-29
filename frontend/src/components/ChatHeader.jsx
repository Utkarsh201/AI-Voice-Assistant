import { Bot, Settings } from 'lucide-react';

const ChatHeader = ({ botName, botStatus, onSettingsClick }) => {
  return (
    <header className="chat-header">
      <div className="header-content">
        <div className="bot-avatar">
          <Bot size={32} />
        </div>
        <div className="header-info">
          <h1 className="bot-name">{botName}</h1>
          <p className="bot-status">
            <span className="status-indicator"></span>
            {botStatus}
          </p>
        </div>
      </div>
      <button className="settings-btn" aria-label="Settings" onClick={onSettingsClick}>
        <Settings size={20} />
      </button>
    </header>
  );
};

export default ChatHeader;