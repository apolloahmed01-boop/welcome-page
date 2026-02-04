import { Link } from "react-router-dom";

const MyWork = () => {
  return (
    <div className="min-h-screen w-full bg-black overflow-auto">
      {/* Header Decorations */}
      <div className="relative">
        {/* Potion Left - Blue/Purple */}
        <div className="absolute left-4 top-4 w-10 h-14">
          <svg viewBox="0 0 40 60" className="w-full h-full">
            <ellipse cx="20" cy="8" rx="8" ry="4" fill="#1e3a5f"/>
            <rect x="14" y="8" width="12" height="8" fill="#1e3a5f"/>
            <path d="M10 20 Q5 35 10 50 Q15 58 20 58 Q25 58 30 50 Q35 35 30 20 Z" fill="url(#potionBlue)"/>
            <ellipse cx="20" cy="20" rx="10" ry="4" fill="#4a9eff" opacity="0.6"/>
            <defs>
              <linearGradient id="potionBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa"/>
                <stop offset="50%" stopColor="#3b82f6"/>
                <stop offset="100%" stopColor="#7c3aed"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Potion Right - Gray */}
        <div className="absolute right-4 top-4 w-10 h-14">
          <svg viewBox="0 0 40 60" className="w-full h-full">
            <ellipse cx="20" cy="8" rx="8" ry="4" fill="#374151"/>
            <rect x="14" y="8" width="12" height="8" fill="#374151"/>
            <path d="M10 20 Q5 35 10 50 Q15 58 20 58 Q25 58 30 50 Q35 35 30 20 Z" fill="url(#potionGray)"/>
            <circle cx="15" cy="45" r="3" fill="#9ca3af" opacity="0.5"/>
            <circle cx="25" cy="40" r="2" fill="#9ca3af" opacity="0.5"/>
            <defs>
              <linearGradient id="potionGray" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9ca3af"/>
                <stop offset="100%" stopColor="#4b5563"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Title */}
        <h1 
          className="text-center py-6 flex items-center justify-center gap-4"
          style={{ 
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "22px",
            color: "#fde047",
            textShadow: "0 0 20px #fde047"
          }}
        >
          <span>★</span>
          MY EDITING PROJECTS
          <span>★</span>
        </h1>

        {/* Navigation */}
        <nav className="flex items-center justify-center gap-6 mb-6">
          <Link 
            to="/" 
            className="px-5 py-2 uppercase tracking-wider rounded"
            style={{ 
              fontFamily: "'Press Start 2P', monospace", 
              fontSize: "12px",
              color: "#fff",
              background: "#1f2937",
              border: "1px solid #4b5563"
            }}
          >
            MENU
          </Link>
          
          <div 
            className="px-5 py-2 uppercase tracking-wider rounded"
            style={{ 
              fontFamily: "'Press Start 2P', monospace", 
              fontSize: "12px",
              color: "#000",
              background: "#fde047",
              textDecoration: "underline"
            }}
          >
            MY WORK
          </div>
          
          {/* Coin */}
          <div 
            className="w-6 h-8 rounded-full"
            style={{ 
              background: "linear-gradient(180deg, #ffe066 0%, #ffd700 50%, #daa520 100%)",
              boxShadow: "0 0 15px #ffd700",
              border: "2px solid #b8860b"
            }} 
          />
          
          <Link 
            to="/contact" 
            className="px-5 py-2 uppercase tracking-wider rounded transition-colors hover:opacity-80"
            style={{ 
              fontFamily: "'Press Start 2P', monospace", 
              fontSize: "12px",
              color: "#fff",
              background: "#3b82f6",
              border: "1px solid #60a5fa"
            }}
          >
            CONTACT ME
          </Link>
        </nav>
      </div>

      {/* Channel Section - ROBOKAST */}
      <div className="mb-2">
        <div className="flex items-center justify-center gap-4 py-4">
          <div 
            className="w-14 h-14 rounded-full overflow-hidden"
            style={{ border: "2px solid #4b5563" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500" />
          </div>
          <div>
            <h2 
              style={{ 
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "14px",
                color: "#fde047"
              }}
            >
              ROBOKAST
            </h2>
            <p 
              className="mt-1"
              style={{ 
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "10px",
                color: "#22d3ee"
              }}
            >
              484K SUBSCRIBERS
            </p>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <span style={{ color: "#fff" }}>✕</span>
            <div 
              className="w-12 h-3 rounded"
              style={{ background: "#22d3ee" }} 
            />
            <span 
              style={{ 
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "10px",
                color: "#22d3ee"
              }}
            >
              +1M VEIW
            </span>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-2 gap-3 px-4 max-w-5xl mx-auto">
          {[
            { title: "Why LittleBigPlanet Died", bg: "from-green-500 to-red-500" },
            { title: "Why Tony Hawk Skateboarding Games Died", bg: "from-green-400 to-red-600" },
            { title: "Why Marvel's Avengers Failed with a $200,000...", bg: "from-green-500 to-purple-600" },
            { title: "The Rise and Fall of Steam's Biggest Early Acc...", bg: "from-green-400 to-red-500" },
          ].map((video, idx) => (
            <div key={idx} className="relative group cursor-pointer">
              <div 
                className={`aspect-video rounded-lg overflow-hidden relative bg-gradient-to-r ${video.bg}`}
              >
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-orange-500" />
                <div 
                  className="absolute top-2 left-11 right-8 truncate"
                  style={{ 
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    color: "#fff"
                  }}
                >
                  {video.title}
                </div>
                <div className="absolute top-2 right-2 text-white">⋮</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "#ff0000" }}
                  >
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cyan Line */}
      <div 
        className="h-1 my-6"
        style={{ 
          background: "#22d3ee",
          boxShadow: "0 0 20px #22d3ee"
        }} 
      />

      {/* Channel Section - MUSIC BY MATTIE */}
      <div className="mb-2">
        <div className="flex items-center justify-center gap-4 py-4">
          <div 
            className="w-14 h-14 rounded-full overflow-hidden"
            style={{ border: "2px solid #4b5563" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500" />
          </div>
          <div>
            <h2 
              style={{ 
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "14px",
                color: "#fde047"
              }}
            >
              MUSIC BY MATTIE
            </h2>
            <p 
              className="mt-1"
              style={{ 
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "10px",
                color: "#22d3ee"
              }}
            >
              29.7K SUBSCRIBERS
            </p>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <span style={{ color: "#fff" }}>✕</span>
            <div 
              className="w-12 h-3 rounded"
              style={{ background: "#22d3ee" }} 
            />
            <span 
              style={{ 
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "10px",
                color: "#22d3ee"
              }}
            >
              +200K VEIW
            </span>
          </div>
          {/* Music Note */}
          <div className="ml-4 text-red-500 text-3xl">♪</div>
        </div>

        {/* Video */}
        <div className="px-4 max-w-lg mx-auto">
          <div className="relative group cursor-pointer">
            <div className="aspect-video rounded-lg overflow-hidden relative bg-gradient-to-br from-purple-600 to-blue-600">
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-blue-500" />
              <div 
                className="absolute top-2 left-11 right-8 truncate"
                style={{ fontFamily: "sans-serif", fontSize: "12px", color: "#fff" }}
              >
                I tried 100 AI Music Tools... These are the ONL...
              </div>
              <div className="absolute top-2 right-2 text-white">⋮</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#ff0000" }}>
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cyan Line */}
      <div 
        className="h-1 my-6"
        style={{ background: "#22d3ee", boxShadow: "0 0 20px #22d3ee" }} 
      />

      {/* Channel Section - AHMED NAGDY */}
      <div className="mb-2">
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="w-14 h-14 rounded-full overflow-hidden" style={{ border: "2px solid #4b5563" }}>
            <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500" />
          </div>
          <div>
            <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "14px", color: "#fde047" }}>
              AHMED NAGDY
            </h2>
            <p className="mt-1" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "10px", color: "#22d3ee" }}>
              12.1K SUBSCRIBERS
            </p>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <span style={{ color: "#fff" }}>✕</span>
            <div className="w-12 h-3 rounded" style={{ background: "#22d3ee" }} />
            <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "10px", color: "#22d3ee" }}>
              +200K VEIW
            </span>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-2 gap-3 px-4 max-w-5xl mx-auto">
          {[
            "ازاي تحترف WordPress Debugging",
            "ووردبريس 6.8 - هل من جديد؟",
            "اشتريت راحة بالي - قصتي مع كلاودويز",
            "هوستنج مجاني مدي الحياة؟",
          ].map((title, idx) => (
            <div key={idx} className="relative group cursor-pointer">
              <div className="aspect-video rounded-lg overflow-hidden relative bg-gradient-to-br from-purple-700 to-red-600">
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-yellow-500" />
                <div className="absolute top-2 left-11 right-8 truncate text-right" dir="rtl"
                  style={{ fontFamily: "sans-serif", fontSize: "12px", color: "#fff" }}>
                  {title}
                </div>
                <div className="absolute top-2 right-2 text-white">⋮</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#ff0000" }}>
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="py-10 flex flex-col items-center">
        <nav className="flex items-center justify-center gap-6 mb-8">
          <Link to="/" className="px-5 py-2 uppercase tracking-wider rounded"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "12px", color: "#fff", background: "#1f2937", border: "1px solid #4b5563" }}>
            MENU
          </Link>
          <div className="px-5 py-2 uppercase tracking-wider rounded"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "12px", color: "#000", background: "#fde047", textDecoration: "underline" }}>
            MY WORK
          </div>
          <div className="w-6 h-8 rounded-full"
            style={{ background: "linear-gradient(180deg, #ffe066 0%, #ffd700 50%, #daa520 100%)", boxShadow: "0 0 15px #ffd700", border: "2px solid #b8860b" }} />
          <Link to="/contact" className="px-5 py-2 uppercase tracking-wider rounded"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "12px", color: "#fff", background: "#3b82f6" }}>
            CONTACT ME
          </Link>
        </nav>

        {/* Character and message */}
        <div className="flex items-center gap-8">
          <div className="w-28 h-36">
            <svg viewBox="0 0 100 140" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
              <rect x="30" y="10" width="40" height="35" fill="#4a5568"/>
              <rect x="35" y="15" width="30" height="25" fill="#fbd38d"/>
              <rect x="40" y="25" width="6" height="6" fill="#1a202c"/>
              <rect x="54" y="25" width="6" height="6" fill="#1a202c"/>
              <rect x="32" y="5" width="36" height="12" fill="#4a5568"/>
              <rect x="25" y="45" width="50" height="40" fill="#38b2ac"/>
              <rect x="12" y="48" width="18" height="32" fill="#38b2ac"/>
              <rect x="70" y="48" width="18" height="32" fill="#38b2ac"/>
              <rect x="28" y="85" width="20" height="40" fill="#2d3748"/>
              <rect x="52" y="85" width="20" height="40" fill="#2d3748"/>
              <rect x="26" y="120" width="24" height="12" fill="#319795"/>
              <rect x="50" y="120" width="24" height="12" fill="#319795"/>
            </svg>
          </div>
          
          <div>
            <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "14px", color: "#fff" }}>
              IF YOU'D LIKE TO SEE MORE OF MY WORK,
            </p>
            <p className="mt-2" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "14px", color: "#fff" }}>
              FEEL FREE TO REACH OUT!
            </p>
            <div className="text-2xl mt-3" style={{ color: "#fff" }}>♪</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
