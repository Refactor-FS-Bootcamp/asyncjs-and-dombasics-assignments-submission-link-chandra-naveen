import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comment: '',
            language: 'react',
            gender: ' ',
            skills:[ 
            {id: 1, value: "Angular"},  
            {id: 2, value: "React"},  
            {id: 3, value: "PHP"},  
            {id: 4, value: "Laravel"},
            {id: 5, value: "Html"},
            {id: 6, value: "Css"},
            {id: 7, value: "Js"},
         ],
         checkedItems: new Map() 
        }
    }

    handleUserChange = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleCommentChange = e => {
        this.setState({
            comment: e.target.value
        })
    }

    handleLangChange = e => {
        this.setState({
            language: e.target.value
        })
    }

    handleGenderChange = e => {
        this.setState({
            gender: e.target.value
        })
    }

    handleSkillchange = e =>{
        var isChecked = e.target.checkedItems;  
        var item = e.target.value;  
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) })); 
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input type="text" id="username" value={this.state.username} onChange={this.handleUserChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comments</label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange} ></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language </label>
                    <select id="language" value={this.state.language} onChange={this.handleLangChange}>
                        <option value="angular">Angular</option>
                        <option value="react">React</option>
                        <option value="react-native">React Native</option>
                    </select>
                </div>
                <br />
                <div onChange={this.handleGenderChange}>
                    <input type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other
                </div>
                <div>
                {this.state.skills.map(item => (  
              <li>  
                <label>  
                  <input  
                    type="checkbox"  
                    value={item.id}  
                    onChange={this.handleSkillchange}  
                  /> {item.value}  
                </label>  
              </li>  
            ))  } 
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm