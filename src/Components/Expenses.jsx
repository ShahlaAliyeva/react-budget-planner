import React from "react";

function Expenses({ expenses, handleDelete }) {
  return (
    <main>
      <h2>Expenses</h2>
      <input
        type="text"
        className="form-control d-block fw-semibold"
        placeholder="Type to search..."
      />

      <ul className="list-group fw-semibold my-4">
        {expenses.map(expense => (
              <li id={expense.id} key={expense.id} className="list-group-item d-flex align-items-center justify-content-between py-3">
                {expense.name}
                <div className="d-flex align-items-center justify-content-between column-gap-3">
                  <span className="badge bg-primary rounded-pill py-2">
                    {expense.cost} AZN
                  </span>
                  <ion-icon name="close-circle" onClick ={(event)=>handleDelete(event)}></ion-icon>
                </div>
              </li>
            ))
          }
      </ul>
    </main>
  );
}

export default Expenses;
