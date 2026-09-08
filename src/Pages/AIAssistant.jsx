import React, { useState } from 'react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Welcome to the NIRVAN Portal! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);

    // Simulated AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { 
          sender: 'bot', 
          text: 'Thank you for contacting us. Your query has been recorded. For further assistance, please reach out to the helpdesk.' 
        }
      ]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Box Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[420px] transition-all">
          
          {/* Header */}
          <div className="bg-[#1E293B] text-white p-4 flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#C1CDC4]"></span>
              <div>
                <h3 className="font-bold text-sm tracking-wide">NIRVAN AI Assistant</h3>
                <p className="text-[10px] text-slate-300">Online | 24/7 Support</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white text-lg font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#1E293B] text-white rounded-br-none'
                      : 'bg-[#C1CDC4]/30 text-[#1E293B] border border-slate-200 rounded-bl-none font-medium'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your issue or query here..."
              className="flex-1 text-xs border border-slate-300 rounded-xl px-3 py-2 outline-none focus:border-[#1E293B]"
            />
            <button
              type="submit"
              className="bg-[#1E293B] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800 transition cursor-pointer"
            >
              Send
            </button>
          </form>

        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#1E293B] hover:bg-slate-800 text-white px-5 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer border border-slate-700"
      >
        <span className="text-lg">🤖</span>
        <span className="text-xs font-bold tracking-wide">AI Assistant</span>
      </button>
    </div>
  );
}