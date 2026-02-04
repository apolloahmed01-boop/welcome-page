import { Link } from "react-router-dom";

const MyWork = () => {
  const projects = [
    {
      channel: "ROBOKAST",
      channelImg: "https://yt3.googleusercontent.com/ytc/AIdro_kBBzmYXtchZpM8P2VmPBZqEjFCcL8fE4tMqY7R=s176-c-k-c0x00ffffff-no-rj",
      subscribers: "484K SUBSCRIBERS",
      views: "+1M VEIW",
      videos: [
        { title: "Why LittleBigPlanet Died", thumbnail: "https://i.ytimg.com/vi/example1/maxresdefault.jpg" },
        { title: "Why Tony Hawk Skateboarding Games Died", thumbnail: "https://i.ytimg.com/vi/example2/maxresdefault.jpg" },
        { title: "Why Marvel's Avengers Failed with a $200,000...", thumbnail: "https://i.ytimg.com/vi/example3/maxresdefault.jpg" },
        { title: "The Rise and Fall of Steam's Biggest Early Acc...", thumbnail: "https://i.ytimg.com/vi/example4/maxresdefault.jpg" },
      ]
    },
    {
      channel: "MUSIC BY MATTIE",
      channelImg: "https://yt3.googleusercontent.com/ytc/AIdro_kBBzmYXtchZpM8P2VmPBZqEjFCcL8fE4tMqY7R=s176-c-k-c0x00ffffff-no-rj",
      subscribers: "29.7K SUBSCRIBERS",
      views: "+200K VEIW",
      videos: [
        { title: "I tried 100 AI Music Tools... These are the ONL...", thumbnail: "https://i.ytimg.com/vi/example5/maxresdefault.jpg" },
      ]
    },
    {
      channel: "AHMED NAGDY",
      channelImg: "https://yt3.googleusercontent.com/ytc/AIdro_kBBzmYXtchZpM8P2VmPBZqEjFCcL8fE4tMqY7R=s176-c-k-c0x00ffffff-no-rj",
      subscribers: "12.1K SUBSCRIBERS",
      views: "+200K VEIW",
      videos: [
        { title: "ازاي تحترف WordPress Debugging", thumbnail: "https://i.ytimg.com/vi/example6/maxresdefault.jpg" },
        { title: "ووردبريس 6.8 - هل من جديد؟", thumbnail: "https://i.ytimg.com/vi/example7/maxresdefault.jpg" },
        { title: "اشتريت راحة بالي - قصتي مع كلاودويز", thumbnail: "https://i.ytimg.com/vi/example8/maxresdefault.jpg" },
        { title: "هوستنج مجاني مدي الحياة؟", thumbnail: "https://i.ytimg.com/vi/example9/maxresdefault.jpg" },
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black overflow-auto">
      {/* Header */}
      <div className="relative py-4">
        {/* Potion Left */}
        <div className="absolute left-4 top-4 w-12 h-16">
          <div className="w-full h-full bg-gradient-to-b from-purple-400 to-purple-600 rounded-b-full" 
            style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 30%)" }} />
        </div>
        
        {/* Potion Right */}
        <div className="absolute right-4 top-4 w-12 h-16">
          <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-full"
            style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 30%)" }} />
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl md:text-3xl font-bold text-yellow-400 py-8 flex items-center justify-center gap-4"
          style={{ fontFamily: "'Press Start 2P', monospace", textShadow: "0 0 20px #ffd700" }}>
          <span className="text-yellow-400">★</span>
          MY EDITING PROJECTS
          <span className="text-yellow-400">★</span>
        </h1>

        {/* Navigation */}
        <nav className="flex items-center justify-center gap-6 mb-8">
          <Link to="/" 
            className="px-6 py-2 bg-gray-800 text-white font-bold uppercase tracking-wider border border-gray-600 rounded"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "11px" }}>
            Menu
          </Link>
          
          <div className="px-6 py-2 bg-yellow-400 text-black font-bold uppercase tracking-wider rounded"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "11px" }}>
            My Work
          </div>
          
          {/* Coin */}
          <div className="w-8 h-10 rounded-full bg-yellow-400 border-4 border-yellow-500" 
            style={{ boxShadow: "0 0 15px #ffd700" }} />
          
          <Link to="/contact" 
            className="px-6 py-2 bg-blue-500 text-white font-bold uppercase tracking-wider rounded hover:bg-blue-600 transition-colors"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "11px" }}>
            Contact Me
          </Link>
        </nav>
      </div>

      {/* Projects */}
      {projects.map((project, idx) => (
        <div key={idx} className="mb-8">
          {/* Channel Header */}
          <div className="flex items-center justify-center gap-6 mb-4 py-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600">
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800" />
            </div>
            <div>
              <h2 className="text-yellow-400 font-bold text-lg"
                style={{ fontFamily: "'Press Start 2P', monospace" }}>
                {project.channel}
              </h2>
              <p className="text-cyan-400 text-xs mt-1"
                style={{ fontFamily: "'Press Start 2P', monospace" }}>
                {project.subscribers}
              </p>
            </div>
            <div className="flex items-center gap-2 ml-8">
              <span className="text-white">✕</span>
              <div className="w-16 h-4 bg-cyan-400 rounded" />
              <span className="text-cyan-400 text-xs" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                {project.views}
              </span>
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 max-w-5xl mx-auto">
            {project.videos.map((video, vIdx) => (
              <div key={vIdx} className="relative group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden relative">
                  {/* Thumbnail placeholder with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/30 via-transparent to-red-500/30" />
                  
                  {/* Channel avatar */}
                  <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-gray-600 border border-gray-500" />
                  
                  {/* Title */}
                  <div className="absolute top-2 left-12 right-8 text-white text-sm font-medium truncate">
                    {video.title}
                  </div>
                  
                  {/* Menu dots */}
                  <div className="absolute top-2 right-2 text-white text-lg">⋮</div>
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                      <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cyan separator line */}
          {idx < projects.length - 1 && (
            <div className="h-1 bg-cyan-400 mt-8" style={{ boxShadow: "0 0 20px #00ffff" }} />
          )}
        </div>
      ))}

      {/* Footer Navigation */}
      <div className="py-12 flex flex-col items-center">
        <nav className="flex items-center justify-center gap-6 mb-8">
          <Link to="/" 
            className="px-6 py-2 bg-gray-800 text-white font-bold uppercase tracking-wider border border-gray-600 rounded"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "11px" }}>
            Menu
          </Link>
          
          <div className="px-6 py-2 bg-yellow-400 text-black font-bold uppercase tracking-wider rounded"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "11px" }}>
            My Work
          </div>
          
          {/* Coin */}
          <div className="w-8 h-10 rounded-full bg-yellow-400 border-4 border-yellow-500" 
            style={{ boxShadow: "0 0 15px #ffd700" }} />
          
          <Link to="/contact" 
            className="px-6 py-2 bg-blue-500 text-white font-bold uppercase tracking-wider rounded hover:bg-blue-600 transition-colors"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "11px" }}>
            Contact Me
          </Link>
        </nav>

        {/* Character and message */}
        <div className="flex items-center gap-8 mt-8">
          {/* Pixel Character */}
          <div className="w-32 h-40">
            <svg viewBox="0 0 100 140" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
              <rect x="30" y="10" width="40" height="35" fill="#4a5568"/>
              <rect x="35" y="15" width="30" height="25" fill="#fbd38d"/>
              <rect x="40" y="25" width="6" height="6" fill="#2d3748"/>
              <rect x="54" y="25" width="6" height="6" fill="#2d3748"/>
              <rect x="32" y="8" width="36" height="10" fill="#4a5568"/>
              <rect x="25" y="45" width="50" height="40" fill="#38b2ac"/>
              <rect x="15" y="50" width="15" height="30" fill="#38b2ac"/>
              <rect x="70" y="50" width="15" height="30" fill="#38b2ac"/>
              <rect x="30" y="85" width="18" height="35" fill="#2d3748"/>
              <rect x="52" y="85" width="18" height="35" fill="#2d3748"/>
              <rect x="28" y="115" width="22" height="10" fill="#319795"/>
              <rect x="50" y="115" width="22" height="10" fill="#319795"/>
            </svg>
          </div>
          
          <div className="text-white text-lg" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            <p>IF YOU'D LIKE TO SEE MORE OF MY WORK,</p>
            <p>FEEL FREE TO REACH OUT!</p>
            <div className="text-2xl mt-2">♪</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
