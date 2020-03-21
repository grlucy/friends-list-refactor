import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends
  };

  //define a method inside of `App` which accepts an `id` parameter, and then utilize filter to create a new array of friends without the passed `id`. Then set `this.state.friends` to this new filtered array
  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  };

  //map over `this.state.friends` to render each `FriendCard` component
  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(friends => (
          <FriendCard
            name={friends.name}
            image={friends.image}
            occupation={friends.occupation}
            location={friends.location}
            id={friends.id}
            key={friends.id}
            remove={this.removeFriend}
          />
        ))}
      </Wrapper>
    );
  }
}

// }

export default App;
