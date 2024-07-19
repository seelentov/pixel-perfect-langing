import { Portfolio } from "@/components/Portfolio/Portfolio";

import { Call } from "@/components/Call/Call";
import { API_URL } from "@/core/config/api.config";
import { Metadata } from "next";
import { UIListing } from "@/components/UI/UIListing/UIListing";
import { getSpecials } from "@/core/api/getSpecials";
import { IUIListingItemProps } from "@/components/UI/UIListing/UIListingItem";

export const metadata: Metadata = {
    title: "Акции | Pixel Perfect",
    description: "Скидки для стартапов! Выгодные предложения под уникальные заказы.",
    openGraph: {
        title: 'Акции | Pixel Perfect',
        description: 'Скидки для стартапов! Выгодные предложения под уникальные заказы.',
        url: API_URL,
        siteName: 'Pixel Perfect',
        images: [
            {
                url: '/favicon.png',
                width: 500,
                height: 500,
            },
        ],
        locale: 'ru',
        type: 'website',
    },
};



export default async function Specials() {

    const specials: IUIListingItemProps[] = await getSpecials()

    return (
        <>
            <div className="content">
                <div className="container">
                    <h1>
                        Акции
                    </h1>
                </div>
                <div className="container">
                    <UIListing items={specials} />
                </div>
            </div>
            <Call padding='none' />
        </>
    );
}
