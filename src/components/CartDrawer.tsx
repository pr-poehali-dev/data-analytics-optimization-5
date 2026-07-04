import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/icon';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

type Delivery = 'Самовывоз' | 'Доставка';

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { items, remove, setQty, total, clear } = useCart();
  const [checkout, setCheckout] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    delivery: 'Самовывоз' as Delivery,
    address: '',
    comment: '',
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const orders = JSON.parse(localStorage.getItem('ceramic_orders') || '[]');
    orders.push({
      id: Date.now(),
      date: new Date().toISOString(),
      ...form,
      items: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
      total,
      status: 'Новый',
    });
    localStorage.setItem('ceramic_orders', JSON.stringify(orders));
    setDone(true);
    clear();
  };

  const close = () => {
    onClose();
    setTimeout(() => {
      setCheckout(false);
      setDone(false);
      setForm({ name: '', phone: '', delivery: 'Самовывоз', address: '', comment: '' });
    }, 300);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-foreground/40 z-40 transition-opacity ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={close}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl transition-transform duration-300 flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">
            {done ? 'Заказ оформлен' : checkout ? 'Оформление заказа' : 'Корзина'}
          </h2>
          <button onClick={close} className="text-muted-foreground hover:text-foreground">
            <Icon name="X" size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {done ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={32} className="text-primary" />
              </div>
              <p className="text-lg font-medium text-foreground">Спасибо за заказ!</p>
              <p className="text-muted-foreground mt-2">Мы свяжемся с вами в ближайшее время для подтверждения.</p>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Icon name="ShoppingBag" size={40} className="mx-auto mb-3 opacity-40" />
              <p>Корзина пуста</p>
            </div>
          ) : checkout ? (
            <form id="checkout-form" onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-foreground">Имя *</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-foreground">Телефон *</label>
                <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-foreground">Способ получения</label>
                <div className="flex gap-2">
                  {(['Самовывоз', 'Доставка'] as Delivery[]).map((d) => (
                    <button key={d} type="button" onClick={() => setForm({ ...form, delivery: d })}
                      className={`flex-1 py-2.5 rounded-lg text-sm border transition-all ${form.delivery === d ? 'bg-primary text-primary-foreground border-primary' : 'border-input bg-card'}`}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              {form.delivery === 'Доставка' && (
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Адрес *</label>
                  <input required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium mb-1 text-foreground">Комментарий</label>
                <textarea rows={3} value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              {items.map((i) => (
                <div key={i.id} className="flex gap-3">
                  <img src={i.image} alt={i.name} className="w-20 h-20 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium text-foreground">{i.name}</p>
                      <button onClick={() => remove(i.id)} className="text-muted-foreground hover:text-destructive">
                        <Icon name="Trash2" size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-primary font-semibold mt-1">{i.price.toLocaleString('ru')} ₽</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => setQty(i.id, i.qty - 1)} className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-accent">
                        <Icon name="Minus" size={14} />
                      </button>
                      <span className="w-8 text-center text-sm">{i.qty}</span>
                      <button onClick={() => setQty(i.id, i.qty + 1)} className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-accent">
                        <Icon name="Plus" size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {!done && items.length > 0 && (
          <div className="p-6 border-t border-border space-y-3">
            <div className="flex justify-between text-lg font-bold text-foreground">
              <span>Итого</span>
              <span>{total.toLocaleString('ru')} ₽</span>
            </div>
            {checkout ? (
              <button form="checkout-form" type="submit"
                className="w-full py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all">
                Подтвердить заказ
              </button>
            ) : (
              <button onClick={() => setCheckout(true)}
                className="w-full py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all">
                Оформить заказ
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
