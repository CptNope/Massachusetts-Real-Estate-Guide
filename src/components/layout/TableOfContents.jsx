import React, { useState, useEffect } from 'react';

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Extract headings from the content
    const extractHeadings = () => {
      const contentElement = document.querySelector('.content-body');
      if (!contentElement) return [];

      const h3Elements = contentElement.querySelectorAll('h3');
      const h4Elements = contentElement.querySelectorAll('h4');
      
      const allHeadings = [];
      
      // Add h3 headings (main sections)
      h3Elements.forEach((h3, index) => {
        const id = `section-${index}`;
        h3.id = id;
        allHeadings.push({
          id,
          text: h3.textContent,
          level: 3,
          element: h3
        });
      });
      
      // Add h4 headings (subsections)
      h4Elements.forEach((h4, index) => {
        const id = `subsection-${index}`;
        h4.id = id;
        allHeadings.push({
          id,
          text: h4.textContent,
          level: 4,
          element: h4
        });
      });
      
      // Sort by position in document
      allHeadings.sort((a, b) => {
        const aPos = a.element.getBoundingClientRect().top;
        const bPos = b.element.getBoundingClientRect().top;
        return aPos - bPos;
      });
      
      return allHeadings;
    };

    // Reset headings immediately when content changes
    setHeadings([]);

    // Wait for content to render, then extract headings
    // Increased timeout to ensure React finishes rendering
    const timer = setTimeout(() => {
      const extracted = extractHeadings();
      setHeadings(extracted);
      
      // If no headings found, try again after a bit longer
      if (extracted.length === 0) {
        setTimeout(() => {
          const retryExtracted = extractHeadings();
          setHeadings(retryExtracted);
        }, 200);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [content]);

  useEffect(() => {
    // Track active section on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Check if TOC should be sticky
      const tocElement = document.querySelector('.table-of-contents');
      if (tocElement) {
        const tocTop = tocElement.offsetTop;
        setIsSticky(window.scrollY > tocTop);
      }
      
      // Find active heading
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        const element = document.getElementById(heading.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(heading.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Only show TOC if there are multiple sections
  if (headings.length < 3) return null;

  return (
    <>
      <div className={`table-of-contents ${isSticky ? 'sticky' : ''}`}>
        <div className="toc-header">
          <h3>📑 Table of Contents</h3>
          <button 
            className="toc-toggle-btn"
            onClick={() => {
              const tocList = document.querySelector('.toc-list');
              if (tocList) {
                tocList.classList.toggle('collapsed');
              }
            }}
            title="Collapse/Expand"
          >
            ▼
          </button>
        </div>
        <ul className="toc-list">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`toc-item level-${heading.level} ${activeId === heading.id ? 'active' : ''}`}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(heading.id);
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Back to Top Button */}
      {isSticky && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          title="Back to top"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
