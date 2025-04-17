export default function ServicesSlider() {
    const services1 = [
        {
            title: "Panchakarma",
            description: "Detoxification therapy.",
            img: "https://aradhanaayurveda.com/wp-content/uploads/2024/07/What-Role-Does-Panchakarma-Play-in-Ayurvedic-Weight-Management-in-Hyderabad.jpg",
        },
        {
            title: "Herbal Therapy",
            description: "Personalized herbal treatment.",
            img: "https://pharmaceutical-journal.com/wp-content/uploads/2021/01/herbal-medicines-ss-18-scaled.jpg",
        },
        {
            title: "Nadi Pariksha",
            description: "Pulse diagnosis.",
            img: "https://www.naditarangini.com/wp-content/uploads/2024/04/AYURVEDA-PULSE.webp",
        },
        {
            title: "Abhyanga",
            description: "Oil massage therapy.",
            img: "https://vlcc.com/_next/image?url=https%3A%2F%2Fd146hunxuupfmg.cloudfront.net%2Fblog_images%2Fjpeg-optimizer_AdobeStock_330894715.webp&w=3840&q=75",
        },
        {
            title: "Basti",
            description: "Medicated enema treatment.",
            img: "https://atmabodhwellness.com/wp-content/uploads/2023/12/bastikarma.jpg",
        },
        {
            title: "Shirodhara",
            description: "Oil pouring on forehead.",
            img: "https://www.starlingholistic.co.uk/uploads/1/3/8/4/138425273/starling-holistic-shirodhara-720_orig.jpg",
        },
        {
            title: "Weight Management",
            description: "Herbal weight control.",
            img: "https://divafashionhub.com/wp-content/uploads/2024/10/Weight-loss-to-weight-management-1.png",
        },
        {
            title: "Thyroid Regulation",
            description: "Natural hormone balance.",
            img: "https://thebiostation.com/wp-content/uploads/2017/08/the-biostation-understanding-hashimotos-disease-hypothyroidism-featured-1.jpg",
        },
        {
            title: "Diabetes Reversal",
            description: "Manage naturally.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdhdPDiBKhKMawKmQLMWle29_0F5uupPYuA&s",
        },
        {
            title: "Joint Pain Relief",
            description: "Arthritis & joint care.",
            img: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1849185.jpg",
        },
    ];
    const services2 = [
        {
            title: "Shirodhara",
            description: "Oil pouring on forehead.",
            img: "https://www.starlingholistic.co.uk/uploads/1/3/8/4/138425273/starling-holistic-shirodhara-720_orig.jpg",
        },
        {
            title: "Weight Management",
            description: "Herbal weight control.",
            img: "https://divafashionhub.com/wp-content/uploads/2024/10/Weight-loss-to-weight-management-1.png",
        },
        {
            title: "Thyroid Regulation",
            description: "Natural hormone balance.",
            img: "https://thebiostation.com/wp-content/uploads/2017/08/the-biostation-understanding-hashimotos-disease-hypothyroidism-featured-1.jpg",
        },
        {
            title: "Diabetes Reversal",
            description: "Manage naturally.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdhdPDiBKhKMawKmQLMWle29_0F5uupPYuA&s",
        },
        {
            title: "Joint Pain Relief",
            description: "Arthritis & joint care.",
            img: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1849185.jpg",
        },
        {
            title: "Panchakarma",
            description: "Detoxification therapy.",
            img: "https://aradhanaayurveda.com/wp-content/uploads/2024/07/What-Role-Does-Panchakarma-Play-in-Ayurvedic-Weight-Management-in-Hyderabad.jpg",
        },
        {
            title: "Herbal Therapy",
            description: "Personalized herbal treatment.",
            img: "https://pharmaceutical-journal.com/wp-content/uploads/2021/01/herbal-medicines-ss-18-scaled.jpg",
        },
        {
            title: "Nadi Pariksha",
            description: "Pulse diagnosis.",
            img: "https://www.naditarangini.com/wp-content/uploads/2024/04/AYURVEDA-PULSE.webp",
        },
        {
            title: "Abhyanga",
            description: "Oil massage therapy.",
            img: "https://vlcc.com/_next/image?url=https%3A%2F%2Fd146hunxuupfmg.cloudfront.net%2Fblog_images%2Fjpeg-optimizer_AdobeStock_330894715.webp&w=3840&q=75",
        },
        {
            title: "Basti",
            description: "Medicated enema treatment.",
            img: "https://atmabodhwellness.com/wp-content/uploads/2023/12/bastikarma.jpg",
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
