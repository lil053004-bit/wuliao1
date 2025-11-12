import RotkstockLogo from './RotkstockLogo';

export default function NewHeader() {
  return (
    <header className="w-full py-6 px-4 md:px-8 mt-4 md:mt-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <RotkstockLogo className="h-16 md:h-20 w-auto" />
        </div>

        <div className="flex flex-col items-end">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight font-artistic">
            AI株式
          </h1>
          <div className="flex gap-2 mt-1">
            <span className="text-sm md:text-base font-medium text-white font-artistic">情報</span>
            <span className="text-sm md:text-base font-medium text-white font-artistic">報告</span>
          </div>
        </div>
      </div>
    </header>
  );
}
