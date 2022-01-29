import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: 2,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      todoList: [],
      numCompleted: 0,
      numPending: 0,
      numAll: 0,
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/todos/")
      .then(res => this.setState({ todoList: res.data }))
      .catch(err => console.log(err));
  };
  displayCompleted = status => {
    if (status === 1) {
      return this.setState({ viewCompleted: 1 });
    }
    else if (status === 0) {
      return this.setState({ viewCompleted: 0 });
    }
    else if (status === 2) {
      this.setState({ viewCompleted: 2 });
    }
  };
  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(2)}
          className={this.state.viewCompleted === 2 ? "active" : ""}
        >
          All {this.numAll}
        </span>
        <span
          onClick={() => this.displayCompleted(1)}
          className={this.state.viewCompleted === 1 ? "active" : ""}
        >
          Complete {this.numCompleted} / {this.numAll}
        </span>
        <span
          onClick={() => this.displayCompleted(0)}
          className={this.state.viewCompleted === 0 ? "active" : ""}
        >
          Incomplete {this.numPending} / {this.numAll}
        </span>
      </div>
    );
  };
  renderItems = () => {
    const { viewCompleted } = this.state;

    const newItems = viewCompleted === 2 ? this.state.todoList : this.state.todoList.filter(
      item => item.completed == viewCompleted
    );

    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${item.completed ? "completed-todo" : ""
            }`}
          title={item.description}
        >
          <strong>Title:</strong> {item.title}
          <br></br><strong>Description:</strong> {item.description}
          <br></br><strong>Added on:</strong> {new Intl.DateTimeFormat("en-GB", {
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
          }).format(item.toString().date_added)}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            {" "}
            Edit{" "}
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>
        </span>
      </li>
    ));
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/todos/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("http://localhost:8000/api/todos/", item)
      .then(res => this.refreshList());
  };
  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/todos/${item.id}`)
      .then(res => this.refreshList());
  };
  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  countComplete = () => {
    this.numCompleted = this.state.todoList.filter(
      item => item.completed === true
    ).length;
  };
  countPending = () => {
    this.numPending = this.state.todoList.filter(
      item => item.completed === false
    ).length;
  };
  countAll = () => {
    this.numAll = this.state.todoList.length;
  };
  render() {
    return (
      <main className="content">
        {this.countComplete()}
        {this.countPending()}
        {this.countAll()}
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add task
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">

                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default App;