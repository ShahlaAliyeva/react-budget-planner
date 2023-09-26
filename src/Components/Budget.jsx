import React from "react";

function Budget({
  budget,
  spentSoFar,
  remaining,
  editMode,
  handleEdit,
  handleSave,
  setBudget,
}) {
  return (
    <section>
      <h1 className="mt-2">My Budget Planner</h1>
      <div className="row my-4 gap-4 container-fluid flex-nowrap justify-content-between">
        {editMode ? (
          <div className="col bg-secondary-subtle p-3 d-flex rounded align-items-center justify-content-between">
            <p className="m-0 fw-semibold d-flex">
              <input
                type="text"
                defaultValue={budget}
                onChange={(event) => setBudget(+event.target.value)}
                className="form-control"
              />
            </p>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleSave()}
            >
              Save
            </button>
          </div>
        ) : (
          <div className="col bg-secondary-subtle p-3 d-flex rounded align-items-center justify-content-between">
            <p className="m-0 fw-semibold d-flex">My budget: {budget} AZN</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleEdit()}
            >
              Edit
            </button>
          </div>
        )}
        <div className="col bg-success-subtle p-3 d-flex rounded align-items-center justify-content-between">
          <p className="m-0 fw-semibold">Remaining: {remaining} AZN</p>
        </div>
        <div className="col bg-primary-subtle p-3 d-flex rounded align-items-center justify-content-between">
          <p className="m-0 fw-semibold">Spent so far: {spentSoFar} AZN</p>
        </div>
      </div>
    </section>
  );
}

export default Budget;
