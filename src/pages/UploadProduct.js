import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Navbar from "../components/Navbar"
import { UploadProductFetch } from "../requestMethods"
import { Link } from "react-router-dom"
import UploadSuccess from "../components/UploadSuccess"
import {useSelector} from "react-redux"

const Container = styled.div`
position: relative;
overflow: hidden;
font-family: 'Open Sans', sans-serif;
height: 100vh;

`

const Line = styled.div`
width: 93vw;
margin: 0 auto;
border-bottom: 1px solid lightgray;`



// const Mask = styled.div`
// height: 100%;
// width: 100%;
// position: absolute;
// background: linear-gradient(rgba(225,225,0225, 0.5), rgba(274,135,014, 0.5));
// z-index: -2;`


const Heading = styled.h1`
margin: 0 10px;
/* font-style: italic; */
font-weight: 300;
letter-spacing: 2px;
text-align: center;
`

const Input = styled.input`
padding: 10px 20px;
border: 2px solid lightgray;
border-radius: 5px;
position: relative;`

const PlaceHolder = styled.p`
position: absolute;
top: 50%;
left: 27px;
transform: translate(-50%, -30%);
color: gray;`

const Button = styled.button`
margin: 10px 10px;
padding: 10px;
width: 10vw;
background-color: ${props => props.background};
border: ${props => props.border ? "none" : "2px solid black"};
color: ${props => props.color};
position: relative;
cursor: pointer;
height: ${props => props.size === "larger" && "50px"};
width: ${props => props.size === "larger" && "100%"};

`

const Image = styled.img``

const UploadComponent = styled.div`
width: 50vw;
margin: 0vh auto;
/* background: white; */
padding: 20px 20px;
width: 50vw;
/* box-shadow: -10px 40px 40px 5px rgba(0,0,0,0.1); */
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;`

const Form = styled.form`
border: 1px solid gray;`

const Label = styled.label`
margin: 10px 0;`

const ImageAndChoices = styled.div`
display: flex;`

const PreviewImage = styled.img`
width: 140%;
height:auto;
/* border: 1px solid black; */
background-color: lightgray;
object-fit: cover;`

const BoxChoices = styled.div`
display: flex;
/* flex-direction: column; */
flex-wrap: wrap;
margin: 10px 0;
justify-content: space-between;
`

const Test = styled.input.attrs({ type: "checkbox" })`
`
const BoxLabel = styled.div`
margin-left:5px;`

const Cont = styled.div`
position: relative;
display: flex;
flex-direction:column;
padding: 15px;
margin: 10px;
background: white;
/* border: 1px solid gray; */
/* box-shadow: -10px 10px 40px 5px rgba(0,0,0,0.1); */
z-index: 10;
position: relative;
width: 100%;
`

const PreviewCont = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 220px;
width: 220px;
margin:  0 0px;
border: 1px solid gray;
background-color: lightgray;
overflow: hidden;
`

const ImageCont = styled.div`
display: flex;
height: 220px;
width: 100%;
/* border: 1px solid gray; */
/* min-width: 240px; */
/* justify-content: space-between; */
`
const ImageInput = styled.input`
margin: 10px ;
background-color: white;
width: 20vw;
height: 100%;
position: absolute;
top: 0;
left: 0;
opacity: 0;`

const ImageButtonCont = styled.div`
display: flex;
width: 30%;
flex-direction: column;
margin: 0 20px;
`
const AddImage = styled.span`
position: relative;`

const CatCont = styled.div`
display: flex;
align-items: center;
margin: 5px;
letter-spacing: 1px;
width: 100px;`

const PleaseSignUp = styled.div`
margin: 50px auto;
text-align: center;
width: 50vw;
height: 50px;`
const Message = styled.div`
font-size: 25px;
font-weight: 300;
height: 50px;`

function UploadProduct({ setPrices, prices}) {
    const {userInfo} = useSelector(state=>state.user)
    const [imageSelected, setImageSelected] = useState("")
    const [productData, setProductData] = useState({
        username: "",
        userId: "",
        title: "",
        img: "",
        categories: [],
        desc: "",
        price: ""
    })
    const [previewImage, setPreviewImage] = useState("")
    const [uploaded, setUploaded] = useState(false)

       //////image uploading
    const uploadImage = async (image) => {
        const formData = new FormData()
        // setImageSelected(e.target.files[0])
        formData.append("file", image)
        formData.append("upload_preset", "zpce5fqz")
        // await axios.post(
        //     "https://api.cloudinary.com/v1_1/dthuzb3gx/image/upload", formData)
        //     .then((res) => {
        //         console.log(res.data)
        //         console.log(res.data.public_id)
        //         return res.data.secure_url
        //     })
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dthuzb3gx/image/upload", {
            method: "POST",
            body: formData,
        },
        )
        const data = await res.json()
        setProductData({
            ...productData,
            img: data.public_id
        })
        return data.secure_url

    }
    const imageHandler = async (e) => {
        const url = await uploadImage(e.target.files[0])
        setPreviewImage(url)
        console.log(e.target.files);
    }

    useEffect(() => {
        console.log(userInfo);
        setProductData({
            ...productData,
            userId: userInfo.userId,
            username: userInfo.username,
        })
    }, [])

    //////checkboxes for categories
    const categories = ["Bowl", "Plate", "Vase", "Sculpture", "Ceramic", "Mug", "Other"]
    const [checkedState, setCheckedState] = useState(
        new Array(categories.length).fill(false)
    )

    const handleChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
            //if the index of the state array matches the index from the cateogory array the state in the state array will change to the opposite of what it is currently
            //matching two indexes is a useful way to apply change to something when it is selected
        )
        setCheckedState(updatedCheckedState)
        // console.log(checkedState)
    }
 

    /////upload data to db
    const UploadData = (e) => {
        e.preventDefault()
        const testArray = []
        checkedState.filter((item, index) => {
            return item === true && testArray.push(categories[index])
        })
        console.log(testArray);
        setProductData({
            ...productData,
            username: userInfo.username,
            categories: testArray,
        })
        setUploaded(true)
            (console.log("uploaded") &
                console.log(productData))
        // console.log(user)
    }
    useEffect(() => {
        UploadProductFetch(productData)
    }, [productData.categories])

    useEffect(() => {
        setProductData({
            ...productData,
            userId: userInfo.userId,
            username: userInfo.username,
        })
    }, [userInfo])
    useEffect(() => {
        console.log(checkedState);
        console.log(productData);
        console.log(userInfo);


    }, [productData, checkedState])


    console.log(previewImage);
    // const publicId = "ml5dhmg3m9yh8ulljjhf"
    return (
        <Container>

            <Navbar prices={prices} setPrices={setPrices}/>
            <Line></Line>
            {!userInfo ? <PleaseSignUp>
                <Message>YOU NEED AN ACCOUNT TO BE ABLE TO SELL
                    <br />PLEASE SIGN UP TO CONTINUE</Message>
            </PleaseSignUp> :

                <UploadComponent >
                    <Heading>UPLOAD A PRODUCT</Heading>
                    <Cont>
                        <Label for="name">TITLE</Label>
                        <Input type="text" id="name" onChange={(e) => setProductData({ ...productData, title: e.target.value })} required></Input>
                    </Cont>

                    <ImageAndChoices>
                        <Cont >

                            <Label>IMAGE</Label>
                            <ImageCont>
                                {/* <PreviewImage src={`https://res.cloudinary.com/dthuzb3gx/image/upload/${previewImage}.jpg`}></PreviewImage> */}
                                <PreviewCont>
                                    <PreviewImage src={previewImage}></PreviewImage>
                                    </PreviewCont>
                                <ImageButtonCont>
                                    <Button
                                        // onClick={uploadImage} 
                                        background="white" color="black">
                                        <AddImage>ADD IMAGE</AddImage><ImageInput type="file" onChange={(e) => imageHandler(e)} required></ImageInput>
                                    </Button>
                                </ImageButtonCont>
                            </ImageCont>
                            {/* <Image src={`https://res.cloudinary.com/dthuzb3gx/image/upload/${publicId}.jpg`}></Image> */}
                            {/* <Image src="http://res.cloudinary.com/dthuzb3gx/image/upload/v1641546000/srzyakrwrpcwrt0ylwfu.jpg"></Image> */}

                        </Cont>
                        <Cont>
                            <Label>CATEGORIES</Label>
                            <BoxChoices>
                                {categories.map((cat, index) => {
                                    return <CatCont key={index}>
                                        <Test id={cat} name={cat} value={cat} type="checkbox"
                                            checked={checkedState[index]}
                                            onChange={() => handleChange(index)}
                                        />
                                        <BoxLabel>{cat}</BoxLabel>
                                    </CatCont>
                                })}
                            </BoxChoices>
                        </Cont>
                    </ImageAndChoices>
                    <Cont>
                        <Label for="desc">DESCRIPTION</Label>
                        <Input type="text" id="desc" onChange={(e) => setProductData({ ...productData, desc: e.target.value })} required></Input>
                    </Cont>
                    <Cont>
                        <Label for="desc">PRICE</Label>
                        <Input type="text" id="price" onChange={(e) => setProductData({ ...productData, price: e.target.value })} required></Input><PlaceHolder>£</PlaceHolder>
                    </Cont>

                    <Button onClick={UploadData} background="black" color="white" size="larger" border="none">POST AD</Button>

                            {uploaded ? <UploadSuccess previewImage={previewImage}/> : null}    
                </UploadComponent>

            }
        </Container >
    )
}


export default UploadProduct