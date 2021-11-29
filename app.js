// var GroceryList = () => (
//   <div>
//     <ul>
//       {
//         groceryArray.map((listItem) => (
//           <li >{listItem}</li>
//         ))
//       }
//     </ul>
//   </div>
// );

var listArray = ['Chicken & maple sausages', 'Frozen pizza - BBQ chicken', 'Pepper turkey'];

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <li>{this.props.groceryItem}</li>
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