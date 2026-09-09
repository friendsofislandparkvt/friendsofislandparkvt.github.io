import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa6';

export function Footer(): React.JSX.Element {
    const footerLinkClasses = 'font-medium p-2 [&_p]:mb-0!';

    return (
        <footer className='mt-8 border-t border-t-border-footer p-4 text-center text-muted'>
            <div className={footerLinkClasses}>
                <p>Contact</p>
                <a href='mailto:friendsofislandparkvt@gmail.com'>friendsofislandparkvt@gmail.com</a>
            </div>
            <div className={footerLinkClasses}>
                <p>Donate</p>
                <Link
                    href='https://www.zeffy.com/en-US/donation-form/access-and-stewardship-fund-for-the-twin-bridges-and-brattleboro-hinsdale-island'
                    target='_blank'
                >
                    Zeffy
                </Link>
            </div>
            <div className='mb-2'>
                <Link
                    href='https://www.facebook.com/groups/1047644160578747/'
                    target='_blank'
                >
                    <FaFacebook className='mx-auto' />
                </Link>
            </div>
            <div>
                <p className='h-4 text-[.85rem]! text-link!'>
                    Photo credits: Anna Hunt Marsh Bridge by{' '}
                    <Link
                        className='underline!'
                        href='https://www.instagram.com/landmarksofbrattleboro/?hl=en'
                        target='_blank'
                    >
                        Joshua Carnes
                    </Link>
                </p>
            </div>
        </footer>
    );
}
