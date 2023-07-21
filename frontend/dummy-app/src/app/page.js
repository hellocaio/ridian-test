export default function Page() {
  return (
    <div>
      <h1 style={{'textAlign':'center'}}>Awesome App</h1>
      <Nav />
      <Returns />
      <PlaceTrade />
      <ActiveStrategies />
    </div>
  )
}

async function Nav() {
  return <h2>Nav</h2>;
}

async function Returns() {
  return <h2>Returns</h2>;
}

async function PlaceTrade() {
  return <h2>PlaceTrade</h2>;
}

async function ActiveStrategies() {
  return <h2>PlaceTrade</h2>;
}