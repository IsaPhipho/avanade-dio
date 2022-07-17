import React, {useState} from "react";

import Main from "./Components/main";
import Book from "./Components/book";
import ThankYou from "./Components/thankYou";
import Navbar from "./Components/navbar";

// eslint-disable-next-line 
export default _ => {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Book setPage={setPage} /> : null}
      {page === 2 ? <ThankYou /> : null}
    </div>
  );
};