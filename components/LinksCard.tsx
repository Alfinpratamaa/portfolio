import Image from "next/image";
interface LinksCardProps {
    name: string;
    icon?: any;
}

const LinksCard = ({ name, icon }: LinksCardProps) => {
    return (
        <div className=" w-[500px] z-[1] bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-800 hover:-translate-y-3 transition-all ease-in-out duration-300">
            <div className="flex justify-center h-[60px] z-[1] cursor-pointer items-center gap-3">
                <h3 className="text-white">{name}</h3>
                <Image src={icon} alt={name} width={30} height={30} />
            </div>

        </div>
    )
}

export default LinksCard