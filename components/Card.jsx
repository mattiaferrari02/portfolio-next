import Link from 'next/link';
import { VscGithub } from "react-icons/vsc";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const Card = ({data: {image, name, cardDesc, anno, github, pillColor, linkAzienda}}) => {
    return (
        <div className="card col-span-1 row-span-1 bg-gray-700 rounded-xl shadow-lg w-full sm:w-1/2 md:w-full place-self-center h-full" style={{maxWidth: "500px"}}>
            <div className="relative">
                <img className="object-cover " width={500} height={280} alt={`${name}_card_image`} src={image} />
                {github ? <Link  href={github} ><div className="pointer absolute bottom-2 right-2 hover:text-red-500 ">
                  <VscGithub size={28} />
                </div></Link>: null}
                {linkAzienda ? <Link href={linkAzienda}><div className="pointer absolute bottom-2 right-2 shadow-2xl hover:text-red-500">
                  <HiOutlineGlobeAlt size={28} />
                </div></Link> : null}
            </div>
            <div className="p-7 block text-lg">
                <div className="text-2xl mb-2">
                    {name}
                </div>
                <p>
                    {cardDesc}
                </p>
                <div className="mt-4">
                    <span className="rounded-lg text-gray-800 p-2" style={{backgroundColor: pillColor}}>{anno}</span>
                </div>
            </div>
        </div>
    );
}



export default Card;
