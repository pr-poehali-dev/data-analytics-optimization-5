export type Category = 'Посуда' | 'Вазы' | 'Декор';

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  description: string;
  stock: number;
  image: string;
}

const IMG = {
  bowl: 'https://cdn.poehali.dev/projects/a8e881af-e7a4-494c-9f50-832947d0e419/files/778acef8-9c1f-4733-a4fe-9680d19660fd.jpg',
  vase: 'https://cdn.poehali.dev/projects/a8e881af-e7a4-494c-9f50-832947d0e419/files/6ee3d3e0-252e-4c7d-99fc-f18022d35a84.jpg',
  mug: 'https://cdn.poehali.dev/projects/a8e881af-e7a4-494c-9f50-832947d0e419/files/88286c01-44d7-463d-82d8-bb1b5348fb70.jpg',
  plate: 'https://cdn.poehali.dev/projects/a8e881af-e7a4-494c-9f50-832947d0e419/files/40937db2-fb06-4f42-a5e0-2b2e8baee06c.jpg',
  jug: 'https://cdn.poehali.dev/projects/a8e881af-e7a4-494c-9f50-832947d0e419/files/7e32b231-5228-4ac8-a92f-7db3773d7a64.jpg',
  decor: 'https://cdn.poehali.dev/projects/a8e881af-e7a4-494c-9f50-832947d0e419/files/03ca7b82-83d3-4eed-8e86-c6438e4ebc0f.jpg',
};

export const CATEGORIES: Category[] = ['Посуда', 'Вазы', 'Декор'];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Пиала «Терра»', category: 'Посуда', price: 1290, description: 'Глубокая пиала с тёплой терракотовой глазурью. Идеальна для супов и салатов.', stock: 8, image: IMG.bowl },
  { id: 2, name: 'Кружка «Утро»', category: 'Посуда', price: 890, description: 'Кружка с фактурной поверхностью и карамельной глазурью, 300 мл.', stock: 15, image: IMG.mug },
  { id: 3, name: 'Тарелка «Песок»', category: 'Посуда', price: 1150, description: 'Обеденная тарелка ручной формовки, матовая песочная глазурь.', stock: 10, image: IMG.plate },
  { id: 4, name: 'Кувшин «Глина»', category: 'Посуда', price: 2450, description: 'Кувшин органичной формы, 1 л. Для воды, вина или полевых цветов.', stock: 5, image: IMG.jug },
  { id: 5, name: 'Чашка «Тепло»', category: 'Посуда', price: 790, description: 'Небольшая чашка для чая, 200 мл, тёплый бежевый оттенок.', stock: 20, image: IMG.mug },
  { id: 6, name: 'Салатник «Круг»', category: 'Посуда', price: 1690, description: 'Большой салатник для подачи, диаметр 24 см.', stock: 6, image: IMG.bowl },
  { id: 7, name: 'Пиала «Мини»', category: 'Посуда', price: 690, description: 'Маленькая пиала для соусов и специй, набор акцентов на столе.', stock: 18, image: IMG.bowl },
  { id: 8, name: 'Тарелка «Десерт»', category: 'Посуда', price: 950, description: 'Десертная тарелка с кремовым узором, диаметр 18 см.', stock: 12, image: IMG.plate },
  { id: 9, name: 'Кружка «Крафт»', category: 'Посуда', price: 990, description: 'Объёмная кружка 400 мл с рустикальной фактурой.', stock: 9, image: IMG.mug },

  { id: 10, name: 'Ваза «Форма»', category: 'Вазы', price: 3200, description: 'Высокая ваза органичной формы, матовая глазурь цвета глины.', stock: 4, image: IMG.vase },
  { id: 11, name: 'Ваза «Волна»', category: 'Вазы', price: 2890, description: 'Ваза с плавным изгибом для сухоцветов и одиночных стеблей.', stock: 6, image: IMG.vase },
  { id: 12, name: 'Ваза «Земля»', category: 'Вазы', price: 3500, description: 'Крупная напольная ваза, тёплый терракотовый тон.', stock: 3, image: IMG.vase },
  { id: 13, name: 'Ваза «Бутон»', category: 'Вазы', price: 1990, description: 'Компактная ваза-бутоньерка для одного цветка.', stock: 11, image: IMG.vase },
  { id: 14, name: 'Ваза «Песок»', category: 'Вазы', price: 2650, description: 'Ваза средней высоты, матовая песочная поверхность.', stock: 7, image: IMG.vase },
  { id: 15, name: 'Ваза «Овал»', category: 'Вазы', price: 2400, description: 'Ваза округлой формы для пышных букетов.', stock: 5, image: IMG.vase },
  { id: 16, name: 'Ваза «Тонкая»', category: 'Вазы', price: 1790, description: 'Узкая высокая ваза для веток и трав.', stock: 8, image: IMG.vase },
  { id: 17, name: 'Ваза «Пара»', category: 'Вазы', price: 4200, description: 'Комплект из двух ваз-компаньонов разной высоты.', stock: 2, image: IMG.vase },

  { id: 18, name: 'Подсвечник «Огонь»', category: 'Декор', price: 1290, description: 'Скульптурный подсвечник тёплого терракотового тона.', stock: 14, image: IMG.decor },
  { id: 19, name: 'Подсвечник «Пара»', category: 'Декор', price: 2290, description: 'Набор из двух подсвечников разной высоты.', stock: 6, image: IMG.decor },
  { id: 20, name: 'Блюдо «Ключ»', category: 'Декор', price: 990, description: 'Небольшое блюдо для мелочей и украшений.', stock: 16, image: IMG.plate },
  { id: 21, name: 'Фигура «Камень»', category: 'Декор', price: 1490, description: 'Декоративный объект-камень для полки и стола.', stock: 10, image: IMG.decor },
  { id: 22, name: 'Аромалампа «Дым»', category: 'Декор', price: 1890, description: 'Керамическая аромалампа для эфирных масел.', stock: 7, image: IMG.decor },
  { id: 23, name: 'Подставка «Круг»', category: 'Декор', price: 850, description: 'Подставка под горячее из плотной керамики.', stock: 22, image: IMG.plate },
  { id: 24, name: 'Кашпо «Росток»', category: 'Декор', price: 1690, description: 'Кашпо для небольших растений, дренажное отверстие.', stock: 9, image: IMG.vase },
  { id: 25, name: 'Панно «Рельеф»', category: 'Декор', price: 2790, description: 'Настенное керамическое панно ручной лепки.', stock: 4, image: IMG.decor },
];
