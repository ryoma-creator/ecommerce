import React, {createContext, useState, useEffect} from 'react';

// create context ➡️ For Sending Data from API to Home.jsx
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    // product state
    const [products, setProducts] = useState([]);
    // fetch products
    useEffect(()=> {
       const fetchProducts = async () => {
    //    async: 「非同期の」という意味。関数が非同期処理を含むことを示す。
           const response = await fetch('https://fakestoreapi.com/products');
    //    データを取りに行く（fetch）
       const data = await response.json();
    //    データが届くまで待つ（await）
    //    response は fetch の結果。「応答」や「返答」という意味。
    //    response.json() は、その応答をJavaScriptのオブジェクトに変換。
    //    届いたデータを使えるように変換（json()）
    //"Convert the response from the API into a JavaScript object."
       console.log(data);
       setProducts(data); // store the fetched data in state
       };
       fetchProducts(); // call the function to fetch products
    }, []);
    // 空の配列を渡すことで、マウント時に1回だけ実行!

  return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    // childrenの場所 について:
    //　main.jsx で ProductProvider で囲んでいる部分が children。
    // この場合、<StrictMode><App /></StrictMode> が children
  );
};

// https://fakestoreapi.com/docs ⇦  Fake Store API 

export default ProductProvider;