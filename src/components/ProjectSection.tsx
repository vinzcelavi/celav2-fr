import { cn } from '../utils/cn';
import AppIcon from './AppIcon';
import Paragraph from './Paragraph';

interface ProjectSectionProps {
  active: boolean;
  title: string;
  subTitle: string;
  paragraphs: {
    bold?: boolean;
    white?: boolean;
    bigger?: boolean;
    text: string;
  }[];
  technos: string[];
  medias: Array<{ alt: string } & ({ img: string } | { video: string })>;
}

function ProjectSection({ title, subTitle, paragraphs, technos, medias }: ProjectSectionProps) {
  return (
    <section className="mb-52 md:mb-72">
      <div className="md:grid md:grid-cols-2 gap-2 mb-20">
        <div className="flex flex-col items-start md:items-end gap-2 mb-16 md:pb-0 md:pr-16">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <h3 className="text-xl font-light text-primary mb-4 md:mb-6">{subTitle}</h3>

          <div className="flex flex-wrap gap-4 md:flex-nowrap">
            {technos.map((techno: string) => (
              <AppIcon
                key={techno}
                name={techno}
                className="w-12 overflow-hidden rounded-[14px] border-2 border-white/15"
              />
            ))}
          </div>
        </div>
        <div className="max-w-[40rem]">
          {paragraphs.map(
            (paragraph: {
              bold?: boolean;
              white?: boolean;
              bigger?: boolean;
              text: string;
            }) => (
              <Paragraph key={paragraph.text} bold={paragraph.bold} white={paragraph.white} bigger={paragraph.bigger}>
                {paragraph.text}
              </Paragraph>
            )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4">
          {medias.map((media, index) => (
            <div
              key={media.alt}
              className={cn(
                'w-full rounded-md overflow-hidden col-span-2',
                index === 0 && 'md:col-span-3 2xl:col-span-2',
                index === 1 && 'xl:col-span-2'
              )}
            >
              {'video' in media ? (
                <video src={media.video} className="w-full" autoPlay loop muted />
              ) : (
                <img src={media.img} alt={media.alt} className="w-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
