import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToBooking = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CMD</span>
            </div>
            <span className="text-lg font-medium text-foreground">Центр молекулярной диагностики</span>
          </div>
          <Button onClick={scrollToBooking} size="lg" className="bg-primary hover:bg-primary/90">
            Записаться на вакцинацию
          </Button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Вакцинация перед поездкой в тропические страны
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Защитите себя и близких от опасных инфекций: жёлтая лихорадка, лихорадка денге, малярия, брюшной тиф
            </p>
            <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
              Сеть клиник и лабораторий CMD предлагает комплексную программу вакцинации для путешественников. 
              Наши врачи-инфекционисты подберут индивидуальный график прививок в зависимости от маршрута поездки и состояния здоровья.
            </p>
            <Button onClick={scrollToBooking} size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 mb-6">
                Тропические страны манят экзотикой, пляжами и приключениями, но путешествие таит в себе серьёзные риски для здоровья. 
                Ежегодно тысячи туристов из России заболевают тропическими инфекциями, которые можно было предотвратить с помощью своевременной вакцинации.
              </p>
              
              <div className="bg-secondary/50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold mb-4">По данным Роспотребнадзора, в 2024 году зафиксировано более 500 случаев завоза тропических инфекций в Россию:</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center gap-2">
                    <Icon name="AlertCircle" className="text-accent" size={20} />
                    <span><strong>40%</strong> — жёлтая лихорадка</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="AlertCircle" className="text-accent" size={20} />
                    <span><strong>25%</strong> — лихорадка денге</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="AlertCircle" className="text-accent" size={20} />
                    <span><strong>20%</strong> — малярия</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="AlertCircle" className="text-accent" size={20} />
                    <span><strong>15%</strong> — другие инфекции</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-foreground/90">
                Вакцинация — это не просто рекомендация, а в некоторых случаях <strong>обязательное требование для въезда в страну</strong>. 
                Международный сертификат о вакцинации может потребоваться при пересечении границы.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Путь подготовки к поездке</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Консультация врача", time: "За 6-8 нед. до поездки", icon: "Stethoscope" },
              { step: 2, title: "Анализы", time: "За 4-6 нед. до поездки", icon: "FlaskConical" },
              { step: 3, title: "Вакцинация", time: "За 2-4 нед. до поездки", icon: "Syringe" },
              { step: 4, title: "Сертификат", time: "За 1 нед. до поездки", icon: "FileCheck" }
            ].map((item) => (
              <Card key={item.step} className="text-center hover:shadow-lg transition-all hover-scale">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="text-primary" size={32} />
                  </div>
                  <Badge className="mx-auto mb-2 bg-accent">Шаг {item.step}</Badge>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "📅",
                title: "За сколько времени вакцинироваться?",
                text: "Вакцинация должна начинаться за 6-8 недель до поездки. Некоторые вакцины требуют нескольких доз с интервалом."
              },
              {
                emoji: "🌍",
                title: "Какие страны требуют вакцинации?",
                text: "• Жёлтая лихорадка: Бразилия, Таиланд, Индия, Кения\n• Холера: Индия, Бангладеш, Нигерия\n• Менингит: Саудовская Аравия (для паломников)"
              },
              {
                emoji: "💉",
                title: "Какие вакцины нужны?",
                text: "• Жёлтая лихорадка\n• Лихорадка денге\n• Гепатит А и В\n• Брюшной тиф\n• Холера\n• Японский энцефалит\n• Бешенство"
              },
              {
                emoji: "⏱",
                title: "Сроки формирования иммунитета",
                text: "• Жёлтая лихорадка: 10 дней\n• Гепатит А: 2-4 недели\n• Гепатит В: 1 месяц\n• Брюшной тиф: 14 дней\n• Холера: 1 неделя"
              }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 whitespace-pre-line">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Врачи-инфекционисты и терапевты</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Дроздова Ольга Александровна",
                specialty: "Врач-инфекционист, к.м.н.",
                experience: "15 лет"
              },
              {
                name: "Петров Сергей Владимирович",
                specialty: "Врач-терапевт, вакцинолог",
                experience: "12 лет"
              },
              {
                name: "Соколова Анна Игоревна",
                specialty: "Врач-инфекционист",
                experience: "8 лет"
              }
            ].map((doctor, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all hover-scale">
                <CardHeader>
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" className="text-primary" size={64} />
                  </div>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-base">{doctor.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Стаж: {doctor.experience}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">Записаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Анализы и вакцины с ценами</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Комплексные программы</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    code: "300987",
                    name: "Программа \"Тропики Стандарт\"",
                    desc: "Базовый комплекс вакцин для поездки в Азию и Латинскую Америку",
                    duration: "1 день",
                    price: "8 500 ₽"
                  },
                  {
                    code: "300988",
                    name: "Программа \"Тропики Премиум\"",
                    desc: "Расширенный комплекс для длительных поездок (>1 месяца)",
                    duration: "1 день",
                    price: "14 200 ₽"
                  }
                ].map((item) => (
                  <Card key={item.code} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline">{item.code}</Badge>
                        <span className="text-2xl font-bold text-primary">{item.price}</span>
                      </div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">Срок: {item.duration}</p>
                      <Button className="w-full bg-accent hover:bg-accent/90">Заказать</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Отдельные вакцины</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { code: "150001", name: "Вакцина от жёлтой лихорадки (Стамарил)", duration: "1 день", price: "3 200 ₽" },
                  { code: "150002", name: "Вакцина от гепатита А (Хаврикс)", duration: "1 день", price: "2 800 ₽" },
                  { code: "150003", name: "Вакцина от гепатита В (Энджерикс)", duration: "1 день", price: "2 500 ₽" },
                  { code: "150004", name: "Вакцина от брюшного тифа (Виваксим)", duration: "1 день", price: "4 100 ₽" }
                ].map((item) => (
                  <Card key={item.code} className="hover:shadow-sm transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2">{item.code}</Badge>
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-xs text-muted-foreground mt-1">Срок: {item.duration}</p>
                        </div>
                        <span className="text-xl font-bold text-primary ml-4">{item.price}</span>
                      </div>
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90">Заказать</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Необходимые анализы перед вакцинацией</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { code: "300133", name: "Биохимическое обследование", duration: "1 к.д.", price: "1 800 ₽" },
                  { code: "300045", name: "Общий анализ крови", duration: "1 к.д.", price: "650 ₽" }
                ].map((item) => (
                  <Card key={item.code} className="hover:shadow-sm transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2">{item.code}</Badge>
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-xs text-muted-foreground mt-1">Срок: {item.duration}</p>
                        </div>
                        <span className="text-xl font-bold text-primary ml-4">{item.price}</span>
                      </div>
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90">Заказать</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Частые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Какие документы нужны для вакцинации?",
                  a: "Паспорт РФ. Для получения международного сертификата — загранпаспорт."
                },
                {
                  q: "Можно ли вакцинироваться, если у меня хронические заболевания?",
                  a: "Решение принимает врач после осмотра и анализов. В большинстве случаев вакцинация возможна."
                },
                {
                  q: "Больно ли делать прививки?",
                  a: "Большинство вакцин вводятся подкожно или внутримышечно. Болевые ощущения минимальны."
                },
                {
                  q: "Что делать, если я уже в пути и не успел вакцинироваться?",
                  a: "Обратитесь в ближайший филиал CMD. Некоторые вакцины можно сделать в экстренном порядке."
                },
                {
                  q: "Действует ли международный сертификат вечно?",
                  a: "Сертификат о вакцинации от жёлтой лихорадки действителен пожизненно. Остальные вакцины требуют ревакцинации."
                }
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы путешественников</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "Перед поездкой в Таиланд обратилась в CMD за консультацией. Врач подробно объяснил, какие прививки нужны, сделал всё быстро и безболезненно. Сертификат получила сразу. Очень благодарна!",
                author: "Марина К., путешественница"
              },
              {
                text: "Ездили с семьёй в Бразилию на 2 недели. Вакцинировались заранее, никто не заболел. Рекомендую всем, кто планирует поездки в тропики!",
                author: "Алексей и Анна С., семья путешественников"
              }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="User" className="text-primary" size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Icon key={star} name="Star" className="text-accent fill-accent" size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-4 italic">"{review.text}"</p>
                  <p className="text-sm font-medium text-foreground">— {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы защитить своё здоровье?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Запишитесь на консультацию к врачу-инфекционисту и получите индивидуальный план вакцинации для вашего путешествия
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToBooking} size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
              Записаться на вакцинацию
            </Button>
            <a href="tel:+74951234567" className="text-xl font-medium hover:underline flex items-center gap-2">
              <Icon name="Phone" size={24} />
              +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">CMD</span>
                </div>
                <span className="font-medium">CMD</span>
              </div>
              <p className="text-sm text-white/70">
                Центр молекулярной диагностики
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p>+7 (495) 123-45-67</p>
                <p>info@cmd-online.ru</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p>Пн-Пт: 8:00 - 20:00</p>
                <p>Сб-Вс: 9:00 - 18:00</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2025 CMD. Все права защищены. Имеются противопоказания. Необходима консультация специалиста.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
