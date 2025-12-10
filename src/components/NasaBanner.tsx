import { useState } from 'react';
import { ChevronUp, ChevronDown, Rocket } from 'lucide-react';

interface NasaBannerProps {
  title: string;
  explanation: string;
}

export default function NasaBanner({ title, explanation }: NasaBannerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-md border-t border-blue-400/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-4 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Rocket className="w-5 h-5 text-blue-400" />
            <div className="text-left">
              <p className="text-xs text-blue-300 font-medium uppercase tracking-wider">
                NASA Astronomy Picture of the Day
              </p>
              <h3 className="text-sm sm:text-base font-semibold text-white mt-0.5">
                {title}
              </h3>
            </div>
          </div>
          <div className="flex-shrink-0">
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-blue-400" />
            ) : (
              <ChevronUp className="w-5 h-5 text-blue-400" />
            )}
          </div>
        </button>

        {isExpanded && (
          <div className="pb-4 pt-0 border-t border-blue-400/10">
            <p className="text-sm text-slate-300 leading-relaxed mt-3">
              {explanation}
            </p>
            <a
              href="https://apod.nasa.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Learn more at NASA APOD →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
