import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LinkButton } from './Button';

export default function CareerCard({ event }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      setLang(localStorage.getItem('lang'));
    } else {
      localStorage.setItem('lang', 'en');
    }
  }, []);

  return (
    <div className={`event`}>
      <div className='detail'>
        <div>
          <h3
            className='name is-size-6'
            title={lang === 'en' ? event.title.en : event.title.bm}
          >{`${
            lang === 'en'
              ? event.title.en.slice(0, 75)
              : event.title.bm.slice(0, 75)
          }${
            lang === 'en' && event.title.en.length > 75
              ? ' ...'
              : lang === 'bm' && event.title.bm.length > 75
              ? ' ...'
              : ''
          }`}</h3>
        </div>
        <div>
          <p>{`${
            lang === 'en'
              ? 'We‘re looking for our ' +
                event.title.en.slice(0, 75) +
                ' to join our team'
              : 'We‘re looking for our ' +
                event.title.bm.slice(0, 75) +
                ' to join our team'
          }${
            lang === 'en' && event.title.en.length > 75
              ? ' ...'
              : lang === 'bm' && event.title.bm.length > 75
              ? ' ...'
              : ''
          }`}</p>
        </div>
        <hr />
        <div>
          {/* <div>
            <span title={event.location}>{`${event.location.slice(0, 75)}${
              event.location.length > 75 ? ' ...' : ''
            }`}</span>
          </div> */}
          <Link href='/career/[id]' as={`/career/${event.id}`}>
            <a className='button ava-button btn-primary'>
              {lang === 'en' ? 'View Details' : 'Lagi'}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
