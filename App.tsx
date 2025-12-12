import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Menu, X, Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { PRODUCTS, BLEND_SPECS, TESTIMONIALS, LOGO_URL } from './constants';
import SectionWrapper from './components/SectionWrapper';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBlendsModal, setShowBlendsModal] = useState(false);
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [email, setEmail] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`¡Gracias por unirte al ritual YVYNA! Te hemos enviado un correo a ${email}.`);
      setEmail('');
    }
  };

  const openBlendsModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBlendsModal(true);
    setIsMenuOpen(false);
  };

  const openCollectionModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCollectionModal(true);
    setIsMenuOpen(false);
  };

  const openAboutModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAboutModal(true);
    setIsMenuOpen(false);
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showBlendsModal || showCollectionModal || showAboutModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showBlendsModal, showCollectionModal, showAboutModal]);

  return (
    <div className="min-h-screen bg-yvyna-bg text-stone-900 font-sans selection:bg-stone-800 selection:text-white">
      
      {/* Navigation - Minimalist */}
      <nav className="fixed w-full top-0 z-50 bg-yvyna-bg/90 backdrop-blur-sm py-4 px-6 flex justify-between items-center border-b border-stone-900/5">
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
           <div className="absolute top-full left-0 w-full bg-[#bdb879] border-t border-stone-300 shadow-lg py-4 flex flex-col items-center gap-4 md:hidden h-screen">
             <button onClick={openCollectionModal} className="uppercase tracking-widest text-sm hover:text-stone-600 transition-colors py-2">Colección</button>
             <button onClick={openBlendsModal} className="uppercase tracking-widest text-sm hover:text-stone-600 transition-colors py-2">Blends</button>
             <button onClick={openAboutModal} className="uppercase tracking-widest text-sm hover:text-stone-600 transition-colors py-2">Nosotros</button>
           </div>
        )}

        <div className="hidden md:flex gap-8">
             <button onClick={openCollectionModal} className="uppercase tracking-widest text-xs font-medium hover:text-stone-600 transition-colors">Colección</button>
             <button onClick={openBlendsModal} className="uppercase tracking-widest text-xs font-medium hover:text-stone-600 transition-colors">Blends</button>
             <button onClick={openAboutModal} className="uppercase tracking-widest text-xs font-medium hover:text-stone-600 transition-colors">Nosotros</button>
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
          <button onClick={openCollectionModal} className="group inline-flex items-center gap-2 border-b border-stone-900 pb-1 text-sm tracking-widest uppercase hover:text-stone-600 hover:border-stone-600 transition-all">
            Ver Colección
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </header>

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

      {/* Blends Modal */}
      {showBlendsModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm" 
            onClick={() => setShowBlendsModal(false)}
          ></div>
          <div className="relative w-full max-w-5xl h-[90vh] bg-[#f0ece2] rounded-sm shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="p-6 md:p-8 flex justify-between items-start border-b border-stone-200 bg-[#e8e4da]">
              <div>
                <h3 className="font-serif text-3xl md:text-4xl italic text-stone-900">Ficha Técnica de Blends</h3>
                <p className="mt-2 text-stone-600 font-light text-sm tracking-wide uppercase">Ciencia y Naturaleza</p>
              </div>
              <button 
                onClick={() => setShowBlendsModal(false)}
                className="p-2 hover:bg-stone-300/50 rounded-full transition-colors text-stone-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto p-6 md:p-8 flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
                {BLEND_SPECS.map((blend, index) => (
                  <div key={index} className="flex flex-col gap-4 pb-8 border-b border-stone-300 last:border-0 lg:last:border-b-0 lg:border-b-0 lg:pb-0">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 border-b border-stone-200 pb-2 mb-2">
                       <h4 className="font-serif text-2xl font-medium text-stone-900">{blend.name}</h4>
                       <span className="text-xs font-bold uppercase tracking-widest text-[#8c8855]">{blend.subtitle}</span>
                    </div>
                    
                    <div className="space-y-4">
                       <p className="font-light text-stone-700 leading-relaxed italic">
                         "{blend.description}"
                       </p>
                       
                       <div className="bg-white/50 p-4 rounded-sm border border-stone-100">
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <span className="font-bold text-[10px] text-stone-500 uppercase tracking-widest block mb-1">Notas de Sabor</span>
                              <span className="font-medium text-sm text-stone-800">{blend.flavor}</span>
                            </div>
                            <div>
                              <span className="font-bold text-[10px] text-stone-500 uppercase tracking-widest block mb-1">Beneficio Principal</span>
                              <span className="font-medium text-sm text-stone-800">{blend.benefit}</span>
                            </div>
                         </div>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Collection Modal */}
      {showCollectionModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm" 
            onClick={() => setShowCollectionModal(false)}
          ></div>
          <div className="relative w-full max-w-5xl h-auto max-h-[90vh] bg-[#f0ece2] rounded-sm shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="p-6 md:p-8 flex justify-between items-start border-b border-stone-200 bg-[#e8e4da]">
              <div>
                <h3 className="font-serif text-3xl md:text-4xl italic text-stone-900">Nuestra Colección</h3>
                <p className="mt-2 text-stone-600 font-light text-sm tracking-wide uppercase">Productos Esenciales</p>
              </div>
              <button 
                onClick={() => setShowCollectionModal(false)}
                className="p-2 hover:bg-stone-300/50 rounded-full transition-colors text-stone-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto p-6 md:p-12 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {PRODUCTS.map((product, index) => (
                  <div key={index} className="group flex flex-col items-center text-center p-8 border border-stone-300 bg-white/40 hover:bg-white/80 transition-all duration-500 rounded-sm shadow-sm hover:shadow-md">
                    <div className="mb-6 p-4 bg-stone-900/5 rounded-full text-stone-800 group-hover:scale-110 transition-transform duration-500">
                      {product.icon}
                    </div>
                    <h4 className="font-serif text-xl md:text-2xl mb-4 text-stone-900">{product.title}</h4>
                    <p className="text-stone-700 leading-relaxed font-light text-sm">
                      {product.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Us & Contact Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm" 
            onClick={() => setShowAboutModal(false)}
          ></div>
          <div className="relative w-full max-w-4xl h-auto max-h-[90vh] bg-[#f0ece2] rounded-sm shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="p-6 md:p-8 flex justify-between items-start border-b border-stone-200 bg-[#e8e4da]">
              <div>
                <h3 className="font-serif text-3xl md:text-4xl italic text-stone-900">Sobre Nosotros</h3>
                <p className="mt-2 text-stone-600 font-light text-sm tracking-wide uppercase">Contacto & Filosofía</p>
              </div>
              <button 
                onClick={() => setShowAboutModal(false)}
                className="p-2 hover:bg-stone-300/50 rounded-full transition-colors text-stone-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto p-6 md:p-12 flex-1">
               <div className="flex flex-col md:flex-row gap-12">
                  {/* Left Column: Story */}
                  <div className="md:w-3/5 space-y-6">
                    <h4 className="font-serif text-2xl text-stone-800 border-b border-stone-300 pb-2">Nuestra Esencia</h4>
                    <p className="text-lg leading-loose font-light text-stone-800">
                      YVYNA nace con el propósito de reconectar el ritual del mate con la ciencia del bienestar moderno.
                    </p>
                    <p className="text-base leading-relaxed font-light text-stone-700">
                      Combinamos yerba mate con activos funcionales para cuerpo y mente: Cañamo, adaptógenos, nootrópicos y botánicos. Creemos en una energía limpia, sostenible y consciente. Buscamos transformar la rutina diaria en un momento de conexión personal y salud holística.
                    </p>
                  </div>

                  {/* Right Column: Contact Info */}
                  <div className="md:w-2/5 space-y-8">
                     <div className="bg-white/50 p-6 rounded-sm border border-stone-200 shadow-sm">
                        <h4 className="font-serif text-xl text-stone-800 mb-6">Información de Contacto</h4>
                        
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                             <MapPin className="w-5 h-5 text-[#8c8855] mt-1 shrink-0" />
                             <div>
                               <span className="block font-medium text-xs uppercase tracking-wider text-stone-500 mb-1">Dirección</span>
                               <span className="text-stone-800 font-light">Av. del Libertador 1000,<br/>Buenos Aires, Argentina</span>
                             </div>
                          </li>
                          
                          <li className="flex items-start gap-3">
                             <Phone className="w-5 h-5 text-[#8c8855] mt-1 shrink-0" />
                             <div>
                               <span className="block font-medium text-xs uppercase tracking-wider text-stone-500 mb-1">Teléfono</span>
                               <span className="text-stone-800 font-light">+54 9 11 5555-0000</span>
                             </div>
                          </li>

                          <li className="flex items-start gap-3">
                             <Mail className="w-5 h-5 text-[#8c8855] mt-1 shrink-0" />
                             <div>
                               <span className="block font-medium text-xs uppercase tracking-wider text-stone-500 mb-1">Email</span>
                               <span className="text-stone-800 font-light">contacto@yvyna.com</span>
                             </div>
                          </li>
                        </ul>

                        <div className="mt-8 pt-6 border-t border-stone-200 flex justify-center gap-6">
                           <a href="#" className="text-stone-600 hover:text-[#8c8855] transition-colors"><Instagram className="w-5 h-5" /></a>
                           <a href="#" className="text-stone-600 hover:text-[#8c8855] transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;