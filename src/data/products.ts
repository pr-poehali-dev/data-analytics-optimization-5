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

const BASE = 'https://cdn.poehali.dev/projects/a8e881af-e7a4-494c-9f50-832947d0e419/files';

const IMG = {
  bowlTerra: `${BASE}/96b5bbe4-5466-4053-9d7b-82e052db3055.jpg`,
  mugUtro: `${BASE}/f96a22c5-239a-4b72-82c6-7391efc2841b.jpg`,
  platePesok: `${BASE}/553b8434-ef7a-4a95-8b08-581890112b46.jpg`,
  jugGlina: `${BASE}/5006f972-d1d2-4ebc-8f42-c7dc0387883e.jpg`,
  cupTeplo: `${BASE}/a4d523bb-dce6-4173-8896-04aabce1e12a.jpg`,
  bowlKrug: `${BASE}/cf605f5f-8dcd-48b4-89f8-987e1073f075.jpg`,
  bowlMini: `${BASE}/48b56ecc-f4d4-472a-98d7-3ddd965e0ce3.jpg`,
  plateDessert: `${BASE}/466ec0fb-dd9e-4b3f-ba59-5ae2acee4c09.jpg`,
  mugKraft: `${BASE}/701e7479-f1b8-42cb-9bd5-91dcd13fc242.jpg`,

  vaseForma: `${BASE}/144a804c-a1df-4de8-aaa3-363726df48a6.jpg`,
  vaseVolna: `${BASE}/37d8ccd8-d3ad-41cd-b2bb-ad13b571fd56.jpg`,
  vaseZemlya: `${BASE}/fb8db9ee-6c00-449b-930d-f8529846d320.jpg`,
  vaseButon: `${BASE}/adf995a5-e7b2-4895-8da2-af492bc349e2.jpg`,
  vasePesok: `${BASE}/3b589eda-886f-4f8d-95fc-bdd8df89f4f0.jpg`,
  vaseOval: `${BASE}/9e0b0f7f-0503-4304-a9af-5e374d97a297.jpg`,
  vaseTonkaya: `${BASE}/d0bec2b5-b3b7-4785-bf4a-074ab82ae65f.jpg`,
  vasePara: `${BASE}/9ee69784-fb72-4d20-a761-7703cd0e8f7c.jpg`,

  candleOgon: `${BASE}/516384f2-8f3f-475b-9bd5-36e7cef94302.jpg`,
  candlePara: `${BASE}/a4b0401b-d7f8-4425-95f0-2869c3cd7c75.jpg`,
  dishKluch: `${BASE}/51361e2e-6a80-47b8-a8df-14d5fa12b5f7.jpg`,
  figureKamen: `${BASE}/f5eb3d34-7c18-4e50-9842-83998aee8ab2.jpg`,
  aromaDym: `${BASE}/d96635cc-93ea-42f4-afe9-8c500772fa00.jpg`,
  standKrug: `${BASE}/6411128c-a588-4a42-a827-ed9c9835a472.jpg`,
  planterRostok: `${BASE}/cdbb147a-b3d4-4f77-94a5-dc8bcbaf46ff.jpg`,
  panelRelief: `${BASE}/f0b73a72-1e82-47d0-a26e-b849e2a9b477.jpg`,
};

export const CATEGORIES: Category[] = ['Посуда', 'Вазы', 'Декор'];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Пиала «Терра»', category: 'Посуда', price: 1290, description: 'Глубокая пиала с тёплой терракотовой глазурью. Идеальна для супов и салатов.', stock: 8, image: IMG.bowlTerra },
  { id: 2, name: 'Кружка «Утро»', category: 'Посуда', price: 890, description: 'Кружка с фактурной поверхностью и карамельной глазурью, 300 мл.', stock: 15, image: IMG.mugUtro },
  { id: 3, name: 'Тарелка «Песок»', category: 'Посуда', price: 1150, description: 'Обеденная тарелка ручной формовки, матовая песочная глазурь.', stock: 10, image: IMG.platePesok },
  { id: 4, name: 'Кувшин «Глина»', category: 'Посуда', price: 2450, description: 'Кувшин органичной формы, 1 л. Для воды, вина или полевых цветов.', stock: 5, image: IMG.jugGlina },
  { id: 5, name: 'Чашка «Тепло»', category: 'Посуда', price: 790, description: 'Небольшая чашка для чая, 200 мл, тёплый бежевый оттенок.', stock: 20, image: IMG.cupTeplo },
  { id: 6, name: 'Салатник «Круг»', category: 'Посуда', price: 1690, description: 'Большой салатник для подачи, диаметр 24 см.', stock: 6, image: IMG.bowlKrug },
  { id: 7, name: 'Пиала «Мини»', category: 'Посуда', price: 690, description: 'Маленькая пиала для соусов и специй, набор акцентов на столе.', stock: 18, image: IMG.bowlMini },
  { id: 8, name: 'Тарелка «Десерт»', category: 'Посуда', price: 950, description: 'Десертная тарелка с кремовым узором, диаметр 18 см.', stock: 12, image: IMG.plateDessert },
  { id: 9, name: 'Кружка «Крафт»', category: 'Посуда', price: 990, description: 'Объёмная кружка 400 мл с рустикальной фактурой.', stock: 9, image: IMG.mugKraft },

  { id: 10, name: 'Ваза «Форма»', category: 'Вазы', price: 3200, description: 'Высокая ваза органичной формы, матовая глазурь цвета глины.', stock: 4, image: IMG.vaseForma },
  { id: 11, name: 'Ваза «Волна»', category: 'Вазы', price: 2890, description: 'Ваза с плавным изгибом для сухоцветов и одиночных стеблей.', stock: 6, image: IMG.vaseVolna },
  { id: 12, name: 'Ваза «Земля»', category: 'Вазы', price: 3500, description: 'Крупная напольная ваза, тёплый терракотовый тон.', stock: 3, image: IMG.vaseZemlya },
  { id: 13, name: 'Ваза «Бутон»', category: 'Вазы', price: 1990, description: 'Компактная ваза-бутоньерка для одного цветка.', stock: 11, image: IMG.vaseButon },
  { id: 14, name: 'Ваза «Песок»', category: 'Вазы', price: 2650, description: 'Ваза средней высоты, матовая песочная поверхность.', stock: 7, image: IMG.vasePesok },
  { id: 15, name: 'Ваза «Овал»', category: 'Вазы', price: 2400, description: 'Ваза округлой формы для пышных букетов.', stock: 5, image: IMG.vaseOval },
  { id: 16, name: 'Ваза «Тонкая»', category: 'Вазы', price: 1790, description: 'Узкая высокая ваза для веток и трав.', stock: 8, image: IMG.vaseTonkaya },
  { id: 17, name: 'Ваза «Пара»', category: 'Вазы', price: 4200, description: 'Комплект из двух ваз-компаньонов разной высоты.', stock: 2, image: IMG.vasePara },

  { id: 18, name: 'Подсвечник «Огонь»', category: 'Декор', price: 1290, description: 'Скульптурный подсвечник тёплого терракотового тона.', stock: 14, image: IMG.candleOgon },
  { id: 19, name: 'Подсвечник «Пара»', category: 'Декор', price: 2290, description: 'Набор из двух подсвечников разной высоты.', stock: 6, image: IMG.candlePara },
  { id: 20, name: 'Блюдо «Ключ»', category: 'Декор', price: 990, description: 'Небольшое блюдо для мелочей и украшений.', stock: 16, image: IMG.dishKluch },
  { id: 21, name: 'Фигура «Камень»', category: 'Декор', price: 1490, description: 'Декоративный объект-камень для полки и стола.', stock: 10, image: IMG.figureKamen },
  { id: 22, name: 'Аромалампа «Дым»', category: 'Декор', price: 1890, description: 'Керамическая аромалампа для эфирных масел.', stock: 7, image: IMG.aromaDym },
  { id: 23, name: 'Подставка «Круг»', category: 'Декор', price: 850, description: 'Подставка под горячее из плотной керамики.', stock: 22, image: IMG.standKrug },
  { id: 24, name: 'Кашпо «Росток»', category: 'Декор', price: 1690, description: 'Кашпо для небольших растений, дренажное отверстие.', stock: 9, image: IMG.planterRostok },
  { id: 25, name: 'Панно «Рельеф»', category: 'Декор', price: 2790, description: 'Настенное керамическое панно ручной лепки.', stock: 4, image: IMG.panelRelief },
];
