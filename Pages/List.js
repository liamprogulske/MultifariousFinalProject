import React from "react";
import Nav from "../Nav";
import Header from "./Header";
import Footer from "./Footer";
import ListEvent from "./ListEvent";

import { data } from "../data/data";

const List = () => {
  return (
    
      <div className="home-container bg-light">
        <main className="container">
          <section className="mt-5">
            <h2 className="mb-4">To-Do List</h2>
            
              {/* data fetching using map */}
              {data.map((item) => (
                <div className="col-md-6 mb-4" key={item.id}>
                  <ListEvent tasks={item.tasks} />
                </div>
              ))}
            
          </section>
        </main>
        <Footer />
      </div>
    
  );
};

export default List;
