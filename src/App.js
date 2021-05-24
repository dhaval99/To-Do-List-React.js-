import React from "react";

import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Paper Bill",
      amount: 23.2,
      date: new Date(2020, 2, 4),
    },
    {
      id: "e2",
      title: "New Phone",
      amount: 444.44,
      date: new Date(2020, 2, 2),
    },
    {
      id: "e3",
      title: "Vaccine Appointment",
      amount: 24.45,
      date: new Date(2020, 2, 6),
    },
    {
      id: "e4",
      title: "Phone Bill",
      amount: 4000,
      date: new Date(2020, 2, 17),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
