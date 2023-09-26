import { useState } from "react";
import Addition from "./Components/Addition";
import Budget from "./Components/Budget";
import Expenses from "./Components/Expenses";

function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expenseID, setExpenseID] = useState(0);
  const [editMode, setEditMode] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let { name, cost } = event.target.elements;
    if (name.value.trim() == "" || cost.value.trim() == "") {
      return null;
    }

    let id = expenseID + 1;
    let newExpense = {
      id,
      name: name.value,
      cost: Number(cost.value),
    };

    setExpenses([...expenses, newExpense]);
    setExpenseID(id);

    name.value = "";
    cost.value = "";
  }

  function handleDelete(event) {
    const deletedListItem = event.target.offsetParent;

    const newExpenses = expenses.filter((expense) => {
      return expense.id != deletedListItem.id;
    });

    setExpenses(newExpenses);
  }

  function handleEdit() {
    setEditMode(true);
  }

  function handleSave() {
    setEditMode(false);
  }

  function handleSearch(event) {
    let searchVal = event.target.value;
    let searchElements = Array.prototype.slice.call(
      event.target.parentNode.lastElementChild.children
    );

    searchElements.forEach((element) => {
      if (
        !element.firstElementChild.textContent
          .toLowerCase()
          .includes(searchVal)
      ) {
        element.classList.add("hide");
      } else {
        console.dir(element);
        element.classList.remove("hide");
      }
    });
  }

  const spentSoFar = expenses.reduce((sum, expense) => sum + expense.cost, 0);
  const remaining = budget - spentSoFar;

  return (
    <div className="container-fluid d-flex flex-column justify-content-between vh-100">
      <div>
        <Budget
          budget={budget}
          spentSoFar={spentSoFar}
          remaining={remaining}
          editMode={editMode}
          handleEdit={handleEdit}
          handleSave={handleSave}
          setBudget={setBudget}
        />
        <Expenses
          expenses={expenses}
          handleDelete={(event) => handleDelete(event)}
          handleSearch={(event) => handleSearch(event)}
        />
      </div>
      <Addition handleSubmit={(event) => handleSubmit(event)} />
    </div>
  );
}

export default App;
