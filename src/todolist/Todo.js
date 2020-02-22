import React from "react";
import Search from "./Search";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ListItem from "./ListItm";
import axios from "axios";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      currentItem: {
        title: ""
      },
      searchString: ""
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );
    const getTitles = response.data
      .splice(0, 10)
      .map(data => ({ id: data.id, title: data.title }));
    this.setState({ info: getTitles });
  };

  handleInput = e => {
    this.setState({
      currentItem: {
        title: e.target.value,
        id: Date.now()
      }
    });
  };
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.title !== "") {
      let newItems = [...this.state.info, newItem];
      this.setState({
        info: newItems,
        currentItem: {
          title: ""
        }
      });
    }
  };
  handleDelete = id => {
    const deleteItem = this.state.info.filter(i => i.id !== id);
    this.setState({
      info: deleteItem
    });
  };
  handleChange = e => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    let filterList = this.state.info,
      searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      filterList = filterList.filter(function(i) {
        return i.title.toLowerCase().match(searchString);
      });
    }
    return (
      <div
        ref={this.props.containerRef}
        style={{
          width: "500px",
          margin: "10px auto",
          border: "1px solid #000",
          padding: "20px 0"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",

            borderBottom: "2px solid #000"
          }}
        >
          <form onSubmit={this.addItem}>
            <TextField
              style={{ width: "400px" }}
              id="outlined-search"
              label="add items"
              type="add"
              variant="outlined"
              value={this.state.currentItem.title}
              onChange={this.handleInput}
            />

            <Button
              style={{ marginLeft: "20px" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Add
            </Button>
          </form>
        </div>
        <Search
          searchString={this.state.searchString}
          handleChange={this.handleChange}
        />

        <ListItem
          info={this.state.info}
          handleDelete={this.handleDelete}
          filterList={filterList}
        />
      </div>
    );
  }
}
export default Todo;
