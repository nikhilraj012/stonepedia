import React, { useEffect, useState } from "react";
import EachDetail from "./EachDetail";
import ExtraDetails from "./ExtraDetails";
import { useParams } from "react-router-dom";
import { where, getDocs, query, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Create a query to find a document with the 'id' field matching the passed product ID
        const q = query(collection(db, "allProducts"), where("id", "==", parseInt(id)));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          // Get the first document that matches the product id
          const docSnap = querySnapshot.docs[0];
          setProduct(docSnap.data()); // Set the product data
          // console.log("Product data:", docSnap.data());
        } else {
          console.log("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  // If product is null, show a loading message or a fallback
  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="pt-20 xl:px-20 2xl:px-40">
      <div className="flex w-full gap-5 xl:gap-8 p-5 xl:pt-10">
        <div className="w-[50%]">
          <img
            src={product.imgUrl} 
            alt={product.title}
            className="h-[500px] w-full"
          />
        </div>
        <EachDetail product={product} />
      </div>
      <ExtraDetails product={product} />
    </div>
  );
};

export default ProductDetails;
