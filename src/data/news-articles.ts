export type NewsArticle = {
    id?: string;
    title: string;
    body: string;
    source?: string;
    date?: string;
    url?: string;
    pullQuote?: string;
    image?: {
        src: string;
        alt: string;
    };
};

export const newsArticles: NewsArticle[] = [
    {
        id: '1',
        title: 'Latchis Gallery hosts Riverfront Connections art show and historical retrospective',
        source: 'The Commons',
        date: '2026-08-25',
        image: {
            src: '/images/foip_art_show_flyer.jpg',
            alt: 'Friends of Island Park Riverfront Connections Art Show flyer',
        },
        body: 'Friends of Island Park presented the Riverfront Connections: Art Show and Historical Retrospective at the Latchis Gallery, featuring works from artists inspired by the beauty of the river, bridge, and island at the south end of downtown Brattleboro.\n\nThe exhibition celebrated the history and current state of Island Park, showcasing historical documents and photos from the Brattleboro Historical Society, including a four-panel mural celebrating the history of the circus on the island.',
        pullQuote:
            'This location is a nexus of two towns and two states, connecting the Connecticut and West Rivers, Mt. Wantastiquet trails, the Whetstone Walkway, West River Trail, and the Fort Hill Trail.',
        url: 'https://www.commonsnews.org/issue/879/879riverfrnt_connect',
    },
];
