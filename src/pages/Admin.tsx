import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS as INITIAL, Product, CATEGORIES, Category } from '@/data/products';
import Icon from '@/components/ui/icon';

interface Order {
  id: number;
  date: string;
  name: string;
  phone: string;
  delivery: string;
  address: string;
  comment: string;
  items: { name: string; qty: number; price: number }[];
  total: number;
  status: string;
}

const STATUSES = ['Новый', 'В работе', 'Выполнен', 'Отменён'];

const Admin = () => {
  const [tab, setTab] = useState<'products' | 'orders'>('products');
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('ceramic_products');
    return saved ? JSON.parse(saved) : INITIAL;
  });
  const [orders, setOrders] = useState<Order[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem('ceramic_orders') || '[]').reverse());
  }, []);

  const saveProducts = (list: Product[]) => {
    setProducts(list);
    localStorage.setItem('ceramic_products', JSON.stringify(list));
  };

  const saveProduct = (p: Product) => {
    const exists = products.find((x) => x.id === p.id);
    saveProducts(exists ? products.map((x) => (x.id === p.id ? p : x)) : [...products, p]);
    setEditing(null);
  };

  const deleteProduct = (id: number) => saveProducts(products.filter((p) => p.id !== id));

  const updateStatus = (id: number, status: string) => {
    const updated = orders.map((o) => (o.id === id ? { ...o, status } : o));
    setOrders(updated);
    localStorage.setItem('ceramic_orders', JSON.stringify([...updated].reverse()));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-lg font-bold text-foreground">Панель управления</h1>
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Icon name="ArrowLeft" size={16} /> На сайт
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex gap-2 mb-8">
          <button onClick={() => setTab('products')} className={`px-5 py-2 rounded-full text-sm ${tab === 'products' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
            Товары ({products.length})
          </button>
          <button onClick={() => setTab('orders')} className={`px-5 py-2 rounded-full text-sm ${tab === 'orders' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
            Заказы ({orders.length})
          </button>
        </div>

        {tab === 'products' ? (
          <>
            <button onClick={() => setEditing({ id: Date.now(), name: '', category: 'Посуда', price: 0, description: '', stock: 0, image: '' })}
              className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:bg-primary/90">
              <Icon name="Plus" size={16} /> Добавить товар
            </button>
            <div className="grid gap-3">
              {products.map((p) => (
                <div key={p.id} className="flex items-center gap-4 bg-card rounded-xl p-3 ring-1 ring-border">
                  <img src={p.image} alt={p.name} className="w-14 h-14 rounded-lg object-cover bg-muted" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{p.name || 'Без названия'}</p>
                    <p className="text-sm text-muted-foreground">{p.category} · {p.price.toLocaleString('ru')} ₽ · остаток {p.stock}</p>
                  </div>
                  <button onClick={() => setEditing(p)} className="p-2 text-muted-foreground hover:text-foreground"><Icon name="Pencil" size={18} /></button>
                  <button onClick={() => deleteProduct(p.id)} className="p-2 text-muted-foreground hover:text-destructive"><Icon name="Trash2" size={18} /></button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="grid gap-4">
            {orders.length === 0 && <p className="text-muted-foreground">Заказов пока нет.</p>}
            {orders.map((o) => (
              <div key={o.id} className="bg-card rounded-xl p-5 ring-1 ring-border">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <p className="font-medium text-foreground">{o.name} · {o.phone}</p>
                    <p className="text-sm text-muted-foreground">{new Date(o.date).toLocaleString('ru')}</p>
                  </div>
                  <select value={o.status} onChange={(e) => updateStatus(o.id, e.target.value)}
                    className="px-3 py-1.5 rounded-lg border border-input bg-background text-sm">
                    {STATUSES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="mt-3 text-sm text-muted-foreground">
                  <p>{o.delivery}{o.address ? ` · ${o.address}` : ''}</p>
                  {o.comment && <p className="mt-1 italic">«{o.comment}»</p>}
                </div>
                <ul className="mt-3 text-sm space-y-1">
                  {o.items.map((it, idx) => (
                    <li key={idx} className="flex justify-between text-foreground">
                      <span>{it.name} × {it.qty}</span>
                      <span>{(it.price * it.qty).toLocaleString('ru')} ₽</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-right font-bold text-foreground">Итого: {o.total.toLocaleString('ru')} ₽</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {editing && (
        <div className="fixed inset-0 bg-foreground/40 z-50 flex items-center justify-center p-4" onClick={() => setEditing(null)}>
          <div className="bg-background rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4 text-foreground">Товар</h3>
            <div className="space-y-3">
              <input placeholder="Название" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-card" />
              <select value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value as Category })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-card">
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
              <input type="number" placeholder="Цена" value={editing.price || ''} onChange={(e) => setEditing({ ...editing, price: +e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-card" />
              <input type="number" placeholder="Остаток" value={editing.stock || ''} onChange={(e) => setEditing({ ...editing, stock: +e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-card" />
              <input placeholder="Ссылка на фото" value={editing.image} onChange={(e) => setEditing({ ...editing, image: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-card" />
              <textarea placeholder="Описание" rows={3} value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-card resize-none" />
            </div>
            <div className="flex gap-2 mt-5">
              <button onClick={() => setEditing(null)} className="flex-1 py-2.5 rounded-full border border-border">Отмена</button>
              <button onClick={() => saveProduct(editing)} className="flex-1 py-2.5 rounded-full bg-primary text-primary-foreground">Сохранить</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
