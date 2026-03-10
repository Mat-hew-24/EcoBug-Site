import ProductSection from "@/components/product/ProductSection";
import { pixelifySans } from "@/components/utils/utils";

export default function Product() {
    return (
        <main
            className={`min-h-screen flex flex-col gap-12 md:gap-15 items-center pt-12 md:pt-20 px-4 ${pixelifySans.className}`}
        >
            <h1
                className={`mt-20 md:mt-40 text-[#004400] text-4xl md:text-6xl text-center ${pixelifySans.className}`}
            >
                PRODUCTS
            </h1>

            <ProductSection />
        </main>
    );
}