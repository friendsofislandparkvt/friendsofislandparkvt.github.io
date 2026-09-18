import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { News } from '@/components/News';
import { ContributorsList } from '@/components/ContributorsList';
import { contributorsList, corporateSponsorsList } from '@/lib/constants';
import { Footer } from '@/components/Footer';

export default function Home(): React.JSX.Element {
    return (
        <div className='mx-auto flex min-h-screen max-w-240 flex-col bg-white p-5'>
            <main className='flex-1'>
                <Hero />

                <section id='mission'>
                    <h2>Mission</h2>
                    <p>
                        To manifest a premier greenway on the historic Island Park and its bridges,
                        cooperatively between Hinsdale, NH, and Brattleboro, VT—transforming this
                        unique space into a thriving, car-free amenity that enriches lives through
                        diverse recreational activities, natural beauty, and community events.
                    </p>
                    <h2>Vision</h2>
                    <p>
                        This island is the nexus of two towns and two states. It connects the
                        Connecticut River, the West River, the Mt. Wantastiquet trails, the
                        Whetstone Walkway, the West River Trail, and the Fort Hill Trail--serving as
                        a connector for all, including walkers, hikers, bike riders, skateboarders,
                        anglers, boaters, schoolchildren, and tourists.
                    </p>
                    <figure className='flex w-full flex-col items-center justify-center p-4 pt-8'>
                        <Image
                            alt='Proposed greenway plans featuring the General John Stark Memorial Bridge'
                            className='h-auto w-full max-w-340.75'
                            height='879'
                            loading='lazy'
                            src='/images/proposed_greenway_plans.png'
                            width='1363'
                        />
                    </figure>
                </section>

                <News />

                <section id='teaser'>
                    <h2 className='text-center font-medium! tracking-[.02em] text-vt-green italic'>
                        The journey continues — stay tuned for what&apos;s next.
                    </h2>
                </section>

                <ContributorsList
                    contributors={contributorsList}
                    sectionId='contributors-list'
                    title='Contributors to date include'
                    type='text'
                />

                <ContributorsList
                    contributors={corporateSponsorsList}
                    sectionId='corporate-sponsors'
                    title='Corporate Sponsors'
                    type='image'
                />
            </main>

            <Footer />
        </div>
    );
}
