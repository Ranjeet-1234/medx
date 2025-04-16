export default function ServicesSlider() {
    const services1 = [
        {
            title: "Panchakarma",
            description: "Detoxification therapy.",
            img: "https://img.freepik.com/free-photo/spa-concept-with-pink-salt-towel_23-2148380113.jpg",
        },
        {
            title: "Herbal Therapy",
            description: "Personalized herbal treatment.",
            img: "https://img.freepik.com/free-photo/ayurvedic-herbal-ingredients-wooden-bowl_1150-28768.jpg",
        },
        {
            title: "Nadi Pariksha",
            description: "Pulse diagnosis.",
            img: "https://img.freepik.com/free-photo/nadi-pariksha-concept_1373-513.jpg",
        },
        {
            title: "Abhyanga",
            description: "Oil massage therapy.",
            img: "https://img.freepik.com/free-photo/woman-having-abhyanga-ayurvedic-oil-massage_23-2148891826.jpg",
        },
        {
            title: "Basti",
            description: "Medicated enema treatment.",
            img: "https://img.freepik.com/free-photo/basti-ayurvedic-therapy-concept_1150-28975.jpg",
        },
        
    ];
    const services2 = [
        {
            title: "Shirodhara",
            description: "Oil pouring on forehead.",
            img: "https://img.freepik.com/free-photo/shirodhara-therapy-ayurveda-treatment_1150-28985.jpg",
        },
        {
            title: "Weight Management",
            description: "Herbal weight control.",
            img: "https://img.freepik.com/free-photo/fitness-healthy-lifestyle-concept_23-2147776236.jpg",
        },
        {
            title: "Thyroid Regulation",
            description: "Natural hormone balance.",
            img: "https://img.freepik.com/free-photo/thyroid-treatment-ayurveda-concept_1150-28991.jpg",
        },
        {
            title: "Diabetes Reversal",
            description: "Manage naturally.",
            img: "https://img.freepik.com/free-photo/ayurvedic-treatment-diabetes-concept_1150-28995.jpg",
        },
        {
            title: "Joint Pain Relief",
            description: "Arthritis & joint care.",
            img: "https://img.freepik.com/free-photo/joint-pain-ayurvedic-treatment_1150-29001.jpg",
        },
    ]
    const duplicated1 = [...services1, ...services1]; // duplicate for infinite effect
    const duplicated2 = [...services2, ...services2]; // duplicate for infinite effect

    return (
        <section id="services" className="py-16 px-6 bg-white overflow-hidden relative">
            <h3 className="text-3xl font-semibold text-center text-emerald-700 mb-10">
                Our Services
            </h3>

            <div className="overflow-hidden w-full">
                <div className="flex animate-scrollX w-max">
                    {duplicated1.map((service, index) => (
                        <div
                            key={index}
                            className="w-[10.66%] min-w-[5.66%] px-2 pb-3 box-border"
                        >
                            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow h-full">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="h-40 w-full object-fill rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h4 className="text-lg font-semibold text-emerald-700">{service.title}</h4>
                                    <p className="text-sm text-gray-600">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex animate-scrollX w-max">
                    {duplicated2.map((service, index) => (
                        <div
                            key={index}
                            className="w-[10.66%] min-w-[5.66%] px-2 pb-3 box-border"
                        >
                            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow h-full">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="h-40 w-full object-fill rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h4 className="text-lg font-semibold text-emerald-700">{service.title}</h4>
                                    <p className="text-sm text-gray-600">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
