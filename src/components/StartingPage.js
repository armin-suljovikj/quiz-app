import HeaderTitle from './../components/HeaderTitle';
import SubHeader from './../components/SubHeader';
import { MenuItem, TextField } from "@mui/material";
import './../index.css';
import Categories from './../data/Categories';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {useNavigate } from 'react-router-dom'

toast.configure();
function StartingPage() {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    let navigate = useNavigate();

    const handleStart = () =>{
        if(category === "" || difficulty === ""){
          toast("Please select a difficulty and a category", {position: toast.POSITION.BOTTOM_CENTER});
        } else {
            navigate("/quiz-app/quiz", { state: {"category": category, "difficulty": difficulty} });
        }
      }
    
    
      const handleCategoryChange = (event) =>{
        setCategory(event.target.value);
      }
    
      const handleDifficultyChange = (event) =>{
        setDifficulty(event.target.value);
      }
    

    return (
        <React.Fragment>
            <div className="container">
                <HeaderTitle />
            </div>
            <div className="container">
                <SubHeader />
            </div>
            <div className="textFieldContainer">
                <TextField
                    select
                    className="textField"
                    label="Select Category"
                    onChange={handleCategoryChange}
                    value={category}
                >
                    {
                        Categories.map((cat) => (
                            <MenuItem key={cat.category} value={cat.value}>
                                {cat.category}
                            </MenuItem>
                        ))
                    }
                </TextField>
                <TextField
                    select
                    className="textField"
                    label="Select Difficulty"
                    onChange={handleDifficultyChange}
                    value={difficulty}
                >
                    <MenuItem key="Easy" value="easy"> Easy </MenuItem>
                    <MenuItem key="Medium" value="medium"> Medium</MenuItem>
                    <MenuItem key="Hard" value="hard"> Hard</MenuItem>
                </TextField>
            </div>
            <div className="buttonCenterContainer">
                <button className="buttonWidth" onClick={handleStart}>Start!</button>
            </div>
        </React.Fragment>
    )
}

export default StartingPage
