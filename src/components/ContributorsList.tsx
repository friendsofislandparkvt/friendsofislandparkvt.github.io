import Image from 'next/image';
import type { Sponsor } from '@/lib/constants';

type ContributorsListProps<T> = {
    title: string;
    contributors: T[];
    type: 'text' | 'image';
    sectionId: string;
};

export function ContributorsList<T>({
    title,
    contributors,
    type,
    sectionId,
}: ContributorsListProps<T>): React.JSX.Element {
    const isImage = type === 'image';

    return (
        <section
            className='p-8 pb-0'
            id={sectionId}
        >
            <h3 className='text-center text-xl text-muted'>{title}</h3>
            <ul
                className={`mx-auto ${isImage ? 'flex flex-wrap items-center justify-center gap-6 md:gap-8' : 'grid w-max gap-3 min-[401px]:grid-cols-2 min-[601px]:grid-cols-3 min-[769px]:grid-cols-4'}`}
            >
                {contributors.map(contributor => (
                    <li
                        className={isImage ? 'list-none' : 'mr-2 min-[401px]:mr-3'}
                        key={JSON.stringify(contributor)}
                    >
                        {isImage ? (
                            <div className='h-16'>
                                <Image
                                    alt={`${(contributor as Sponsor).name} logo`}
                                    className='h-full w-auto'
                                    height={80}
                                    src={`/logos/${(contributor as Sponsor).logo}`}
                                    width={120}
                                />
                            </div>
                        ) : (
                            String(contributor)
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}
