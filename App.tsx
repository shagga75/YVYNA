import React, { useState } from 'react';
import { ArrowRight, Mail, Menu, X, Instagram, Facebook } from 'lucide-react';
import { PRODUCTS, BLEND_SPECS, TESTIMONIALS, LOGO_URL } from './constants';
import SectionWrapper from './components/SectionWrapper';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`¡Gracias por unirte al ritual YVYNA! Te hemos enviado un correo a ${email}.`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-yvyna-bg text-stone-900 font-sans selection:bg-stone-800 selection:text-white">
      
      {/* Navigation - Minimalist */}
      <nav className="fixed w-full top-0 z-50 bg-yvyna-bg/90 backdrop-blur-sm py-4 px-6 flex justify-between items-center">
        <div className="w-8">
           {/* Placeholder for spacing */}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Menu">
             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
           <div className="absolute top-full left-0 w-full bg-[#bdb879] border-t border-stone-300 shadow-lg py-4 flex flex-col items-center gap-4 md:hidden">
             <a href="#coleccion" onClick={toggleMenu} className="uppercase tracking-widest text-sm hover:text-stone-600 transition-colors">Colección</a>
             <a href="#blends" onClick={toggleMenu} className="uppercase tracking-widest text-sm hover:text-stone-600 transition-colors">Blends</a>
             <a href="#nosotros" onClick={toggleMenu} className="uppercase tracking-widest text-sm hover:text-stone-600 transition-colors">Nosotros</a>
           </div>
        )}

        <div className="hidden md:flex gap-8">
             <a href="#coleccion" className="uppercase tracking-widest text-xs font-medium hover:text-stone-600 transition-colors">Colección</a>
             <a href="#blends" className="uppercase tracking-widest text-xs font-medium hover:text-stone-600 transition-colors">Blends</a>
             <a href="#nosotros" className="uppercase tracking-widest text-xs font-medium hover:text-stone-600 transition-colors">Nosotros</a>
        </div>
      </nav>

      {/* Header Section */}
      <header className="pt-32 pb-20 px-6 text-center flex flex-col items-center justify-center min-h-[85vh]">
        <div className="w-48 md:w-64 mb-8 fade-in-up">
          <img src={LOGO_URL} alt="YVYNA Logo" className="w-full h-auto object-contain drop-shadow-sm" />
        </div>
        
        <h2 className="text-xl md:text-2xl font-light italic text-stone-700 mb-8 fade-in-up delay-200 font-serif">
          Infusiones funcionales y blends herbales
        </h2>
        
        <div className="max-w-2xl mx-auto fade-in-up delay-300 relative">
          <span className="absolute -left-4 -top-4 text-4xl text-stone-400 font-serif opacity-30">"</span>
          <p className="text-lg md:text-xl leading-relaxed text-stone-800 font-light">
            Desde el corazón de Sudamérica, fusionamos la yerba mate ancestral con el poder del Cañamo y adaptógenos naturales. Energía limpia, ritual moderno.
          </p>
          <span className="absolute -right-4 -bottom-4 text-4xl text-stone-400 font-serif opacity-30">"</span>
        </div>
        
        <div className="mt-12 fade-in-up delay-300">
          <a href="#coleccion" className="group inline-flex items-center gap-2 border-b border-stone-900 pb-1 text-sm tracking-widest uppercase hover:text-stone-600 hover:border-stone-600 transition-all">
            Descubrir Ritual
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </header>

      {/* Collection Section */}
      <SectionWrapper id="coleccion" className="border-t border-stone-900/10">
        <div className="text-center mb-16">
          <h3 className="font-serif text-3xl md:text-4xl italic text-stone-800">Nuestra Colección</h3>
          <div className="h-px w-16 bg-stone-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PRODUCTS.map((product, index) => (
            <div key={index} className="group flex flex-col items-center text-center p-8 border border-stone-900/5 hover:border-stone-900/20 hover:bg-white/10 transition-all duration-500 rounded-sm">
              <div className="mb-6 p-4 bg-stone-900/5 rounded-full text-stone-800 group-hover:scale-110 transition-transform duration-500">
                {product.icon}
              </div>
              <h4 className="font-serif text-xl md:text-2xl mb-4 text-stone-900">{product.title}</h4>
              <p className="text-stone-700 leading-relaxed font-light text-sm md:text-base">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Blends Technical Sheet */}
      <SectionWrapper id="blends" className="bg-stone-900/5 rounded-sm my-10">
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl md:text-4xl italic text-stone-800">Ficha Técnica de Blends</h3>
          <p className="mt-4 text-stone-600 font-light text-sm tracking-wide uppercase">Ciencia y Naturaleza</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {BLEND_SPECS.map((blend, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 pb-6 border-b border-stone-900/10 last:border-0 lg:last:border-b">
               <div className="md:w-1/3">
                 <h4 className="font-serif text-xl font-medium text-stone-900">{blend.name}</h4>
                 <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mt-1 block">Funcionalidad</span>
               </div>
               <div className="md:w-2/3 space-y-2">
                 <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-medium text-sm text-stone-800">Ingredientes:</span>
                    <span className="font-light text-sm text-stone-700 italic">{blend.ingredients}</span>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-sm text-stone-800 block">Perfil:</span>
                      <span className="font-light text-sm text-stone-700">{blend.flavor}</span>
                    </div>
                    <div>
                      <span className="font-medium text-sm text-stone-800 block">Efecto:</span>
                      <span className="font-light text-sm text-stone-700">{blend.effect}</span>
                    </div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* About Us */}
      <SectionWrapper id="nosotros">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
             {/* Abstract image representation */}
             <div className="aspect-[4/5] w-full bg-stone-800 overflow-hidden relative rounded-sm">
                <img 
                  src="https://picsum.photos/600/800?grayscale&blur=2" 
                  alt="YVYNA Ritual" 
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-white/20 text-9xl italic">Y</span>
                </div>
             </div>
          </div>
          <div className="md:w-1/2 text-left space-y-6">
            <h3 className="font-serif text-4xl italic text-stone-900">Sobre Nosotros</h3>
            <div className="h-px w-12 bg-stone-900"></div>
            <p className="text-lg leading-loose font-light text-stone-800">
              YVYNA nace con el propósito de reconectar el ritual del mate con la ciencia del bienestar moderno.
            </p>
            <p className="text-base leading-relaxed font-light text-stone-700">
              Combinamos yerba mate con activos funcionales para cuerpo y mente: Cañamo, adaptógenos, nootrópicos y botánicos. Creemos en una energía limpia, sostenible y consciente.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-white/30 rounded-sm">
        <div className="text-center mb-16">
          <h3 className="font-serif text-3xl md:text-4xl italic text-stone-800">Testimonios</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="flex flex-col justify-between p-6 bg-yvyna-bg border border-white/50 shadow-sm rounded-sm">
              <p className="font-serif text-lg italic text-stone-800 mb-6">"{t.quote}"</p>
              <div className="mt-auto">
                <p className="font-bold text-sm text-stone-900 tracking-wide uppercase">{t.author}</p>
                <p className="text-xs text-stone-600 font-light">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Newsletter / Subscription */}
      <SectionWrapper id="contacto">
        <div className="max-w-3xl mx-auto text-center bg-stone-900 text-[#bdb879] p-12 md:p-16 rounded-sm shadow-2xl">
          <h3 className="font-serif text-3xl md:text-5xl mb-4 text-[#bdb879]">Unite al ritual YVYNA</h3>
          <p className="text-stone-300 font-light mb-8 max-w-lg mx-auto leading-relaxed">
            Suscribite para conocer nuestros lanzamientos, acceder a preventas y recibir contenido exclusivo sobre bienestar funcional.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-b border-stone-500 text-[#bdb879] placeholder-stone-500 py-3 px-2 focus:outline-none focus:border-[#bdb879] transition-colors font-light"
            />
            <button 
              type="submit" 
              className="mt-4 sm:mt-0 px-8 py-3 bg-[#bdb879] text-stone-900 font-medium tracking-widest uppercase text-xs hover:bg-white transition-colors"
            >
              Unirme
            </button>
          </form>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-900/10 text-center">
        <div className="flex justify-center gap-6 mb-8 text-stone-600">
           <a href="#" className="hover:text-stone-900 transition-colors"><Instagram className="w-5 h-5" /></a>
           <a href="#" className="hover:text-stone-900 transition-colors"><Facebook className="w-5 h-5" /></a>
           <a href="#" className="hover:text-stone-900 transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
        <p className="text-stone-500 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} YVYNA. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;