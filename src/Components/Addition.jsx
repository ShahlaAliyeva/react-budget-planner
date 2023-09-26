import React from "react";

function Addition({ handleSubmit, setNameInput, setCost }) {
  return (
    <section className="mb-3">
      <h2>Add Expense</h2>
      <form
        action=""
        className="d-flex flex-column align-items-start justify-content-start gap-4 mt-4"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="d-flex align-items-center justify-content-start gap-5">
          <label htmlFor="name" className="fw-semibold">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              className="form-control mt-2"
              placeholder="Name..."
            />
          </label>

          <label htmlFor="cost" className="fw-semibold">
            Cost:
            <input
              type="number"
              name="cost"
              id="cost"
              className="form-control mt-2 input-cost"
              placeholder="Cost..."
            />
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Save
        </button>
      </form>
    </section>
  );
}

export default Addition;
