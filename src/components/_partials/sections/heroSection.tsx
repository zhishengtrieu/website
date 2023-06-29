export default function HeroSection() {
    return (<section className="flex items-center justify-center flex-col mt-96">
        <span className="text-sm px-4 py-2 border-gray-600 border rounded-full text-livid mb-16">Scroll</span>
        <h1 className="text-center text-9xl bg-clip-text text-transparent font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#E8C7FA]">
            Talent Hub Collaboration et créativité
        </h1>
        <p className="text-livid pt-5 text-center">Réunissant passionnés d'art, de développement, de musique et bien plus
            encore </p>
        <a href="https://discord.talent-hub.fr"
           target="_blank"
           className="mt-20 px-5 py-2 bg-white hover:bg-gray-200 rounded-xl font-semibold text-black transition-colors duration-200">
            Rejoindre l'aventure
        </a>
    </section>);
}