export default function NewHeader() {
  return (
    <header className="w-full py-6 px-4 md:px-8 mt-4 md:mt-6">
      <div className="max-w-7xl mx-auto flex items-start justify-between mb-6">
        <div className="flex flex-col items-start">
          <div className="flex items-baseline gap-0">
            <h1
              className="text-3xl md:text-5xl font-black tracking-tight font-artistic"
              style={{
                background: 'linear-gradient(135deg, #0066CC 0%, #87CEEB 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              情報
            </h1>
            <span className="text-xl md:text-3xl font-medium font-artistic ml-1" style={{ color: '#000000' }}>
              銘柄基本
            </span>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-24 md:h-32 w-auto object-contain"
          />
        </div>
      </div>

    </header>
  );
}
