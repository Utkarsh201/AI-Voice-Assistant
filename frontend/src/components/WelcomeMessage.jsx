import { MessageSquare } from 'lucide-react';

const WelcomeMessage = () => {
  return (
    <div className="welcome-message">
      <div className="welcome-icon">
        <MessageSquare size={48} />
      </div>
      <h2>Welcome to AI Assistant</h2>
      <p>Start a conversation by typing or using voice input</p>
    </div>
  );
};

export default WelcomeMessage;