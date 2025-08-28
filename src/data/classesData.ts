export interface ClassesData{
    id: string;
    title: string;
    subtitle: string;
    level: string;
    description: string;
    timePlace: string;
    image: string;
};

export const classesData : ClassesData[] = [
    {
        id: "beginner",        
        title: "Beginner Belly Dance",
        subtitle: "with Jodie",
        level: "This is an introductory level class.",
        description: "Whether you are starting your journey into belly dance or you want to refresh and practice your technique, Jodie will guide you in a warm and welcoming manner with an appropriate level of challenge and plenty of support.  At the end of the 10 weeks, you will have been introduced to a variety of belly dance movements via a fun choreography that will help you to remember moves and learn how they can be connected.",
        timePlace: "Classes are on Mondays from 6:45-7:45pm in the big studio.",
        image: "/classes_images/descr-beginner.jpg",
    },
    {
        id: "bellydance",
        title: "Belly Dance",
        subtitle: "with Melanie",
        level: "This is an intermediate to advanced level class. Previous experience with belly dance is required.",
        description: "Challenge yourself in this multi-level class focusing on choreographies and improvisation skills for various styles of belly dance. From Egyptian folkloric-inspired dances, to modern belly dance, and other dance influences from the Middle East, Turkey, and northern Africa, this class offers a choreography focused application of the technique, foundational skills, and muscle control you’ve already learned, with an increased degree of layering compared to the beginner class. This class will provide opportunities to expand your knowledge and skills with various styles of dance, develop your understanding of the musicality and cultural background of these styles, and increase your ability to perform solo and in a group.",
        timePlace: "Classes are on Mondays from 7:45-9:00pm in the big studio.",
        image: "/classes_images/descr-oriental.jpg",
    },
    {
        id: "fusion",
        title: "Fusion Belly Dance",
        subtitle: "with Quinn",
        level: "This is an intermediate to advanced level class. Previous experience with belly dance is required.",
        description: "In this class, you will experience a fusion of belly dance movements with other dance influences, stylized to the flavour of the music. Our fusion classes take a choreography focused approach. The music draws on a variety of genres, allowing for expression and creativity. The technique encompasses a range of tools, from sharp isolations to fluid movements. While embracing modern approaches to fusion, we also appreciate and respect the roots of belly dance and its connection to culture and self-expression. ",
        timePlace: "Classes are on Thursdays from 7:00-8:15pm in the green studio.",
        image: "/classes_images/descr-fusion.jpg",
    },
    {
        id: "fcbd",
        title: "Fat Chance Belly Dance®",
        subtitle: "with Quinn and Melanie",
        level: "This is a class for all levels. Quinn and Melanie will work together to tailor lessons for a variety of levels of experience. Some prior experience with belly dance is recommended, although not required.",
        description: "FCBD® is a unique form of belly dance, formally known as American Tribal Style®, where you will learn the specific technique and format of the dance, based on structured improvisation, cooperation, and communication. In this class we will be reviewing both fast and slow FCBD® styles and moves. We will practice technique, transitions, zilling (finger cymbals), formations, cues, and flow to culminate in the ability to work together to create a unique group dance every time.\n\nFrom the Fat Chance Belly Dance® home page: “FCBD®Style celebrates the strength and beauty of working together as a group. Formatted steps, cues, eye-contact, and the familiarity of musical phrasing allow dancers to stitch together an improvisational tapestry each time they dance.”",
        timePlace: "Classes are on Thursdays from 8:15-9:00pm in the green studio. ",
        image: "/classes_images/descr-fcbd02.jpg",
    },
];

