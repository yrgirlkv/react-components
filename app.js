var listArray = ['Chicken & maple sausages', 'Frozen pizza - BBQ chicken', 'Pepper turkey'];

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // hovered: false,
      done: false
    };
  }

  onMouseHover() {
    this.setState({hovered: true});
  }

  onMouseUnhover() {
    this.setState({hovered: false});
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
  }

  render () {
    var style = {
      fontWeight: this.state.hovered ? 'bold' : 'normal',
    }
    return (
      <li
        style = {style}
        onMouseEnter = {this.onMouseHover.bind(this)}
        onMouseLeave = {this.onMouseUnhover.bind(this)}
      >
        {this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryArray.map(groceryArrayElement =>
      <GroceryListItem groceryItem = {groceryArrayElement} />
    )}
  </ul>
)

ReactDOM.render(<GroceryList groceryArray = {listArray} />, document.getElementById("app"));