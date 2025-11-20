import React from 'react';

/**
 * ChatGPT Professional Analysis Component
 * Displays AI-generated market analysis when OpenAI API key is configured
 */
export const ChatGPTInsights = ({ insights, loading, hasGPTKey, onSetupClick }) => {
  // If insights exist, show them
  if (insights) {
    return (
      <div className="chatgpt-insights-section">
        <div className="chatgpt-header">
          <h4>✨ ChatGPT Professional Analysis</h4>
          <span className="gpt-badge">Powered by GPT-4</span>
        </div>
        <div className="chatgpt-content">
          {loading ? (
            <div className="gpt-loading">
              <div className="loading-spinner"></div>
              <p>Analyzing market data with ChatGPT...</p>
            </div>
          ) : (
            <div className="gpt-analysis">
              {insights.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
        <div className="chatgpt-footer">
          <p className="gpt-disclaimer">
            💡 This analysis is AI-generated based on your CMA data and current market conditions. 
            Always verify with local expertise and current MLS data.
          </p>
        </div>
      </div>
    );
  }

  // If no insights and no GPT key, show prompt to set it up
  if (!insights && hasGPTKey === false) {
    return (
      <div className="chatgpt-prompt">
        <div className="prompt-icon">💬</div>
        <div className="prompt-content">
          <h4>Want Deeper AI Insights?</h4>
          <p>Configure your OpenAI API key to unlock ChatGPT-powered professional analysis with every prediction!</p>
          <button 
            className="btn-primary btn-small"
            onClick={onSetupClick}
          >
            🔑 Setup ChatGPT
          </button>
        </div>
      </div>
    );
  }

  // If GPT key exists but no insights yet (waiting for generation)
  return null;
};

export default ChatGPTInsights;
