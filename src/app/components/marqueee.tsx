import { Marquee } from "@/components/ui/marquee";

const reviews = [
    {
        username: " GET IN TOUCH -",

    },
    {
        username: " LET'S TALK -",
    },
    {
        username: " ASK A QUESTION -",
    },
    {
        username: " GET IN TOUCH -",
    },
    {
        username:  " LET'S TALK -",
    },
    {
        username: " ASK A QUESTION -",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);


const ReviewCard = ({

    username,

}: {

    username: string;

}) => {
    return (
        <figure
        >
            {/* <div className="border-b border-white"></div> */}
            <div className="flex flex-row items-center gap-4">

                <div className="flex flex-col items-center">
                    <p className="lg:text-[7vw] text-[8vw] uppercase font-bold p-0 m-0 text-[#fff] z-50">{username}</p>
                </div>
            </div>
            {/* <div className="border-b border-white"></div> */}

        </figure>
    );
};

export default function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden z-50" >
            <Marquee pauseOnHover className="[--duration:35s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>



        </div>
    );
}