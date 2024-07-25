import '@/styles/style.css';
export default function Place({name, image}) {
    return(
        <figure className="relative w-72 h-80 transition-all duration-300 cursor-pointer">
            <a href="/packages">
                <img loading="lazy" className="rounded-md object-cover w-full h-full" src={image} alt={name} />
            </a>
            <figcaption className="text-base leading-tight absolute mx-4 font-bold text-white -top-3">
                <p className="place_m px-4 py-2 bg-primary-700 text-white font-bold dark:bg-gray-700">{name}</p>
            </figcaption>
        </figure>
    )
}

