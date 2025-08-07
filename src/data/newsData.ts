
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
            header: "In the community...",
            paragraphs: [
                "Desert Beats Belly Dancers had a great time performing at Battlefords Area Pride Week on Saturday, July 26 at Kinsmen Park in North Battleford. Thanks for having us!"
            ],
        },
        {
            header: "Registration time is approaching...",
            paragraphs: [
                "Classes will begin again mid-September and registration will be open in mid-August. Stay tuned and follow our Facebook page for more information!"
            ],
        },
        {
            header: "On the road again…",
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