import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Get started',
    links: [
      { href: '/', children: 'Getting Started' },
      
    ]
  },
  {
    title: 'SDK Manual',
    links: [
      { href: '/sdk-guide', children: 'User Manual' },
      { type: 'subtitle', children: 'Core Concepts' },
      { href: '/structures', children: 'Data Structures for Gameplay Mechanics' },
    ]
  },
  {
    title: 'Website Manual',
    links: [
      { href: '/website-guide', children: 'User Manual' },
      { type: 'subtitle', children: 'Core Concepts' },
      { href: '/server-metrics', children: 'Game Server metrics' },
      { href: '/analytics-metrics', children: 'Analytics metrics' },
      { href: '/create', children: 'Create' },
      { type: 'subtitle', children: 'Example use cases' },
      { href: '/examples/magical-rpg', children: 'Create a Magical RPG' },
    ]
  },
  {
    title: 'Other resource',
    links: [
      { href: 'https://docs.google.com/document/d/1pBnDj-Kek-ZHXT2-uIlY3vxyFFFW599PbFfljUmsy20/edit?pli=1', outside: true, children: 'Our White Paper' },
      { href: 'https://www.hyperedgelabs.xyz/', outside: true, children: 'Our Webpage' },
    ]
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <ul className="flex column">
            {item.links.map((link, index) => {
              if (link.type === 'subtitle') {
                return <li key={index}><h5>{link.children}</h5></li>
              }
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  {link.outside? 
                    (<a href={link.href} target="_blank" rel="noopener noreferrer">{link.children}</a>)
                    : (<Link {...link}>  
                        <a href={link.href}>{link.children}</a> 
                      </Link>)
                  }
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            /* https://stackoverflow.com/questions/66898327/how-to-keep-footer-from-pushing-up-sticky-sidebar */
            position: sticky;
            top: var(--nav-height);
            height: calc(100vh - var(--nav-height));
            flex: 0 0 240px;
            overflow-y: auto;
            padding: 2rem 0 2rem 2rem;
          }
          h3 {
            font-weight: 500;
            margin: 0.5rem 0 0;
            padding-bottom: 0.5rem;
          }
          h5 {
            font-weight: bold;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style-type: none;
            margin: 0 0 0.7rem 0.7rem;
            font-size: 14px;
            font-weight: 400;
          }
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active > a {
            text-decoration: underline;
          }
          @media screen and (max-width: 600px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}
