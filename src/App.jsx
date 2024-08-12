import CreateCustomer from "./components/CreateCustomer";
import Customer from "./components/Customer";
import AccountOperations from "./components/AccountOperations";
import BalanceDisplay from "./components/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const customer = useSelector((store) => store.customer);

  const isCustomerAvailable = !(customer.fullName == "");

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {isCustomerAvailable ? (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      ) : (
        <CreateCustomer />
      )}
    </div>
  );
}

export default App;
