# Pretty-Pretty

Pretty-Pretty is a UI component library of ready-made components like Buttons, Cards and more.

## Installation

Use the node package manager [npm](https://www.npmjs.com/) to install Pretty-Pretty.

```bash
npm i pretty-pretty
```

## Usage

### Card

```python
import { PrettyCard } from "pretty-pretty";

function App() {
  return (
    <PrettyCard style={{ margin: "50px", width: "30%" }}>
      <span style={{ fontSize: "14px", fontWeight: "normal" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
    </PrettyCard>
  );
 }

export default App;
```

### Result

![alt text](https://github.com/codewithdpk/pretty-pretty/blob/main/assets/imgs/pretty-pretty-card-demo.png?raw=true)

## Buttons

### Normal Type

```python
import { PrettyBtn } from "pretty-pretty";

function App() {
  return (
    <div style={{ margin: "100px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "12px" }}>PRIMARY_FILLED_LARGE</span> <br />
          <PrettyBtn variant="PRIMARY_FILLED_LARGE" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "40px",
          }}
        >
          <span style={{ fontSize: "12px" }}>SECONDARY_LARGE</span>
          <br />
          <PrettyBtn variant="SECONDARY_LARGE" />
        </div>
      </div>
    </div>
  );
}

export default App;

```

### Result

![alt text](https://github.com/codewithdpk/pretty-pretty/blob/main/assets/imgs/pretty-pretty-btn-normal.png?raw=true)

### Get Started Type

```python
import { PrettyBtn } from "pretty-pretty";

function App() {
  return (
    <div style={{ margin: "100px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "12px" }}>GET_STARTED_PRIMARY</span> <br />
          <PrettyBtn variant="GET_STARTED_PRIMARY" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "40px",
          }}
        >
          <span style={{ fontSize: "12px" }}>GET_STARTED_SECONDARY</span>
          <br />
          <PrettyBtn variant="GET_STARTED_SECONDARY" />
        </div>
      </div>
    </div>
  );
}

export default App;


```

### Result

![alt text](https://github.com/codewithdpk/pretty-pretty/blob/main/assets/imgs/pretty-pretty-btn-gs.png?raw=true)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
