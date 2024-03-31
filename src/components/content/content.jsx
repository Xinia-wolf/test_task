import { Route, Routes } from "react-router-dom";
import List from "../goods/list";
import Cart from "../cart/cart";
import { headphones, wirelessHeadphones } from "../../utils/mocks";

const Content = () => {

    return (
        <Routes>
            <Route path="/" element={<List headphones={headphones} wirelessHeadphones={wirelessHeadphones}/>}></Route>
            <Route path="/cart" element={<Cart />}></Route>
        </Routes>
    )
} 

export default Content;