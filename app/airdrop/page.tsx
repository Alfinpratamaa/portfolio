import LinksCard from '@/components/LinksCard'
import { airdrop_list } from '@/libs/constant'
import Link from 'next/link'


const page = () => {
    return (
        <div className='bg-black h-screen flex z-[1] cursor-pointer justify-center  mx-auto max-w-2xl'>
            <div className='flex flex-col'>
                <h1 className='text-white text-center font-bold mt-[120px] text-4xl'>List Airdrop</h1>
                <div className="relative mt-[30px] px-10 md:px-20 z-[1] ">
                    {
                        airdrop_list.map((airdrop, index) => (
                            <Link key={index} href={airdrop.href} className=''>
                                <div className="px-20 mt-4  mx-20">
                                    <LinksCard name={airdrop.name} icon={airdrop.icon} />
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default page