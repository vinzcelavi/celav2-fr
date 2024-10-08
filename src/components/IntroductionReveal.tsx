import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { appIconsDesigner, appIconsFrontEnd } from '../data/appIcons';
import { cn } from '../utils/cn';
import PopCornAnimation from './PopCornAnimation';

const IntroductionReveal = () => {
  const text = "Hello, I've been a Front-End Developer and Product Designer for over ten years.";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-center mb-52 md:mb-72">
      <h2 className="font-extrabold text-5xl text-intro leading-[1.25] text-white">
        {text.split(' ').map((word, index) => {
          const isKeyword = ['front-end', 'designer'].includes(word.toLowerCase());
          const isFrontEnd = word.toLowerCase() === 'front-end';
          const isDesigner = word.toLowerCase() === 'designer';

          return (
            <span
              key={word}
              onMouseOver={() => !isMobile && setHoveredIndex(index)}
              onFocus={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              onBlur={() => !isMobile && setHoveredIndex(null)}
              className={cn(
                'relative z-0 inline-block whitespace-nowrap will-change-transform animate-word-reveal [animation-fill-mode:backwards]',
                isKeyword && 'text-black z-10',
                hoveredIndex === index && 'z-30'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="relative z-10">
                {word}
                {'\u00A0'}
              </span>
              {isFrontEnd && !isMobile ? (
                <span className="absolute z-20 inset-0">
                  <PopCornAnimation appIcons={appIconsFrontEnd} />
                </span>
              ) : null}
              {isDesigner && !isMobile ? (
                <span className="absolute z-20 inset-0">
                  <PopCornAnimation appIcons={appIconsDesigner} />
                </span>
              ) : null}
              {isKeyword && (
                <span
                  className={cn(
                    'absolute z-0 top-0 left-[-4px] w-0 h-full border-l-2 border-r-2 rotate-[-0.75deg] origin-top-left animate-marker-animation duration-200',
                    isFrontEnd ? 'border-primary bg-primary' : 'border-secondary bg-secondary',
                    hoveredIndex === index && 'border-white bg-white'
                  )}
                  style={{ animationDelay: `${index * 0.05}s` }}
                />
              )}
            </span>
          );
        })}
      </h2>
    </div>
  );
};

export default IntroductionReveal;
