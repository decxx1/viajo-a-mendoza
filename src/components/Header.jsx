import Menu from '@/components/Menu.jsx';
import ColorModeSwitcher from '@/components/ColorModeSwitcher.jsx';
import { useEffect } from 'react';

export default function Header({heroPage}) {
    useEffect(() => {
        const header = document.querySelector(".header");
        const headerContainer = document.querySelector(".header-container");
        const mediaQuery = window.matchMedia("(min-width: 640px)");
        const handleScroll = () => {
            if (heroPage) {
                if (window.scrollY > 60 && window) {
                    header.classList.add("sticky");
                    header.classList.remove("sm:absolute");
                    header.classList.add("shadow");
                    header.classList.remove("sm:top-12");
                    header.classList.add("top-0");
                    header.classList.remove("sm:max-w-screen-sm");
                    header.classList.remove("md:max-w-screen-md");
                    header.classList.remove("lg:max-w-screen-lg");
                    header.classList.remove("sm:left-1/2");
                    header.classList.remove("sm:transform");
                    header.classList.remove("sm:-translate-x-1/2");
                    headerContainer.classList.add("sticky-reserved");
                } else {
                    header.classList.add("sm:absolute");
                    header.classList.remove("sticky");
                    header.classList.remove("shadow");
                    header.classList.add("sm:top-12");
                    header.classList.remove("sm:top-0");
                    header.classList.add("sm:max-w-screen-sm");
                    header.classList.add("md:max-w-screen-md");
                    header.classList.add("lg:max-w-screen-lg");
                    header.classList.add("sm:left-1/2");
                    header.classList.add("sm:transform");
                    header.classList.add("sm:-translate-x-1/2");
                    headerContainer.classList.remove("sticky-reserved");
                }
            }
        }
        // Check if the screen width is greater than 640px
        if (mediaQuery.matches && heroPage) {
            window.addEventListener("scroll", handleScroll);
        }

        // Add or remove event listener based on screen size changes
        mediaQuery.addEventListener("change", (e) => {
            if (e.matches && heroPage) {
                window.addEventListener("scroll", handleScroll);
            } else {
                window.removeEventListener("scroll", handleScroll);
            }
        })
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    const classHero = () => {
        if (heroPage) {
            return 'sm:absolute sm:top-12 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg sm:left-1/2 sm:transform sm:-translate-x-1/2';
        } else {
            return '';
        }
    }
    return(
        <>
            <div className="header-container"></div>
            <header className={classHero() + ' shadow-primary-700 header sticky top-0 z-50 w-full transition-[margin] duration-300'}>
                <nav className="bg-semiWhite px-4 lg:px-6 dark:bg-gray-800 border border-gray-200 rounded-md dark:border-gray-700">
                    <div className="flex flex-wrap justify-between items-center mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
                        <a href="/" className="flex items-center py-2">
                            <svg className="h-12 text-semiDark dark:text-white" id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 227.2 154.95">
                                <defs/>
                                <g id="Capa_1-2" data-name="Capa 1">
                                    <path fill="currentColor" d="m57.85 64.3-12.1 31.79h-5.63L28.02 64.3h6.43l8.47 22.28 8.51-22.28h6.43Zm9.53 31.79h-6.03V64.3h6.03v31.79Zm33.3 0h-6.43l-2.62-6.71H79.84l-2.57 6.71h-6.43l12.1-31.79h5.63l12.1 31.79ZM85.74 73.81l-3.72 9.8h7.45l-3.72-9.8Zm71.68 6.37c0 4.58-1.7 8.5-5.1 11.76-3.37 3.25-7.46 4.88-12.28 4.88s-8.93-1.63-12.32-4.88c-3.37-3.23-5.05-7.14-5.05-11.76s1.69-8.53 5.05-11.76c3.43-3.25 7.54-4.88 12.32-4.88s8.88 1.63 12.28 4.88c3.4 3.25 5.1 7.17 5.1 11.76Zm-6.03-.02c0-2.98-1.11-5.53-3.33-7.65-2.22-2.13-4.89-3.19-8-3.19s-5.83 1.06-7.99 3.19c-2.25 2.16-3.38 4.71-3.38 7.65s1.12 5.53 3.38 7.65c2.22 2.16 4.88 3.23 7.99 3.23s5.74-1.08 8-3.23c2.22-2.07 3.33-4.62 3.33-7.65Z"/>
                                    <path fill="currentColor" d="m104.19 63.96-.03 5.5 8.94-.05-.03 23.34c0 2.31-.71 4.22-2.12 5.74-1.35 1.6-3.04 2.4-5.07 2.4s-3.67-.81-5.05-2.44l-4.06 4.26c.83.94 1.73 1.74 2.72 2.4.98.66 2.02 1.18 3.11 1.55 1.09.37 2.18.56 3.29.56 3.49 0 6.49-1.43 9.01-4.28 2.52-2.85 3.78-6.25 3.78-10.2V63.97h-14.46ZM32 154.21h-5.84v-20.56l-7.43 20.56h-5.45l-7.43-20.65v20.65H0v-32.49h7.77l8.2 22.77 8.25-22.77h7.77v32.49Zm28.86 0H37.71v-32.49h23.15v5.9H43.55v7.37h13.53v5.9H43.55v7.42h17.31v5.9Zm31.83 0h-5.37l-14.95-21.25v21.25h-5.84v-32.49h5.34l14.98 21.25v-21.25h5.84v32.49Zm34.06-16.26c0 4.48-1.58 8.31-4.72 11.49-3.15 3.18-6.93 4.77-11.34 4.77H98.36v-32.49h12.33c4.41 0 8.19 1.59 11.34 4.77 3.15 3.12 4.72 6.94 4.72 11.45Zm-5.84.02c0-2.84-1-5.27-3.01-7.3-2-2.03-4.41-3.04-7.22-3.04h-6.49v20.69h6.49c2.81 0 5.21-1.01 7.22-3.04 2-2.03 3.01-4.46 3.01-7.3Zm43.89-.02c0 4.68-1.65 8.69-4.94 12.02-3.26 3.32-7.23 4.99-11.9 4.99s-8.65-1.66-11.94-4.99c-3.26-3.3-4.9-7.3-4.9-12.02s1.63-8.72 4.9-12.01c3.32-3.32 7.3-4.99 11.94-4.99s8.6 1.66 11.9 4.99c3.29 3.33 4.94 7.33 4.94 12.01Zm-5.84-.02c0-3.04-1.08-5.65-3.23-7.82s-4.73-3.26-7.75-3.26-5.65 1.09-7.75 3.26c-2.18 2.2-3.27 4.81-3.27 7.82s1.09 5.65 3.27 7.82c2.15 2.2 4.73 3.3 7.75 3.3s5.57-1.1 7.75-3.3c2.15-2.11 3.23-4.72 3.23-7.82Zm36.38 16.28h-26.16v-5.25l17.74-21.34h-17.74v-5.9h26.16v5.21l-17.78 21.37h17.78v5.9Zm31.86 0h-6.23l-2.53-6.85h-11.42l-2.49 6.85h-6.23l11.73-32.49h5.45l11.73 32.49Zm-14.47-22.77-3.61 10.02h7.22l-3.61-10.02Zm-16.04-35.35h-6.31l-2.57-6.71h-11.57l-2.52 6.71h-6.31l11.88-31.79h5.53l11.88 31.79Zm-14.66-22.28-3.65 9.8h7.31l-3.65-9.8Z"/>
                                    <path fill="currentColor" fillRule="evenodd" d="M83.24 12.63c.34-.65 11.68-11.59 18.96-7.57 2.72 1.53 14.09 10.49 15.45 12.95L106.94 28.9c-4.17-.31-21.32-12.95-23.7-16.27Zm-2.55-2.49c-2.89-.82-2.86-2.92-7.88-3.26-3.71-.26-5.9.31-9.16 1.81-4.17 1.93-9.21 6.18-12.27 9.52-3.66 4.03-6.52 7.51-10.63 11.11-1.25 1.08-11.03 10.01-11.17 10.06 5.44.26 22.73-21.63 33.45-27.92 4.39-2.58 12.05-4.05 15.79.06-.71 1.98-19.47 18.54-21.4 22.88 5.44-.94 20.78-18.62 24.38-20.52 4.39 2.64 10.57 11.91 22.73 17.15-.51 2.07-3.23 3.69-4.28 5.61 5.75-1.02 2.81-5.98 12.1-3.15 4 1.22 11.11 1.9 15.48.77-1.11-.43-7.71-1.22-9.64-1.5-2.83-.37-5.92-1.59-8.76-2.35.68-1.28 9.3-10.06 10.66-10.6 4.39 2.64 6.38 4.88 11.59 7.11 6.26 2.64 8.14 3.23 15.9 3.12-1.05-2.35-6.04-1.47-13.75-4.96-7.54-3.43-9.21-5.36-12.05-6.66 1.05-3.69 10.01-8.84 13.49-10.37 6.35-2.78 12.5.06 17.35 4.25 4.22 3.66 8.05 7.71 12.56 11.08 2.47 1.84 4.51 3.49 7.37 4.62 1.9.74 7.14 3.23 8.76 2.27-9.58-5.36-15.65-8.7-24.09-16.53-9.24-8.56-16.3-12.98-28.2-5.24-8.48 5.5-8.08 9.3-11.54 6.35-4-3.43-7.09-6.26-10.8-9.81-4.39-4.2-7.97-6.69-14.17-3.77-5.24 2.44-9.18 7.17-11.82 8.87Z"/>
                                </g>
                            </svg>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <ColorModeSwitcher />
                            <button data-collapse-toggle="mobile-menu-2" type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-semiDark rounded-lg lg:hidden hover:bg-white hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"></path>
                                    </svg>
                                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:block lg:w-auto " id="mobile-menu-2">
                            <Menu />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}