import NextImage from 'next/image';

export function Hero(): React.JSX.Element {
    return (
        <section
            className='relative -top-5 left-1/2 mb-8 ml-[-50vw] w-screen overflow-visible after:pointer-events-none after:absolute after:inset-0'
            id='hero'
        >
            <h1 className='absolute top-1/2 z-2 h-auto bg-vt-green/80 pl-[clamp(1rem,2vw,2rem)] text-[clamp(2.5rem,5vw+1rem,3.5rem)]! leading-none font-medium! text-white max-[400px]:top-[35%] max-[400px]:bg-vt-green/50'>
                <span className='relative top-[clamp(10px,2vw,16px)]'>
                    Welcome to Friends of Island Park
                </span>
            </h1>
            <NextImage
                alt='Anna Hunt Marsh Bridge and Island with Brattleboro in the distance'
                className='h-auto max-h-[80vh] w-full object-cover brightness-[0.95] contrast-[1.05]'
                height={1277}
                loading='eager'
                src='/images/bridge_and_island.jpg'
                width={1915}
            />
        </section>
    );
}
