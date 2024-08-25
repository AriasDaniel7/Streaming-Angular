import { Injectable } from '@angular/core';
import { Screen } from '../interfaces/screen.interface';

const data: Screen[] = [
  {
    id: '08a701a8-2d4f-4f2c-9d5a-60da9d4d16ff',
    name: 'Crunchyroll',
    price: 7000,
    pricePrevious: 7000,
    description:
      '¿Eres un fanático del anime que busca disfrutar de las últimas series y películas sin interrupciones? ¡Tenemos justo lo que necesitas! Con nuestras Cuentas Premium de Crunchyroll, podrás acceder a miles de episodios de anime, desde los clásicos hasta los lanzamientos más recientes, todo en alta definición y sin anuncios.',
    image: './Crunchyroll_Logo.svg',
    stock: 30,
    discount: 0,
    screenTypes: [],
    screenSent: [],
  },
  {
    id: '3f6fe9b3-4b74-4203-95e7-abddfb337118',
    name: 'Spotify',
    price: 7000,
    pricePrevious: 7000,
    description:
      '¿Cansado de los anuncios y las restricciones en tu experiencia musical? Con nuestras Cuentas Premium de Spotify, podrás disfrutar de toda tu música favorita sin interrupciones, en alta calidad y con la máxima comodidad.',
    image: './Spotify_logo.svg',
    stock: 30,
    discount: 0,
    screenTypes: [],
    screenSent: [],
  },
  {
    id: '488eda3a-947f-4c43-85ac-0f85bb5d15c6',
    name: 'Disney',
    price: 7000,
    pricePrevious: 7000,
    description:
      'Sumérgete en el mundo de Disney con nuestras Cuentas Premium de Disney+, donde la magia nunca termina. Disfruta de un catálogo inigualable con tus películas, series y documentales favoritos de Disney, Pixar, Marvel, Star Wars, y National Geographic, todo en un solo lugar.',
    image: './Disney+_logo.svg',
    stock: 30,
    discount: 0,
    screenTypes: [],
    screenSent: [],
  },
  {
    id: '87a19670-cdf5-472a-ac26-4cdf9fc7897f',
    name: 'Prime Video',
    price: 4000,
    pricePrevious: 5000,
    description:
      'Explora un universo de entretenimiento con nuestras Cuentas Premium de Amazon Prime Video. Disfruta de una extensa biblioteca de películas, series originales, y documentales, todo al alcance de tus manos, en cualquier momento y desde cualquier dispositivo.',
    image: './Amazon_Prime_Video_logo.svg',
    stock: 20,
    discount: 20,
    screenTypes: [],
    screenSent: [],
  },
  {
    id: 'b6440d71-9cf0-46c4-8105-164f8470d6fd',
    name: 'Netflix',
    price: 5180,
    pricePrevious: 7000,
    description:
      'Sumérgete en el mejor entretenimiento con nuestras Cuentas Premium de Netflix. Accede a una enorme variedad de series, películas, documentales y contenido original, todo en alta definición y disponible en cualquier momento.',
    image: './Netflix_2015_logo.svg',
    stock: 198,
    discount: 26,
    screenTypes: [
      {
        id: '9cf9bcc2-e6e4-4c68-84e0-e22751602aac',
        name: 'tipo1',
        description: 'Nueva descripcion',
      },
      {
        id: '456093a6-4469-443b-bd3c-51267e01df7c',
        name: 'tipo2',
        description: 'Nueva descripcion',
      },
    ],
    screenSent: [
      {
        id: 'e9f6c8de-8be0-4d54-a857-9042ec489f21',
        name: 'Whatsapp',
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  constructor() {}

  obtenerTodos(): Screen[] {
    return data;
  }
}
