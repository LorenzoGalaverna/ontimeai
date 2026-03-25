import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

export default function PillNav({
    logo,
    logoAlt = "Company Logo",
    items = [],
    activeHref,
    className = "",
    ease = "power2.easeOut",
    baseColor = "#1a1a1a",
    pillColor = "#ffffff",
    hoveredPillTextColor = "#000000",
    pillTextColor = "#9ca3af",
    rightElement,
    initialLoadAnimation = false
}) {
    const containerRef = useRef(null);
    const tabsContainerRef = useRef(null);
    const pillRef = useRef(null);
    const itemRefs = useRef([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeIndex, setActiveIndex] = useState(
        items.findIndex(item => item.href === activeHref)
    );

    useEffect(() => {
        setActiveIndex(items.findIndex(item => item.href === activeHref));
    }, [activeHref, items]);

    useEffect(() => {
        if (initialLoadAnimation && containerRef.current) {
            gsap.fromTo(containerRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease }
            );
        }
    }, [initialLoadAnimation, ease]);

    const updatePill = (index) => {
        if (index === null || index === -1 || !itemRefs.current[index] || !pillRef.current || !tabsContainerRef.current) {
            gsap.to(pillRef.current, { opacity: 0, duration: 0.3, ease });
            return;
        }
        const item = itemRefs.current[index];
        const itemRect = item.getBoundingClientRect();
        const containerRect = tabsContainerRef.current.getBoundingClientRect();

        gsap.to(pillRef.current, {
            opacity: 1,
            x: itemRect.left - containerRect.left,
            width: itemRect.width,
            y: itemRect.top - containerRect.top,
            height: itemRect.height,
            duration: 0.4,
            ease
        });
    };

    useEffect(() => {
        if (hoveredIndex !== null) {
            updatePill(hoveredIndex);
        } else {
            updatePill(activeIndex);
        }
    }, [hoveredIndex, activeIndex, ease]);

    return (
        <nav
            ref={containerRef}
            className={`relative flex items-center rounded-full shadow-lg pointer-events-auto p-1.5 ${className}`}
            style={{ backgroundColor: baseColor }}
        >
            <div className="flex items-center pl-5 pr-8">
                {logo && (
                    typeof logo === 'string' ? <img src={logo} alt={logoAlt} className="h-6" /> : logo
                )}
            </div>

            <div ref={tabsContainerRef} className="relative flex items-center justify-center flex-1">
                {/* The sliding Pill */}
                <div
                    ref={pillRef}
                    className="absolute left-0 top-0 rounded-full pointer-events-none"
                    style={{ backgroundColor: pillColor, opacity: 0 }}
                />

                {items.map((item, i) => {
                    const isActive = hoveredIndex === i || (hoveredIndex === null && activeIndex === i);
                    const textColor = isActive ? hoveredPillTextColor : pillTextColor;

                    return (
                        <a
                            key={item.label}
                            ref={el => itemRefs.current[i] = el}
                            href={item.href}
                            onClick={(e) => {
                                // e.preventDefault();
                                setActiveIndex(i);
                            }}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative px-6 py-2.5 text-sm font-semibold transition-colors duration-300 rounded-full z-10 block whitespace-nowrap"
                            style={{ color: textColor }}
                        >
                            {item.label}
                        </a>
                    );
                })}
            </div>

            {rightElement && (
                <div className="flex items-center pr-1 pl-4 z-20">
                    {rightElement}
                </div>
            )}
        </nav>
    );
}
