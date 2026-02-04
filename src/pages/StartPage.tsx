import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ 
        background: "linear-gradient(180deg, #0a1929 0%, #0d2137 50%, #0a1929 100%)"
      }}
    >
      
      {/* Navigation */}
      <nav className="absolute top-[100px] left-1/2 -translate-x-1/2 flex items-center gap-8 z-10">
        <button 
          className="px-5 py-2 uppercase tracking-wider rounded"
          style={{ 
            fontFamily: "'Press Start 2P', monospace", 
            fontSize: "14px",
            color: "#8ba4ff",
            background: "rgba(59, 130, 246, 0.15)",
            border: "2px solid #5b7cfa",
            textShadow: "0 0 10px rgba(91, 124, 250, 0.8)",
            boxShadow: "0 0 15px rgba(91, 124, 250, 0.3), inset 0 0 10px rgba(91, 124, 250, 0.1)"
          }}
        >
          MENU
        </button>
        
        {/* Coin */}
        <div 
          className="w-7 h-9 rounded-full animate-pulse"
          style={{ 
            background: "linear-gradient(180deg, #ffe066 0%, #ffd700 50%, #daa520 100%)",
            boxShadow: "0 0 20px #ffd700, inset -2px 0 4px rgba(0,0,0,0.3)",
            border: "2px solid #b8860b"
          }} 
        />
        
        <Link 
          to="/my-work" 
          className="px-5 py-2 uppercase tracking-wider rounded transition-all hover:scale-105"
          style={{ 
            fontFamily: "'Press Start 2P', monospace", 
            fontSize: "14px",
            color: "#8ba4ff",
            background: "rgba(59, 130, 246, 0.15)",
            border: "2px solid #5b7cfa",
            textShadow: "0 0 10px rgba(91, 124, 250, 0.8)",
            boxShadow: "0 0 15px rgba(91, 124, 250, 0.3), inset 0 0 10px rgba(91, 124, 250, 0.1)"
          }}
        >
          MY WORK
        </Link>
        
        <Link 
          to="/contact" 
          className="px-5 py-2 uppercase tracking-wider rounded transition-all hover:scale-105"
          style={{ 
            fontFamily: "'Press Start 2P', monospace", 
            fontSize: "14px",
            color: "#8ba4ff",
            background: "rgba(59, 130, 246, 0.15)",
            border: "2px solid #5b7cfa",
            textShadow: "0 0 10px rgba(91, 124, 250, 0.8)",
            boxShadow: "0 0 15px rgba(91, 124, 250, 0.3), inset 0 0 10px rgba(91, 124, 250, 0.1)"
          }}
        >
          CONTACT ME
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex items-center gap-8 mt-8">
        {/* Social Icons - Left Side */}
        <div className="flex flex-col gap-3">
          {/* Gmail */}
          <a 
            href="mailto:contact@younis.com" 
            className="w-[70px] h-[70px] rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            style={{ background: "#fff" }}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" 
              alt="Gmail" 
              className="w-12 h-10 object-contain"
            />
          </a>
          
          {/* Discord & Signal Row */}
          <div className="flex gap-3">
            {/* Discord */}
            <a 
              href="https://discordapp.com/users/723783481926090802" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-[70px] h-[70px] rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
              style={{ background: "#5865F2" }}
            >
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            
            {/* Signal */}
            <a 
              href="#" 
              className="w-[70px] h-[70px] rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
              style={{ 
                background: "#3A76F0",
                border: "3px solid #5c9aff"
              }}
            >
              <svg viewBox="0 0 50 50" className="w-10 h-10 text-white" fill="currentColor">
                <path d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2zm0 4c10.5 0 19 8.5 19 19s-8.5 19-19 19S6 35.5 6 25 14.5 6 25 6zm0 5c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Character */}
        <div className="relative mx-8">
          <img 
            src="https://amitoindia.my.canva.site/ahmedyo89is/_assets/media/28d8f5025d2d3722bbedea480f94f8fe.png"
            alt="Character"
            className="w-[200px] h-auto"
            style={{ imageRendering: "pixelated" }}
            onError={(e) => {
              // Fallback SVG character
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback SVG */}
          <svg viewBox="0 0 100 140" className="w-[200px] h-[280px] hidden" style={{ imageRendering: "pixelated" }}>
            <rect x="30" y="10" width="40" height="35" fill="#4a5568"/>
            <rect x="35" y="15" width="30" height="25" fill="#fbd38d"/>
            <rect x="40" y="25" width="6" height="6" fill="#1a202c"/>
            <rect x="54" y="25" width="6" height="6" fill="#1a202c"/>
            <rect x="32" y="5" width="36" height="12" fill="#4a5568"/>
            <rect x="26" y="10" width="10" height="25" fill="#4a5568"/>
            <rect x="64" y="10" width="10" height="25" fill="#4a5568"/>
            <rect x="25" y="45" width="50" height="40" fill="#38b2ac"/>
            <rect x="12" y="48" width="18" height="32" fill="#38b2ac"/>
            <rect x="70" y="48" width="18" height="32" fill="#38b2ac"/>
            <rect x="12" y="76" width="14" height="10" fill="#fbd38d"/>
            <rect x="74" y="76" width="14" height="10" fill="#fbd38d"/>
            <rect x="78" y="55" width="4" height="28" fill="#e8e8e8"/>
            <rect x="75" y="48" width="10" height="10" fill="#87ceeb"/>
            <rect x="28" y="85" width="20" height="40" fill="#2d3748"/>
            <rect x="52" y="85" width="20" height="40" fill="#2d3748"/>
            <rect x="26" y="120" width="24" height="12" fill="#319795"/>
            <rect x="50" y="120" width="24" height="12" fill="#319795"/>
          </svg>
        </div>

        {/* Name */}
        <h1 
          className="text-[52px] tracking-[0.15em]"
          style={{ 
            fontFamily: "'Press Start 2P', monospace",
            color: "#7dd3fc",
            textShadow: "0 0 30px #38bdf8, 0 0 60px #0ea5e9, 0 0 90px #0284c7"
          }}
        >
          YOUNIS
        </h1>
      </div>

      {/* Start Button */}
      <div className="mt-16 flex items-center gap-6">
        {/* Left hand pointer */}
        <svg viewBox="0 0 50 50" className="w-12 h-12 opacity-40" style={{ transform: "scaleX(-1)" }}>
          <path d="M25 5 L40 25 L30 25 L30 45 L20 45 L20 25 L10 25 Z" fill="#666" stroke="#888" strokeWidth="2"/>
        </svg>
        
        <Link 
          to="/my-work" 
          className="relative group cursor-pointer active:translate-y-1 transition-transform"
        >
          <div 
            className="px-16 py-5 rounded-xl uppercase tracking-widest"
            style={{ 
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "28px",
              color: "#fff5e0",
              background: "linear-gradient(180deg, #fbbf24 0%, #f59e0b 20%, #d97706 50%, #b45309 80%, #92400e 100%)",
              boxShadow: "0 6px 0 #78350f, 0 8px 15px rgba(0,0,0,0.5)",
              textShadow: "2px 2px 0 #92400e, 3px 3px 0 #78350f",
              border: "3px solid #fcd34d"
            }}
          >
            START
          </div>
        </Link>
        
        {/* Right hand pointer */}
        <svg viewBox="0 0 50 50" className="w-12 h-12 opacity-40">
          <path d="M25 5 L40 25 L30 25 L30 45 L20 45 L20 25 L10 25 Z" fill="#666" stroke="#888" strokeWidth="2"/>
        </svg>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-3 left-0 right-0 flex justify-between px-5 text-[10px]" style={{ color: "#4a5568" }}>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Terms & Support</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
        <div className="flex items-center gap-2">
          <span>Designed with</span>
          <span className="font-bold text-white">Canva</span>
        </div>
      </footer>
    </div>
  );
};

export default StartPage;
