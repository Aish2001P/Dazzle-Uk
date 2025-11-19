
// import { cn } from "@/lib/utils"
// import { Marquee } from "@/components/ui/marquee"

// const reviews = [
//   {
    
//     username: "1",

//     img: "/image/1.png",
//   },
//   {
    
//     username: "2",

//     img: "/image/2.png",
//   },
//   {

//     username: "3",
  
//     img: "/image/3.png",
//   },
// ]

// const firstRow = reviews.slice(0, reviews.length / 2)
// const secondRow = reviews.slice(reviews.length / 2)
// const thirdRow = reviews.slice(reviews.length / 2)

// const ReviewCard = ({
//   img,
  
// }: {
//   img: string
  
// }) => {
//   return (
//     <figure
//       className={cn(
//         " h-full w-full cursor-pointer overflow-hidden  ",
//         // "relative h-full w-fit cursor-pointer overflow-hidden  border p-4 sm:w-36",    //outline area
//         // light styles
//         "border-gray-950/[.1] bg-black/[.01] hover:bg-black/[.05]",
//         // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         // dark styles
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
//       )}
//     >
//       <div className="flex flex-row items-center gap-1">
//         <img  width={1080} height={1080} alt="" src={img} />
       
//       </div>
//     </figure>
//   )
// }

// export function MarqueeDemoVertical() {
//   return (
//     <div className="relative flex lg:h-[800px] h-[300px] w-full flex-row items-center justify-center overflow-hidden ">
//       <Marquee pauseOnHover vertical className="[--duration:8s] opacity-90">
//         {firstRow.map((review) => (
//           <ReviewCard key={review.username} {...review} />
//         ))}
//       </Marquee>
//       <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
//         {secondRow.map((review) => (
//           <ReviewCard key={review.username} {...review} />
//         ))}
//       </Marquee>
//       <Marquee pauseOnHover vertical className="[--duration:20s]">
//         {thirdRow.map((review) => (
//           <ReviewCard key={review.username} {...review} />
//         ))}
//       </Marquee>
//   <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>

//   {/* Bottom black gradient */}
//   <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

//     </div>
//   )
// }

// export default  MarqueeDemoVertical;

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"


const reviews = [
  {
    
    username: "op",

    img: "/image/g1.png",
  },
  {
    
    username: "ad",

    img: "/image/g2.png",
  },
  {
    
    username: "d",

    img: "/image/g3.png",
  },
]
const reviews2 = [
  {
    username: "1",
    img: "/image/g1.png",
  },
  {
    username: "2",
    img: "/image/g1.png",
  },
   {
    username: "3",
    img: "/image/g4.png",
  },
  
]

const reviews3 = [
  {   
    username: "1",
    img: "/image/g5.png",
  },
  {  
    username: "2",
    img: "/image/g6.png",
  },
  {
    username: "3",
    img: "/image/g7.png",
  },
]

const firstRow = reviews.slice(reviews.length / 2)
const secondRow = reviews2.slice(reviews2.length / 2)
const thirdRow = reviews3.slice(reviews3.length / 2)
const ReviewCard = ({
  img,
  
}: {
  img: string
  
}) => {
  return (
    <figure
      className={cn(
        " h-full w-full cursor-pointer overflow-hidden  ",
        // "relative h-full w-fit cursor-pointer overflow-hidden  border p-4 sm:w-36",    //outline area
        // light styles
        "border-gray-950/[.1] bg-black/[.01] hover:bg-black/[.05]",
        // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-1">
        <img  width={1080} height={1080} alt="" src={img} />
       
      </div>
    </figure>
  )
}

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex lg:h-[800px] h-[300px] w-full flex-row items-center justify-center overflow-hidden ">
     
           <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review1) => (
          <ReviewCard key={review1.username} {...review1} />
        ))}
      </Marquee>


      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review2) => (
          <ReviewCard key={review2.username} {...review2} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {thirdRow.map((review3) => (
          <ReviewCard key={review3.username} {...review3} />
        ))}
      </Marquee>
  <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>

  {/* Bottom black gradient */}
  <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

    </div>
  )
}

export default  MarqueeDemoVertical;







