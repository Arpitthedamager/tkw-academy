    // components/Instructors.js
    import Image from 'next/image';

    const instructors = [
    {
        name: 'Esther Howard',
        title: 'Senpai',
        image: '/instructors/image.jpg',
        link: '/instructors/esther-howard',
    },
    {
        name: 'Jane Cooper',
        title: 'Kyokushinkai World Champion',
        image: '/instructors/image1.jpg',
        link: '/instructors/jane-cooper',
    },
    {
        name: 'Jenny Wilson',
        title: 'Karate Europe Champion',
        image: '/instructors/image2.jpg',
        link: '/instructors/jenny-wilson',
    },
    {
        name: 'Albert Flores',
        title: 'Karate Europe Coach',
        image: '/instructors/image3.jpg',
        link: '/instructors/albert-flores',
    },
    ];

    const Instructors = () => {
    return (
        <div className="bg-black_3">
        <div className="overflow-hidden py-24 max-w-[1200px] mx-auto px-4">
            <div className="text-center">
            <h5 className="text-lg uppercase text-tertiary">Team</h5>
            <h2 className="text-4xl font-bold">Our Instructors</h2>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {instructors.map((instructor) => (
                <div key={instructor.name} className="bg-transparent rounded-lg shadow-lg md:p-4 md:py-10 w-full max-w-xs flex-shrink-0 flex flex-col items-center md:items-start text-center">
                <a href={instructor.link} className="block mb-8">
                    <Image
                    src={instructor.image}
                    alt={`${instructor.name} Image`}
                    width={300}
                    height={250}  // Fixed height for uniformity
                    className="w-72 h-72  object-cover rounded-md"
                    />
                </a>
                <a href={instructor.link} className="text-2xl text-tertiary">
                    {instructor.name}
                </a>
                <div className="text-secondary_text mt-1 text-base">{instructor.title}</div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    };

    export default Instructors;
