import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)" }}>
      
      {/* Navigation */}
      <nav className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
        <button className="px-6 py-2 text-white font-bold uppercase tracking-wider border-2 border-blue-400 rounded"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "12px", textShadow: "0 0 10px #6b8cff" }}>
          Menu
        </button>
        
        {/* Coin */}
        <div className="w-8 h-10 rounded-full bg-yellow-400 border-4 border-yellow-500 shadow-lg animate-pulse" 
          style={{ boxShadow: "0 0 20px #ffd700" }} />
        
        <Link to="/my-work" 
          className="px-6 py-2 text-white font-bold uppercase tracking-wider border-2 border-blue-400 rounded hover:bg-blue-500/20 transition-all"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "12px", textShadow: "0 0 10px #6b8cff" }}>
          My Work
        </Link>
        
        <Link to="/contact" 
          className="px-6 py-2 text-white font-bold uppercase tracking-wider border-2 border-blue-400 rounded hover:bg-blue-500/20 transition-all"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "12px", textShadow: "0 0 10px #6b8cff" }}>
          Contact Me
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex items-center gap-16 mt-16">
        {/* Social Icons */}
        <div className="flex flex-col gap-4">
          {/* Gmail */}
          <a href="mailto:contact@younis.com" 
            className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <svg viewBox="0 0 24 24" className="w-10 h-10">
              <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
          </a>
          
          {/* Discord */}
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer"
            className="w-16 h-16 bg-[#5865F2] rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>
          
          {/* Signal */}
          <a href="#" 
            className="w-16 h-16 bg-[#3A76F0] rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform border-2 border-[#5A96FF]">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z"/>
            </svg>
          </a>
        </div>

        {/* Character */}
        <div className="relative">
          <div className="w-48 h-64 relative">
            {/* Pixel Character */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 140" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
                {/* Head */}
                <rect x="30" y="10" width="40" height="35" fill="#4a5568"/>
                <rect x="35" y="15" width="30" height="25" fill="#fbd38d"/>
                {/* Eyes */}
                <rect x="40" y="25" width="6" height="6" fill="#2d3748"/>
                <rect x="54" y="25" width="6" height="6" fill="#2d3748"/>
                {/* Hair */}
                <rect x="32" y="8" width="36" height="10" fill="#4a5568"/>
                <rect x="28" y="12" width="8" height="20" fill="#4a5568"/>
                <rect x="64" y="12" width="8" height="20" fill="#4a5568"/>
                {/* Body - Cyan shirt */}
                <rect x="25" y="45" width="50" height="40" fill="#38b2ac"/>
                <rect x="25" y="45" width="50" height="5" fill="#319795"/>
                {/* Arms */}
                <rect x="15" y="50" width="15" height="30" fill="#38b2ac"/>
                <rect x="70" y="50" width="15" height="30" fill="#38b2ac"/>
                {/* Hands */}
                <rect x="15" y="75" width="12" height="10" fill="#fbd38d"/>
                <rect x="73" y="75" width="12" height="10" fill="#fbd38d"/>
                {/* Magic wand in right hand */}
                <rect x="78" y="60" width="4" height="25" fill="#e2e8f0"/>
                <rect x="76" y="55" width="8" height="8" fill="#90cdf4"/>
                {/* Legs - Dark pants */}
                <rect x="30" y="85" width="18" height="35" fill="#2d3748"/>
                <rect x="52" y="85" width="18" height="35" fill="#2d3748"/>
                {/* Shoes */}
                <rect x="28" y="115" width="22" height="10" fill="#319795"/>
                <rect x="50" y="115" width="22" height="10" fill="#319795"/>
                {/* Blue glow effect */}
                <rect x="20" y="40" width="60" height="85" fill="none" stroke="#4299e1" strokeWidth="2" opacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl font-bold text-blue-300 tracking-widest"
          style={{ fontFamily: "'Press Start 2P', monospace", textShadow: "0 0 30px #6b8cff, 0 0 60px #4299e1" }}>
          YOUNIS
        </h1>
      </div>

      {/* Start Button */}
      <div className="mt-16 flex items-center gap-8">
        {/* Left hand pointer */}
        <div className="text-4xl opacity-50" style={{ transform: "scaleX(-1)" }}>👆</div>
        
        <Link to="/my-work" 
          className="relative group cursor-pointer">
          <div className="px-20 py-6 rounded-2xl text-white font-bold text-2xl uppercase tracking-widest"
            style={{ 
              background: "linear-gradient(180deg, #f6ad55 0%, #ed8936 30%, #dd6b20 70%, #c05621 100%)",
              fontFamily: "'Press Start 2P', monospace",
              boxShadow: "0 8px 0 #9c4221, 0 12px 20px rgba(0,0,0,0.4)",
              textShadow: "2px 2px 0 #9c4221"
            }}>
            START
          </div>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />
        </Link>
        
        {/* Right hand pointer */}
        <div className="text-4xl opacity-50">👆</div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 flex justify-between px-6 text-xs text-gray-500">
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Terms & Support</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
        <div className="flex items-center gap-2">
          <span>Designed with</span>
          <span className="font-semibold">Canva</span>
        </div>
      </footer>
    </div>
  );
};

export default StartPage;
