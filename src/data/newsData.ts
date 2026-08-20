export interface NewsData{
    title: string;
    sections: NewsSection[];
}

export interface NewsSection{
    header?: string;
    paragraphs: NewsParagraph[];
}

export interface NewsParagraph{
    text: string;
    link?: {
        text: string;
        url: string;
        
    };
}

const newsData : NewsData = {
    title: "What's new at Desert Beats",
    sections: [
        {
            header: "Fall 2026 Registration coming soon!",
            paragraphs: [
                {text: "Go to the Class Descriptions page and check out our offerings for the Fall 2026 season. Classes begin on September 14."}
            ],
        },
        {
            header: "Desert Beats Annual Show: Raq and Mingle",
            paragraphs: [
                {
                    text: "The Desert Beats Annual presentation is happening this Saturday, June 5 at The Refinery on Dufferin Avenue. Doors open at 7:00pm, show begins at 7:30pm. Get your tickets now at ",
                    link: 
                        {
                            text: "ontheboards.ca.",
                            url: "https://ontheboards.ca/events/",
                        },                    
                },
                {
                    text: "Featuring special guests DancEgypt and Scott's Flyers!",
                },
                
            ]
        },
        // {
        //     header: "Monday's Beginner class postponed!",
        //     paragraphs: [
        //         "Please note that this Monday, October 20th, the Beginner class with Jodie will be postponed due to an illness. Belly Dance with Melanie will continue as usual!"
        //     ],
        // },
        // {
        //     header: "No classes November 10 and 17",
        //     paragraphs: [
        //         "Don't forget! There are no classes scheduled for Mondays November 10 or 17. See the full list of class dates in the FAQ page.",
        //     ],
        // },
        // {
        //     header: "A gift for the holidays!",
        //     paragraphs: [
        //         "We're gifting you some bonus classes this week! Come dance with us one last time before the holidays this Monday December 15, and Thursday December 18.",
        //     ],
        // },
        {
            header: "Class times update",
            paragraphs: [
                {
                    text: 
                "Thursday classes will begin with Fat Chance Belly Dance® at 7:00, followed by Fusion at 7:45."
            }],
        },
        {
            header: "In the community",
            paragraphs: [
                {
                    text: "Desert Beats Belly Dancers had a great time performing at Battlefords Area Pride Week on Saturday, July 26 at Kinsmen Park in North Battleford. Thanks for having us!"
                }],
        },

        {
            header: "On the road again",
            paragraphs: [
                {
                    text: "Dancers Melanie, Quinn, and Chris will be jetting off to Kelowna in early September to participate in a fabulous four-day belly dancing and drumming intensive hosted by Bellydance with Victoria! They are thrilled and delighted for the opportunity to learn from the internationally renowned Aziza of Montreal/Portland and master drummer Issam Houshan. The three of them are excited to bring back fresh ideas and skills and energy to the fall session. \n\nIf you’re in the Kelowna area on September 6, come out and watch them perform in the amazing show, Night at the Oasis, featuring Aziza and Issam along with dancers from across western Canada! (We promise there will be pictures!)"
                }],
        },
        // {
        //     header: "",
        //     paragraphs: [
        //         ""
        //     ],
        // },

    ],
};

export default newsData;