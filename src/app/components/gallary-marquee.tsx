/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"


const reviews = [
    {

        img: "/image/6.png",
    },
    {

        img: "/image/7.png",
    },

]

const reviews1 = [
    {

        img: "/image/8.png",
    },
    {

        img: "/image/9.png",
    },
]

const reviews2 = [
    {

        img: "/image/10.png",
    },
    {

        img: "/image/11.png",
    },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews1.slice(reviews.length / 2)
const thirdRow = reviews2.slice(reviews.length / 2)

const ReviewCard = ({
    img,

}: {
    img: string

}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-fit cursor-pointer overflow-hidden  border p-4 sm:w-36",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="col-lg-4">
                <img className="" width={1080} height={1080} alt="" src={img} />
            </div>
        </figure>
    )
}

export function MarqueeDemoVertical() {
    return (
        <div className="relative flex h-full w-full flex-row items-center justify-center overflow-hidden">
            <Marquee pauseOnHover vertical className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.img} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.img} {...review} />
                ))}
            </Marquee>
            <Marquee pauseOnHover vertical className="[--duration:20s]">
                {thirdRow.map((review) => (
                    <ReviewCard key={review.img} {...review} />
                ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
            <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
        </div>
    )
}

export default MarqueeDemoVertical;
