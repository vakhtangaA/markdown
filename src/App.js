import React from "react";
import "./App.css";
import marked from "marked";

var text = `# React Markdown Previewer

## Type your Markdown in the Editor!
<br><br>

### Main functionality

- Preview window updates real time with markdown syntax
- The editor has some predefined input on page load
- BONUS: Use &lt;br&gt; for line breaks

<br>

\`Is the syntax highlighting even working?\`
\`\`\`javascript
let s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
<br>

**strong**

> “If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.”
― Marcus Aurelius, Meditations 
<br>

![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)
<br>
[Visit FreeCodeCamp](https://www.freecodecamp.org/learn)
`;

marked.setOptions({
  breaks: true,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: text,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1 className="mainHeading">Github Markdown previewer</h1>
        <div className="flexContainer">
          {/*editor*/}

          <div>
            <label className="label" for="editor">
              Editor
            </label>
            <textarea
              placeholder="markdown goes here"
              id="editor"
              name="text"
              rows="15"
              cols="63"
              onChange={this.handleChange}
            >
              {text}
            </textarea>
          </div>

          {/*preview*/}
          <div>
            <span className="label">preview</span>

            <div
              className="secondFlex"
              dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}
              id="preview"
              class="preview"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
