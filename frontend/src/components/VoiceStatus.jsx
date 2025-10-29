const VoiceStatus = () => {
  return (
    <div className="voice-status">
      <div className="voice-wave">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="voice-text">Listening...</p>
    </div>
  );
};

export default VoiceStatus;