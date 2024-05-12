import { createSlice } from "@reduxjs/toolkit";
import { faBagShopping, faBarsProgress, faDollarSign, faHeadphones, faShieldHalved, faStore, faTruck } from '@fortawesome/free-solid-svg-icons' 

const initialState = [
    [{
        name:"seller1",
        icon:faStore,
        title:"10.5K",
        sub_title: "Sallers active our site",
    },
    {
        name:"seller2",
        icon:faDollarSign,
        title:"33K",
        sub_title: "Mopnthly Produduct Sale",
    },
    {
        name:"seller3",
        icon: faBagShopping,
        title:"45.5k",
        sub_title: "Customer active in our site",
    },
    {
        name:"seller4",
        icon:faBarsProgress,
        title:"25K",
        sub_title: "Anual gross sale in our site",
    }],
    [{
        name:"service1",
        icon:faTruck,
        title:"FREE AND FAST DELIVERY",
        sub_title:"Free delivery for all orders over $140"
    },{
        name:"service2",
        icon:faHeadphones,
        title:"24/7 CUSTOMER SERVICE",
        sub_title:"Friendly 24/7 customer support"
    },{
        name:"service3",
        icon:faShieldHalved,
        title:"FREE AND FAST DELIVERY",
        sub_title:"Free delivery for all orders over $140"
    }],
]

const DataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addOne: (state) => {
            state.value += 1;
        },
        minusOne: (state) => {
            state.value -= 1;
        },
    }
})

export  const { addOne, minusOne } = DataSlice.actions;
export  default DataSlice.reducer;