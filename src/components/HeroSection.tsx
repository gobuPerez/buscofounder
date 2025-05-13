import { CodeIcon, ExternalLink, LightbulbIcon, UsersRoundIcon } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

const primaryFeatures = [
    {
      name: 'Forma tu equipo.',
      description:
        '¿Tienes una idea pero todavía no tienes un equipo? Publica tu proyecto, describe el perfil que estás buscando y conecta con potenciales cofundadores.',
      href: '#',
      icon: UsersRoundIcon,
    },
    {
      name: 'Encuentra proyectos que te inspiren.',
      description:
        "Descubre nuevas ideas, crea conexiones con otros emprendedores y sé parte del inicio de algo grande.",
      href: '#',
      icon: LightbulbIcon,
    },
    {
      name: 'Sobre esta plataforma.',
      description:
        'Esta plataforma es gratuita, libre de publicidad y de código abierto.',
      href: '#',
      icon: CodeIcon,
    },
  ]
  
  export default function HeroSection() {
    return (
      <div className="mb-5">
          {/* Feature section */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-5 sm:mt-20">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-balance">
                La plataforma para <span className="text-blue-600">emprendedores</span> en busca de <span className="text-blue-400">equipo</span>
              </p>
              <p className="my-6 text-lg/8 text-black-300">
                Publica tu <span className="text-blue-600 font-bold">proyecto </span>y conecta con <span className="text-blue-400 font-bold">emprendedores</span> que compartan tu visión. Encuentra una <span className="text-blue-400 font-bold">idea</span> que te inspire y <span className="text-blue-600 font-bold">forma parte de ella.</span>
              </p>
              <Link className={buttonVariants({ variant: "default" })} href="/publicaciones">Acceder a la plataforma <span aria-hidden="true">→</span></Link>
            </div>
            <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {primaryFeatures.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="text-lg font-semibold text-black">
                      <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary/90">
                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base/7 text-black-300">
                    {
                      feature.icon ===  CodeIcon ?
                      <p className="flex-auto">
                        Esta plataforma es gratuita, libre de publicidad y 
                        <a href="https://github.com/gobuPerez/buscofounder" target="__blank" className="underline ml-1">
                          de código abierto <ExternalLink aria-hidden="true" className="size-5 text-black inline-block pb-1" />
                        </a>
                      </p>
                      :
                      <p className="flex-auto">{feature.description}</p>
                    }
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
  
      </div>
    )
  }
  