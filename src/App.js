import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends
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
          />
        ))}
      </Wrapper>
    );
  }
}

// }

export default App;
