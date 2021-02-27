card generator

```javascript
import react from React;

class CardGenerator extends React.Component {
    constructor(props) {
        super(props);

        //estados
        this.state = {
            palette: 1
            name: "",
            photo: "",

        };

        //aquí los bind
        /*this.handleReset = this.handleReset.bind(this);*/

        //aquí las funciones (handlers y demás), como por ejemplo:
         handleInput(data) {
             console.log('data', data);
            this.setState({
                [data.inputName]: data.inputValue,
            });
        }

    }

    render() {
        return (
            <>
                <Header />
                <main>
                    <Preview data={this.state} /*da igual que mandemos el estado todo en uno o por campos- handlers={this.handlers*/ />
                    <Form
                    /*handlers={this.handlers}, bla, bla, bla*/
                    />
                </main>
                <Footer />
            </>
        );
    }
}
```

Form
```javascript
import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Collapsable name="Diseña comparte o lo que sea" icon={el que lleve}>
          <Design
            /*palette={this.props.data.palette}
            handlers={this.props.handlers*/
          />
        </Collapsable>

        <Collapsable name="Diseña comparte o lo que sea" icon={el que lleve}>
          <Fill
             /*palette={this.props.data.palette}
            handlers={this.props.handlers*/
          />
        </Collapsable>

       <Collapsable name="Diseña comparte o lo que sea" icon={el que lleve}>
          <Share /*este ni idea*//>
        </Collapsable>
      </>
    );
  }
}

export;

```


ejemplo input de Dayana:
```javascript
import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(ev) {
    this.props.handleChange({
      inputName: ev.currentTarget.name,
      inputValue: ev.currentTarget.value,
    });
  }

  render() {
    return (
      <>
        <label
          className="customize-menu__form-label"
          htmlFor={this.props.inputJson.htmlFor}
        >
          {this.props.inputJson.labelText}
        </label>
        <input
          className={`customize-menu__form-input js-input ${this.props.inputJson.className}`}
          placeholder={this.props.inputJson.placeholder}
          type={this.props.inputJson.type}
          required
          id={this.props.inputJson.id}
          name={this.props.inputJson.name}
          onChange={this.handleChange}
          value={this.props.value}
        />
      </>
    );
  }
}

export
```
```javascript
  
import React from "react";

export 
```


```javascript
  
import React from "react";

export 
