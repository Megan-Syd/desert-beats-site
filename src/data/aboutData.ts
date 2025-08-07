export interface AboutData{
    title: string;
    subtitle: string;
    sections: AboutSection[];
}

export interface AboutSection{
    header: string;
    paragraphs: string[];
}

const aboutData : AboutData = {

    title: "movement - music - connection - cameraderie",
    subtitle: "These are the foundations that uphold Desert Beats. Read on to learn more about us.",

    sections: [
        {
            header: "Our Purpose",
            paragraphs: [
                "Desert Beats is a vibrant and engaging belly dance troupe in Saskatoon. Its members revel in the movements, music, and camaraderie of belly dance, and in the cultural and personal connections that are made. Learning about the heritage and history of this beautiful dance form and sharing it with others is the cornerstone of the group. New members will find classes to be welcoming, inclusive, and varied. As well, Desert Beats dancers thoroughly enjoy performing at a variety of local community and private events, as well as at their annual year-end show, typically held in June."
            ]

        },
        {
            header: "Our Story",
            paragraphs: [
                "Desert Beats Belly Dance was founded in 2012. It was the brainchild of Anastasia, and Cassie and Victoria were thrilled to join Anastasia in launching Desert Beats. After Cassie moved away a few years later, Anastasia and Victoria carried on teaching, welcoming Quinn and Jodie as teachers. Melanie joined the teachers' group in 2022. Thank you to Anastasia for founding Desert Beats and helping us all create so many wonderful dance experiences. We are grateful to all of our past teachers and are thrilled to be carrying on with these fulfilling experiences.",
            ]
        },
        {
            header: "Our Team",
            paragraphs: [
                "Desert Beats Belly Dance’s current instructors, Melanie, Quinn, and Jodie, are local dancers with a wealth of experience and a great passion for dance which they want to share with others. Through years of dancing, they have taken instruction from local and international instructors and have performed and taught in Saskatoon and surrounding areas. They truly love to dance and this can be seen when they gather to dance at class, at a hafla, or in a performance venue.",
            ],
        },
    ],
};

export default aboutData;