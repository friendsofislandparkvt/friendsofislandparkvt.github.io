import Link from 'next/link';
import Image from 'next/image';
import { newsArticles } from '@/data/news-articles';
import type { NewsArticle } from '@/data/news-articles';

function NewsArticleCard({ article }: { article: NewsArticle }): React.JSX.Element {
    const formattedDate = article.date
        ? new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
          })
        : null;

    return (
        <article className='mx-auto max-w-3xl border-l-4 border-l-vt-green pl-6'>
            {article.source || formattedDate ? (
                <div className='mb-3 flex items-center justify-between text-sm text-muted'>
                    {article.source ? (
                        <span className='font-medium text-vt-green'>{article.source}</span>
                    ) : null}
                    {formattedDate ? <time dateTime={article.date}>{formattedDate}</time> : null}
                </div>
            ) : null}

            <h3 className='mb-4 text-2xl leading-tight font-bold text-heading'>{article.title}</h3>

            {article.image ? (
                <div className='mb-4'>
                    <Image
                        alt={article.image.alt}
                        className='mx-auto h-auto w-full max-w-md rounded-sm shadow-lg'
                        height={0}
                        loading='lazy'
                        sizes='(max-width: 768px) 100vw, 448px'
                        src={article.image.src}
                        width={0}
                    />
                </div>
            ) : null}

            <div className='mb-4'>
                <p className='whitespace-pre-line'>{article.body}</p>
                {article.pullQuote ? (
                    <p className='mt-3 italic'>&quot;{article.pullQuote}&quot;</p>
                ) : null}
            </div>

            {article.url ? (
                <Link
                    className='font-medium underline'
                    href={article.url}
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    Read full article →
                </Link>
            ) : null}
        </article>
    );
}

export function News(): React.JSX.Element {
    return (
        <section
            className='my-12'
            id='news'
        >
            <h2 className='mx-auto mb-6 max-w-3xl pl-6 text-vt-green'>In the Press</h2>

            <div className='space-y-8'>
                {newsArticles.map(article => (
                    <NewsArticleCard
                        article={article}
                        key={article.id}
                    />
                ))}
            </div>
        </section>
    );
}
