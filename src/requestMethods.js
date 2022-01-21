import { login, logout } from "./redux/userSlice"
import { useSelector } from "react-redux";
// import React from "react"
import axios from "axios"

export const TokenFetch = async (setUser, dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}users/user`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await response.json();
    console.log(data);
    // setUser({
    //   username: data.user,
    //   userId: data.userId,
    //   email: data.email
    // });
    dispatch(login(data))

  } catch (error) {
    console.log(error);
  }
};

export const loginFetch = async (user, dispatch, setLoggedIn, setErrorMessage) => {
  try {
    await axios.post(`${process.env.REACT_APP_REST_API}users/login`, {
      email: user.email,
      password: user.password
    })
      .then(
        (response) => {
          dispatch(login(response.data))
          if (response === "wrong credentials") {
            setErrorMessage("Incorrect email")
          } else if (response === "wrong credentials (password)") {
            setErrorMessage("Incorrect password")
          } else {
            setLoggedIn(true)
          }

          localStorage.setItem("myToken", response.token);
        }
        // console.log(response.data),

      )
     

      
    // const data = await res.json()





  } catch (error) {
    console.log(error);
  }
}

// export const loginFetch = async (user, dispatch, setLoggedIn, setErrorMessage) => {
//   try {
//     const response = await fetch(`${process.env.REACT_APP_REST_API}users/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         email: user.email,
//         password: user.password
//       }),
//     });

//     const data = await response.json();
//     dispatch(login(data))



//     if (data === "wrong credentials") {
//       setErrorMessage("Incorrect email")
//     } else if (data === "wrong credentials (password)") {
//       setErrorMessage("Incorrect password")
//     } else {
//       setLoggedIn(true)
//     }

//     localStorage.setItem("myToken", data.token);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const signUpFetch = async (user, dispatch, setLoggedIn, setErrorMessage) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        email: user.email,
        password: user.password,
      }),
    });
    const data = await response.json();

    dispatch(login(data))

    if (data === "user already exists with that email") {
      setErrorMessage("User already exists with that email")
    } else {
      setLoggedIn(true)
    }

    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
    setErrorMessage("User already exists with that email")
  }
};

export const getProductFetch = async (setFetchedProductInfo) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}products`, {
      method: "GET",
    })
    const data = await res.json()
    console.log(data);
    setFetchedProductInfo(data)



  } catch (error) {
    console.log(error);
  }
}

export const UploadProductFetch = async (productData) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}products/add`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        username: productData.username,
        userId: productData.userId,
        title: productData.title,
        desc: productData.desc,
        img: productData.img,
        categories: productData.categories,
        color: productData.color,
        price: productData.price

      })

    })
    const data = await res.json()
    console.log("product uploaded", data);

  }
  catch (error) {
    console.log(error);
  }
}


////product details fetch
export const GetProductDetailsFetch = async (id, setProduct) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}products/find/${id}`, {
      method: "GET",
    })

    const data = await res.json()
    console.log(data);
    setProduct(data)



  } catch (error) {
    console.log(error);
  }
}



export const GetBasketFetch = async (userInfo, setBasket) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}baskets/userbasket`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        userId: userInfo.userId,
      }),

    })
    const data = await res.json()
    console.log(data);
    setBasket(data)
  }
  catch (error) {
    console.log(error);
  }
}

export const AddToBasketFetch = async (user, item) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}baskets/addToBasket`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        userId: user.userId,
        img: item.img,
        productId: item._id,
        title: item.title,
        desc: item.desc,
        categories: item.categories,
        price: item.price
      })
    })
    const data = await res.json()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export const RemoveFromBasketFetch = async (user, item) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}baskets/removefrombasket`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        userId: user.userId,
        productId: item._id
      })
    })
    const data = await res.json()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}