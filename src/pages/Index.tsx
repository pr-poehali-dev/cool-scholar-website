import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Портфолио</h1>
          <nav className="flex gap-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Обо мне</a>
            <a href="#achievements" className="text-muted-foreground hover:text-foreground transition-colors">Достижения</a>
          </nav>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/files/d1d99c13-4548-4a98-b1a2-aa115ac7d908.jpeg" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">Ученик 51 школы</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Увлекаюсь физикой, информатикой и профильной математикой
          </p>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center text-foreground">Обо мне</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Atom" size={32} className="text-primary" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-card-foreground">Физика</h4>
              <p className="text-muted-foreground leading-relaxed">
                Изучаю законы природы, квантовую механику и классическую физику. 
                Мне нравится понимать, как устроен мир на фундаментальном уровне.
              </p>
              <div className="mt-6">
                <img 
                  src="https://cdn.poehali.dev/projects/aeddfdbc-9f6f-47fe-b95d-359f87ef7756/files/9de2ec49-5d59-42d9-9ce5-6532746f39f2.jpg" 
                  alt="Физика" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Code" size={32} className="text-primary" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-card-foreground">Информатика</h4>
              <p className="text-muted-foreground leading-relaxed">
                Программирование и алгоритмы — моя страсть. Решаю сложные задачи 
                и создаю проекты, которые делают жизнь проще.
              </p>
              <div className="mt-6">
                <img 
                  src="https://cdn.poehali.dev/projects/aeddfdbc-9f6f-47fe-b95d-359f87ef7756/files/8ccb14ef-7e92-4ea8-a9cc-bc23826272b0.jpg" 
                  alt="Информатика" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Calculator" size={32} className="text-primary" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-card-foreground">Математика</h4>
              <p className="text-muted-foreground leading-relaxed">
                Профильная математика открывает безграничные возможности. 
                Люблю решать сложные задачи и находить элегантные решения.
              </p>
              <div className="mt-6">
                <img 
                  src="https://cdn.poehali.dev/projects/aeddfdbc-9f6f-47fe-b95d-359f87ef7756/files/81e2da89-ae5d-4167-8328-cb7b0fa46281.jpg" 
                  alt="Математика" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center text-foreground">Достижения</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="GraduationCap" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-card-foreground">Обучение в 51 школе</h4>
                <p className="text-muted-foreground">
                  Получаю качественное образование в одной из лучших школ города
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Trophy" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-card-foreground">Профильные предметы</h4>
                <p className="text-muted-foreground">
                  Углубленное изучение физики, информатики и математики
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Lightbulb" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-card-foreground">Постоянное развитие</h4>
                <p className="text-muted-foreground">
                  Работаю над проектами и расширяю свои знания каждый день
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Портфолио ученика 51 школы</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
