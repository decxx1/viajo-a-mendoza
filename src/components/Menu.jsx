import { useState,useEffect } from 'react';

export default function Menu() {
    const [path, setPath] = useState(null);

    useEffect(() => {
        setPath(window.location.pathname);
    }, []);

    const classMenu = (value) => {
        if (value === path) {
            return 'font-bold active max-lg:group-first:bg-primary-200 max-lg:dark:group-first:bg-gray-700';
        } else {
            return 'font-normal';
        }
        
    }
    return(
        <>
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-4 lg:mt-0">
                <li className="lg:py-5 lg:px-4 cursor-pointer bg-semiWhite dark:bg-gray-800 group" >
                    <a 
                        href="/"
                        className={classMenu('/') + ' lg:text-lg text-md max-lg:group-hover:bg-primary-200 text-semiBlack dark:text-white block py-2 pr-4 pl-3 hover:font-bold border-b-half lg:p-0 lg:dark:hover:text-white max-lg:group-hover:dark:bg-gray-700'}
                    >
                        INICIO
                    </a>
                </li>
                <li className="lg:py-5 lg:px-4 cursor-pointer bg-semiWhite dark:bg-gray-800 group" >
                    <a 
                        href="/packages"
                        className={classMenu('/packages') + ' lg:text-lg text-md max-lg:group-hover:bg-primary-200 text-semiBlack dark:text-white block py-2 pr-4 pl-3 hover:font-bold border-b-half lg:p-0 lg:dark:hover:text-white max-lg:group-hover:dark:bg-gray-700'}
                    >
                        PAQUETES
                    </a>
                </li>
                <li className="lg:py-5 lg:px-4 cursor-pointer bg-semiWhite dark:bg-gray-800 group" >
                    <a 
                        href="/contact"
                        className={classMenu('/contact') + ' lg:text-lg text-md max-lg:group-hover:bg-primary-200 text-semiBlack dark:text-white block py-2 pr-4 pl-3 hover:font-bold border-b-half lg:p-0 lg:dark:hover:text-white max-lg:group-hover:dark:bg-gray-700'}
                    >
                        CONTACTO
                    </a>
                </li>
            </ul>
        </>
    )
}