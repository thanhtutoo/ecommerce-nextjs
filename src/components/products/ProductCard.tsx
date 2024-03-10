import Image from "next/image";
import { Product } from "@/components/products/types";
import Link from "next/link";
import StarRating from "../ui/StarRating";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl flex flex-col justify-between p-4 "
      data-cy-product-id={product.id}
      key={product.id}
    >
      <Link href={`/product-detail/${product.id}`}>
        <Image
          src={product.images[0]}
          alt={product.title}
          width={100}
          height={100}
          className="object-contain w-full h-40"
        />

        <div className="flex-1 flex flex-col justify-between">
          <h2 className="text-lg font-semibold">{product.title}</h2>

          <p className="text-gray-600 flex-1">{product.category}</p>
          <div className="text-gray-600 flex-1">
            <StarRating rating={product.rating} />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-gray-800 font-semibold">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
