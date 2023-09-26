import Link from 'next/link'
import { AiFillStar } from "react-icons/ai";

export default function Widget(props: any) {
  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-5 py-4">
        {props.anime.map((item: any, index: any) => (
          <div key={index} className="">
            <Link href={`/anime/${item.mal_id}`}>
              <div
                className="bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.images.jpg.large_image_url})`,
                }}
              >
                <div className="relative h-72 w-full bg-[rgba(0,0,0,0.4)] transition duration-300 hover:bg-transparent">
                  <div className="absolute left-0 right-0 top-2 text-center">
                    <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                      <AiFillStar style={{ display: "inline" }} />
                      &nbsp;
                      {item.score}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.6)] p-3 text-center text-sm text-white">
                    {item.title}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
