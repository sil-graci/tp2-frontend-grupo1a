import ContactSection from '../components/home/ContactSection';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <header className="page-header">
        <h1 className="page-title">Contacto</h1>
        <p>Escribinos, encontranos en el mapa o chateá con el equipo de DevStudio.</p>
      </header>
      <ContactSection />
    </div>
  );
}