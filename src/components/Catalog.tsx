import { useState } from 'react';
import { PRODUCTS, CATEGORIES, Category } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const [filter, setFilter] = useState<Category | 'Все'>('Все');
  const { add } = useCart();

  const filtered = filter === 'Все' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="catalog" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-2">Каталог</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Наши изделия</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {(['Все', ...CATEGORIES] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm transition-all ${
              filter === cat
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-secondary text-secondary-foreground hover:bg-accent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <div key={p.id} className="group bg-card rounded-2xl overflow-hidden ring-1 ring-border hover:shadow-xl transition-all">
            <div className="aspect-square overflow-hidden bg-muted">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-lg text-foreground">{p.name}</h3>
                <span className="text-primary font-bold whitespace-nowrap">{p.price.toLocaleString('ru')} ₽</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className={`text-xs ${p.stock > 0 ? 'text-muted-foreground' : 'text-destructive'}`}>
                  {p.stock > 0 ? `В наличии: ${p.stock}` : 'Нет в наличии'}
                </span>
                <button
                  disabled={p.stock === 0}
                  onClick={() => add(p)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Icon name="ShoppingBag" size={16} />
                  В корзину
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
