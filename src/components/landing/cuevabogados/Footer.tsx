export default function Footer() {
  return (
    <footer className="bg-navy-600 text-navy-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold-500 rounded flex items-center justify-center">
                <span className="text-navy-900 font-serif font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-white">CuevAbogados</span>
                <span className="text-xs text-navy-300 tracking-wider">DESDE 1946</span>
              </div>
            </div>
            <p className="text-navy-300 max-w-sm mb-4">
              Despacho de abogados especializado en derecho laboral patronal.
              80 anos protegiendo empresas en Monterrey y Nuevo Leon.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicios" className="hover:text-gold-400">Defensa ante demandas</a></li>
              <li><a href="#servicios" className="hover:text-gold-400">Litigio laboral</a></li>
              <li><a href="#servicios" className="hover:text-gold-400">Consultoria preventiva</a></li>
              <li><a href="#servicios" className="hover:text-gold-400">Terminaciones laborales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold-400">Aviso de privacidad</a></li>
              <li><a href="#" className="hover:text-gold-400">Terminos de servicio</a></li>
              <li><a href="#contacto" className="hover:text-gold-400">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-navy-500 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-400">
            &copy; {new Date().getFullYear()} CuevAbogados. Todos los derechos reservados.
          </p>
          <p className="text-sm text-navy-400">
            Monterrey, Nuevo Leon, Mexico
          </p>
        </div>
      </div>
    </footer>
  );
}
