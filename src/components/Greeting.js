const UserGreeting = (props) => {
  return <h1>Welcome Back!</h1>;
};

const GuestGreeting = (props) => {
  return <h1>Please sign in!</h1>;
};
// Conditional Rendering
const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />; // inline rendering
  // return <div>{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}</div>;
  // if (isLoggedIn) {
  //   return <UserGreeting />;
  // } else {
  //   return <GuestGreeting />;
  // }
};

export default Greeting;
