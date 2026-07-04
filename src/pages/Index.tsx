import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArcGalleryHero from '@/components/ArcGalleryHero';
import Catalog from '@/components/Catalog';
import CartDrawer from '@/components/CartDrawer';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { count } = useCart();

  const images = PRODUCTS.slice(0, 11).map((p) => p.image);

  return (
    <main className="relative min-h-screen bg-background">
      <header className="fixed top-0 inset-x-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight text-foreground">Тёплая керамика</a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#catalog" className="hover:text-foreground transition-colors">Каталог</a>
            <a href="#about" className="hover:text-foreground transition-colors">О мастерской</a>
            <Link to="/admin" className="hover:text-foreground transition-colors">Админка</Link>
          </nav>
          <button onClick={() => setCartOpen(true)} className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
            <Icon name="ShoppingBag" size={18} />
            <span className="hidden sm:inline text-sm">Корзина</span>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-xs flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </header>

      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />

      <Catalog />

      <section id="about" className="bg-secondary/50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-2">О мастерской</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Сделано руками, с любовью</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Каждое изделие мы создаём вручную в небольшой мастерской — от лепки до обжига.
            Используем натуральную глину и безопасные глазури тёплых оттенков.
            Из-за ручной работы каждая вещь уникальна и может немного отличаться от фото — в этом её ценность.
          </p>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Тёплая керамика. Керамика ручной работы.
      </footer>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </main>
  );
};

export default Index;
