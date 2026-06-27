export interface Project {
  title: string
  img: string
  desc: string
  url: string
  badge?: string
  imgClass?: string
  target?: string
}

export const projects: Project[] = [
  {
    title: "Allec",
    img: "https://static.wixstatic.com/media/deac6a_2d8311aa5ec34fb387a9f6f9f0e471bb~mv2.png/v1/fill/w_277,h_141,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/deac6a_2d8311aa5ec34fb387a9f6f9f0e471bb~mv2.png",
    desc: "ALLEC is an Online Centralized Platform for B2B management in the supply chain and distribution industry. From client on-boarding features to order management, door analytics and warehouse/inventory management.",
    url: "https://www.allec.io",
    badge: "Laravel",
  },
  {
    title: "Abacrop",
    img: "/omaromp2AstroPage/abacrop_logo.png",
    desc: "Abacrop Agricultural Data Capture solution was created as a need to increase production and expansion capabilities.",
    url: "https://abacrop.com/",
    badge: "Django",
  },
  {
    title: "Urbital Podcast",
    img: "https://urbital.io/wp-content/uploads/2025/11/white-768x166-1.png",
    desc: "Urbital Podcast App",
    url: "https://podcast.urbital.io/",
    badge: "Vue",
  },
  {
    title: "SHPO",
    img: "https://shpoappa5da.blob.core.windows.net/login-templates/assets/gov-shpo-logo.png",
    desc: "Puerto Rico Historical Property Registry",
    url: "https://submissions.oech.pr.gov",
    badge: ".netcore",
  },
]

export const openSourceContributions: Project[] = [
  {
    title: "Document Number::parse in Helpers",
    img: "/omaromp2AstroPage/laravel-logo.svg",
    desc: "Documented the Number::parse() method in Laravel 13.x docs — usage examples for parsing locale-aware numeric strings and how it relates to parseInt() and parseFloat().",
    url: "https://github.com/laravel/docs/pull/11217",
    badge: "Laravel",
    imgClass: "max-w-full md:max-w-[6rem] rounded-lg",
  },
  {
    title: "Document whereNullSafeEquals methods",
    img: "/omaromp2AstroPage/laravel-logo.svg",
    desc: "Documented the whereNullSafeEquals and orWhereNullSafeEquals query builder methods in Laravel 13.x docs with null-safe equality comparison examples.",
    url: "https://github.com/laravel/docs/pull/11226",
    badge: "Laravel",
    imgClass: "max-w-full md:max-w-[6rem] rounded-lg",
  },
]
