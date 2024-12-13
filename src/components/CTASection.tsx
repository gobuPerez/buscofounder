export default function CTASection() {
    return (
        <div className="bg-white rounded-md shadow-md">
            <div className="py-4 lg:px-8 my-5">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                        La plataforma para <span className="text-blue-600">emprendedores</span> en busca de <span className="text-blue-400">equipo</span>
                    </h2>
                    <p className="mx-auto mt-1 max-w-xl text-pretty text-gray-600 px-4">
                        Publica tu proyecto y conecta con emprendedores que compartan tu visión. Encuentra una idea que te inspire y forma parte de ella.
                    </p>
                    <div className="mt-2 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Publicar
                        </a>
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    </div>
            </div>
        </div>
    )
}
  