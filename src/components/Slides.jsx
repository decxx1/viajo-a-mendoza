import { register } from 'swiper/element/bundle';
import Place from '@/components/Place.jsx';
import {useEffect} from 'react';


export default () => {

  useEffect (() => {
    register();
    const swiperEl = document.querySelector('swiper-container');

    // swiper parameters
    const swiperParams = {
      slidesPerView: 1,
      autoplay:{
        delay:2500
      },
      spaceBetween: 5,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 5,
        }
      },
      on: {
        init() {
          // ...
        },
      },
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    swiperEl.initialize();
  }, []);
  
  return (
    <>
      <swiper-container
        init="false"
        lazy="true"
        class="contents"
      >
        <swiper-slide
          class="flex justify-end ml-auto mt-8"
        >
          <Place
            name="Villavicencio"
            image="/images/lugares-turisticos/hotel-y-reserva-villavicencio.webp"
          />
        </swiper-slide>
        <swiper-slide
          class="flex justify-end ml-auto mt-8"
        >
          <Place
            name="Cacheuta"
            image="/images/lugares-turisticos/cacheuta.jpg"
          />
        </swiper-slide>
        <swiper-slide
          class="flex justify-end ml-auto mt-8"
        >
          <Place
            name="Potrerillos"
            image="/images/lugares-turisticos/potrerillos.avif"
          />
        </swiper-slide>
        <swiper-slide
          class="flex justify-end ml-auto mt-8"
        >
          <Place
            name="Los Penitentes"
            image="/images/lugares-turisticos/los-penitentes.jpg"
          />
        </swiper-slide>
        <swiper-slide
          class="flex justify-end ml-auto mt-8"
        >
          <Place
            name="Uspallata"
            image="/images/lugares-turisticos/uspallata.webp"
          />
        </swiper-slide>
        <swiper-slide
          class="flex justify-end ml-auto mt-8"
        >
          <Place
            name="Cerro Aconcagua"
            image="/images/lugares-turisticos/cerro-aconcagua.jpg"
          />
        </swiper-slide>
        <swiper-slide
          class="flex justify-end ml-auto mt-8"
        >
          <Place
            name="Cañon del atuel"
            image="/images/lugares-turisticos/canon-atuel.jpg"
          />
        </swiper-slide>
        <swiper-slide
          class="flex justify-end ml-auto mt-8"
        >
          <Place
            name="Valle de Uco"
            image="/images/lugares-turisticos/valle-de-uco-mendoza.jpg"
          />
        </swiper-slide>
      </swiper-container>
    </>
  );
};
