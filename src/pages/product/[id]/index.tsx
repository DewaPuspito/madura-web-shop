import React from 'react'
import Layout from '@/components/layout/layout.module'

import { useRouter } from 'next/router'
import { data } from '@/dummy/data'

export default function Detail() {

    const router = useRouter()
    const { id } = router.query

    const product = data.find((item) => item.id === id)

    return (
        <Layout>
            <div className='w-screen h-screen flex justify-center items-center p-5'>
                {
                    product !== undefined ?
                        <div className='h-1/2 flex bg-slate-200 rounded-md'>
                            <div className='w-1/2 p-5 rounded-md'>
                                <img
                                    src={product?.image !== "" ? product?.image : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg'}
                                    className='w-full h-full rounded-md' />
                            </div>
                            <div className='flex flex-col gap-y-5 justify-center '>
                                <h2 className='font-semibold text-lg text-slate-700'>{product?.title}</h2>
                                <p className='text-md text-slate-500'>{product?.description}</p>
                                <p className='font-semibold text-md text-red-500'>Rp {product?.price}</p>
                                <button className='p-3 bg-amber-600 text-white rounded-md font-semibold w-40 h-14'>Beli Sekarang!</button>
                            </div>
                        </div> : <h2 className='text-amber-700 font-semibold text-lg'>Maaf produk yang anda cari tidak ada bos!</h2>
                }
            </div>
        </Layout>
    )
}