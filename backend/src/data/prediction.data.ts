export interface PredictionCategory {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export interface PredictionItem {
    text: string;
    imageUrl?: string;
}

export const predictionCategories: PredictionCategory[] = [
    { id: "love", icon: "❤️", title: "Future Love Life", description: "Including your future spouse's country" },
    { id: "networth", icon: "💰", title: "Future Net Worth", description: "How wealthy will you be?" },
    { id: "car", icon: "🚗", title: "Your Perfect Car", description: "The ride of your dreams" },
    { id: "country", icon: "🌍", title: "Country You'll Live In", description: "Where life takes you" },
    { id: "career", icon: "💼", title: "Future Career", description: "Your destined profession" },
    { id: "loveable", icon: "🧠", title: "What People Love About You", description: "Your best qualities" },
    { id: "tenyears", icon: "🎁", title: "Your Life in 10 Years", description: "A glimpse ahead" },
    { id: "superpower", icon: "⭐", title: "Personality Superpower", description: "Your hidden strength" },
    { id: "funny", icon: "😂", title: "A Funny Future Fact", description: "Something hilarious awaits" },
];

export const predictionData: Record<string, PredictionItem[]> = {
    love: [
        { text: "You'll meet your soulmate from Italy 🇮🇹 at a coffee shop. They'll spill espresso on you, and it'll be love at first sight! ☕❤️" },
        { text: "Your future partner is from Japan 🇯🇵! You'll bond over anime and ramen. Wedding venue? A cherry blossom garden! 🌸" },
        { text: "Love awaits in Brazil 🇧🇷! You'll meet dancing at a carnival. Your wedding will have the best music ever! 💃🎉" },
        { text: "Your soulmate is from France 🇫🇷! You'll meet at an art museum, arguing about which painting is better. Both of you will be right! 🎨" },
        { text: "Your future spouse is from South Korea 🇰🇷! You'll meet at a K-pop concert and bond over your favorite songs. Romance level: 100! 🎤💕" },
        { text: "Love finds you in Australia 🇦🇺! You'll meet while surfing, and your first date will be a beach bonfire under the stars! 🏄‍♀️🌟" },
        { text: "Your soulmate is from Spain 🇪🇸! You'll meet during a flamenco show. The passion? Absolutely electric! 💃🔥" },
        { text: "You'll fall for someone from Canada 🇨🇦! You'll meet while hiking in the mountains. Love at first trail! 🏔️❤️" },
    ],

    networth: [
        { text: "💎 $4.7 Million! You'll make it big with a viral app idea you'll have at 3am. Don't ignore those late-night thoughts!" },
        { text: "🏆 $12 Million! Your side hustle becomes a main hustle. Start that YouTube channel!" },
        { text: "💰 $850K! Comfortable and happy. You'll have a beach house and zero stress. Living the dream!" },
        { text: "🚀 $28 Million! Your investment in something weird (like rare sneakers) pays off BIG time!" },
        { text: "💵 $2.3 Million! Your creative talent gets discovered and brands pay you serious money for collaborations!" },
        { text: "🌟 $6.8 Million! You'll write a book that becomes a bestseller and gets adapted into a movie!" },
        { text: "💸 $15 Million! Your startup gets acquired by a tech giant. Early retirement? Yes please!" },
        { text: "🎯 $950K! Smart investments and a job you love. You'll travel the world twice a year!" },
    ],

    car: [
        {
            text: "🏎️ Mercedes-Benz G-Wagon - A luxury off-road vehicle with military roots, combining extreme terrain capability with premium materials and design. You'll feel unstoppable!",
            imageUrl: "https://res.cloudinary.com/dekeg4qpr/image/upload/v1768313500/car1_kaxz5s.png"
        },
        {
            text: "🚙 Porsche 911 - A timeless sports car balancing luxury and performance, known for precision handling and high-rev engines. Pure driving perfection!",
            imageUrl: "https://res.cloudinary.com/dekeg4qpr/image/upload/v1768323317/ChatGPT_Image_Jan_13_2026_10_39_54_PM_wcuutu.png"
        },
        {
            text: "🏎️ Nissan GT-R - A high-performance sports car combining advanced engineering with everyday usability and brutal speed. The ultimate thrill machine!",
            imageUrl: "https://res.cloudinary.com/dekeg4qpr/image/upload/v1768320030/ChatGPT_Image_Jan_13_2026_09_44_55_PM_cy3suh.png"
        },
        {
            text: "🚗 Range Rover - A luxury SUV designed to perform equally well in off-road conditions and elite urban environments. Elegance meets adventure!",
            imageUrl: "https://res.cloudinary.com/dekeg4qpr/image/upload/v1768320507/ChatGPT_Image_Jan_13_2026_09_53_05_PM_ytrvg1.png"
        },
        {
            text: "🏔️ Toyota Land Cruiser 300 - A legendary off-road SUV featuring advanced crawl control systems for effortless driving over extreme terrain. Built to last forever!",
            imageUrl: "https://res.cloudinary.com/dekeg4qpr/image/upload/v1768314006/ChatGPT_Image_Jan_13_2026_08_04_09_PM_jzkxsa.png"
        },
        {
            text: "🎩 Rolls-Royce Phantom - An ultra-luxury sedan engineered for silence and comfort, delivering a smooth ride with handcrafted interiors. Pure opulence!",
            imageUrl: "https://res.cloudinary.com/dekeg4qpr/image/upload/v1768313486/car3_zejtny.png"
        },
        {
            text: "⚡ BMW XM Label - A high-performance luxury SUV combining extreme power with bold design and an opulent cabin. Power meets prestige!",
            imageUrl: "https://res.cloudinary.com/dekeg4qpr/image/upload/v1768315529/ChatGPT_Image_Jan_13_2026_08_30_10_PM_absjnr.png"
        },
        {
            text: "🌟 Audi Q9 - Audi's large flagship SUV offering six individual captain seats and a private-jet-like passenger experience. Travel in ultimate luxury!",
            imageUrl: "https://res.cloudinary.com/dekeg4qpr/image/upload/v1768314259/ChatGPT_Image_Jan_13_2026_08_08_40_PM_diklzy.png"
        },
        {
            text: "🏁 1969 Ford Mustang - A legendary muscle car representing raw power, classic design, and the spirit of open-road driving. An absolute icon!",
            imageUrl: "https://res.cloudinary.com/dekeg4qpr/image/upload/v1768318381/ChatGPT_Image_Jan_13_2026_09_17_41_PM_krnhob.png"
        },
        {
            text: "🛡️ Land Rover Defender - A modernized off-road icon engineered for harsh terrain while maintaining a premium road presence. Adventure awaits!",
            imageUrl: "https://res.cloudinary.com/dekeg4qpr/image/upload/v1768316206/ChatGPT_Image_Jan_13_2026_08_41_17_PM_nbhagk.png"
        },
    ],

    country: [
        { text: "🗼 You'll live in Paris, France! Croissants for breakfast, the Eiffel Tower as your neighbor. Très magnifique!" },
        { text: "🌴 You'll end up in Bali, Indonesia! Beach life, sunsets, and ultimate relaxation await you." },
        { text: "🏔️ Switzerland is calling! You'll live surrounded by mountains, chocolate, and the freshest air ever." },
        { text: "🌆 Tokyo, Japan will be your home! Neon lights, amazing food, and the most exciting city life!" },
        { text: "🎭 You'll settle in London, UK! Historic charm, world-class theater, and afternoon tea become your daily life!" },
        { text: "🌉 San Francisco, USA is your destiny! Tech innovation, stunning views, and the best sourdough bread!" },
        { text: "🏖️ You'll call Dubai, UAE home! Luxury living, desert adventures, and year-round sunshine!" },
        { text: "🎨 Barcelona, Spain awaits you! Amazing architecture, beach vibes, and the best tapas in the world!" },
    ],

    career: [
        { text: "👨‍💻 Tech Entrepreneur! Your startup will change how people do something everyday. Get ready for TED talks!" },
        { text: "🎬 Famous Content Creator! Millions will watch your videos. Your humor becomes legendary!" },
        { text: "🩺 Renowned Doctor! You'll discover something important that helps millions of people worldwide." },
        { text: "🎨 Celebrated Artist! Your work will be in galleries, and people will pay big money for your creations!" },
        { text: "📚 Bestselling Author! Your books will inspire millions and get translated into 30+ languages!" },
        { text: "🎵 Music Producer! You'll create hits that top charts worldwide. Grammy awards incoming!" },
        { text: "🏗️ Innovative Architect! Your designs will redefine city skylines and win international awards!" },
        { text: "🌱 Environmental Scientist! You'll lead breakthrough research that helps save the planet!" },
    ],

    loveable: [
        { text: "✨ Your laugh! It's contagious and makes everyone around you happier instantly." },
        { text: "💪 Your determination! When you want something, nothing can stop you. It's inspiring!" },
        { text: "🤗 Your kindness! You make people feel seen and valued. That's a rare superpower!" },
        { text: "🧠 Your creativity! The way you think outside the box amazes everyone around you." },
        { text: "🎯 Your honesty! People trust you completely because you always keep it real!" },
        { text: "💫 Your energy! You light up every room you enter. People feel alive around you!" },
        { text: "🌟 Your loyalty! Once someone's your friend, you're there for life. Unshakeable!" },
        { text: "🎭 Your sense of humor! You can make anyone laugh, even in tough times!" },
    ],

    tenyears: [
        { text: "🏠 Living in a beautiful home with a garden, successful career, and planning your dream vacation!" },
        { text: "🌟 Running your own business, traveling 3 months a year, and inspiring others daily!" },
        { text: "👨‍👩‍👧‍👦 Happy family life, a job you love, and finally learning to make the perfect pasta!" },
        { text: "🎯 Achieved all your current goals, set bigger ones, and helping others reach theirs too!" },
        { text: "🌍 Living abroad in your dream country, fluent in a new language, and loving every moment!" },
        { text: "💼 Leading a team at a company you're passionate about, mentoring the next generation!" },
        { text: "🎨 Turned your hobby into a thriving side business while maintaining work-life balance!" },
        { text: "🏆 Financially free, pursuing passion projects, and making a real difference in your community!" },
    ],

    superpower: [
        { text: "🔮 Intuition! You can read people and situations like a book. Trust those gut feelings!" },
        { text: "🗣️ Communication! You can convince anyone of anything. Use this power for good!" },
        { text: "🎯 Focus! When you lock in, nothing can distract you. You get things DONE!" },
        { text: "❤️ Empathy! You understand people deeply. Everyone wants you as their friend!" },
        { text: "⚡ Adaptability! You thrive in any situation. Change doesn't scare you, it excites you!" },
        { text: "🧩 Problem-solving! You see solutions where others see obstacles. Nothing stumps you!" },
        { text: "🌈 Positivity! Your optimism is infectious. You turn bad days into good ones!" },
        { text: "🎓 Quick Learning! You pick up new skills faster than anyone. Jack of all trades, master of many!" },
    ],

    funny: [
        { text: "😂 You'll accidentally become famous for a meme you didn't even mean to create!" },
        { text: "🤣 Your future pet will have more Instagram followers than you. And you'll be totally fine with it!" },
        { text: "😆 You'll trip at an important event, but it'll lead to meeting someone who changes your life!" },
        { text: "🤭 You'll develop a weird habit of collecting something random, and it'll somehow make you money!" },
        { text: "😅 You'll accidentally send a text to your boss that was meant for your best friend. Plot twist: They'll love it!" },
        { text: "🎭 You'll become known for a catchphrase you said once as a joke. It'll follow you everywhere!" },
        { text: "🍕 You'll win a lifetime supply of your favorite food in a random contest you don't remember entering!" },
        { text: "🎪 You'll be mistaken for a celebrity and go along with it for a whole day. Best day ever!" },
    ],
};
