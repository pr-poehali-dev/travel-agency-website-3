import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const tours = [
  {
    id: 1,
    title: 'Турция',
    price: '50 000',
    image: 'https://cdn.poehali.dev/projects/9b64c80c-dbb3-42f5-863c-88f726401ab7/files/453144fb-c7b7-41a8-92a4-65677244c2b5.jpg',
    description: 'Погрузитесь в атмосферу восточного гостеприимства и насладитесь лучшими курортами Средиземноморья',
    highlights: ['Премиум отели 5*', 'All Inclusive', 'Частный пляж']
  },
  {
    id: 2,
    title: 'Арабские Эмираты',
    price: '75 000',
    image: 'https://cdn.poehali.dev/projects/9b64c80c-dbb3-42f5-863c-88f726401ab7/files/29b387fc-7bb6-4ae7-8d93-d1a32fd1c5ce.jpg',
    description: 'Откройте для себя роскошь и великолепие футуристического Дубая и изысканного Абу-Даби',
    highlights: ['Отели премиум-класса', 'Экскурсии', 'Шопинг в молах']
  },
  {
    id: 3,
    title: 'Япония',
    price: '80 000',
    image: 'https://cdn.poehali.dev/projects/9b64c80c-dbb3-42f5-863c-88f726401ab7/files/00feb411-fd06-421a-8433-898be8fb3277.jpg',
    description: 'Познайте гармонию древних традиций и передовых технологий в стране восходящего солнца',
    highlights: ['Культурная программа', 'Традиционные рёканы', 'Гастрономия']
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-serif font-bold text-white">
              LuxTravel
            </Link>
            <div className="flex gap-8">
              <Link to="/" className="text-white font-medium">
                Главная
              </Link>
              <Link to="/contacts" className="text-white/80 hover:text-white transition-colors">
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.6), rgba(26, 31, 44, 0.6)), url('https://cdn.poehali.dev/projects/9b64c80c-dbb3-42f5-863c-88f726401ab7/files/453144fb-c7b7-41a8-92a4-65677244c2b5.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white px-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6">
            Путешествия<br />класса люкс
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Создаём незабываемые впечатления для взыскательных путешественников
          </p>
          <Button 
            asChild
            className="bg-gold text-primary hover:bg-gold/90 text-lg px-8 py-6 font-semibold"
          >
            <Link to="/contacts">
              Забронировать тур
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
              Наши направления
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Тщательно отобранные премиум-туры в самые изысканные уголки планеты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tours.map((tour, index) => (
              <Card 
                key={tour.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">
                      {tour.title}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-gold text-2xl font-semibold">от {tour.price}</span>
                      <span className="text-white/80">₽</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-card">
                  <p className="text-muted-foreground mb-4">
                    {tour.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {tour.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-gold" size={16} />
                        <span className="text-foreground/80">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    <Link to="/contacts">
                      Подробнее
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Готовы к незабываемому путешествию?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Свяжитесь с нами и мы поможем воплотить ваши мечты о путешествии в реальность
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gold text-primary hover:bg-gold/90 font-semibold"
              >
                <a href="tel:89308231163">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 (930) 823-11-63
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                className="bg-gold text-primary hover:bg-gold/90 font-semibold"
              >
                <a href="tel:89102376787">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 (910) 237-67-87
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-12 border-t border-gold/20">
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

export default Index;
