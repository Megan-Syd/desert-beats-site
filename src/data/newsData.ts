
{/*
What’s new?

Desert Beats Belly Dancers performed at Battlefords Area Pride Week on Saturday, July 26 at Kinsmen Park in North Battleford. 

Classes will begin again mid-September and registration will be open in early to mid-August. Stay tuned and follow our Facebook page for more information!

On the road again…
Dancers Melanie, Quinn, and Chris will be jetting off to Kelowna in early September to participate in a fabulous four-day belly dancing and drumming intensive hosted by Bellydance with Victoria! They are thrilled and delighted for the opportunity to learn from the internationally renowned Aziza of Montreal/Portland and master drummer Issam Houshan. The three of them are excited to bring back fresh ideas and skills and energy to the fall session. If you’re in the Kelowna area on September 6, come out and watch them perform in the amazing show, Night at the Oasis, featuring Aziza and Issam along with dancers from across western Canada! (We promise there will be pictures!) 
*/}

export interface NewsData{
    title: string;
    sections: NewsSection[];
}

export interface NewsSection{
    header?: string;
    paragraphs: string[];
}

const newsData : NewsData = {
    title: "What's new at Desert Beats",
    sections: [
        {
            header: "Desert Beats Annual Show: Raq and Mingle",
            paragraphs: [
                "The Desert Beats Annual presentation is happening this Saturday, June 5 at The Refinery on Dufferin Avenue. Doors open at 7:00pm, show begins at 7:30pm. Get your tickets now at ontheboards.ca. ",
                "Featuring special guests DancEgypt and Scott's Flyers!"
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
        {
            header: "A gift for the holidays!",
            paragraphs: [
                "We're gifting you some bonus classes this week! Come dance with us one last time before the holidays this Monday December 15, and Thursday December 18.",
            ],
        },
        {
            header: "Class times update",
            paragraphs: [
                "Thursday classes will begin with Fat Chance Belly Dance® at 7:00, followed by Fusion at 7:45."
            ],
        },
        {
            header: "In the community",
            paragraphs: [
                "Desert Beats Belly Dancers had a great time performing at Battlefords Area Pride Week on Saturday, July 26 at Kinsmen Park in North Battleford. Thanks for having us!"
            ],
        },

        {
            header: "On the road again",
            paragraphs: [
                "Dancers Melanie, Quinn, and Chris will be jetting off to Kelowna in early September to participate in a fabulous four-day belly dancing and drumming intensive hosted by Bellydance with Victoria! They are thrilled and delighted for the opportunity to learn from the internationally renowned Aziza of Montreal/Portland and master drummer Issam Houshan. The three of them are excited to bring back fresh ideas and skills and energy to the fall session. \n\nIf you’re in the Kelowna area on September 6, come out and watch them perform in the amazing show, Night at the Oasis, featuring Aziza and Issam along with dancers from across western Canada! (We promise there will be pictures!)"
            ],
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