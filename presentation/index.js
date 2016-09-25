// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Counter
import Counter from './counter_01';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  lifecycle: require("../images/lifecycle.png"),
  react: require("../images/react.png"),
  survivejs: require("../images/survivejs.png"),
  vdom: require("../images/vdom.png")
}, v => v.replace('/', ''));

preloader(images);

const theme = createTheme({
  primary: "#09b5c4"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React in 2016
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Link href="https://facebook.github.io/react/">
              <Image src={images.react} />
            </Link>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={2}>
              Virtual DOM
            </Heading>
            <Image src={images.vdom} margin="40px auto" height="324px" />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <Link href="https://facebook.github.io/react/">React</Link> Philosophy
            </Heading>
            <List>
              <Appear><ListItem>Model your application as a component hierarchy</ListItem></Appear>
              <Appear><ListItem>Each component can have <code>props</code> and <code>state</code></ListItem></Appear>
              <Appear><ListItem>Escape hatches through <code>lifecycle methods</code> and <code>refs</code></ListItem></Appear>
              <Appear><ListItem>React forces you to think about <code>state</code> (good thing)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              React Targets
            </Heading>
            <List>
              <Appear><ListItem>Web (universal!) - <Link href="https://www.npmjs.com/package/react-dom">react-dom</Link></ListItem></Appear>
              <Appear><ListItem>Mobile - <Link href="https://facebook.github.io/react-native/">React Native</Link></ListItem></Appear>
              <Appear><ListItem>Terminal - <Link href="https://github.com/Yomguithereal/react-blessed">react-blessed</Link></ListItem></Appear>
              <Appear><ListItem>3D graphics - <Link href="https://projectseptemberinc.gitbooks.io/gl-react/content/">gl-react</Link></ListItem></Appear>
              <Appear><ListItem>Canvas graphics - <Link href="https://github.com/Flipboard/react-canvas">react-canvas</Link></ListItem></Appear>
              <Appear><ListItem>PDF generators - <Link href="https://github.com/bebraw/generate-invoice">demo</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Alternative Implementations
            </Heading>
            <List>
              <Appear><ListItem><Link href="https://preactjs.com/">Preact</Link> - 3k, subset of API</ListItem></Appear>
              <Appear><ListItem><Link href="https://www.npmjs.com/package/react-lite">react-lite</Link> - 25k, subset again</ListItem></Appear>
              <Appear><ListItem><Link href="https://github.com/trueadm/inferno/">inferno</Link> - Partial compatibility, focus on performance, bleeding edge</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1}>
              Cat Counter
            </Heading>
            <Counter />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <CodePane
              lang="jsx"
              source={require("raw!content!./counter_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <CodePane
              lang="jsx"
              source={require("raw!content!./counter_02.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <CodePane
              lang="jsx"
              source={require("raw!content!./counter_03.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Copy the cat counter example to <Link href="http://www.webpackbin.com/">WebpackBin</Link></ListItem></Appear>
              <Appear><ListItem>Make it possible to add two cats at once</ListItem></Appear>
              <Appear><ListItem>*Add a reset button to restore the count to zero</ListItem></Appear>
              <Appear><ListItem>**Add multiple options. Hint: <code>[1, 2, 4].map(...)</code>. Look up React <Link href="https://facebook.github.io/react/docs/reconciliation.html"><code>key</code></Link>. Why is it needed?</ListItem></Appear>
              <Appear><ListItem>***Try <code>this.setState(..., cb)</code></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="white">
            <Heading size={2} textColor="primary">
              Components
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              Stateless Functions
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              Stateless Functions with a Shorthand
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_02.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              Stateless Functions Destructured
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_03.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
          <Heading size={4}>
            Stateless Functions Destructured and Formatted for Readability (parens!)
          </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_04.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              <code>React.createClass</code> (old style)
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_05.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              ES6 Class (new style)
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_06.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              ES6 Class with Manual Binding
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_07.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              ES6 Class with a Property Initializer
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_08.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              ES6 Class with a Ref
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_09.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={2}>
              Lifecycle Methods
            </Heading>
            <Image src={images.lifecycle} margin="40px auto" height="324px" />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Split the cat counter into multiple components like in the last example</ListItem></Appear>
              <Appear><ListItem>*Implement a <code>lifecycle method</code> and see when it gets triggered</ListItem></Appear>
              <Appear><ListItem>**Implement <b>App</b> that contains multiple <b>CatCounter</b>s</ListItem></Appear>
              <Appear><ListItem>***Push counter state management to <b>App</b></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="white">
            <Heading size={2} textColor="primary">
              Typing
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <code>propTypes</code> and <code>defaultProps</code>
            </Heading>
            <List>
              <Appear><ListItem>Flexibility vs. robustness</ListItem></Appear>
              <Appear><ListItem>Document expectations</ListItem></Appear>
              <Appear><ListItem>Catch issues during development</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              <code>propTypes</code> and <code>defaultProps</code>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/proptypes_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              <code>propTypes</code> and <code>defaultProps</code> through <code>static</code>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/proptypes_02.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <Link href="http://flowtype.org/">Flow</Link>
            </Heading>
            <List>
              <Appear><ListItem>Checker, not a language</ListItem></Appear>
              <Appear><ListItem>Gradual typing through static analysis</ListItem></Appear>
              <Appear><ListItem>Might replace <code>propTypes</code> over longer term</ListItem></Appear>
              <Appear><ListItem>Runtime checks with <Link href="https://www.npmjs.com/package/babel-plugin-typecheck">babel-plugin-typecheck</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              ES6 Class with Flow types
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/flow_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              TypeScript
            </Heading>
            <List>
              <Appear><ListItem>Established alternative</ListItem></Appear>
              <Appear><ListItem>Strong IDE integration</ListItem></Appear>
              <Appear><ListItem>Hard to introduce piece-meal (all in)</ListItem></Appear>
              <Appear><ListItem>Stronger ecosystem (more users, type definitions)</ListItem></Appear>
              <Appear><ListItem>See <Link href="https://www.reddit.com/r/javascript/comments/39cere/typescript_vs_flow_results_from_our_investigation/">Reddit</Link> for further comparison</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Annotate <b>SawCat</b> with <code>propTypes</code></ListItem></Appear>
              <Appear><ListItem>Look up <code>React.PropTypes.shape</code> and see how it works</ListItem></Appear>
              <Appear><ListItem>*Test <Link href="http://tryflow.org/">tryflow.org</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <Link href="http://www.survivejs.com/">
              <Heading size={1} textColor="primary">
                SurviveJS
              </Heading>
            </Link>
            <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made in Finland by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Juho Vepsäläinen
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
