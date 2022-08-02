import { useRouter } from 'next/router'
import { useAppSelector } from '@/hooks/redux';
import { selectItems } from 'redux/reducers/goods/goodsSlice';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import Link from 'next/link';

const ProductCardPage = () => {
    const router = useRouter()
    const { title } = router.query
    const data = useAppSelector(selectItems);

    useEffect(() => { }, [data])
    return (
        <div>
            <div>{title}</div>
            <Link href={'/goods/'} key={nanoid()}>
                <ul
                    className="dark:hover:bg-gray-400 m-2 rounded-[15px] bg-white
						text-black text-center hover:bg-slate-400 dark:hover:text-white 
						cursor-pointer pt-5 pb-5 border-solid border-2 dark:border-none hover:border-green-800 border-slate-500"
                >
                    <li>{data.name}</li>
                    <li>{data.title}</li>
                    <li>{data.characteristic}</li>
                    <li>{data.numbers}</li>
                </ul></Link>

        </div>
    )
}
export default ProductCardPage