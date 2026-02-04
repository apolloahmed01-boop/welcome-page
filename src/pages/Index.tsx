const Index = () => {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 gradient-blob rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 gradient-blob rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 gradient-blob rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <div className="animate-fade-in">
          <span className="text-7xl md:text-8xl animate-wave">👋</span>
        </div>
        
        <h1 className="mt-8 text-5xl md:text-7xl font-bold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="gradient-text">Hello!</span>
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Welcome to this little corner of the internet. Nice to meet you.
        </p>

        <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border shadow-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Ready to create something amazing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
