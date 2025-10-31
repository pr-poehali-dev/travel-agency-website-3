import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-serif font-bold text-white">
              LuxTravel
            </Link>
            <div className="flex gap-8">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">
                Главная
              </Link>
              <Link to="/contacts" className="text-white font-medium">
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4 animate-fade-in">
              Свяжитесь с нами
            </h1>
            <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
              Мы рады ответить на все ваши вопросы и помочь организовать идеальное путешествие
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Телефон</h3>
                    <a href="tel:89308231163" className="text-muted-foreground hover:text-gold transition-colors block">
                      +7 (930) 823-11-63
                    </a>
                    <a href="tel:89102376787" className="text-muted-foreground hover:text-gold transition-colors block">
                      +7 (910) 237-67-87
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Офис</h3>
                    <p className="text-muted-foreground">
                      Работаем ежедневно<br />
                      с 10:00 до 20:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">График работы</h3>
                    <p className="text-muted-foreground">
                      Пн-Вс: 10:00 - 20:00<br />
                      Без выходных
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 animate-scale-in">
                <h3 className="font-serif text-2xl font-semibold mb-6">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Сообщение" 
                      className="bg-background min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gold text-primary hover:bg-gold/90 font-medium">
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-primary text-white py-12 border-t border-gold/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60">© 2024 LuxTravel. Все права защищены</p>
            <div className="flex gap-6">
              <a href="tel:89308231163" className="text-white/60 hover:text-white transition-colors">
                +7 (930) 823-11-63
              </a>
              <a href="tel:89102376787" className="text-white/60 hover:text-white transition-colors">
                +7 (910) 237-67-87
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
