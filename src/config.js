let isLocalServer = false;
let isReact = false; // for different paths
const CONFIG = {
    REACT_ENV: isReact,
    HOST: (isLocalServer === true) ? 'http://deckline.local/' : 'http://deck-line.ru/',
    MEDIA: 'wp-content/uploads/',
    REST_API_URL: 'wp-json/wp/v2/',
    LOGIN: 'admin',
    PASSWORD: 'zqjy%x#GxsI@lGm$a9',
    // PASSWORD: '$P$BfVRHs3C3XLY2LxfZVIjhoqmk9teeT1',
    CATEGORIES: {
        regularPosts: {id: 2, slug: 'main-posts'},
        productPosts: {id: 3, slug: 'products'},
        fencingSystemPosts: {id: 5, slug: 'fencing-system-category'},
        terraceBoardPosts: {id: 4, slug: 'terrace-board-category'},
    },
    POSTS_PER_PAGE: 120,
    SITE_KEY: '6LepzkoUAAAAAJ0ucRa5Zl4EqFuFHuBaMR6Vjom-',
    SLUGS: {
        home: 'home',
        terraceBoard: 'terrace-board',
        fencingSystem: 'fencing-system',
        production: 'production',
        catalog: 'catalog',
        contacts: 'contacts'
    },
    DEFAULT_TITLE : 'Deckline'
};

export default CONFIG;